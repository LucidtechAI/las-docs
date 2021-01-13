import json
import logging
from argparse import ArgumentParser
from pathlib import Path
from las import Client, Credentials
from las.credentials import read_from_file

logging.getLogger().setLevel(logging.INFO)


def main(client, workflow_id, model_id, document_path, content_type):
    document = Path(document_path).read_bytes()
    response = client.create_document(document, content_type=content_type)
    content = {
        'documentId': response['documentId'],
    }

    if model_id:
        content['modelId'] = model_id

    response = client.execute_workflow(workflow_id, content)
    logging.info(f'{json.dumps(response, indent=2)}')


if __name__ == '__main__':
    parser = ArgumentParser()
    parser.add_argument('document')
    parser.add_argument('--workflow-id')
    parser.add_argument('--model-id')
    parser.add_argument('--content-type', default='application/pdf')
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
        document_path=args.document,
        content_type=args.content_type,
        model_id=args.model_id
    )
