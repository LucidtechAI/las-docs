from argparse import ArgumentParser
from pathlib import Path
from las import Client, Credentials
from las.credentials import read_from_file

WORKFLOW_ID = 'las:workflow:15999c9e9aed483f8848bdffa7b60b9d'


def main(client, document_path, content_type):
    document = Path(document_path).read_bytes()
    response = client.create_document(document, content_type=content_type)
    content = {
        'documentId': response['documentId'],
    }

    client.execute_workflow(WORKFLOW_ID, content)


if __name__ == '__main__':
    parser = ArgumentParser()
    parser.add_argument('document')
    parser.add_argument('--content-type', default='application/pdf')
    parser.add_argument('--profile')
    args = parser.parse_args()

    if args.profile:
        credentials = Credentials(*read_from_file(section=args.profile))
        client = Client(credentials)
    else:
        client = Client()

    main(client, args.document, args.content_type)
