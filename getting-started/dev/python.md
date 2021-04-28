# Python

## Installation

Install the package via the Python package manager [pip](https://pip.pypa.io/en/stable/)

```bash
>> $ pip install lucidtech-las
```

## Make a prediction on a document

Suppose we wish to run inference on a document using Lucidtech’s invoice model.

```python
from las import Client

client = Client()
document = client.create_document('invoice.pdf', 'application/pdf')
prediction = client.create_prediction(document['documentId'], 'las:model:<hex>')

print(prediction)
```

## Set ground truth of document

When uploading data that will be used for training and evaluation, we need to provide a ground truth.
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
If for instance a prediction reveals incorrect values in the ground truth of a document, 
we can update the existing document with new ground truth values.
```python
document = client.update_document('las:document:<hex-uuid>', ground_truth=ground_truth)
```

{% hint style="info" %}
Providing ground truth is a necessary to re-train a model whether the model got it right or wrong. So always provide 
the ground truth if it is available.
{% endhint %}

## Create a document with consent id

{% hint style="info" %}
Consent ID is an identifier you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

```python
from las import Client

client = Client()
document = client.create_document('invoice.pdf', 'application/pdf', consent_id='las:consent:<hex>')
```

## Revoking consent and deleting documents

Suppose we wish to delete all documents associated with a customer in our ERP database or other systems. We need to provide a consent\_id to the prediction method that uniquely identifies the customer and use that consent\_id to delete documents.

```python
from las import Client

client = Client()
consent_id = 'las:consent:<hex>'
document = client.create_document('invoice.pdf', 'application/pdf', consent_id=consent_id)
client.delete_documents(consent_id=consent_id)
```

## Create a batch and associate a few documents with it

Creating a batch is a way to group documents. This is useful for specifying batches of documents to use in improving the
model later.

```python
from las import Client

client = Client()
batch = client.create_batch(name='Invoices2020F', description='invoices from fall 2020')
client.create_document('invoice.pdf', 'application/pdf', batch_id=batch['batchId'])
client.create_document('invoice2.jpeg', 'application/pdf', batch_id=batch['batchId'])
```

