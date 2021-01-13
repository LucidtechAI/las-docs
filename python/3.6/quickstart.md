# Quick Start Guide

This section covers basic usage of Lucidtech AI Services with our Python SDK.

## Examples

### Making a prediction on a document
Suppose we have credentials with access to the demo API and we wish to run inference on a document using one of Lucidtech's
invoice models.

```
import json

from las import Client

client = Client()
prediction = client.predict('document.jpeg', 'invoice')
print(json.dumps(prediction, indent=2))
```

### Sending the ground truth to the model
Suppose we make a prediction that returns incorrect values and we wish to improve the model for future use. We can do so
by sending the ground truth to the model, telling it what the expected values should have been.

```
import json

from las import Client

client = Client()
prediction = client.create_prediction(document_id='las:document:<hex>', model_id='las:model:<hex>')

# We notice after manual inspection that some values were incorrect
print(json.dumps(prediction, indent=2))

# Construct ground truth with correct values and sending these to the model
ground_truth = [dict(label='total_amount', value='100.00'), dict(label='purchase_date', value='2019-03-18')]
client.update_document(document_id, ground_truth)
```

### Revoking consent and deleting documents
Suppose we wish to delete all documents associated with a customer in our ERP database or other systems. We need to
provide a consent_id to the prediction method that uniquely identifies the customer and use that consent_id to delete
documents.

```
import json

from las import Client

client = Client()
consent_id = 'las:consent:<hex>'
prediction = client.create_prediction('las:document:<hex>', 'las:model:<hex>', consent_id=consent_id)

# Deleting the documents associated with consent_id
client.delete_documents(consent_id=consent_id)
```

## Prerequisites
Python 3.6 or newer.

## Installation

```
$ pip install lucidtech-las
```

## Credentials
By default, lucidtech-las looks for credentials in a file located at ~/.lucidtech/credentials.cfg. The contents of
this file is assumed to be on the following format:

```
[default]
cliend_id = <your client id>
client_secret = <your secret access key>
api_key = <your api key>
api_endpoint = <api endpoint>
auth_endpoint = <authorization endpoint>
```

Optionally, you may provide a Credentials object when to Client's constructor. See details
[here](reference.html#module-las.credentials).

Contact Lucidtech at [hello@lucidtech.ai](mailto:hello@lucidtech.ai) to get access_key_id, secret_access_key and api_key
