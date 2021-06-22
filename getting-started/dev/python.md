# Using Python

## Installation

Install the package via the Python package manager [pip](https://pip.pypa.io/en/stable/):

```bash
>> $ pip install lucidtech-las
```

## Make a prediction on a document

Suppose we wish to run inference on a document using Lucidtech’s invoice model:
(TTNote: For consistency with CLI, consider if a `list` is needed first. Then consider a description to replace the above line such as: 'Upload a document then run inference using the invoice model:')

```python
from las import Client

client = Client()
document = client.create_document('invoice.pdf', 'application/pdf')
prediction = client.create_prediction(document['documentId'], 'las:model:<hex>')

print(prediction)
```

## Set ground truth of document

When uploading data that will be used for training and evaluation, we need to provide a ground truth:

(TTNote: Consider referencing more detailed section on ground truth from 'documents')

```python
from las import Client

client = Client()
ground_truth = [
    {'label': 'total_amount', 'value': '240.00'},
    {'label': 'due_date', 'value': '2020-01-31'}
]
document = client.create_document('invoice.pdf', 'application/pdf', ground_truth=ground_truth)
```

### Update an existing document
If a prediction reveals incorrect values in the ground truth of a document, 
we can update the existing document with new ground truth values:
```python
document = client.update_document('las:document:<hex-uuid>', ground_truth=ground_truth)
```

{% hint style="info" %}
Providing ground truth is necessary to retrain a model, whether the model was right or wrong. So always provide 
the ground truth if it is available.
{% endhint %}
(TTNote: Consider replicating this note in all other sections for consistency.)

## Create a document with a consentId

{% hint style="info" %}
ConsentID is an identifier that you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

(TTNote: Consider a link here to the 'consents' section for more information.)

```python
from las import Client

client = Client()
document = client.create_document('invoice.pdf', 'application/pdf', consent_id='las:consent:<hex>')
```

(TTNote: Consider if a section 'get document and download document content' is needed here for consistency.)

## Revoke consent and delete documents

To delete all documents associated with a customer in your ERP or other systems, first provide the `consentId` (which uniquely identifies the customer) to the prediction method, then use that `consentId` to delete the documents.
(TTNote: Consider a link here to the batches and consents details.)

```python
from las import Client

client = Client()
consent_id = 'las:consent:<hex>'
document = client.create_document('invoice.pdf', 'application/pdf', consent_id=consent_id)
client.delete_documents(consent_id=consent_id)
```

## Create a batch and associate documents with it

Creating a batch is a way to group documents. This is useful for specifying batches of documents to use in improving the
model later.
(TTNote: Consider a link here to the batches and consents details.)

```python
from las import Client

client = Client()
batch = client.create_batch(name='Invoices2020F', description='invoices from fall 2020')
client.create_document('invoice.pdf', 'application/pdf', batch_id=batch['batchId'])
client.create_document('invoice2.jpeg', 'application/pdf', batch_id=batch['batchId'])
```

