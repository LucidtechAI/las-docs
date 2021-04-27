# Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`namespace `[`ai::lucidtech::las::sdk`](#namespaceai_1_1lucidtech_1_1las_1_1sdk) | 

# namespace `ai::lucidtech::las::sdk` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`class `[`ai::lucidtech::las::sdk::Client`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client) | 
`class `[`ai::lucidtech::las::sdk::Credentials`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials) | 

# class `ai::lucidtech::las::sdk::Client` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`Client`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1afb65b879166c0ccae64fff9515a99d10)`(`[`Credentials`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials)` credentials)` | A client to invoke api methods from Lucidtech AI Services.
`public inline JSONObject `[`createAsset`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a81740f0c48031ee80a5f330ad2469171)`(byte [] content,CreateAssetOptions options)` | Creates an asset, calls the POST /assets endpoint.
`public inline JSONObject `[`createAsset`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a2bb92bb23b32701d31ac242555f86969)`(InputStream content,CreateAssetOptions options)` | Creates an asset, calls the POST /assets endpoint.
`public inline JSONObject `[`createAsset`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a793e80233e2a3f438e9c1a9d8bdbb987)`(byte [] content)` | Creates an asset, calls the POST /assets endpoint.
`public inline JSONObject `[`createAsset`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a921a5e0aaeb4f72b27af1279bb6b593c)`(InputStream content)` | Creates an asset, calls the POST /assets endpoint.
`public inline JSONObject `[`listAssets`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a4ed339d8860dadb783cf838ba51cb2d9)`(ListAssetsOptions options)` | List assets available, calls the GET /assets endpoint.
`public inline JSONObject `[`listAssets`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1adea123f22256156832896e2a65624381)`()` | List assets available, calls the GET /assets endpoint.
`public inline JSONObject `[`getAsset`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a9b38d5ce294e44ced1dbff1fd626c965)`(String assetId)` | Get asset, calls the GET /assets/{assetId} endpoint.
`public inline JSONObject `[`updateAsset`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a7b25f20184448f0780de690dd4419739)`(String assetId,UpdateAssetOptions options)` | Updates an asset, calls the PATCH /assets/{assetId} endpoint.
`public inline JSONObject `[`createBatch`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af07728a2fb0b4805beae2c61543d3c5a)`(CreateBatchOptions options)` | Creates a batch, calls the POST /batches endpoint.
`public inline JSONObject `[`createBatch`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a9a205e73eb71d82c36c122eceb982bd2)`()` | Creates a batch, calls the POST /batches endpoint.
`public inline JSONObject `[`createDocument`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a20f4fcce80169d0d9b5444c13c1ef20f)`(byte [] content,ContentType contentType,CreateDocumentOptions options)` | Creates a document, calls the POST /documents endpoint.
`public inline JSONObject `[`createDocument`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ac8925645725cd4cf79fe4d3503d394e7)`(InputStream content,ContentType contentType,CreateDocumentOptions options)` | Creates a document, calls the POST /documents endpoint.
`public inline JSONObject `[`createDocument`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1aabaf95b529aad728a0d5543adcec737c)`(InputStream content,ContentType contentType)` | Creates a document, calls the POST /documents endpoint.
`public inline JSONObject `[`createDocument`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a144f0fe029a55ef9491605a5e967974c)`(byte [] content,ContentType contentType)` | Creates a document, calls the POST /documents endpoint.
`public inline JSONObject `[`listDocuments`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a51910821bf6df9383a09e9690dd3d891)`(ListDocumentsOptions options)` | List documents, calls the GET /documents endpoint.
`public inline JSONObject `[`listDocuments`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a15d880fed0ee9683e7f92c3a9966ba31)`()` | List documents, calls the GET /documents endpoint.
`public inline JSONObject `[`deleteDocuments`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a6e15284a79148f819df27eb116e1523d)`()` | Delete documents, calls the DELETE /documents endpoint.
`public inline JSONObject `[`deleteDocuments`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ae5d230b1f09243dd09bd97d50cc7b949)`(String consentId)` | Delete documents with the provided consentId, calls the DELETE /documents endpoint.
`public inline JSONObject `[`getDocument`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a23a56cacfb99ffa27d2243ff44466e02)`(String documentId)` | Get document, calls the GET /documents/{documentId} endpoint.
`public inline JSONObject `[`updateDocument`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a4753e00d5607011841f1e9eb7bfc01ec)`(String documentId,JSONArray groundTruth)` | Update ground truth for a document, calls the PATCH /documents/{documentId} endpoint.
`public inline JSONObject `[`getLog`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a7a793525a4f4031076821602bfb8d139)`(String logId)` | Get log, calls the GET /logs/{logId} endpoint.
`public inline JSONObject `[`listModels`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a2e31f156335c8016d444bf53e196fe80)`(ListModelsOptions options)` | List models available, calls the GET /models endpoint.
`public inline JSONObject `[`listModels`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a6f7c1fcdf8526fc350f2af01adf7ad50)`()` | List models available, calls the GET /models endpoint.
`public inline JSONObject `[`createPrediction`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a42819dfb318520e44a83c223f92b6177)`(String documentId,String modelId,CreatePredictionOptions options)` | Create a prediction on a document using specified model, calls the POST /predictions endpoint.
`public inline JSONObject `[`createPrediction`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a6833fdb6a3077d5f1d29b72a3dbe0f74)`(String documentId,String modelId)` | Create a prediction on a document using specified model, calls the POST /predictions endpoint.
`public inline JSONObject `[`listPredictions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a1293080bc880ae809572cce013faf0aa)`(ListPredictionsOptions options)` | List predictions available, calls the GET /predictions endpoint.
`public inline JSONObject `[`listPredictions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a9cb8a3c9b3a59b625d96d6098c8ef988)`()` | List predictions available, calls the GET /predictions endpoint.
`public inline JSONObject `[`createSecret`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1adb3730d63dc737deb719195e5ef6b377)`(JSONObject data,CreateSecretOptions options)` | Creates a secret, calls the POST /secrets endpoint.
`public inline JSONObject `[`createSecret`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a3500a9db94c0cb1d8185382f08c1e574)`(Map< String, String > data,CreateSecretOptions options)` | Creates a secret, calls the POST /secrets endpoint.
`public inline JSONObject `[`createSecret`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a04a03e708aff0b54161db46ade08374d)`(Map< String, String > data)` | Creates a secret, calls the POST /secrets endpoint.
`public inline JSONObject `[`createSecret`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a55d98a1c3e604609722c7b1a910aeb7f)`(JSONObject data)` | Creates a secret, calls the POST /secrets endpoint.
`public inline JSONObject `[`listSecrets`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a033ed91fcc13ded508d96b8703393ceb)`(ListSecretsOptions options)` | List secrets available, calls the GET /secrets endpoint.
`public inline JSONObject `[`listSecrets`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1adec3f8a4d5c68d1859a28e4b019722a0)`()` | List secrets available, calls the GET /secrets endpoint.
`public inline JSONObject `[`updateSecret`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a800e1d57fb377fb4be993e10f5ceb41e)`(String secretId,UpdateSecretOptions options)` | Updates a secret, calls the PATCH /secrets/{secretId} endpoint.
`public inline JSONObject `[`createTransition`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af67b7ae5c90e45b39204b09ae41e7907)`(TransitionType transitionType,CreateTransitionOptions options)` | Creates a transition, calls the POST /transitions endpoint.
`public inline JSONObject `[`createTransition`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a0c9443f18366729461e4d39f91fa9ae1)`(TransitionType transitionType)` | Creates a transition, calls the POST /transitions endpoint.
`public inline JSONObject `[`listTransitions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a417f031cdad1b8e064d2f10d826f33a5)`(ListTransitionsOptions options)` | List transitions, calls the GET /transitions endpoint.
`public inline JSONObject `[`listTransitions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a0c59ae7206fef4cd589fc23c74e383a3)`()` | List transitions, calls the GET /transitions endpoint.
`public inline JSONObject `[`getTransition`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a0461154851aaa36a030f1803e853a6e0)`(String transitionId)` | Get transition, calls the GET /transitions/{transitionId} endpoint.
`public inline JSONObject `[`updateTransition`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a43e8a50027043fdc06d9d98c07b8b1f9)`(String transitionId,UpdateTransitionOptions options)` | Updates a transition, calls the PATCH /transitions/{transitionId} endpoint.
`public inline JSONObject `[`executeTransition`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a8f452013fb07a4b0538d59ba002628e3)`(String transitionId)` | Start executing a manual transition, calls the POST /transitions/{transitionId}/executions endpoint.
`public inline JSONObject `[`deleteTransition`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a5539c47c22a7f32b40ca2676ce577d21)`(String transitionId)` | Delete a transition, calls the PATCH /transitions/{transitionId} endpoint. Will fail if transition is in use by one or more workflows.
`public inline JSONObject `[`listTransitionExecutions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a519a6577079943d09ea7a5772065ee1b)`(String transitionId,ListTransitionExecutionsOptions options)` | List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.
`public inline JSONObject `[`listTransitionExecutions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a45bce253c738098c695d45b22ee2efef)`(String transitionId)` | List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.
`public inline JSONObject `[`getTransitionExecution`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ad875cb2e624bdc7b71655bad9bcacb10)`(String transitionId,String executionId)` | Get an execution of a transition, calls the GET /transitions/{transitionId}/executions/{executionId} endpoint
`public inline JSONObject `[`updateTransitionExecution`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a7ec104fc53e3b5a04192b3483c68212b)`(String transitionId,String executionId,TransitionExecutionStatus status,UpdateTransitionExecutionOptions options)` | Ends the processing of the transition execution, calls the PATCH /transitions/{transition_id}/executions/{execution_id} endpoint.
`public inline JSONObject `[`sendHeartbeat`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ae78d4889966bcacf3a8fc8c41d31de4d)`(String transitionId,String executionId)` | Send heartbeat for a manual execution to signal that we are still working on it. Must be done at minimum once every 60 seconds or the transition execution will time out, calls the POST /transitions/{transitionId}/executions/{executionId}/heartbeats endpoint.
`public inline JSONObject `[`createUser`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a56a28c70eab9e47a472bfc3d56e32903)`(String email,CreateUserOptions options)` | Creates a new user, calls the POST /users endpoint.
`public inline JSONObject `[`createUser`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1aaa2b082e4d1ee85ba6f33c84e3e08251)`(String email)` | Creates a new user, calls the POST /users endpoint.
`public inline JSONObject `[`listUsers`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ae9068989f2589270f09d40cf3db6efa8)`(ListUsersOptions options)` | List users, calls the GET /users endpoint.
`public inline JSONObject `[`listUsers`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a3bb98bbab09c2a7cd472dafaa3f82f5b)`()` | List users, calls the GET /users endpoint.
`public inline JSONObject `[`getUser`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a20f91d81c208182343abb01a17ce166f)`(String userId)` | Get information about a specific user, calls the GET /users/{user_id} endpoint.
`public inline JSONObject `[`updateUser`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1acdf606ec8f63f43b4ab97e3eaa3e0926)`(String userId,UpdateUserOptions options)` | Updates a user, calls the PATCH /users/{userId} endpoint.
`public inline JSONObject `[`deleteUser`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a1c6b2dda4b6935f0118f5f38082e7931)`(String userId)` | Delete a user, calls the PATCH /users/{userId} endpoint.
`public inline JSONObject `[`createWorkflow`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a13d79b4da5daf9385fd83c2f0ed66074)`(JSONObject specification,CreateWorkflowOptions options)` | Creates a new workflow, calls the POST /workflows endpoint. Check out Lucidtech's tutorials for more info on how to create a workflow. see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve)
`public inline JSONObject `[`createWorkflow`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af2b4a31a375c0f6df3b2ad0542a2f616)`(JSONObject specification)` | Creates a new workflow, calls the POST /workflows endpoint. Check out Lucidtech's tutorials for more info on how to create a workflow. see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve)
`public inline JSONObject `[`listWorkflows`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a46fa269fd3dcb067d858eba91fb05e75)`(ListWorkflowsOptions options)` | List workflows, calls the GET /workflows endpoint.
`public inline JSONObject `[`listWorkflows`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a8c2d549f4205f9cd9a0e58564ed3390b)`()` | List workflows, calls the GET /workflows endpoint.
`public inline JSONObject `[`getWorkflow`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ab1c73efebc0768de2278212d094ceaf6)`(String workflowId)` | Get workflow, calls the GET /workflows/{workflowId} endpoint.
`public inline JSONObject `[`updateWorkflow`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ae4359d885d681461499be3c0464b4a69)`(String workflowId,UpdateWorkflowOptions options)` | Updates a workflow, calls the PATCH /workflows/{workflowId} endpoint.
`public inline JSONObject `[`deleteWorkflow`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a39129e1bc36e96d3fee684953ea531b1)`(String workflowId)` | Delete a workflow, calls the DELETE /workflows/{workflowId} endpoint.
`public inline JSONObject `[`executeWorkflow`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af80e370f399feb814fb05fc00583bb8e)`(String workflowId,JSONObject content)` | Start a workflow execution, calls the POST /workflows/{workflowId}/executions endpoint.
`public inline JSONObject `[`listWorkflowExecutions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a1b12450813bf85280709f9c96de36a9e)`(String workflowId,ListWorkflowExecutionsOptions options)` | List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.
`public inline JSONObject `[`listWorkflowExecutions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a7d55276d62280a636e41c517db1d88ad)`(String workflowId)` | List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.
`public inline JSONObject `[`deleteWorkflowExecution`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ab7fcb33a6c1989566db2f936cd493737)`(String workflowId,String executionId)` | Deletes the execution with the provided executionId from workflowId, calls the DELETE /workflows/{workflowId}/executions/{executionId} endpoint.

## Members

#### `public inline  `[`Client`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1afb65b879166c0ccae64fff9515a99d10)`(`[`Credentials`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials)` credentials)` 

A client to invoke api methods from Lucidtech AI Services.

#### Parameters
* `credentials` [Credentials](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials) to use 

**See also**: [Credentials](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials)

#### `public inline JSONObject `[`createAsset`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a81740f0c48031ee80a5f330ad2469171)`(byte [] content,CreateAssetOptions options)` 

Creates an asset, calls the POST /assets endpoint.

**See also**: CreateAssetOptions 

#### Parameters
* `content` Binary data 

* `options` Additional options to include in request body 

#### Returns
Asset response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createAsset`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a2bb92bb23b32701d31ac242555f86969)`(InputStream content,CreateAssetOptions options)` 

Creates an asset, calls the POST /assets endpoint.

**See also**: CreateAssetOptions 

#### Parameters
* `content` Data from input stream 

* `options` Additional options to include in request body 

#### Returns
Asset response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createAsset`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a793e80233e2a3f438e9c1a9d8bdbb987)`(byte [] content)` 

Creates an asset, calls the POST /assets endpoint.

#### Parameters
* `content` Binary data 

#### Returns
Asset response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createAsset`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a921a5e0aaeb4f72b27af1279bb6b593c)`(InputStream content)` 

Creates an asset, calls the POST /assets endpoint.

#### Parameters
* `content` Data from input stream 

#### Returns
Asset response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listAssets`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a4ed339d8860dadb783cf838ba51cb2d9)`(ListAssetsOptions options)` 

List assets available, calls the GET /assets endpoint.

**See also**: ListAssetsOptions 

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Assets response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listAssets`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1adea123f22256156832896e2a65624381)`()` 

List assets available, calls the GET /assets endpoint.

#### Returns
Assets response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getAsset`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a9b38d5ce294e44ced1dbff1fd626c965)`(String assetId)` 

Get asset, calls the GET /assets/{assetId} endpoint.

#### Parameters
* `assetId` Id of the asset 

#### Returns
Asset response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateAsset`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a7b25f20184448f0780de690dd4419739)`(String assetId,UpdateAssetOptions options)` 

Updates an asset, calls the PATCH /assets/{assetId} endpoint.

**See also**: UpdateAssetOptions 

#### Parameters
* `assetId` Id of the asset 

* `options` Additional options to include in request body 

#### Returns
Asset response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createBatch`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af07728a2fb0b4805beae2c61543d3c5a)`(CreateBatchOptions options)` 

Creates a batch, calls the POST /batches endpoint.

**See also**: CreateBatchOptions 

#### Parameters
* `options` Additional options to include in request body 

#### Returns
Batch response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createBatch`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a9a205e73eb71d82c36c122eceb982bd2)`()` 

Creates a batch, calls the POST /batches endpoint.

#### Returns
Batch response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createDocument`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a20f4fcce80169d0d9b5444c13c1ef20f)`(byte [] content,ContentType contentType,CreateDocumentOptions options)` 

Creates a document, calls the POST /documents endpoint.

**See also**: CreateDocumentOptions 

#### Parameters
* `content` Binary data 

* `contentType` A mime type for the document 

* `options` Additional options to include in request body 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createDocument`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ac8925645725cd4cf79fe4d3503d394e7)`(InputStream content,ContentType contentType,CreateDocumentOptions options)` 

Creates a document, calls the POST /documents endpoint.

**See also**: CreateDocumentOptions 

#### Parameters
* `content` Data from input stream 

* `contentType` A mime type for the document 

* `options` Additional options to include in request body 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createDocument`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1aabaf95b529aad728a0d5543adcec737c)`(InputStream content,ContentType contentType)` 

Creates a document, calls the POST /documents endpoint.

**See also**: CreateDocumentOptions 

#### Parameters
* `content` Data from input stream 

* `contentType` A mime type for the document 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createDocument`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a144f0fe029a55ef9491605a5e967974c)`(byte [] content,ContentType contentType)` 

Creates a document, calls the POST /documents endpoint.

**See also**: CreateDocumentOptions 

#### Parameters
* `content` Binary data 

* `contentType` A mime type for the document 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listDocuments`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a51910821bf6df9383a09e9690dd3d891)`(ListDocumentsOptions options)` 

List documents, calls the GET /documents endpoint.

**See also**: ListDocumentsOptions 

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Documents response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listDocuments`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a15d880fed0ee9683e7f92c3a9966ba31)`()` 

List documents, calls the GET /documents endpoint.

#### Returns
Documents response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`deleteDocuments`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a6e15284a79148f819df27eb116e1523d)`()` 

Delete documents, calls the DELETE /documents endpoint.

**See also**: [Client::createDocument](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a20f4fcce80169d0d9b5444c13c1ef20f)

#### Returns
Documents response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`deleteDocuments`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ae5d230b1f09243dd09bd97d50cc7b949)`(String consentId)` 

Delete documents with the provided consentId, calls the DELETE /documents endpoint.

**See also**: [Client::createDocument](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a20f4fcce80169d0d9b5444c13c1ef20f)

#### Parameters
* `consentId` Delete documents with this consentId 

#### Returns
Documents response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getDocument`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a23a56cacfb99ffa27d2243ff44466e02)`(String documentId)` 

Get document, calls the GET /documents/{documentId} endpoint.

#### Parameters
* `documentId` Id of the document 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateDocument`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a4753e00d5607011841f1e9eb7bfc01ec)`(String documentId,JSONArray groundTruth)` 

Update ground truth for a document, calls the PATCH /documents/{documentId} endpoint.

**See also**: [Client::createDocument](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a20f4fcce80169d0d9b5444c13c1ef20f)

#### Parameters
* `documentId` The document id to post groundTruth to. 

* `groundTruth` List of json objects containing label and value for the ground truth 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getLog`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a7a793525a4f4031076821602bfb8d139)`(String logId)` 

Get log, calls the GET /logs/{logId} endpoint.

#### Parameters
* `logId` Id of the log 

#### Returns
Log response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listModels`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a2e31f156335c8016d444bf53e196fe80)`(ListModelsOptions options)` 

List models available, calls the GET /models endpoint.

**See also**: ListModelsOptions 

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Models response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listModels`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a6f7c1fcdf8526fc350f2af01adf7ad50)`()` 

List models available, calls the GET /models endpoint.

#### Returns
Models response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createPrediction`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a42819dfb318520e44a83c223f92b6177)`(String documentId,String modelId,CreatePredictionOptions options)` 

Create a prediction on a document using specified model, calls the POST /predictions endpoint.

**See also**: [Client::createDocument](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a20f4fcce80169d0d9b5444c13c1ef20f)

**See also**: CreatePredictionOptions 

#### Parameters
* `documentId` The document id to run inference and create a prediction on. 

* `modelId` The id of the model to use for inference 

* `options` Additional options to include in request body 

#### Returns
Prediction response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createPrediction`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a6833fdb6a3077d5f1d29b72a3dbe0f74)`(String documentId,String modelId)` 

Create a prediction on a document using specified model, calls the POST /predictions endpoint.

**See also**: [Client::createDocument](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a20f4fcce80169d0d9b5444c13c1ef20f)

#### Parameters
* `documentId` The document id to run inference and create a prediction on. 

* `modelId` The id of the model to use for inference 

#### Returns
Prediction response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listPredictions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a1293080bc880ae809572cce013faf0aa)`(ListPredictionsOptions options)` 

List predictions available, calls the GET /predictions endpoint.

**See also**: ListPredictionsOptions 

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Predictions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listPredictions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a9cb8a3c9b3a59b625d96d6098c8ef988)`()` 

List predictions available, calls the GET /predictions endpoint.

#### Returns
Predictions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createSecret`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1adb3730d63dc737deb719195e5ef6b377)`(JSONObject data,CreateSecretOptions options)` 

Creates a secret, calls the POST /secrets endpoint.

**See also**: CreateSecretOptions 

#### Parameters
* `data` Key-Value pairs to store secretly 

* `options` Additional options to include in request body 

#### Returns
Secret response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createSecret`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a3500a9db94c0cb1d8185382f08c1e574)`(Map< String, String > data,CreateSecretOptions options)` 

Creates a secret, calls the POST /secrets endpoint.

**See also**: CreateSecretOptions 

#### Parameters
* `data` Key-Value pairs to store secretly 

* `options` Additional options to include in request body 

#### Returns
Secret response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createSecret`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a04a03e708aff0b54161db46ade08374d)`(Map< String, String > data)` 

Creates a secret, calls the POST /secrets endpoint.

#### Parameters
* `data` Key-Value pairs to store secretly 

#### Returns
Secret response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createSecret`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a55d98a1c3e604609722c7b1a910aeb7f)`(JSONObject data)` 

Creates a secret, calls the POST /secrets endpoint.

#### Parameters
* `data` Key-Value pairs to store secretly 

#### Returns
Secret response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listSecrets`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a033ed91fcc13ded508d96b8703393ceb)`(ListSecretsOptions options)` 

List secrets available, calls the GET /secrets endpoint.

**See also**: ListSecretsOptions 

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Secrets response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listSecrets`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1adec3f8a4d5c68d1859a28e4b019722a0)`()` 

List secrets available, calls the GET /secrets endpoint.

#### Returns
Secrets response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateSecret`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a800e1d57fb377fb4be993e10f5ceb41e)`(String secretId,UpdateSecretOptions options)` 

Updates a secret, calls the PATCH /secrets/{secretId} endpoint.

**See also**: UpdateSecretOptions 

#### Parameters
* `secretId` Id of the secret 

* `options` Additional options to include in request body 

#### Returns
Secret response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createTransition`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af67b7ae5c90e45b39204b09ae41e7907)`(TransitionType transitionType,CreateTransitionOptions options)` 

Creates a transition, calls the POST /transitions endpoint.

**See also**: CreateTransitionOptions 

**See also**: TransitionType 

#### Parameters
* `transitionType` Type of transition 

* `options` Additional options to include in request body 

#### Returns
Transition response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createTransition`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a0c9443f18366729461e4d39f91fa9ae1)`(TransitionType transitionType)` 

Creates a transition, calls the POST /transitions endpoint.

**See also**: TransitionType 

#### Parameters
* `transitionType` Type of transition 

#### Returns
Transition response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listTransitions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a417f031cdad1b8e064d2f10d826f33a5)`(ListTransitionsOptions options)` 

List transitions, calls the GET /transitions endpoint.

**See also**: ListTransitionsOptions 

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Transitions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listTransitions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a0c59ae7206fef4cd589fc23c74e383a3)`()` 

List transitions, calls the GET /transitions endpoint.

#### Returns
Transitions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getTransition`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a0461154851aaa36a030f1803e853a6e0)`(String transitionId)` 

Get transition, calls the GET /transitions/{transitionId} endpoint.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
Transition response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateTransition`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a43e8a50027043fdc06d9d98c07b8b1f9)`(String transitionId,UpdateTransitionOptions options)` 

Updates a transition, calls the PATCH /transitions/{transitionId} endpoint.

**See also**: UpdateTransitionOptions 

#### Parameters
* `transitionId` Id of the transition 

* `options` Additional options to include in request body 

#### Returns
Transition response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`executeTransition`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a8f452013fb07a4b0538d59ba002628e3)`(String transitionId)` 

Start executing a manual transition, calls the POST /transitions/{transitionId}/executions endpoint.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
TransitionExecution response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`deleteTransition`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a5539c47c22a7f32b40ca2676ce577d21)`(String transitionId)` 

Delete a transition, calls the PATCH /transitions/{transitionId} endpoint. Will fail if transition is in use by one or more workflows.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
Transition response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listTransitionExecutions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a519a6577079943d09ea7a5772065ee1b)`(String transitionId,ListTransitionExecutionsOptions options)` 

List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.

**See also**: ListTransitionExecutionsOptions 

#### Parameters
* `transitionId` Id of the transition 

* `options` Additional options to pass along as query parameters 

#### Returns
Transition executions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listTransitionExecutions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a45bce253c738098c695d45b22ee2efef)`(String transitionId)` 

List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
Transition executions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getTransitionExecution`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ad875cb2e624bdc7b71655bad9bcacb10)`(String transitionId,String executionId)` 

Get an execution of a transition, calls the GET /transitions/{transitionId}/executions/{executionId} endpoint

#### Parameters
* `transitionId` Id of the transition 

* `executionId` Id of the execution 

#### Returns
TransitionExecution response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateTransitionExecution`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a7ec104fc53e3b5a04192b3483c68212b)`(String transitionId,String executionId,TransitionExecutionStatus status,UpdateTransitionExecutionOptions options)` 

Ends the processing of the transition execution, calls the PATCH /transitions/{transition_id}/executions/{execution_id} endpoint.

**See also**: UpdateTransitionExecutionOptions 

**See also**: TransitionExecutionStatus 

#### Parameters
* `transitionId` Id of the transition 

* `executionId` Id of the execution 

* `status` Status of the execution 

* `options` Additional options to include in request body 

#### Returns
Transition response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`sendHeartbeat`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ae78d4889966bcacf3a8fc8c41d31de4d)`(String transitionId,String executionId)` 

Send heartbeat for a manual execution to signal that we are still working on it. Must be done at minimum once every 60 seconds or the transition execution will time out, calls the POST /transitions/{transitionId}/executions/{executionId}/heartbeats endpoint.

#### Parameters
* `transitionId` Id of the transition 

* `executionId` Id of the execution 

#### Returns
Empty response 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createUser`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a56a28c70eab9e47a472bfc3d56e32903)`(String email,CreateUserOptions options)` 

Creates a new user, calls the POST /users endpoint.

**See also**: CreateUserOptions 

#### Parameters
* `email` Email of the new user 

* `options` Additional options to include in request body 

#### Returns
User response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createUser`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1aaa2b082e4d1ee85ba6f33c84e3e08251)`(String email)` 

Creates a new user, calls the POST /users endpoint.

#### Parameters
* `email` Email to the new user 

#### Returns
User response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listUsers`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ae9068989f2589270f09d40cf3db6efa8)`(ListUsersOptions options)` 

List users, calls the GET /users endpoint.

**See also**: ListUsersOptions 

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Users response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listUsers`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a3bb98bbab09c2a7cd472dafaa3f82f5b)`()` 

List users, calls the GET /users endpoint.

#### Returns
Users response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getUser`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a20f91d81c208182343abb01a17ce166f)`(String userId)` 

Get information about a specific user, calls the GET /users/{user_id} endpoint.

#### Parameters
* `userId` The Id of the user 

#### Returns
User response 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateUser`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1acdf606ec8f63f43b4ab97e3eaa3e0926)`(String userId,UpdateUserOptions options)` 

Updates a user, calls the PATCH /users/{userId} endpoint.

**See also**: UpdateUserOptions 

#### Parameters
* `userId` Id of the user 

* `options` Additional options to include in request body 

#### Returns
User response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`deleteUser`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a1c6b2dda4b6935f0118f5f38082e7931)`(String userId)` 

Delete a user, calls the PATCH /users/{userId} endpoint.

#### Parameters
* `userId` Id of the user 

#### Returns
User response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createWorkflow`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a13d79b4da5daf9385fd83c2f0ed66074)`(JSONObject specification,CreateWorkflowOptions options)` 

Creates a new workflow, calls the POST /workflows endpoint. Check out Lucidtech's tutorials for more info on how to create a workflow. see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve)

**See also**: CreateWorkflowOptions 

#### Parameters
* `specification` Specification of the workflow, currently supporting ASL: [https://states-language.net/spec.html](https://states-language.net/spec.html). Check out the tutorials for more information: see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve#creating-the-workflow](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve#creating-the-workflow)

* `options` Additional options to include in request body 

#### Returns
Workflow response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createWorkflow`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af2b4a31a375c0f6df3b2ad0542a2f616)`(JSONObject specification)` 

Creates a new workflow, calls the POST /workflows endpoint. Check out Lucidtech's tutorials for more info on how to create a workflow. see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve)

#### Parameters
* `specification` Specification of the workflow, currently supporting ASL: [https://states-language.net/spec.html](https://states-language.net/spec.html). Check out the tutorials for more information: see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve#creating-the-workflow](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve#creating-the-workflow)

#### Returns
Workflow response from API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listWorkflows`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a46fa269fd3dcb067d858eba91fb05e75)`(ListWorkflowsOptions options)` 

List workflows, calls the GET /workflows endpoint.

**See also**: ListWorkflowsOptions 

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Workflows response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listWorkflows`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a8c2d549f4205f9cd9a0e58564ed3390b)`()` 

List workflows, calls the GET /workflows endpoint.

#### Returns
Workflows response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getWorkflow`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ab1c73efebc0768de2278212d094ceaf6)`(String workflowId)` 

Get workflow, calls the GET /workflows/{workflowId} endpoint.

#### Parameters
* `workflowId` Id of the workflow 

#### Returns
Workflow response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateWorkflow`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ae4359d885d681461499be3c0464b4a69)`(String workflowId,UpdateWorkflowOptions options)` 

Updates a workflow, calls the PATCH /workflows/{workflowId} endpoint.

**See also**: UpdateWorkflowOptions 

#### Parameters
* `workflowId` Id of the workflow 

* `options` Additional options to include in request body 

#### Returns
Workflow response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`deleteWorkflow`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a39129e1bc36e96d3fee684953ea531b1)`(String workflowId)` 

Delete a workflow, calls the DELETE /workflows/{workflowId} endpoint.

**See also**: [Client::createWorkflow](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a13d79b4da5daf9385fd83c2f0ed66074)

#### Parameters
* `workflowId` Id of the workflow 

#### Returns
Workflow response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`executeWorkflow`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af80e370f399feb814fb05fc00583bb8e)`(String workflowId,JSONObject content)` 

Start a workflow execution, calls the POST /workflows/{workflowId}/executions endpoint.

#### Parameters
* `workflowId` Id of the workflow 

* `content` Input to the first step of the workflow 

#### Returns
WorkflowExecution response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listWorkflowExecutions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a1b12450813bf85280709f9c96de36a9e)`(String workflowId,ListWorkflowExecutionsOptions options)` 

List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.

**See also**: ListWorkflowExecutionsOptions 

#### Parameters
* `workflowId` Id of the workflow 

* `options` Additional options to pass along as query parameters 

#### Returns
Workflow executions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listWorkflowExecutions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1a7d55276d62280a636e41c517db1d88ad)`(String workflowId)` 

List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.

#### Parameters
* `workflowId` Id of the workflow 

#### Returns
Workflow executions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline JSONObject `[`deleteWorkflowExecution`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1ab7fcb33a6c1989566db2f936cd493737)`(String workflowId,String executionId)` 

Deletes the execution with the provided executionId from workflowId, calls the DELETE /workflows/{workflowId}/executions/{executionId} endpoint.

**See also**: [Client::executeWorkflow](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client_1af80e370f399feb814fb05fc00583bb8e)

#### Parameters
* `workflowId` Id of the workflow 

* `executionId` Id of the execution 

#### Returns
WorklowExecution response from REST API 

#### Exceptions
* `IOException` General IOException 

* `APIException` Raised when API returns an erroneous status code 

* `MissingAccessTokenException` Raised if access token cannot be obtained

# class `ai::lucidtech::las::sdk::Credentials` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`Credentials`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1a2404d336db54f329f3755cc15eaaba18)`(String clientId,String clientSecret,String apiKey,String authEndpoint,String apiEndpoint)` | Used to fetch and store credentials.
`public inline String `[`getAccessToken`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1aae97b0ba29e9764b9fbc4de400e3eada)`(HttpClient httpClient)` | #### Parameters
`public inline String `[`getApiKey`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1a8946c7a17157dc72de7f5ac78e853b87)`()` | 
`public inline String `[`getApiEndpoint`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1a55b0484c840a56056ab2173b721f52a6)`()` | 

## Members

#### `public inline  `[`Credentials`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1a2404d336db54f329f3755cc15eaaba18)`(String clientId,String clientSecret,String apiKey,String authEndpoint,String apiEndpoint)` 

Used to fetch and store credentials.

#### Parameters
* `clientId` [Client](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client) id 

* `clientSecret` [Client](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_client) secret 

* `apiKey` API key 

* `authEndpoint` Auth endpoint 

* `apiEndpoint` Domain endpoint of the api, e.g. [https://{prefix}.api.lucidtech.ai/{version}](https://{prefix}.api.lucidtech.ai/{version})

#### Exceptions
* `MissingCredentialsException` Raised if some of credentials are missing

#### `public inline String `[`getAccessToken`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1aae97b0ba29e9764b9fbc4de400e3eada)`(HttpClient httpClient)` 

#### Parameters
* `httpClient` Instance of HttpClient used to access the authentication endpoint 

#### Returns
Access token, downloading it if necessary 

#### Exceptions
* `MissingAccessTokenException` Raised if access token cannot be obtained

#### `public inline String `[`getApiKey`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1a8946c7a17157dc72de7f5ac78e853b87)`()` 

#### `public inline String `[`getApiEndpoint`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials_1a55b0484c840a56056ab2173b721f52a6)`()` 

Generated by [Moxygen](https://sourcey.com/moxygen)