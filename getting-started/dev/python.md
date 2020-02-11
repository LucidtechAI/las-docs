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

