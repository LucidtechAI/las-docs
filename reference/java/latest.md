# latest

## Summary

| Members | Descriptions |
| :--- | :--- |
| `namespace`[`ai::lucidtech::las::sdk`](latest.md#namespaceai_1_1lucidtech_1_1las_1_1sdk) |  |

## namespace `ai::lucidtech::las::sdk`

### Summary

| Members | Descriptions |
| :--- | :--- |
| `class`[`ai::lucidtech::las::sdk::Client`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client) |  |
| `class`[`ai::lucidtech::las::sdk::Credentials`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials) |  |

## class `ai::lucidtech::las::sdk::Client`

### Summary

| Members | Descriptions |
| :--- | :--- |
| `public inline`[`Client`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1afb65b879166c0ccae64fff9515a99d10)`(`[`Credentials`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials)`credentials)` | A client to invoke api methods from Lucidtech AI Services. |
| `public inline JSONObject`[`getDocument`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a23a56cacfb99ffa27d2243ff44466e02)`(String documentId)` | \#\#\#\# Parameters |
| `public inline JSONObject`[`listDocuments`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a15d880fed0ee9683e7f92c3a9966ba31)`()` | \#\#\#\# Returns |
| `public inline JSONObject`[`listDocuments`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a52a82364e47da2a51bb7accc239ca2d3)`(List< NameValuePair > options)` | \#\#\#\# Parameters |
| `public inline JSONObject`[`createDocument`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af86c1b0d8ee1fdc0595239c6276a4b1b)`(InputStream content,ContentType contentType,String consentId,Map< String, Object > options)` | Creates a document handle, calls POST /documents endpoint |
| `public inline JSONObject`[`createDocument`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a7db5e8c3b50061635b0cd124532e8146)`(InputStream content,ContentType contentType,String consentId)` | Creates a document handle, calls POST /documents endpoint |
| `public inline JSONObject`[`createDocument`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a4803a524d666ba14de129f7c2d92fefd)`(byte[] content,ContentType contentType,String consentId,Map< String, Object > options)` | Creates a document handle, calls POST /documents endpoint |
| `public inline JSONObject`[`createDocument`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1aa5cf3a7689eeec8ce532c06bdf1c5cae)`(byte[] content,ContentType contentType,String consentId)` | Creates a document handle, calls POST /documents endpoint |
| `public inline JSONObject`[`createPrediction`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a6dccb713bddcf7d2a9f3ccdbee9cf489)`(String documentId,String modelName)` | Run inference and create a prediction, calls the POST /predictions endpoint |
| `public inline JSONObject`[`createPrediction`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a1d5c2bfa09dfcb7f60cae34b52ff1426)`(String documentId,String modelName,Map< String, Object > options)` | Run inference and create a prediction, calls the POST /predictions endpoint |
| `public inline Prediction`[`predict`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ad652c2f80a8b4890552ffdb36e4239ae)`(String documentPath,String modelName,String consentId)` | Create a prediction on a document _documentPath_ by path using model _modelName_. This method takes care of creating and uploading a document as well as running inference using model to create prediction on the document. |
| `public inline JSONObject`[`updateDocument`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a280e08fa464580f19873900e96eeb93b)`(String documentId,JSONObject feedback)` | Post feedback to the REST API, calls the POST /documents/{documentId} endpoint. Posting feedback means posting the ground truth data for the particular document. This enables the API to learn from past mistakes |
| `public inline JSONObject`[`createBatch`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a53b440aa0099aab8577c5a91a2a05801)`(String description)` | Creates a batch handle, calls the POST /batches endpoint |
| `public inline JSONObject`[`deleteConsent`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1aa62d1f8ced37a1253ade235ff5dfad24)`(String consentId)` | Delete documents with this consent\_id, calls the DELETE /consent/{consentId} endpoint. |
| `public inline JSONObject`[`getUser`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a20f91d81c208182343abb01a17ce166f)`(String userId)` | Get information about user, calls the GET /users/{user\_id} endpoint. |

### Members

#### `public inline`[`Client`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1afb65b879166c0ccae64fff9515a99d10)`(`[`Credentials`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials)`credentials)`

A client to invoke api methods from Lucidtech AI Services.

#### Parameters

* `credentials` [Credentials](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials) to use 

**See also**: [Credentials](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials)

#### `public inline JSONObject`[`getDocument`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a23a56cacfb99ffa27d2243ff44466e02)`(String documentId)`

#### Parameters

* `documentId` The document id to run inference and create a prediction on 

#### Returns

response from the API

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject`[`listDocuments`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a15d880fed0ee9683e7f92c3a9966ba31)`()`

#### Returns

All documents from REST API

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject`[`listDocuments`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a52a82364e47da2a51bb7accc239ca2d3)`(List< NameValuePair > options)`

#### Parameters

* `options` Available options are: 

#### Returns

documents from REST API filtered using the passed options

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject`[`createDocument`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af86c1b0d8ee1fdc0595239c6276a4b1b)`(InputStream content,ContentType contentType,String consentId,Map< String, Object > options)`

Creates a document handle, calls POST /documents endpoint

**See also**: ContentType

#### Parameters

* `content` Input stream
* `contentType` A mime type for the document handle
* `consentId` An identifier to mark the owner of the document handle
* `options` Additional options to include in request body

#### Returns

Response from API

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject`[`createDocument`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a7db5e8c3b50061635b0cd124532e8146)`(InputStream content,ContentType contentType,String consentId)`

Creates a document handle, calls POST /documents endpoint

**See also**: ContentType

#### Parameters

* `content` Input stream
* `contentType` A mime type for the document handle
* `consentId` An identifier to mark the owner of the document handle

#### Returns

Response from API

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject`[`createDocument`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a4803a524d666ba14de129f7c2d92fefd)`(byte[] content,ContentType contentType,String consentId,Map< String, Object > options)`

Creates a document handle, calls POST /documents endpoint

**See also**: ContentType

#### Parameters

* `content` Binary data
* `contentType` A mime type for the document handle
* `consentId` An identifier to mark the owner of the document handle
* `options` Additional options to include in request body

#### Returns

Response from API

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject`[`createDocument`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1aa5cf3a7689eeec8ce532c06bdf1c5cae)`(byte[] content,ContentType contentType,String consentId)`

Creates a document handle, calls POST /documents endpoint

**See also**: ContentType

#### Parameters

* `content` Binary data
* `contentType` A mime type for the document handle
* `consentId` An identifier to mark the owner of the document handle

#### Returns

Response from API

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject`[`createPrediction`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a6dccb713bddcf7d2a9f3ccdbee9cf489)`(String documentId,String modelName)`

Run inference and create a prediction, calls the POST /predictions endpoint

**See also**: [Client::createDocument](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af86c1b0d8ee1fdc0595239c6276a4b1b)

#### Parameters

* `documentId` The document id to run inference and create a prediction. See createDocument for how to get documentId
* `modelName` The name of the model to use for inference

#### Returns

Prediction on document

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject`[`createPrediction`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a1d5c2bfa09dfcb7f60cae34b52ff1426)`(String documentId,String modelName,Map< String, Object > options)`

Run inference and create a prediction, calls the POST /predictions endpoint

**See also**: [Client::createDocument](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af86c1b0d8ee1fdc0595239c6276a4b1b)

#### Parameters

* `documentId` The document id to run inference and create a prediction. See createDocument for how to get documentId
* `modelName` The name of the model to use for inference
* `options` Available options are: maxPages - maximum number of pages to run predictions on autoRotate - whether or not to let the API try different rotations on

#### Returns

Prediction on document

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline Prediction`[`predict`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ad652c2f80a8b4890552ffdb36e4239ae)`(String documentPath,String modelName,String consentId)`

Create a prediction on a document _documentPath_ by path using model _modelName_. This method takes care of creating and uploading a document as well as running inference using model to create prediction on the document.

#### Parameters

* `documentPath` Path to document to run inference on
* `modelName` The name of the model to use for inference
* `consentId` An identifier to mark the owner of the document handle

#### Returns

Prediction on document

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject`[`updateDocument`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a280e08fa464580f19873900e96eeb93b)`(String documentId,JSONObject feedback)`

Post feedback to the REST API, calls the POST /documents/{documentId} endpoint. Posting feedback means posting the ground truth data for the particular document. This enables the API to learn from past mistakes

**See also**: [Client::createDocument](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af86c1b0d8ee1fdc0595239c6276a4b1b)

#### Parameters

* `documentId` The document id to post feedback to.
* `feedback` Feedback to post

#### Returns

Feedback response

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject`[`createBatch`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a53b440aa0099aab8577c5a91a2a05801)`(String description)`

Creates a batch handle, calls the POST /batches endpoint

#### Parameters

* `description` Creates a batch handle, calls the POST /batches endpoint 

#### Returns

Batch handle id and pre-signed upload url

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject`[`deleteConsent`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1aa62d1f8ced37a1253ade235ff5dfad24)`(String consentId)`

Delete documents with this consent\_id, calls the DELETE /consent/{consentId} endpoint.

**See also**: [Client::createDocument](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af86c1b0d8ee1fdc0595239c6276a4b1b)

#### Parameters

* `consentId` Delete documents with this consentId 

#### Returns

Feedback response

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject`[`getUser`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a20f91d81c208182343abb01a17ce166f)`(String userId)`

Get information about user, calls the GET /users/{user\_id} endpoint.

#### Parameters

* `userId` The user\_id to get consent hash for 

#### Returns

User response

#### Exceptions

* `IOException` General IOException
* `APIException` Raised when API returns an erroneous status code
* `MissingAccessTokenException` Raised if access token cannot be obtained

## class `ai::lucidtech::las::sdk::Credentials`

### Summary

| Members | Descriptions |
| :--- | :--- |
| `public inline`[`Credentials`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1a2404d336db54f329f3755cc15eaaba18)`(String clientId,String clientSecret,String apiKey,String authEndpoint,String apiEndpoint)` | Used to fetch and store credentials. |
| `public inline String`[`getAccessToken`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1aae97b0ba29e9764b9fbc4de400e3eada)`(HttpClient httpClient)` | \#\#\#\# Parameters |
| `public inline String`[`getApiKey`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1a8946c7a17157dc72de7f5ac78e853b87)`()` |  |
| `public inline String`[`getApiEndpoint`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1a55b0484c840a56056ab2173b721f52a6)`()` |  |

### Members

#### `public inline`[`Credentials`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1a2404d336db54f329f3755cc15eaaba18)`(String clientId,String clientSecret,String apiKey,String authEndpoint,String apiEndpoint)`

Used to fetch and store credentials.

#### Parameters

* `clientId` [Client](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client) id
* `clientSecret` [Client](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client) secret
* `apiKey` API key
* `authEndpoint` Auth endpoint
* `apiEndpoint` Domain endpoint of the api, e.g. [https://{prefix}.api.lucidtech.ai/{version}](https://{prefix}.api.lucidtech.ai/{version})

#### Exceptions

* `MissingCredentialsException` Raised if some of credentials are missing

#### `public inline String`[`getAccessToken`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1aae97b0ba29e9764b9fbc4de400e3eada)`(HttpClient httpClient)`

#### Parameters

* `httpClient` Instance of HttpClient used to access the authentication endpoint 

#### Returns

Access token, downloading it if necessary

#### Exceptions

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline String`[`getApiKey`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1a8946c7a17157dc72de7f5ac78e853b87)`()`

#### `public inline String`[`getApiEndpoint`](latest.md#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1a55b0484c840a56056ab2173b721f52a6)`()`

Generated by [Moxygen](https://sourcey.com/moxygen)

