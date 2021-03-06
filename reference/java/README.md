# Java SDK

## Usage

### Preconditions

* Documents must be in upright position
* Only one receipt or invoice per document is supported
* Supported file formats are: jpeg, pdf

### Quick start

```java
import ai.lucidtech.las.sdk.Client;
import ai.lucidtech.las.sdk.Prediction;
import ai.lucidtech.las.sdk.Field;

import java.util.List;

public static void main(String[] args) throws IOException, URISyntaxException {
    Credentials credentials = new Credentials(
        clientId,
        clientSecret,
        apiKey,
        authEndpoint,
        apiEndpoint
    );
    Client client = new Client("<api endpoint>");
    JSONObject document = this.createDocument(documentContent, contentType, consentId);
    String documentId = document.getString("documentId");
    JSONObject prediction = this.createPrediction(documentId, modelName);

    fields.forEach(item -> {
        JSONObject field = (JSONObject) item;
        System.out.println("field: " + field.getString("label"));
        System.out.println("field: " + field.getString("value"));
        System.out.println("field: " + field.getFloat("confidence"));
    });
}
```

