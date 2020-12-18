import configparser
import logging
import re
import time
from io import BytesIO
import os
from uuid import uuid4

import boto3
import email
import filetype
from email.policy import EmailPolicy
from email.parser import BytesParser
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart

from las import Client, Credentials

config = configparser.ConfigParser()

config_section = os.environ['CONFIG_SECTION']
config.read('config.cfg')
TEST_DOMAIN = config.get(config_section, 'test_domain')
WORKFLOW_ID = config.get(config_section, 'workflow_id')
DOMAIN = config.get(config_section, 'domain')
TEST_USERS = [f'{u}@{TEST_DOMAIN}' for u in config.get(config_section, 'test_users').split(',')]
BOUNCE_USER = config.get(config_section, 'bounce_user')
BOUNCE_EMAIL = f'{BOUNCE_USER}@{DOMAIN}'
RECEIVER = config.get(config_section, 'receiver')
BUCKET_NAME = os.environ['BUCKET_NAME']
BODY_LIMIT = 30000


MODEL_KEY = 'frozen_east_text_detection.pb'
KEY_PREFIX = 'emails'
bucket = boto3.resource('s3').Bucket(BUCKET_NAME)
ses = boto3.client('ses')

logging.getLogger().setLevel(logging.INFO)


class UnfoldingEncodedStringHeaderPolicy(EmailPolicy):
    def header_fetch_parse(self, name, value):
        # remove any leading white space from header lines
        # that separates apparent encoded-word tokens before further processing
        # using somewhat crude CRLF-FWS-between-encoded-word matching
        value = re.sub(r'(?<=\?=)((?:\r\n|[\r\n])[\t ]+)(?==\?)', '', value)
        return super().header_fetch_parse(name, value)


class WrongReceiverError(Exception):
    pass


def get_all_receivers(em):
    receivers = email.utils._AddressList(em.get('To')).addresslist
    for cmp in email.utils._AddressList(em.get('Cc')).addresslist:
        receivers.append(cmp)
    emails = []
    for receiver in receivers:
        emails.append(norm_email(receiver[1]))
    return emails


def norm_email(em):
    user, domain = em.split('@')
    return f'{user.lower()}@{domain.lower()}'


def send_bounce_email(body, subject):
    ses.send_email(
        Source=RECEIVER,
        Destination={'ToAddresses': [BOUNCE_EMAIL]},
        Message={
            'Subject': {'Data': subject},
            'Body': {'Text': {'Data': body}}
        },
    )


def send_bounce_email_with_original_email_attached(email_object, s3_obj, body, subject):
    message = MIMEMultipart()
    message['Subject'] = subject
    message['From'] = RECEIVER
    message['To'] = BOUNCE_EMAIL
    part = MIMEText(body, 'plain')
    message.attach(part)
    name = s3_obj.key.split('/')[-1]
    part = MIMEApplication(email_object)
    part.add_header('Content-Disposition', 'attachment', filename=f'{name}')
    message.attach(part)
    response = ses.send_raw_email(
        Source=message['From'],
        Destinations=[BOUNCE_EMAIL],
        RawMessage={
            'Data': message.as_string()
        }
    )
    logging.info(response)


def move_s3_object(src_object, dst_folder):
    copy_source = {
        'Bucket': src_object.bucket_name,
        'Key': src_object.key
    }
    dst_key = f'{dst_folder}/{uuid4()}.eml'
    logging.warning(f'moving email object from {src_object.bucket_name}/{src_object.key} to {dst_key}')
    bucket.Object(dst_key).copy(copy_source)
    bucket.Object(src_object.key).delete()
    return dst_key


def create_api_client():
    config = configparser.ConfigParser()
    config.read('credentials.cfg')
    credentials = Credentials(**{k: v for k, v in config.items('default')})
    return Client(credentials)


def post_document(content, content_type):
    client = create_api_client()
    logging.info(f'Posting document to API with size: {len(content) / 1E3} kB')
    post_documents_response = client.create_document(content, content_type)
    logging.info(post_documents_response)
    return post_documents_response['documentId']


def start_process(document_id, content_type, title, message):
    logging.info('Starting process for document ...')
    client = create_api_client()
    input_data = {
        'document_id': document_id,
        'content_type': content_type,
        'message': message,
        'title': title,
    }
    post_processes_response = client.execute_workflow(WORKFLOW_ID, input_data)

    logging.info(post_processes_response)
    sleep_time = 5
    logging.info(f'Done processing document, sleeping {sleep_time}s before continuing ...')
    time.sleep(sleep_time)


def send_warning_email(title, sender, email_body, content_disposition, content_type):
    if type(content_disposition) == str:
        attachment_info = '\n'.join(content_disposition.split(';'))
    else:
        attachment_info = 'No info regarding the attachment'

    body = "\n\n".join([f'TITLE: {title}', f'ORIGINALLY FROM: {sender}',
                        f'ATTACHMENT TYPE: {content_type}', f'ATTACHMENT INFO:\n{attachment_info}',
                        'EMAIL BODY START', f'{email_body}', 'EMAIL BODY END'])

    subject = f'Lucidtech could not process attachment from "{title}"'
    ses.send_email(
        Source=RECEIVER,
        Destination={'ToAddresses': [BOUNCE_EMAIL]},
        Message={
            'Subject': {'Data': subject},
            'Body': {'Text': {'Data': body}}
        }
    )


def get_email(o):
    temp_obj_key = move_s3_object(o, 'unprocessed')
    email_io = BytesIO()
    temp_obj = bucket.Object(temp_obj_key)
    temp_obj.download_fileobj(email_io)
    return temp_obj, email_io


def could_not_process_email(email_obj, s3_obj, error_message):
    expires_in = 3600 * 6
    s3_link = boto3.client('s3').generate_presigned_url(
        ClientMethod='get_object',
        Params={
            'Bucket': s3_obj.bucket_name,
            'Key': s3_obj.key
        },
        ExpiresIn=expires_in
    )

    subject = 'Lucidtech could not process email'
    body = '\n'.join([
        f'We could not process the following email {s3_obj.key}. Link expires in {expires_in // 3600} hours \n',
        s3_link,
        '\nThe process ended with the following message: \n',
        f'{error_message}'
    ])

    try:
        logging.info('Try sending an email with attachment')
        send_bounce_email_with_original_email_attached(email_obj, s3_obj=s3_obj, body=body, subject=subject)
    except Exception as e:
        logging.exception(e)
        logging.info('sending a normal bounce mail')
        send_bounce_email(body, subject)


def is_pdf(payload: bytes):
    first_line = str(payload).split(r'\n')[0]
    n = re.search('%PDF-[0-9].[0-9]{1,2}', first_line)
    if n:
        return True
    else:
        return False


def get_attachments(email_blob):
    email_message = BytesParser(policy=UnfoldingEncodedStringHeaderPolicy()).parsebytes(email_blob)
    part = email_message.get_body(preferencelist=('plain', 'html'))
    charset = part.get_content_charset()
    email_body = part.get_body().get_payload(decode=True).decode(charset)
    if len(email_body) > BODY_LIMIT:
        email_body = email_body[:BODY_LIMIT] + '\nWarning! The body of this email has been capped'
    email_title = email_message.get('Subject', 'Could not parse Title')
    receivers = get_all_receivers(email_message)

    if RECEIVER not in receivers:
        logging.error(f'Invalid receiver. Expected {RECEIVER} got {receivers}')
        raise WrongReceiverError(f'Invalid receiver. Expected {RECEIVER} got {receivers}')

    _, sender = email.utils.parseaddr(email_message.get('From'))
    sender = norm_email(sender)
    _, domain = sender.split('@')
    if domain == DOMAIN or sender in TEST_USERS:
        logging.info(f'Parsing email from domain: {domain}. Orig. sender: {sender}')

        for part in email_message.iter_attachments():
            payload = part.get_payload(decode=True)
            mime_type = part.get_content_type()
            kind = filetype.guess(payload)
            pdf_test = is_pdf(payload)
            if pdf_test or mime_type == 'application/pdf' or (kind and kind.mime == 'application/pdf'):
                logging.info(f'Will parse {part.get_filename()} of type {part.get_content_disposition()}, {pdf_test}')
            else:
                logging.warning(f'We only support content_type=application/pdf, {mime_type} is not valid')
                logging.warning(f'{part.get_content_disposition()} will be skipped')
                send_warning_email(email_title, sender, email_body, f'{part.get("Content-Disposition")}', mime_type)
                continue
            yield payload, mime_type, email_title, email_message
    else:
        logging.info(f'Skipping email from invalid domain: {domain}. Orig. sender: {sender}')


if __name__ == '__main__':

    filenames = []
    document_ids = []

    logging.info('Iterating over documents ...')
    for o in bucket.objects.filter(Prefix=KEY_PREFIX):
        try:
            logging.info('Processing email ...')
            temp_obj, email_io = get_email(o)
        except Exception as e:
            logging.error(f'Could not download email object')
            logging.exception(e)
            continue
        try:
            documents = [d for d in get_attachments(email_io.getvalue())]
            for doc, content_type, title, message in documents:
                document_id = post_document(doc, content_type)
                start_process(document_id, content_type, title, message)
                document_ids.append(document_id)
            move_s3_object(temp_obj, 'processed')
        except Exception as e:
            logging.error('Could not process email object')
            logging.exception(e)
            could_not_process_email(email_obj=email_io.getvalue(), s3_obj=temp_obj, error_message=e)
