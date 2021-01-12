import las
import json
import logging
import os
from argparse import ArgumentParser, RawDescriptionHelpFormatter
from pathlib import Path

EMAIL = os.environ.get('EMAIL', 'no-reply@lucidtech.ai')

logging.getLogger().setLevel(logging.INFO)


def create_secret(client):
    credentials = {k: os.environ.get(k) for k in (
            'LAS_CLIENT_ID',
            'LAS_CLIENT_SECRET',
            'LAS_API_KEY',
            'LAS_AUTH_ENDPOINT',
            'LAS_API_ENDPOINT'
        )
    }
    response = client.create_secret(credentials, description='las credentials')
    return response['secretId']


def create_transition(client, transition_path: Path, secret_id=None):
    resources = {}
    logging.info(f'create {transition_path}...')
    in_schema = json.loads((transition_path / 'in_schema.json').read_text())
    out_schema = json.loads((transition_path / 'out_schema.json').read_text())
    params = json.loads((transition_path / 'params.json').read_text())
    transition_type = 'docker' if 'imageUrl' in params else 'manual'

    if transition_type == 'manual':
        for asset_path in (transition_path / 'assets').iterdir():
            data = asset_path.read_bytes()
            asset_id = client.create_asset(data)['assetId']
            resources[asset_path.stem] = asset_id
            params['assets'][asset_path.stem] = asset_id

    if 'environmentSecrets' in params:
        secret_id = secret_id or create_secret(client)
        params['environmentSecrets'] = [secret_id]
        resources['credentials'] = secret_id

    response = client.create_transition(
        name=transition_path.name,
        in_schema=in_schema,
        out_schema=out_schema,
        transition_type=transition_type,
        parameters=params,
    )
    resources['transitionId'] = response['transitionId']
    return resources


def create_workflow(client, specification_path, name, description, secret_id=None):
    logging.info('create Workflow...')

    specification = json.loads(specification_path.read_text())
    for state in specification['definition']['States']:
        transition_path = Path('src') / state

        if not transition_path.is_dir():
            raise FileNotFoundError(
                f'State names must coincide with transition definition folders, {transition_path} is not a directory'
            )

        resources = create_transition(client, transition_path, secret_id=secret_id)
        logging.info(f'successfully created {transition_path}: {json.dumps(resources, indent=2)}')

        specification['definition']['States'][state]['Resource'] = resources['transitionId']
    specification_path.write_text(json.dumps(specification, indent=2))
    response = client.create_workflow(
        specification=specification,
        name=name,
        description=description,
        error_config={"email": EMAIL},
    )
    logging.info(f'successfully created workflow {name}: {json.dumps(response, indent=2)}')
    return response


if __name__ == '__main__':
    parser = ArgumentParser(
        formatter_class=RawDescriptionHelpFormatter,
        description='\n'.join([
            'This script builds all necessary components for the simple demo',
            'Prerequisites: Lucidtech credentials',
            'Please supply the secretId for your credentials if they have already been stored',
        ])
    )
    parser.add_argument('--workflow-spec', default=Path('src/workflow.json'), type=Path)
    parser.add_argument('--name', default='simple-demo')
    parser.add_argument('--description', default='A simple workflow for demonstration purposes')
    parser.add_argument('--secret-id', help='secretId to las credentials')
    args = parser.parse_args()
    client = las.Client()
    create_workflow(
        client=client,
        specification_path=args.workflow_spec,
        name=args.name,
        description=args.description,
        secret_id=args.secret_id,
    )

