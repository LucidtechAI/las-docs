import logging
import configparser
import os
import traceback

from las import Client, Credentials


logging.getLogger().setLevel(logging.INFO)
config_section = os.environ['CONFIG_SECTION']
credentials_section = os.environ['CREDENTIALS_SECTION']


def get_config():
    config = configparser.RawConfigParser()
    config.read('config.cfg')
    return {
        'model_id': config.get(config_section, 'model_id'),
        'max_pages': config.getint(config_section, 'max_pages', fallback=3),
        'auto_rotate': config.getboolean(config_section, 'auto_rotate', fallback=False),
    }


def create_api_client():
    config = configparser.ConfigParser()
    config.read('credentials.cfg')
    credentials = Credentials(**{k: v for k, v in config.items(credentials_section)})
    return Client(credentials)


def handler(event, environ):
    client = create_api_client()
    document_id = event['document_id']
    config = get_config()
    model_id = event.get('model_id', config['model_id'])
    prediction = client.create_prediction(
        document_id=document_id,
        model_id=model_id,
        max_pages=config['max_pages'],
        auto_rotate=config['auto_rotate'],
    )

    return {
        'documentId': document_id,
        'predictionId': prediction['predictionId'],
        'modelId': model_id,
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
