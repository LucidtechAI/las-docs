# Documentation for sprint-1

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://fma2pcjhd6.execute-api.eu-west-1.amazonaws.com//dev*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**batchesOptions**](Apis/DefaultApi.md#batchesoptions) | **OPTIONS** /batches | 
*DefaultApi* | [**batchesPost**](Apis/DefaultApi.md#batchespost) | **POST** /batches | 
*DefaultApi* | [**consentsConsentIdDelete**](Apis/DefaultApi.md#consentsconsentiddelete) | **DELETE** /consents/{consentId} | 
*DefaultApi* | [**dataGet**](Apis/DefaultApi.md#dataget) | **GET** /data | 
*DefaultApi* | [**dataOptions**](Apis/DefaultApi.md#dataoptions) | **OPTIONS** /data | 
*DefaultApi* | [**dataPut**](Apis/DefaultApi.md#dataput) | **PUT** /data | 
*DefaultApi* | [**documentsDocumentIdGet**](Apis/DefaultApi.md#documentsdocumentidget) | **GET** /documents/{documentId} | 
*DefaultApi* | [**documentsDocumentIdOptions**](Apis/DefaultApi.md#documentsdocumentidoptions) | **OPTIONS** /documents/{documentId} | 
*DefaultApi* | [**documentsDocumentIdPost**](Apis/DefaultApi.md#documentsdocumentidpost) | **POST** /documents/{documentId} | 
*DefaultApi* | [**documentsGet**](Apis/DefaultApi.md#documentsget) | **GET** /documents | 
*DefaultApi* | [**documentsOptions**](Apis/DefaultApi.md#documentsoptions) | **OPTIONS** /documents | 
*DefaultApi* | [**documentsPost**](Apis/DefaultApi.md#documentspost) | **POST** /documents | 
*DefaultApi* | [**predictionsOptions**](Apis/DefaultApi.md#predictionsoptions) | **OPTIONS** /predictions | 
*DefaultApi* | [**predictionsPost**](Apis/DefaultApi.md#predictionspost) | **POST** /predictions | 
*DefaultApi* | [**processesGet**](Apis/DefaultApi.md#processesget) | **GET** /processes | 
*DefaultApi* | [**processesOptions**](Apis/DefaultApi.md#processesoptions) | **OPTIONS** /processes | 
*DefaultApi* | [**processesPost**](Apis/DefaultApi.md#processespost) | **POST** /processes | 
*DefaultApi* | [**processesProcessIdDelete**](Apis/DefaultApi.md#processesprocessiddelete) | **DELETE** /processes/{processId} | 
*DefaultApi* | [**processesProcessIdOptions**](Apis/DefaultApi.md#processesprocessidoptions) | **OPTIONS** /processes/{processId} | 
*DefaultApi* | [**tasksOptions**](Apis/DefaultApi.md#tasksoptions) | **OPTIONS** /tasks | 
*DefaultApi* | [**tasksPost**](Apis/DefaultApi.md#taskspost) | **POST** /tasks | 
*DefaultApi* | [**tasksTaskIdOptions**](Apis/DefaultApi.md#taskstaskidoptions) | **OPTIONS** /tasks/{taskId} | 
*DefaultApi* | [**tasksTaskIdPatch**](Apis/DefaultApi.md#taskstaskidpatch) | **PATCH** /tasks/{taskId} | 
*DefaultApi* | [**usersOptions**](Apis/DefaultApi.md#usersoptions) | **OPTIONS** /users | 
*DefaultApi* | [**usersUserIdGet**](Apis/DefaultApi.md#usersuseridget) | **GET** /users/{userId} | 
*DefaultApi* | [**usersUserIdOptions**](Apis/DefaultApi.md#usersuseridoptions) | **OPTIONS** /users/{userId} | 
*DefaultApi* | [**usersUserIdPatch**](Apis/DefaultApi.md#usersuseridpatch) | **PATCH** /users/{userId} | 


<a name="documentation-for-models"></a>
## Documentation for Models

 - [/Models.Batch](Models/Batch.md)
 - [/Models.Consent](Models/Consent.md)
 - [/Models.Document](Models/Document.md)
 - [/Models.DocumentFeedbackItem](Models/DocumentFeedbackItem.md)
 - [/Models.Documents](Models/Documents.md)
 - [/Models.Error](Models/Error.md)
 - [/Models.PatchTaskId](Models/PatchTaskId.md)
 - [/Models.PatchUserId](Models/PatchUserId.md)
 - [/Models.PostBatches](Models/PostBatches.md)
 - [/Models.PostDocumentId](Models/PostDocumentId.md)
 - [/Models.PostDocumentIdFeedbackItem](Models/PostDocumentIdFeedbackItem.md)
 - [/Models.PostDocuments](Models/PostDocuments.md)
 - [/Models.PostPredictions](Models/PostPredictions.md)
 - [/Models.PostProcesses](Models/PostProcesses.md)
 - [/Models.PostTasks](Models/PostTasks.md)
 - [/Models.Prediction](Models/Prediction.md)
 - [/Models.PredictionPredictionsItem](Models/PredictionPredictionsItem.md)
 - [/Models.Process](Models/Process.md)
 - [/Models.Task](Models/Task.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="api_key"></a>
### api_key

- **Type**: API key
- **API key parameter name**: x-api-key
- **Location**: HTTP header

<a name="sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer"></a>
### sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

