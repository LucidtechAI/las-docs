# Python

#### Make predictions on an invoice

```python
from las import Client

client = Client()
document = client.create_document('invoice.pdf')
prediction = client.create_prediction(document_id=document.id, model_name='invoice')

print(prediction)
```

#### Set ground truth of document

```python
from las import Client

client = Client()
document = client.create_document('invoice.pdf')
feedback = [
    {'label': 'total_amount', 'value': '240.00'},
    {'label': 'due_date', 'value': '2020-01-31'}
]
document = client.send_feedback(document_id=document.id, feedback=feedback)

print(document)
```

#### Create a document with consent id

{% hint style="info" %}
Consent ID is an identifier you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

```python
from las import Client

client = Client()
document = client.create_document('invoice.pdf', consent_id='abc')
```

#### Create a batch and associate a few documents with it

Creating a batch is a way to group documents. This is useful for specifying batches of documents to use in improving 
the model later.

```python
from las import Client

client = Client()
batch = client.create_batch()
client.create_document('invoice.pdf', batch_id=batch.id)
client.create_document('invoice2.jpeg', batch_id=batch.id)
```

