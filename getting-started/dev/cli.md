# Using the CLI

## Installation

Install the CLI via the Python package manager [pip](https://pip.pypa.io/en/stable/):

```bash
>> $ pip install lucidtech-las-cli
```

## Make a prediction on a document

First, list models that are available for predictions:
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

Next, upload a document:
```bash
>> $ las documents create invoice.pdf
{
  "documentId": "las:document:<hex>",
  "contentType": "application/pdf"
}
```

Finally, run inference on the document using a model:
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
(TTNote: Consider removing this note on why ground truth is needed as this was mentioned earlier, and/or perhaps add a link here 
to the relevant section under 'documents.')
We can then use the optional parameters `--ground-truth-path` or `--ground-truth-fields`.
(TTNote: Consider whether these parameters should be mentioned in the earlier 'documents' section.)

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
In this case, the `ground_truth.json` file should use the following format:
```json 
{
    "total_amount": "299.00",
    "due_date": "2020-03-20"
}
```

### Update an existing document
If a prediction reveals incorrect values in the ground truth of a document, 
we can update the existing document with new ground truth values:
```bash
>> $ las documents update las:document:<hex> --ground-truth-fields total_amount=300.00 due_date=2020-02-28
{
  "documentId": "las:document:<hex>",
  "groundTruth": [
    ...
  ]
}
```

## Create a document with a consentId

{% hint style="info" %}
ConsentID is an identifier that you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

(TTNote: Consider a link here to the 'consents' section for more information.)

```bash
>> $ las documents create invoice.pdf --consent-id las:consent:<hex>
{
  "documentId": "las:document:<hex>",
  "contentType": "application/pdf",
  "consentId": "las:consent:<hex>"
}
```

## Get document and download document content
(TTNote: Consider some verbiage here to explain the steps we are seeing in the example below, or to point out items that might need clarification.)

(TTNote: Should invoice2.pdf below match invoice.pdf mentioned above?)

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

## Revoke consent and delete documents

To delete all documents associated with a customer in your ERP or other systems, first provide the `consentId` (which uniquely identifies the customer) to the prediction method, then use that `consentId` to delete the documents:
(TTNote: Consider a link here to the batches and consents details.)

```bash
>> $ las consents delete las:consent:<hex>
{
  "consentId": "las:consent:<hex>",
  "documentIds": [
    ...
  ]
}
```

## Create a batch and associate documents with it

Creating a batch is a way to group documents. This is useful for specifying batches of documents to use in improving the model later.
(TTNote: Consider a link here to the batches and consents details.)

```bash
>> $ las batches create
{
  "batchId": "las:batch:<hex>",
  ...
}
```

