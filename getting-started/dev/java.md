# Java

[API reference](../../reference/java/latest.md)

## Make a prediction on a document

Suppose we wish to run inference on a document using Lucidtech’s invoice model.

{% hint style="info" %}
Consent ID is an identifier you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

```java
    public void createDocument() throws IOException, APIException, MissingAccessTokenException {
        String[] documentMimeTypes = this.toArray(this.config.getProperty("document.mime.types"));

        for (String documentMimeType : documentMimeTypes) {
            ContentType contentType = ContentType.fromString(documentMimeType);

            JSONObject document = this.client.createDocument(this.content, contentType, this.consentId);
            Assert.assertTrue(document.has("consentId"));
            Assert.assertTrue(document.has("contentType"));
            Assert.assertTrue(document.has("documentId"));
        }
    }
```

## Set ground truth of document

Suppose we make a prediction that returns incorrect values and we wish to improve the model for future use.
We can do so by sending feedback to the model, telling it what the expected values should have been.

```java
    public void setDocumentFeedback() throws IOException, APIException, MissingAccessTokenException {
        JSONObject documentResponse = this.client.createDocument(this.content, contentType, this.consentId);
        JSONObject feedback = new JSONObject();

        List<JSONObject> fieldList = Arrays.asList(
            this.createField("total_amount", "123.00"),
            this.createField("purchase_date", "2019-05-23")
        );
        JSONArray fields = new JSONArray(fieldList);
        feedback.put("feedback", fields);

        JSONObject feedbackResponse = this.client.updateDocument(documentResponse.getString("documentId"), feedback);
    }
```

## Create a batch and associate a few documents with it

Creating a batch is a way to group documents. This is useful for specifying batches of documents to use in improving the model later.

```javascript
    public void createBatch() throws IOException, APIException, MissingAccessTokenException {
        String description = "I'm gonna create a new batch, give me a batch id!";
        JSONObject response = this.client.createBatch(description);
        Assert.assertNotNull(response.get("batchId"));
    }
```
