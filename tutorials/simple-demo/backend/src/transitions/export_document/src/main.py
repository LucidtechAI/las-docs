import configparser
import json
import logging
import os
import requests
import traceback

from las import Client, Credentials

logger = logging.getLogger()
logger.setLevel(logging.DEBUG)
config_section = os.environ['CONFIG_SECTION']
credentials_section = os.environ['CREDENTIALS_SECTION']


class SemineClient:
    def __init__(self):
        config = configparser.RawConfigParser()
        config.read('config.cfg')
        self.auth_endpoint = config.get(config_section, 'auth_endpoint')
        self.api_endpoint = config.get(config_section, 'api_endpoint')
        self.username = config.get(config_section, 'username')
        self.password = config.get(config_section, 'password')
        self.client_secret = config.get(config_section, 'client_secret')

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

    @staticmethod
    def get_invoice_type(document_type):
        if document_type == 'FAKTURA':
            invoice_type = 'Debit'
        elif document_type == 'KREDITNOTA':
            invoice_type = 'Credit'
        else:
            raise ValueError(f'Invoice type {document_type} is not supported')
        return invoice_type

    @staticmethod
    def get_invoice_source_type(document_origin):
        if document_origin == 'SCANNER':
            invoice_source_type = 'Paper'
        elif document_origin == 'EMAIL':
            invoice_source_type = 'Email'
        else:
            raise ValueError(f'Invoice source {document_origin} is not supported')
        return invoice_source_type

    def create_payload(self, verified, document_id, document_origin, encoded_document):
        payload = {
          'invoiceNumber': verified['invoice_number'],
          'documentType': 'CostInvoice',
          'invoiceType': self.get_invoice_type(verified['document_type']),
          'invoiceSourceType': self.get_invoice_source_type(document_origin),
          'invoiceDate': verified['invoice_date'],
          'invoiceCurrency': verified['currency'],
          'customerReference': verified['customer_ref'],
          'invoiceAmount': {
            'totalAmount': verified['total_amount'],
            'netAmount': verified['total_amount'],
            'vatAmount': '0.00',  # Temporary value since this is not predicted
          },
          'paymentInformation': {
            'dueDate': verified['due_date'],
            'bankAccountNumber': verified['bank_account'],
            'kidNumber': verified['kid_number'],
          },
          'supplierParty': {
            'name': verified['supplier_name'],
            'vatNumber': verified['supplier_id'],
            'bankAccountNumber': verified['bank_account'],
          },
          'customerParty': {
            'code': verified['obos_company_number'],
            'vatNumber': verified['customer_id'],
          },
          'invoiceLines': [
            {
              'lineNumber': 1,
              'invoiceLineNumber': '1',
              'description': 'fakturalinje',
              'quantity': 1,
              'totalAmount': verified['total_amount'],
              'netAmount': verified['total_amount'],
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


def create_api_client():
    config = configparser.ConfigParser()
    config.read('credentials.cfg')
    credentials = Credentials(**{k: v for k, v in config.items(credentials_section)})
    return Client(credentials)


def get_document(doc_id: str):
    client = create_api_client()
    doc_info = client.get_document(doc_id)
    logging.info(f'{doc_info}')
    return doc_info['content']


def parse_total_amount(total_amount_string):
    try:
        tot = float(total_amount_string)
        return tot
    except Exception as e:
        logging.error(e)
        raise Exception(f'could not parse total amount = {total_amount_string} as float')


def send_ground_truth(document_id, verified):
    client = create_api_client()
    ground_truth = [{'label': k, 'value': v} for k, v in verified.items()]
    logging.info(f'Posting ground_truth to API: {ground_truth}')
    client.update_document(document_id, ground_truth)


def handler(event, environ):
    logging.info(f'Exporting to Semine {event} {environ}')
    encoded_document = get_document(event['documentId'])

    try:
        send_ground_truth(event['documentId'], event['verified'])
    except Exception as e:
        logging.error(e)

    logging.info('Creating client...')
    semine_client = SemineClient()
    logging.info('Creating payload...')
    payload = semine_client.create_payload(
        verified=event['verified'],
        document_origin=event.get('documentOrigin'),
        document_id=event['documentId'],
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
