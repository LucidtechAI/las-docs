# Documentation for sprint-1

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *https://fma2pcjhd6.execute-api.eu-west-1.amazonaws.com//dev*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**batchesOptions**](Apis/DefaultApi.md#batchesoptions) | **OPTIONS** /batches | 
*DefaultApi* | [**batchesPost**](Apis/DefaultApi.md#batchespost) | **POST** /batches | 
*DefaultApi* | [**consentsConsentIdDelete**](Apis/DefaultApi.md#consentsconsentiddelete) | **DELETE** /consents/{consentId} | 
*DefaultApi* | [**documentsDocumentIdGet**](Apis/DefaultApi.md#documentsdocumentidget) | **GET** /documents/{documentId} | 
*DefaultApi* | [**documentsDocumentIdOptions**](Apis/DefaultApi.md#documentsdocumentidoptions) | **OPTIONS** /documents/{documentId} | 
*DefaultApi* | [**documentsDocumentIdPost**](Apis/DefaultApi.md#documentsdocumentidpost) | **POST** /documents/{documentId} | 
*DefaultApi* | [**documentsGet**](Apis/DefaultApi.md#documentsget) | **GET** /documents | 
*DefaultApi* | [**documentsOptions**](Apis/DefaultApi.md#documentsoptions) | **OPTIONS** /documents | 
*DefaultApi* | [**documentsPost**](Apis/DefaultApi.md#documentspost) | **POST** /documents | 
*DefaultApi* | [**predictionsOptions**](Apis/DefaultApi.md#predictionsoptions) | **OPTIONS** /predictions | 
*DefaultApi* | [**predictionsPost**](Apis/DefaultApi.md#predictionspost) | **POST** /predictions | 
*DefaultApi* | [**usersOptions**](Apis/DefaultApi.md#usersoptions) | **OPTIONS** /users | 
*DefaultApi* | [**usersUserIdGet**](Apis/DefaultApi.md#usersuseridget) | **GET** /users/{userId} | 
*DefaultApi* | [**usersUserIdOptions**](Apis/DefaultApi.md#usersuseridoptions) | **OPTIONS** /users/{userId} | 
*DefaultApi* | [**usersUserIdPatch**](Apis/DefaultApi.md#usersuseridpatch) | **PATCH** /users/{userId} | 


<a name="documentation-for-models"></a>
## Documentation for Models

 - [/Models.Batch](Models/Batch.md)
 - [/Models.Consent](Models/Consent.md)
 - [/Models.Document](Models/Document.md)
 - [/Models.DocumentOneOf](Models/DocumentOneOf.md)
 - [/Models.DocumentOneOfFeedback](Models/DocumentOneOfFeedback.md)
 - [/Models.Documents](Models/Documents.md)
 - [/Models.DocumentsDocuments](Models/DocumentsDocuments.md)
 - [/Models.DocumentsPredictions](Models/DocumentsPredictions.md)
 - [/Models.Error](Models/Error.md)
 - [/Models.PatchUserId](Models/PatchUserId.md)
 - [/Models.PostBatches](Models/PostBatches.md)
 - [/Models.PostDocumentId](Models/PostDocumentId.md)
 - [/Models.PostDocuments](Models/PostDocuments.md)
 - [/Models.PostPredictions](Models/PostPredictions.md)
 - [/Models.Prediction](Models/Prediction.md)
 - [/Models.PredictionPredictions](Models/PredictionPredictions.md)


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

