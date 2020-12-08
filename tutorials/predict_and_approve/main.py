import logging
import configparser
import os
import traceback

from las import Client, Credentials


logging.getLogger().setLevel(logging.INFO)


def create_api_client():
    config = configparser.ConfigParser()
    config.read('credentials.cfg')
    credentials = Credentials(**{k: v for k, v in config.items('default')})
    return Client(credentials)


def handler(client, event):
    document_id = event['document_id']
    model_id = event['model_id']
    predictions = client.create_prediction(
        document_id=document_id,
        model_id=model_id,
        max_pages=3,
        auto_rotate=False,
    )

    return {
        'documentId': document_id,
        'predictions': predictions
    }


if __name__ == '__main__':
    client = create_api_client()
    transition_id = os.environ['TRANSITION_ID']
    execution_id = os.environ['EXECUTION_ID']

    try:
        response = client.list_transition_executions(transition_id, execution_id=execution_id)
        executions = response['executions']
        logging.info(f'executions: {executions}')
        execution = executions.pop()
        event = execution['input']
        output = handler(client, event)
        client.update_transition_execution(
            transition_id=transition_id,
            execution_id=execution_id,
            status='succeeded',
            output=output,
        )
    except Exception:
        client.update_transition_execution(
            transition_id=transition_id,
            execution_id=execution_id,
            status='failed',
            error={
                'message': str(traceback.format_exc()),
            }
        )
        raise
