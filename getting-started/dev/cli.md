# Using the CLI

## Installation

Install the CLI via the Python package manager [pip](https://pip.pypa.io/en/stable/)

```bash
>> $ pip install lucidtech-las-cli
```

## Make a prediction on a document

List models that are available for predictions
```bash
>> $ las models list
{
  "models": [
    {
      "modelId": "las:model:<hex>",
      ...
    }
  ],
  "nextToken": null
}
```

Upload a document
```bash
>> $ las documents create invoice.pdf
{
  "documentId": "las:document:<hex>",
  "contentType": "application/pdf"
}
```

Run inference on the document using a model
```bash
>> $ las predictions create las:document:<hex> las:model:<hex>
{
  "documentId": "las:document:<hex>",
  "predictions": [
    ...
  ]
}
```

## Set ground truth of document

When uploading data that will be used for training and evaluation, we need to provide a ground truth.
We can then use the optional parameters `--ground-truth-path` or `--ground-truth-fields`.

```bash
>> $ las documents create invoice.pdf --ground-truth-path ground_truth.json
{
  "documentId": "las:document:<hex>",
  "contentType": "application/pdf"
  "groundTruth": [
    ...
  ]
}
```
In this case the `ground_truth.json` should be on the following format
```json 
{
    "total_amount": "299.00",
    "due_date": "2020-03-20"
}
```
### Update an existing document
If for instance a prediction reveals incorrect values in the ground truth of a document, 
we can update the existing document with new ground truth values.
```bash
>> $ las documents update las:document:<hex> --ground-truth-fields total_amount=300.00 due_date=2020-02-28
{
  "documentId": "las:document:<hex>",
  "groundTruth": [
    ...
  ]
}
```

## Create a document with consent id

{% hint style="info" %}
Consent ID is an identifier you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

```bash
>> $ las documents create invoice.pdf --consent-id las:consent:<hex>
{
  "documentId": "las:document:<hex>",
  "contentType": "application/pdf",
  "consentId": "las:consent:<hex>"
}
```

## Get document and download document content

```bash
>> $ las documents create invoice.pdf --consent-id las:consent:<hex>
{
  "documentId": "las:document:<hex>",
  "contentType": "application/pdf",
  "consentId": "las:consent:<hex>"
}
>> $ las documents get las:document:<hex> --download-content invoice2.pdf
{
  "documentId": "las:document:<hex>",
  "contentType": "application/pdf",
  "consentId": "las:consent:<hex>",
  "content": "XXXXXXXXX... [TRUNCATED]"
}
```

## Revoking consent and deleting documents

Suppose we wish to delete all documents associated with a customer in our ERP database or other systems. We need to provide a consent\_id to the prediction method that uniquely identifies the customer and use that consent\_id to delete documents.

```bash
>> $ las consents delete las:consent:<hex>
{
  "consentId": "las:consent:<hex>",
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
  "batchId": "las:batch:<hex>",
  ...
}
```

