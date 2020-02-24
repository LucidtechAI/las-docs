# Using the CLI

## Installation

Install the CLI via the Python package manager [pip](https://pip.pypa.io/en/stable/)

```bash
>> $ pip install lucidtech-las-cli
```

## Make a prediction on a document

Suppose we wish to run inference on a document using Lucidtech’s invoice model.

```bash
>> $ las documents create invoice.pdf
{
  "documentId": "012345xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "contentType": "application/pdf",
  "consentId": "default"
}
>> $ las predictions create 012345xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx invoice
{
  "documentId": "012345xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "predictions": [
    ...
  ]
}
```

## Set ground truth of document

Suppose we make a prediction that returns incorrect values and we wish to improve the model for future use. We can do so by sending feedback to the model, telling it what the expected values should have been.

```bash
>> $ las documents create invoice.pdf
{
  "documentId": "012345xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "contentType": "application/pdf",
  "consentId": "default"
}
>> $ las documents update 012345xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --fields total_amount=300.00 due_date=2020-02-28
{
  "documentId": "012345xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "feedback": [
    ...
  ]
}
```

## Create a document with consent id

{% hint style="info" %}
Consent ID is an identifier you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

```bash
>> $ las documents create invoice.pdf --consent-id foobar
{
  "documentId": "012345xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "contentType": "application/pdf",
  "consentId": "foobar"
}
```

## Get document and download document content

```bash
>> $ las documents create invoice.pdf --consent-id foobar
{
  "documentId": "012345xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "contentType": "application/pdf",
  "consentId": "foobar"
}
```

```bash
>> $ las documents get 012345xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --download-content invoice2.pdf
{
  "documentId": "012345xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "contentType": "application/pdf",
  "consentId": "foobar",
  "content": "XXXXXXXXX... [TRUNCATED]"
}
```

## Revoking consent and deleting documents

Suppose we wish to delete all documents associated with a customer in our ERP database or other systems. We need to provide a consent\_id to the prediction method that uniquely identifies the customer and use that consent\_id to delete documents.

```bash
>> $ las consents delete foobar
{
  "consentId": "foobar",
  "documentIds": [
    ...
  ]
}
```

## Create a batch and associate a few documents with it

Creating a batch is a way to group documents. This is useful for specifying batches of documents to use in improving the model later.

```bash
>> $ las batches create
{
  "batchId": "012345xxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "description": "default"
}
```

