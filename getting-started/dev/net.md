# Using .NET

(TTNote: Consider if 'installation' section is needed.)

## Make a prediction on a document

Suppose we wish to run inference on a document using Lucidtech’s invoice model.

(TTNote: For consistency with CLI, consider if a `list` is needed first. Then consider a description to replace the above line such as: 'Upload a document then run inference using the invoice model:')

```cs
using Lucidtech.Las;

Client client = new Client(<credentials>);
string documentId = "las:document:39e2d47b04214610a66050d1c6ed8b6d";
string modelId = "las:model:39e2d47b04214610a66050d1c6ed8b6d";
var response = client.CreatePrediction(documentId, modelId);
```

## Set ground truth of document

When uploading data that will be used for training and evaluation, we need to provide a ground truth:

(TTNote: Consider referencing more detailed section on ground truth from 'documents')

```cs
using Lucidtech.Las;

byte[] content = File.ReadAllBytes("MyReceipt.jpeg");
var groundTruth = new List<Dictionary<string, string>>()
{ 
    new Dictionary<string, string>(){{"label", "total_amount"},{"value", "54.50"}},
    new Dictionary<string, string>(){{"label", "purchase_date"},{"value", "2007-07-30"}}
};
var response = client.CreateDocument(content, "image/jpeg", groundTruth: groundTruth);
```

### Update an existing document
If a prediction reveals incorrect values in the ground truth of a document, 
we can update the existing document with new ground truth values:
```cs
var response = client.UpdateDocument("las:document:<uuid-hex>", groundTruth: groundTruth);
```

## Create a document with a consentId

{% hint style="info" %}
ConsentId is an identifier that you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

(TTNote: Consider a link here to the 'consents' section for more information.)

```cs
using Lucidtech.Las;

Client client = new Client(<credentials>);
byte[] body = File.ReadAllBytes("invoice.pdf");
var response = client.CreateDocument(body, "application/pdf", "<consent id>");
```

(TTNote: Consider if 'Get document and download document content' is needed here for consistency.)

## Revoke consent and delete documents

To delete all documents associated with a customer in your ERP or other systems, first provide the `consentId` (which uniquely identifies the customer) to the prediction method, then use that `consentId` to delete documents.
(TTNote: Consider a link here to the batches and consents details.)

```cs
using Lucidtech.Las;

Client client = new Client(<credentials>);
var response = client.DeleteDocuments(consentId: "<consentId>");
```

(TTNote: Consider if 'create a batch and associate documents with it' section is needed here for consistency.)
