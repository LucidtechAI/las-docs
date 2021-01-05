import las
import json
import logging
import os
import yaml
from dataclasses import dataclass
from io import BytesIO
from pathlib import Path
from typing import Optional

TRANSITION_PATH = Path('src/transitions/')
WORKFLOW_PATH = Path('src/workflows/')
EMAIL = os.environ['EMAIL']
STAGE = os.environ['STAGE']
REMOTE_COMPONENT_PATH = Path(__file__).parent / '../frontend/dist/remote.js'
DOCKER_IMAGE = os.environ['DOCKER_IMAGE']

logging.getLogger().setLevel(logging.INFO)

@dataclass
class Transition:
    path: Path
    transition_type: str
    name: str
    description: str
    docker_image_tag: Optional[str] = None
    params_name: Optional[str] = 'params.json'


@dataclass
class Workflow:
    path: Path
    error_email: str
    name: str
    description: str


TRANSITIONS = [
    Transition(
        path=TRANSITION_PATH / 'make_predictions',
        transition_type='docker',
        name='MakePredictions',
        description='make predition on a document',
        docker_image_tag='make-predictions',
    ),
    Transition(
        path=TRANSITION_PATH / 'manual_invoice',
        transition_type='manual',
        name='Invoice',
        description='queue for approving invoices',
    ),
    Transition(
        path=TRANSITION_PATH / 'manual_receipt',
        transition_type='manual',
        name='Receipt',
        description='queue for approving receipts',
    )
]

EXPORT_TRANSITIONS = [
    Transition(
        path=TRANSITION_PATH / 'export_document',
        transition_type='docker',
        name='ExportDocument',
        description='Export approved document',
        docker_image_tag='export-document',
    ),
]

WORKFLOWS = [
    Workflow(
        path=WORKFLOW_PATH / 'invoice-workflow.json',
        error_email=EMAIL,
        name='Invoice',
        description='The demo invoice workflow',
    ),
]

WORKFLOWS_FUTURE = [
    Workflow(
        path=WORKFLOW_PATH / 'receipt-workflow.json',
        error_email=EMAIL,
        name='Receipt',
        description='The demo receipt workflow',
    )
]


def create_secret(client):
    data = {
        'username': os.environ['DOCKER_USERNAME'],
        'password': os.environ['DOCKER_PASSWORD'],
    }
    response = client.create_secret(data, description='docker credentials')
    return response['secretId']


def create_transitions(client, secret_id):
    transitions = {}
    for transition in TRANSITIONS:
        logging.info(f'create {transition.name}...')
        in_schema = json.loads((transition.path / 'in_schema.json').read_text())
        out_schema = json.loads((transition.path / 'out_schema.json').read_text())
        params = json.loads((transition.path / transition.params_name).read_text())
        if transition.transition_type == 'docker':
            image_base_name = ':'.join([DOCKER_IMAGE, transition.docker_image_tag])
            params['imageUrl'] = '-'.join([image_base_name, STAGE])
        if 'secretId' in params:
            params['secretId'] = secret_id
        response = client.create_transition(
            name=transition.name,
            in_schema=in_schema,
            out_schema=out_schema,
            transition_type=transition.transition_type,
            params=params,
            description=transition.description,
        )
        transitions[transition.name] = response['transitionId']
    return transitions


def create_assets(client):
    assets = {}
    remote_component = REMOTE_COMPONENT_PATH.read_bytes()
    assets['invoice'] = client.create_asset(remote_component)['assetId']
    assets['invoice_form_config'] = client.create_asset(b'foo')['assetId']
    assets['receipt'] = client.create_asset(remote_component)['assetId']
    assets['receipt_form_config'] = client.create_asset(b'foo')['assetId']
    return assets


def update_transitions(assets):
    path = TRANSITION_PATH / 'manual_invoice' / 'params.json'
    path.write_text(json.dumps(
        {
            "assets": {
                "jsRemoteComponent": assets['invoice'],
                "formConfig": assets['invoice_form_config'],
            }
        },
        indent=2,
    ))

    path = TRANSITION_PATH / 'manual_receipt' / 'params.json'
    path.write_text(json.dumps(
        {
            "assets": {
                "jsRemoteComponent": assets['receipt'],
                "formConfig": assets['receipt_form_config'],
            }
        },
        indent=2,
    ))


def create_workflows(client, transitions):
    workflows = {}
    logging.info('create Workflows...')

    for workflow in WORKFLOWS:
        specification = json.loads(workflow.path.read_text())
        for state in specification['definition']['States']:
            if state in transitions:
                specification['definition']['States'][state]['Resource'] = transitions[state]
        workflow.path.write_text(json.dumps(specification, indent=2))
        response = client.create_workflow(
            specification=specification,
            name=workflow.name,
            description=workflow.description,
            error_config={"email": workflow.error_email},
        )
        workflows[workflow.name] = response['workflowId']
    return workflows


if __name__ == '__main__':
    client = las.Client()
    secret_id = create_secret(client)
    assets = create_assets(client)
    update_transitions(assets)
    transitions = create_transitions(client, secret_id)
    workflows = create_workflows(client, transitions)

    logging.info(f'Secret: \n {secret_id}')
    logging.info('\n'.join(['Assets:', yaml.dump(assets, indent=2)]))
    logging.info('\n'.join(['Transitions:', yaml.dump(transitions, indent=2)]))
    logging.info('\n'.join(['Workflows:', yaml.dump(workflows, indent=2)]))
