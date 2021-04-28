# .NET

## Make a prediction on a document

Suppose we wish to run inference on a document using Lucidtech’s invoice model.

```cs
using Lucidtech.Las;

Client client = new Client(<credentials>);
string documentId = "las:document:39e2d47b04214610a66050d1c6ed8b6d";
string modelId = "las:model:39e2d47b04214610a66050d1c6ed8b6d";
var response = client.CreatePrediction(documentId, modelId);
```

## Set ground truth of document

When uploading data that will be used for training and evaluation, we need to provide a ground truth.
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
If for instance a prediction reveals incorrect values in the ground truth of a document, 
we can update the existing document with new ground truth values.
```cs
var response = client.UpdateDocument("las:document:<uuid-hex>", groundTruth: groundTruth);
```


var response = client.UpdateDocument(documentId: "<documentId>", groundTruth: groundTruth);
## Create a document with consent id

{% hint style="info" %}
Consent ID is an identifier you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

```cs
using Lucidtech.Las;

Client client = new Client(<credentials>);
byte[] body = File.ReadAllBytes("invoice.pdf");
var response = client.CreateDocument(body, "application/pdf", "<consent id>");
```

## Revoking consent and deleting documents

Suppose we wish to delete all documents associated with a customer in our ERP database or other systems. We need to provide a consent\_id to the prediction method that uniquely identifies the customer and use that consent\_id to delete documents.

```cs
using Lucidtech.Las;

Client client = new Client(<credentials>);
var response = client.DeleteDocuments(consentId: "<consentId>");
```
