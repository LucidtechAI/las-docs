import json
import logging
import os
import requests
import traceback

from las import Client

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)


class SemineClient:
    def __init__(self):
        self.auth_endpoint = os.environ.get('SEMINE_AUTH_ENDPOINT')
        self.api_endpoint = os.environ.get('SEMINE_API_ENDPOINT')
        self.username = os.environ.get('SEMINE_USERNAME')
        self.password = os.environ.get('SEMINE_PASSWORD')
        self.client_secret = os.environ.get('SEMINE_CLIENT_SECRET')

    @staticmethod
    def _json_decode(response):
        try:
            response.raise_for_status()
            return response.json()
        except Exception as e:
            logging.error('Error in response. Returned {}'.format(response.text))
            raise e

    def get_access_token(self):
        payload = '&'.join([
            'grant_type=password',
            f'username={self.username}',
            f'password={self.password}',
            'scope=integrationapi',
            'client_id=semine',
            f'client_secret={self.client_secret}',
        ])
        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        response_raw = requests.post(self.auth_endpoint, headers=headers, data=payload)
        response = self._json_decode(response_raw)
        logging.debug(json.dumps(response, indent=2))
        return response['access_token']

    def upload_document(self, payload):
        access_token = self.get_access_token()
        headers = {
            'Authorization': f'Bearer {access_token}',
            'Content-Type': 'application/json',
        }
        response_raw = requests.post(self.api_endpoint, headers=headers, data=payload)
        response = self._json_decode(response_raw)
        logging.info(json.dumps(response, indent=2))
        return response

    def create_payload(self, verified, document_id, encoded_document):
        payload = {
          'invoiceNumber': verified.get('invoice_number'),
          'documentType': 'CostInvoice',
          'invoiceType': verified.get('document_type'),
          'invoiceSourceType': verified.get('document_origin'),
          'invoiceDate': verified.get('invoice_date'),
          'invoiceCurrency': verified.get('currency'),
          'customerReference': verified.get('customer_ref'),
          'invoiceAmount': {
            'totalAmount': parse_amount(verified.get('total_amount')),
            'netAmount': parse_amount(verified.get('net_amount', 'total_amount')),
            'vatAmount': parse_amount(verified.get('vat_amount', 0.0)),
          },
          'paymentInformation': {
            'dueDate': verified.get('due_date'),
            'bankAccountNumber': verified.get('bank_account'),
            'kidNumber': verified.get('kid_number'),
          },
          'supplierParty': {
            'name': verified.get('supplier_name'),
            'vatNumber': verified.get('supplier_id'),
            'bankAccountNumber': verified.get('bank_account'),
          },
          'customerParty': {
            'code': verified.get('customer_code', '0000'),
            'vatNumber': verified.get('customer_id'),
          },
          'invoiceLines': [
            {
              'lineNumber': 1,
              'invoiceLineNumber': '1',
              'description': 'fakturalinje',
              'quantity': 1,
              'totalAmount': parse_amount(verified.get('total_amount')),
              'netAmount': parse_amount(verified.get('net_amount', 'total_amount')),
            },
          ],
          'attachments': [
            {
              'isInvoicePdf': True,
              'fileName': f'{document_id}.pdf',
              'fileData': encoded_document,
            },
          ],
        }
        return json.dumps(payload, indent=2)


def parse_amount(amount_string):
    try:
        tot = float(amount_string)
        return tot
    except Exception as e:
        logging.error(e)
        raise Exception(f'could not parse amount = {amount_string} as float')


def handler(las_client, event, environ):
    logging.info(f'Exporting to Semine {event} {environ}')
    document_id = event['documentId']
    verified = event['verified']
    encoded_document = las_client.get_document(document_id)['content']

    logging.info('Creating client...')
    semine_client = SemineClient()
    logging.info('Creating payload...')
    payload = semine_client.create_payload(
        verified=verified,
        document_id=document_id,
        encoded_document=encoded_document,
    )
    logging.info('Uploading document...')
    response = semine_client.upload_document(payload)
    truncated_payload = json.loads(payload)
    for attachment in truncated_payload['attachments']:
        attachment.pop('fileData')
    return {
        'output': truncated_payload,
        'response': response,
    }


if __name__ == '__main__':
    las_client = Client()
    transition_id = os.environ['TRANSITION_ID']
    execution_id = os.environ['EXECUTION_ID']

    try:
        execution = las_client.get_transition_execution(transition_id, execution_id=execution_id)
        event = execution['input']
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
