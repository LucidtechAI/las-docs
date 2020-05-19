---
title: ai::lucidtech::las::sdk::Client


---

# ai::lucidtech::las::sdk::Client















## Public Functions

|                | Name           |
| -------------- | -------------- |
|  | **[Client](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-client)**(Credentials credentials)  |
| JSONObject | **[getDocument](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-getdocument)**(String documentId)  |
| JSONObject | **[listDocuments](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-listdocuments)**()  |
| JSONObject | **[listDocuments](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-listdocuments)**(List< NameValuePair > options)  |
| JSONObject | **[createDocument](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-createdocument)**(byte[] content, ContentType contentType, String consentId, Map< String, Object > options)  |
| JSONObject | **[createDocument](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-createdocument)**(byte[] content, ContentType contentType, String consentId)  |
| JSONObject | **[createPrediction](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-createprediction)**(String documentId, String modelName)  |
| JSONObject | **[createPrediction](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-createprediction)**(String documentId, String modelName, Map< String, Object > options)  |
| Prediction | **[predict](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-predict)**(String documentPath, String modelName, String consentId)  |
| JSONObject | **[updateDocument](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-updatedocument)**(String documentId, JSONObject feedback)  |
| JSONObject | **[createBatch](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-createbatch)**(String description)  |
| JSONObject | **[deleteConsent](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-deleteconsent)**(String consentId)  |
| JSONObject | **[getUser](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-getuser)**(String userId)  |












## Public Functions Documentation

### function Client

```cpp
inline Client(
    Credentials credentials
)
```


**Parameters**: 

  * **credentials** Credentials to use 






**See**: Credentials 




















A client to invoke api methods from Lucidtech AI Services.


### function getDocument

```cpp
inline JSONObject getDocument(
    String documentId
)
```


**Parameters**: 

  * **documentId** The document id to run inference and create a prediction on 



**Exceptions**: 

  * **IOException** general IOException 
  * **APIException** raised when API return an erroneous status code 





**Return**: response from the API 





















### function listDocuments

```cpp
inline JSONObject listDocuments()
```




**Exceptions**: 

  * **IOException** general IOException 
  * **APIException** raised when API return an erroneous status code 





**Return**: All documents from REST API 





















### function listDocuments

```cpp
inline JSONObject listDocuments(
    List< NameValuePair > options
)
```


**Parameters**: 

  * **options** Available options are: batchId - the batch id that contains the documents of interest consentId - an identifier to mark the owner of the document handle 



**Exceptions**: 

  * **IOException** general IOException 
  * **APIException** raised when API return an erroneous status code 





**Return**: documents from REST API filtered using the passed options 





















### function createDocument

```cpp
inline JSONObject createDocument(
    byte[] content,
    ContentType contentType,
    String consentId,
    Map< String, Object > options
)
```


**Parameters**: 

  * **content** Binary data 
  * **contentType** A mime type for the document handle 
  * **consentId** An identifier to mark the owner of the document handle 
  * **options** Additional options to include in request body 



**Exceptions**: 

  * **IOException** general IOException 
  * **APIException** raised when API return an erroneous status code 




**See**: ContentType 

**Return**: Response from API 



















Creates a document handle, calls POST /documents endpoint


### function createDocument

```cpp
inline JSONObject createDocument(
    byte[] content,
    ContentType contentType,
    String consentId
)
```


**Parameters**: 

  * **content** Binary data 
  * **contentType** A mime type for the document handle 
  * **consentId** An identifier to mark the owner of the document handle 



**Exceptions**: 

  * **IOException** general IOException 
  * **APIException** raised when API return an erroneous status code 




**See**: ContentType 

**Return**: Response from API 



















Creates a document handle, calls POST /documents endpoint


### function createPrediction

```cpp
inline JSONObject createPrediction(
    String documentId,
    String modelName
)
```


**Parameters**: 

  * **documentId** The document id to run inference and create a prediction. See createDocument for how to get documentId 
  * **modelName** The name of the model to use for inference 



**Exceptions**: 

  * **IOException** general IOException 
  * **APIException** raised when API return an erroneous status code 




**See**: [Client::createDocument](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-createdocument)

**Return**: Prediction on document 



















Run inference and create a prediction, calls the POST /predictions endpoint


### function createPrediction

```cpp
inline JSONObject createPrediction(
    String documentId,
    String modelName,
    Map< String, Object > options
)
```


**Parameters**: 

  * **documentId** The document id to run inference and create a prediction. See createDocument for how to get documentId 
  * **modelName** The name of the model to use for inference 
  * **options** Available options are: maxPages - maximum number of pages to run predictions on autoRotate - whether or not to let the API try different rotations on 



**Exceptions**: 

  * **IOException** general IOException 
  * **APIException** raised when API return an erroneous status code 




**See**: [Client::createDocument](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-createdocument)

**Return**: Prediction on document 



















Run inference and create a prediction, calls the POST /predictions endpoint


### function predict

```cpp
inline Prediction predict(
    String documentPath,
    String modelName,
    String consentId
)
```


**Parameters**: 

  * **documentPath** Path to document to run inference on 
  * **modelName** The name of the model to use for inference 
  * **consentId** An identifier to mark the owner of the document handle 



**Exceptions**: 

  * **IOException** general IOException 
  * **APIException** raised when API return an erroneous status code 





**Return**: Prediction on document 



















Create a prediction on a document specified by path using specified model. This method takes care of creating and uploading a document specified by document_path. as well as running inference using model specified by model_name to create prediction on the document.


### function updateDocument

```cpp
inline JSONObject updateDocument(
    String documentId,
    JSONObject feedback
)
```


**Parameters**: 

  * **documentId** The document id to post feedback to. 
  * **feedback** Feedback to post 



**Exceptions**: 

  * **IOException** general IOException 
  * **APIException** raised when API return an erroneous status code 




**See**: [Client::createDocument](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-createdocument)

**Return**: Feedback response 



















Post feedback to the REST API, calls the POST /documents/{documentId} endpoint. Posting feedback means posting the ground truth data for the particular document. This enables the API to learn from past mistakes


### function createBatch

```cpp
inline JSONObject createBatch(
    String description
)
```


**Parameters**: 

  * **description** Creates a batch handle, calls the POST /batches endpoint 



**Exceptions**: 

  * **IOException** general IOException 
  * **APIException** raised when API return an erroneous status code 





**Return**: Batch handle id and pre-signed upload url 



















Creates a batch handle, calls the POST /batches endpoint 


### function deleteConsent

```cpp
inline JSONObject deleteConsent(
    String consentId
)
```


**Parameters**: 

  * **consentId** Delete documents with this consentId 



**Exceptions**: 

  * **IOException** general IOException 
  * **APIException** raised when API return an erroneous status code 




**See**: [Client::createDocument](Classes/classai_1_1lucidtech_1_1las_1_1sdk_1_1_client.md#function-createdocument)

**Return**: Feedback response 



















Delete documents with this consent_id, calls the DELETE /consent/{consentId} endpoint.


### function getUser

```cpp
inline JSONObject getUser(
    String userId
)
```


**Parameters**: 

  * **userId** The user_id to get consent hash for 



**Exceptions**: 

  * **IOException** 
  * **APIException** 
























Get information about user, calls the GET /users/{user_id} endpoint. 








-------------------------------

Updated on 19 May 2020 at 11:55:38 CEST