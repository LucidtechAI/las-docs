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
document = client.create_document('invoice.pdf')
prediction = client.create_prediction(document_id=document.id, model_name='invoice')

print(prediction)
```

## Set ground truth of document

Suppose we make a prediction that returns incorrect values and we wish to improve the model for future use. We can do so by sending feedback to the model, telling it what the expected values should have been.

```python
from las import Client

client = Client()
document = client.create_document('invoice.pdf')
feedback = [
    {'label': 'total_amount', 'value': '240.00'},
    {'label': 'due_date', 'value': '2020-01-31'}
]
document = client.update_document(document_id=document.id, feedback=feedback)

print(document)
```

## Create a document with consent id

{% hint style="info" %}
Consent ID is an identifier you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

```python
from las import Client

client = Client()
document = client.create_document('invoice.pdf', consent_id='abc')
```

## Revoking consent and deleting documents

Suppose we wish to delete all documents associated with a customer in our ERP database or other systems. We need to provide a consent\_id to the prediction method that uniquely identifies the customer and use that consent\_id to delete documents.

```python
from las import Client

client = Client()
consent_id = 'abc'
client.create_document('invoice.pdf', consent_id=consent_id)
client.delete_consent(consent_id=consent_id)
```

## Create a batch and associate a few documents with it

Creating a batch is a way to group documents. This is useful for specifying batches of documents to use in improving the model later.

```python
from las import Client

client = Client()
batch = client.create_batch()
client.create_document('invoice.pdf', batch_id=batch.id)
client.create_document('invoice2.jpeg', batch_id=batch.id)
```

