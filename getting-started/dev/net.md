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

Suppose we make a prediction that returns incorrect values and we wish to improve the model for future use. We can do so by sending feedback to the model, telling it what the expected values should have been.

```cs
using Lucidtech.Las;

var groundTruth = new List<Dictionary<string, string>>()
{ 
    new Dictionary<string, string>(){{"label", "total_amount"},{"value", "54.50"}},
    new Dictionary<string, string>(){{"label", "purchase_date"},{"value", "2007-07-30"}}
};
var response = client.UpdateDocument(documentId: "<documentId>", groundTruth: groundTruth);
```

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
