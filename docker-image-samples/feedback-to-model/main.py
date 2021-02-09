import logging
import os
import traceback

from las import Client


logging.getLogger().setLevel(logging.INFO)


def handler(las_client, event, environ):
    logging.info(f'Sending feedback to the model: {event} {environ}')
    document_id = event['documentId']
    verified = event['verified']
    ground_truth = [{'label': k, 'value': v} for k, v in verified.items() if v != '']
    logging.info(f'Posting ground_truth to API: {ground_truth}')
    response = las_client.update_document(document_id, ground_truth)
    logging.info(f'Update document response: {response}')
    return event


if __name__ == '__main__':
    las_client = Client()
    transition_id = os.environ['TRANSITION_ID']
    execution_id = os.environ['EXECUTION_ID']
    logging.info(f'Execute {execution_id} of transition {transition_id}')

    try:
        execution = las_client.get_transition_execution(transition_id, execution_id=execution_id)
        event = execution['input']
        logging.info(f'event: {event}')
        output = handler(las_client, event, environ=os.environ)
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
