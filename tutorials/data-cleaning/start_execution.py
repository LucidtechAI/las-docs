import json
import logging
from argparse import ArgumentParser
from pathlib import Path
from las import Client, Credentials
from las.credentials import read_from_file

logging.getLogger().setLevel(logging.INFO)


def main(client, workflow_id, model_id, document_id, auto_rotate):
    content = {
        'documentId': document_id,
        'autoRotate': auto_rotate,
        'modelId': model_id,
    }

    response = client.execute_workflow(workflow_id, content)
    logging.info(f'{json.dumps(response, indent=2)}')


if __name__ == '__main__':
    parser = ArgumentParser()
    parser.add_argument('workflow_id')
    parser.add_argument('model_id')
    parser.add_argument('document_id')
    parser.add_argument('--auto-rotate', action='store_true', default=False)
    parser.add_argument('--profile')
    args = parser.parse_args()

    if args.profile:
        credentials = Credentials(*read_from_file(section=args.profile))
        client = Client(credentials)
    else:
        client = Client()

    main(
        client=client,
        workflow_id=args.workflow_id,
        model_id=args.model_id,
        document_id=args.document_id,
        auto_rotate=args.auto_rotate,
    )
