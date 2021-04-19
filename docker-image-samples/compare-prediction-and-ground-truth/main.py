import logging
import os
import traceback

from las import Client


logging.getLogger().setLevel(logging.INFO)

def create_prediction(label, value, confidence):
    return {
        'label': label,
        'value': value,
        'confidence': confidence,
    }


def handler(las_client, event, environ):
    document_id = event['documentId']
    predictions = event['predictions']
    confidence_threshold = float(environ.get('CONFIDENCE_THRESHOLD', 0.0))
    ground_truth_confidence = float(environ.get('GROUND_TRUTH_CONFIDENCE', 1.0))

    document = las_client.get_document(document_id=document_id)
    ground_truth = {field['label']: field['value'] for field in document['groundTruth']}
    enhanced_predictions = []

    for prediction in predictions:
        ground_truth_value = ground_truth.pop(prediction['label'])
        if prediction['value'] == ground_truth_value:
            prediction['confidence'] = 1.0
        elif prediction['confidence'] < confidence_threshold:
            prediction['confidence'] = ground_truth_confidence
            prediction['value'] = ground_truth_value
        enhanced_predictions.append(prediction)

    for label, value in ground_truth.items():
        enhanced_predictions.append({'label': label, 'value': value, 'confidence': ground_truth_confidence})

    # correction is needed unless all confidences are 1.0,
    # By setting the environment variable GROUND_TRUTH_CONFIDENCE < 1 you can choose to correct
    # values that either had no prediction or the prediction was lower than CONFIDENCE_THRESHOLD
    needs_correction = min([p['confidence'] for p in enhanced_predictions]) == 1.0

    event.update({
        'predictions': enhanced_predictions,
        'needsCorrection': needs_correction,
    })
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
