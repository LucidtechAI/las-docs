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

## Upload a document to get a document id

```java
public void createDocument() throws IOException, APIException, MissingAccessTokenException {
    ContentType contentType = ContentType.fromString("image/jpeg");
    Path path = Paths.get("path/to/document");
    byte[] content = Files.readAllBytes(path);

    JSONObject document = client.createDocument(content, contentType);
    Assert.assertTrue(document.has("contentType"));
    Assert.assertTrue(document.has("documentId"));
}
```

## Make a prediction on a document

Suppose we wish to run inference on a document using one of the available models.

```java
public void createPrediction() throws IOException, APIException, MissingAccessTokenException {
    String modelId = "las:model:<hex-uuid>"; 
    JSONObject prediction = client.createPrediction(documentId, modelId);
    JSONArray fields = prediction.getJSONArray("predictions");
    Assert.assertNotNull(fields);
}
```

{% hint style="info" %}
See what models you have available and their model id by using the method `listModels()`
{% endhint %}


## Set ground truth of document

When uploading data that will be used for training and evaluation, we need to provide a ground truth.
```java
File file = new File("myReceipt.pdf");
InputStream content = new FileInputStream(file);
JSONArray groundTruth = new JSONArray();
groundTruth.put(new JSONObject(){{ put("label", "totalAmount"); put("value", "100.00"); }});
groundTruth.put(new JSONObject(){{ put("label", "dueDate"); put("value", "2020-02-20"); }});
CreateDocumentOptions options = new CreateDocumentOptions().setGroundTruth(groundTruth);
JSONObject document = this.client.createDocument(content, ContentType.PDF, options);
```

### Update an existing document
If for instance a prediction reveals incorrect values in the ground truth of a document, 
we can update the existing document with new ground truth values.
```java
JSONArray groundTruth = new JSONArray();
groundTruth.put(new JSONObject(){{ put("label", "totalAmount"); put("value", "199.00"); }});
groundTruth.put(new JSONObject(){{ put("label", "dueDate"); put("value", "2020-03-20"); }});
JSONObject document = this.client.createDocument("las:document:<hex-uuid>", groundTruth);
```
## Set ground truth of document

Suppose we make a prediction that returns incorrect values and we wish to improve the model for future use. 
We can do so by sending groundTruth to the model, telling it what the expected values should have been.


## Create a batch and associate a few documents with it

Creating a batch is a way to group documents. 
This is useful for specifying batches of documents to use in improving the model later.

```java
public void createBatch() throws IOException, APIException, MissingAccessTokenException {
    CreadBatchOptions options = new CreateBatchOptions()
        .setName("TrainingData")
        .setDescription("I'm gonna create a new batch, give me a batch id!");
    JSONObject response = client.createBatch(options);
    Assert.assertNotNull(response.get("batchId"));
}
```

