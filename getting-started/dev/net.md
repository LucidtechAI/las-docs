# .NET

## Make a prediction on a document

Suppose we wish to run inference on a document using Lucidtech’s invoice model.

```C#
using Lucidtech.Las;

ApiClient apiClient = new ApiClient("<endpoint>");
Prediction response = apiClient.Predict(documentPath: "document.pdf", modelName: "invoice|receipt|documentSplit");
Console.WriteLine(response.ToJsonString(Formatting.Indented));
```

## Set ground truth of document

Suppose we make a prediction that returns incorrect values and we wish to improve the model for future use. We can do so by sending feedback to the model, telling it what the expected values should have been.

```C#
using Lucidtech.Las;

var feedback = new List<Dictionary<string, string>>()
{ 
    new Dictionary<string, string>(){{"label", "total_amount"},{"value", "54.50"}},
    new Dictionary<string, string>(){{"label", "purchase_date"},{"value", "2007-07-30"}}
};
FeedbackResponse response = apiClient.SendFeedback(documentId: "<documentId>", feedback: feedback);
Console.WriteLine(response.ToJsonString(Formatting.Indented));
```

## Create a document with consent id

{% hint style="info" %}
Consent ID is an identifier you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

```C#
using Lucidtech.Las;

ApiClient apiClient = new ApiClient("<endpoint>");
byte[] body = File.ReadAllBytes("invoice.pdf");
var response = apiClient.PostDocuments(body, "application/pdf", "<consent id>");
```

## Revoking consent and deleting documents

Suppose we wish to delete all documents associated with a customer in our ERP database or other systems. We need to provide a consent\_id to the prediction method that uniquely identifies the customer and use that consent\_id to delete documents.

```C#
using Lucidtech.Las;

ApiClient apiClient = new ApiClient("<endpoint>");
RevokeResponse response = apiClient.RevokeConsent(consentId: "<consentId>");
Console.WriteLine(response.ToJsonString(Formatting.Indented));
```

