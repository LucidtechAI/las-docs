import configparser
import yaml
import logging
import os
import traceback

import boto3
from las import Client, Credentials

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
config_section = os.environ['CONFIG_SECTION']
credentials_section = os.environ['CREDENTIALS_SECTION']

config = configparser.ConfigParser()
config.read('config.cfg')
RECEIVER = config.get(config_section, 'receiver')
DEFAULT_DESTINATION = config.get(config_section, 'default_destination')


ses = boto3.client('ses')


def create_api_client():
    config = configparser.ConfigParser()
    config.read('credentials.cfg')
    credentials = Credentials(**{k: v for k, v in config.items(credentials_section)})
    return Client(credentials)


def send_ground_truth(document_id, verified):
    client = create_api_client()
    ground_truth = [{'label': k, 'value': v} for k, v in verified.items()]
    logging.info(f'Posting ground_truth to API: {ground_truth}')
    client.update_document(document_id, ground_truth)


def handler(event, environ):
    try:
        send_ground_truth(event['documentId'], event['verified'])
    except Exception as e:
        logging.error(e)

    response = ses.send_email(
        Source=RECEIVER,
        Destination={'ToAddresses': [event.get('sender', DEFAULT_DESTINATION)]},
        Message={
            'Subject': {'Data': f'Document Processed {environ["EXECUTION_ID"]}'},
            'Body': {'Text': {'Data': yaml.dump(event, indent=2)}}
        },
    )

    return {
        'response': response,
    }


if __name__ == '__main__':
    las_client = create_api_client()
    transition_id = os.environ['TRANSITION_ID']
    execution_id = os.environ['EXECUTION_ID']

    try:
        response = las_client.list_transition_executions(transition_id, execution_id=execution_id)
        executions = response['executions']
        logging.info(f'executions: {executions}')
        execution = executions.pop()
        event = execution['input']
        output = handler(event, environ=os.environ)
        las_client.update_transition_execution(
            transition_id=transition_id,
            execution_id=execution_id,
            status='succeeded',
            output=output,
        )
    except Exception:
        las_client.update_transition_execution(
            transition_id=transition_id,
            execution_id=execution_id,
            status='failed',
            error={
                'message': str(traceback.format_exc()),
            }
        )
        raise
