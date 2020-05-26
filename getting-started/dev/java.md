# Java

[API reference](../../reference/java/latest.md)

## Create a client to talk to the API
```java
    Credentials credentials = new Credentials(
        System.getenv("LAS_CLIENT_ID"),
        System.getenv("LAS_CLIENT_SECRET"),
        System.getenv("LAS_API_KEY"),
        System.getenv("LAS_AUTH_ENDPOINT"),
        System.getenv("LAS_API_ENDPOINT")
    );

    client = new Client(credentials);
```

## Make a prediction on a document

Suppose we wish to run inference on a document using Lucidtech’s invoice model.

{% hint style="info" %}
Consent ID is an identifier you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

```java
    public void createDocument() throws IOException, APIException, MissingAccessTokenException {
        ContentType contentType = ContentType.fromString("image/jpeg");
        Path path = Paths.get("path/to/document");
        byte[] content = Files.readAllBytes(path);
        String consentId = "consent id";

        JSONObject document = client.createDocument(content, contentType, consentId);
        Assert.assertTrue(document.has("consentId"));
        Assert.assertTrue(document.has("contentType"));
        Assert.assertTrue(document.has("documentId"));
    }
```

## Set ground truth of document

Suppose we make a prediction that returns incorrect values and we wish to improve the model for future use.
We can do so by sending feedback to the model, telling it what the expected values should have been.

```java
    public void setDocumentFeedback() throws IOException, APIException, MissingAccessTokenException {
        JSONObject feedback = new JSONObject();

        JSONObject totalAmount = new JSONObject();
        totalAmount.put("label", "total_amount");
        totalAmount.put("value", "123.00");

        JSONObject purchaseDate = new JSONObject();
        purchaseDate.put("label", "purchase_date");
        purchaseDate.put("value", "2019-05-23");

        List<JSONObject> fieldList = Arrays.asList(totalAmount, purchaseDate);
        JSONArray fields = new JSONArray(fieldList);
        feedback.put("feedback", fields);

        JSONObject feedbackResponse = client.updateDocument(documentId, feedback);
        Assert.assertNotNull(feedbackResponse.get("documentId"));
        Assert.assertNotNull(feedbackResponse.get("consentId"));
        Assert.assertNotNull(feedbackResponse.get("feedback"));
    }
```

## Create a batch and associate a few documents with it

Creating a batch is a way to group documents. This is useful for specifying batches of documents to use in improving the model later.

```javascript
    public void createBatch() throws IOException, APIException, MissingAccessTokenException {
        String description = "I'm gonna create a new batch, give me a batch id!";
        JSONObject response = client.createBatch(description);
        Assert.assertNotNull(response.get("batchId"));
    }
```
