# Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`namespace `[`ai::lucidtech::las::sdk`](#namespaceai_1_1lucidtech_1_1las_1_1sdk) | 

# namespace `ai::lucidtech::las::sdk` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`class `[`ai::lucidtech::las::sdk::APIException`] | 
`class `[`ai::lucidtech::las::sdk::Client`] | 
`class `[`ai::lucidtech::las::sdk::CreateAssetOptions`] | 
`class `[`ai::lucidtech::las::sdk::CreateBatchOptions`] | 
`class `[`ai::lucidtech::las::sdk::CreateDocumentOptions`] | 
`class `[`ai::lucidtech::las::sdk::CreatePredictionOptions`] | 
`class `[`ai::lucidtech::las::sdk::CreateSecretOptions`] | 
`class `[`ai::lucidtech::las::sdk::CreateTransitionOptions`] | 
`class `[`ai::lucidtech::las::sdk::CreateUserOptions`] | 
`class `[`ai::lucidtech::las::sdk::CreateWorkflowOptions`] | 
`class `[`ai::lucidtech::las::sdk::Credentials`] | 
`class `[`ai::lucidtech::las::sdk::ListAssetsOptions`] | 
`class `[`ai::lucidtech::las::sdk::ListDocumentsOptions`] | 
`class `[`ai::lucidtech::las::sdk::ListModelsOptions`] | 
`class `[`ai::lucidtech::las::sdk::ListPredictionsOptions`] | 
`class `[`ai::lucidtech::las::sdk::ListResourcesOptions`] | 
`class `[`ai::lucidtech::las::sdk::ListSecretsOptions`] | 
`class `[`ai::lucidtech::las::sdk::ListSortablesOptions`] | 
`class `[`ai::lucidtech::las::sdk::ListTransitionExecutionsOptions`] | 
`class `[`ai::lucidtech::las::sdk::ListTransitionsOptions`] | 
`class `[`ai::lucidtech::las::sdk::ListUsersOptions`] | 
`class `[`ai::lucidtech::las::sdk::ListWorkflowExecutionsOptions`] | 
`class `[`ai::lucidtech::las::sdk::ListWorkflowsOptions`] | 
`class `[`ai::lucidtech::las::sdk::MissingAccessTokenException`] | 
`class `[`ai::lucidtech::las::sdk::MissingCredentialsException`] | 
`class `[`ai::lucidtech::las::sdk::NameAndDescriptionOptions`] | 
`class `[`ai::lucidtech::las::sdk::UpdateAssetOptions`] | 
`class `[`ai::lucidtech::las::sdk::UpdateSecretOptions`] | 
`class `[`ai::lucidtech::las::sdk::UpdateTransitionExecutionOptions`] | 
`class `[`ai::lucidtech::las::sdk::UpdateTransitionOptions`] | 
`class `[`ai::lucidtech::las::sdk::UpdateUserOptions`] | 
`class `[`ai::lucidtech::las::sdk::UpdateWorkflowOptions`] | 
`class `[`ai::lucidtech::las::sdk::UserOptions`] | 

# class `ai::lucidtech::las::sdk::APIException` 

```
class ai::lucidtech::las::sdk::APIException
  : public Exception
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`APIException`]`()` | 
`public inline  `[`APIException`]`(String message)` | 
`public inline  `[`APIException`]`(int code,String message)` | 

## Members

#### `public inline  `[`APIException`]`()` 

#### `public inline  `[`APIException`]`(String message)` 

#### `public inline  `[`APIException`]`(int code,String message)` 

# class `ai::lucidtech::las::sdk::Client` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`Client`]`(`[`Credentials`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials)` credentials)` | A client to invoke api methods from Lucidtech AI Services.
`public inline JSONObject `[`createAsset`]`(byte [] content,`[`CreateAssetOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_asset_options)` options)` | Creates an asset, calls the POST /assets endpoint.
`public inline JSONObject `[`createAsset`]`(InputStream content,`[`CreateAssetOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_asset_options)` options)` | Creates an asset, calls the POST /assets endpoint.
`public inline JSONObject `[`createAsset`]`(byte [] content)` | Creates an asset, calls the POST /assets endpoint.
`public inline JSONObject `[`createAsset`]`(InputStream content)` | Creates an asset, calls the POST /assets endpoint.
`public inline JSONObject `[`listAssets`]`(`[`ListAssetsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_assets_options)` options)` | List assets available, calls the GET /assets endpoint.
`public inline JSONObject `[`listAssets`]`()` | List assets available, calls the GET /assets endpoint.
`public inline JSONObject `[`getAsset`]`(String assetId)` | Get asset, calls the GET /assets/{assetId} endpoint.
`public inline JSONObject `[`updateAsset`]`(String assetId,`[`UpdateAssetOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_asset_options)` options)` | Updates an asset, calls the PATCH /assets/{assetId} endpoint.
`public inline JSONObject `[`createBatch`]`(`[`CreateBatchOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_batch_options)` options)` | Creates a batch, calls the POST /batches endpoint.
`public inline JSONObject `[`createBatch`]`()` | Creates a batch, calls the POST /batches endpoint.
`public inline JSONObject `[`createDocument`]`(byte [] content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType,`[`CreateDocumentOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options)` options)` | Creates a document, calls the POST /documents endpoint.
`public inline JSONObject `[`createDocument`]`(InputStream content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType,`[`CreateDocumentOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options)` options)` | Creates a document, calls the POST /documents endpoint.
`public inline JSONObject `[`createDocument`]`(InputStream content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType)` | Creates a document, calls the POST /documents endpoint.
`public inline JSONObject `[`createDocument`]`(byte [] content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType)` | Creates a document, calls the POST /documents endpoint.
`public inline JSONObject `[`listDocuments`]`(`[`ListDocumentsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_documents_options)` options)` | List documents, calls the GET /documents endpoint.
`public inline JSONObject `[`listDocuments`]`()` | List documents, calls the GET /documents endpoint.
`public inline JSONObject `[`deleteDocuments`]`()` | Delete documents, calls the DELETE /documents endpoint.
`public inline JSONObject `[`deleteDocuments`]`(String consentId)` | Delete documents with the provided consentId, calls the DELETE /documents endpoint.
`public inline JSONObject `[`getDocument`]`(String documentId)` | Get document, calls the GET /documents/{documentId} endpoint.
`public inline JSONObject `[`updateDocument`]`(String documentId,JSONArray groundTruth)` | Update ground truth for a document, calls the PATCH /documents/{documentId} endpoint.
`public inline JSONObject `[`getLog`]`(String logId)` | Get log, calls the GET /logs/{logId} endpoint.
`public inline JSONObject `[`listModels`]`(`[`ListModelsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_models_options)` options)` | List models available, calls the GET /models endpoint.
`public inline JSONObject `[`listModels`]`()` | List models available, calls the GET /models endpoint.
`public inline JSONObject `[`createPrediction`]`(String documentId,String modelId,`[`CreatePredictionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options)` options)` | Create a prediction on a document using specified model, calls the POST /predictions endpoint.
`public inline JSONObject `[`createPrediction`]`(String documentId,String modelId)` | Create a prediction on a document using specified model, calls the POST /predictions endpoint.
`public inline JSONObject `[`listPredictions`]`(`[`ListPredictionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_predictions_options)` options)` | List predictions available, calls the GET /predictions endpoint.
`public inline JSONObject `[`listPredictions`]`()` | List predictions available, calls the GET /predictions endpoint.
`public inline JSONObject `[`createSecret`]`(JSONObject data,`[`CreateSecretOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_secret_options)` options)` | Creates a secret, calls the POST /secrets endpoint.
`public inline JSONObject `[`createSecret`]`(Map< String, String > data,`[`CreateSecretOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_secret_options)` options)` | Creates a secret, calls the POST /secrets endpoint.
`public inline JSONObject `[`createSecret`]`(Map< String, String > data)` | Creates a secret, calls the POST /secrets endpoint.
`public inline JSONObject `[`createSecret`]`(JSONObject data)` | Creates a secret, calls the POST /secrets endpoint.
`public inline JSONObject `[`listSecrets`]`(`[`ListSecretsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_secrets_options)` options)` | List secrets available, calls the GET /secrets endpoint.
`public inline JSONObject `[`listSecrets`]`()` | List secrets available, calls the GET /secrets endpoint.
`public inline JSONObject `[`updateSecret`]`(String secretId,`[`UpdateSecretOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_secret_options)` options)` | Updates a secret, calls the PATCH /secrets/{secretId} endpoint.
`public inline JSONObject `[`createTransition`]`(`[`TransitionType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)` transitionType,`[`CreateTransitionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options)` options)` | Creates a transition, calls the POST /transitions endpoint.
`public inline JSONObject `[`createTransition`]`(`[`TransitionType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)` transitionType)` | Creates a transition, calls the POST /transitions endpoint.
`public inline JSONObject `[`listTransitions`]`(`[`ListTransitionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transitions_options)` options)` | List transitions, calls the GET /transitions endpoint.
`public inline JSONObject `[`listTransitions`]`()` | List transitions, calls the GET /transitions endpoint.
`public inline JSONObject `[`getTransition`]`(String transitionId)` | Get transition, calls the GET /transitions/{transitionId} endpoint.
`public inline JSONObject `[`updateTransition`]`(String transitionId,`[`UpdateTransitionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_options)` options)` | Updates a transition, calls the PATCH /transitions/{transitionId} endpoint.
`public inline JSONObject `[`executeTransition`]`(String transitionId)` | Start executing a manual transition, calls the POST /transitions/{transitionId}/executions endpoint.
`public inline JSONObject `[`deleteTransition`]`(String transitionId)` | Delete a transition, calls the PATCH /transitions/{transitionId} endpoint. Will fail if transition is in use by one or more workflows.
`public inline JSONObject `[`listTransitionExecutions`]`(String transitionId,`[`ListTransitionExecutionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options)` options)` | List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.
`public inline JSONObject `[`listTransitionExecutions`]`(String transitionId)` | List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.
`public inline JSONObject `[`getTransitionExecution`]`(String transitionId,String executionId)` | Get an execution of a transition, calls the GET /transitions/{transitionId}/executions/{executionId} endpoint
`public inline JSONObject `[`updateTransitionExecution`]`(String transitionId,String executionId,`[`TransitionExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_execution_status)` status,`[`UpdateTransitionExecutionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options)` options)` | Ends the processing of the transition execution, calls the PATCH /transitions/{transition_id}/executions/{execution_id} endpoint.
`public inline JSONObject `[`sendHeartbeat`]`(String transitionId,String executionId)` | Send heartbeat for a manual execution to signal that we are still working on it. Must be done at minimum once every 60 seconds or the transition execution will time out, calls the POST /transitions/{transitionId}/executions/{executionId}/heartbeats endpoint.
`public inline JSONObject `[`createUser`]`(String email,`[`CreateUserOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_user_options)` options)` | Creates a new user, calls the POST /users endpoint.
`public inline JSONObject `[`createUser`]`(String email)` | Creates a new user, calls the POST /users endpoint.
`public inline JSONObject `[`listUsers`]`(`[`ListUsersOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_users_options)` options)` | List users, calls the GET /users endpoint.
`public inline JSONObject `[`listUsers`]`()` | List users, calls the GET /users endpoint.
`public inline JSONObject `[`getUser`]`(String userId)` | Get information about a specific user, calls the GET /users/{user_id} endpoint.
`public inline JSONObject `[`updateUser`]`(String userId,`[`UpdateUserOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_user_options)` options)` | Updates a user, calls the PATCH /users/{userId} endpoint.
`public inline JSONObject `[`deleteUser`]`(String userId)` | Delete a user, calls the PATCH /users/{userId} endpoint.
`public inline JSONObject `[`createWorkflow`]`(JSONObject specification,`[`CreateWorkflowOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_workflow_options)` options)` | Creates a new workflow, calls the POST /workflows endpoint. Check out Lucidtech's tutorials for more info on how to create a workflow. see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve)
`public inline JSONObject `[`createWorkflow`]`(JSONObject specification)` | Creates a new workflow, calls the POST /workflows endpoint. Check out Lucidtech's tutorials for more info on how to create a workflow. see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve)
`public inline JSONObject `[`listWorkflows`]`(`[`ListWorkflowsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflows_options)` options)` | List workflows, calls the GET /workflows endpoint.
`public inline JSONObject `[`listWorkflows`]`()` | List workflows, calls the GET /workflows endpoint.
`public inline JSONObject `[`getWorkflow`]`(String workflowId)` | Get workflow, calls the GET /workflows/{workflowId} endpoint.
`public inline JSONObject `[`updateWorkflow`]`(String workflowId,`[`UpdateWorkflowOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_workflow_options)` options)` | Updates a workflow, calls the PATCH /workflows/{workflowId} endpoint.
`public inline JSONObject `[`deleteWorkflow`]`(String workflowId)` | Delete a workflow, calls the DELETE /workflows/{workflowId} endpoint.
`public inline JSONObject `[`executeWorkflow`]`(String workflowId,JSONObject content)` | Start a workflow execution, calls the POST /workflows/{workflowId}/executions endpoint.
`public inline JSONObject `[`listWorkflowExecutions`]`(String workflowId,`[`ListWorkflowExecutionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflow_executions_options)` options)` | List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.
`public inline JSONObject `[`listWorkflowExecutions`]`(String workflowId)` | List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.
`public inline JSONObject `[`deleteWorkflowExecution`]`(String workflowId,String executionId)` | Deletes the execution with the provided executionId from workflowId, calls the DELETE /workflows/{workflowId}/executions/{executionId} endpoint.

## Members

#### `public inline  `[`Client`]`(`[`Credentials`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials)` credentials)` 

A client to invoke api methods from Lucidtech AI Services.

#### Parameters
* `credentials` [Credentials] to use 

**See also**: [Credentials]

#### `public inline JSONObject `[`createAsset`]`(byte [] content,`[`CreateAssetOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_asset_options)` options)` 

Creates an asset, calls the POST /assets endpoint.

**See also**: [CreateAssetOptions]

#### Parameters
* `content` Binary data 

* `options` Additional options to include in request body 

#### Returns
Asset response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createAsset`]`(InputStream content,`[`CreateAssetOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_asset_options)` options)` 

Creates an asset, calls the POST /assets endpoint.

**See also**: [CreateAssetOptions]

#### Parameters
* `content` Data from input stream 

* `options` Additional options to include in request body 

#### Returns
Asset response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createAsset`]`(byte [] content)` 

Creates an asset, calls the POST /assets endpoint.

#### Parameters
* `content` Binary data 

#### Returns
Asset response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createAsset`]`(InputStream content)` 

Creates an asset, calls the POST /assets endpoint.

#### Parameters
* `content` Data from input stream 

#### Returns
Asset response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listAssets`]`(`[`ListAssetsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_assets_options)` options)` 

List assets available, calls the GET /assets endpoint.

**See also**: [ListAssetsOptions]

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Assets response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listAssets`]`()` 

List assets available, calls the GET /assets endpoint.

#### Returns
Assets response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getAsset`]`(String assetId)` 

Get asset, calls the GET /assets/{assetId} endpoint.

#### Parameters
* `assetId` Id of the asset 

#### Returns
Asset response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateAsset`]`(String assetId,`[`UpdateAssetOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_asset_options)` options)` 

Updates an asset, calls the PATCH /assets/{assetId} endpoint.

**See also**: [UpdateAssetOptions]

#### Parameters
* `assetId` Id of the asset 

* `options` Additional options to include in request body 

#### Returns
Asset response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createBatch`]`(`[`CreateBatchOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_batch_options)` options)` 

Creates a batch, calls the POST /batches endpoint.

**See also**: [CreateBatchOptions]

#### Parameters
* `options` Additional options to include in request body 

#### Returns
Batch response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createBatch`]`()` 

Creates a batch, calls the POST /batches endpoint.

#### Returns
Batch response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createDocument`]`(byte [] content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType,`[`CreateDocumentOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options)` options)` 

Creates a document, calls the POST /documents endpoint.

**See also**: [CreateDocumentOptions]

#### Parameters
* `content` Binary data 

* `contentType` A mime type for the document 

* `options` Additional options to include in request body 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createDocument`]`(InputStream content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType,`[`CreateDocumentOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options)` options)` 

Creates a document, calls the POST /documents endpoint.

**See also**: [CreateDocumentOptions]

#### Parameters
* `content` Data from input stream 

* `contentType` A mime type for the document 

* `options` Additional options to include in request body 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createDocument`]`(InputStream content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType)` 

Creates a document, calls the POST /documents endpoint.

**See also**: [CreateDocumentOptions]

#### Parameters
* `content` Data from input stream 

* `contentType` A mime type for the document 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createDocument`]`(byte [] content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType)` 

Creates a document, calls the POST /documents endpoint.

**See also**: [CreateDocumentOptions]

#### Parameters
* `content` Binary data 

* `contentType` A mime type for the document 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listDocuments`]`(`[`ListDocumentsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_documents_options)` options)` 

List documents, calls the GET /documents endpoint.

**See also**: [ListDocumentsOptions]

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Documents response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listDocuments`]`()` 

List documents, calls the GET /documents endpoint.

#### Returns
Documents response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`deleteDocuments`]`()` 

Delete documents, calls the DELETE /documents endpoint.

**See also**: [Client::createDocument]

#### Returns
Documents response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`deleteDocuments`]`(String consentId)` 

Delete documents with the provided consentId, calls the DELETE /documents endpoint.

**See also**: [Client::createDocument]

#### Parameters
* `consentId` Delete documents with this consentId 

#### Returns
Documents response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getDocument`]`(String documentId)` 

Get document, calls the GET /documents/{documentId} endpoint.

#### Parameters
* `documentId` Id of the document 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateDocument`]`(String documentId,JSONArray groundTruth)` 

Update ground truth for a document, calls the PATCH /documents/{documentId} endpoint.

**See also**: [Client::createDocument]

#### Parameters
* `documentId` The document id to post groundTruth to. 

* `groundTruth` List of json objects containing label and value for the ground truth 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getLog`]`(String logId)` 

Get log, calls the GET /logs/{logId} endpoint.

#### Parameters
* `logId` Id of the log 

#### Returns
Log response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listModels`]`(`[`ListModelsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_models_options)` options)` 

List models available, calls the GET /models endpoint.

**See also**: [ListModelsOptions]

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Models response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listModels`]`()` 

List models available, calls the GET /models endpoint.

#### Returns
Models response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createPrediction`]`(String documentId,String modelId,`[`CreatePredictionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options)` options)` 

Create a prediction on a document using specified model, calls the POST /predictions endpoint.

**See also**: [Client::createDocument]

**See also**: [CreatePredictionOptions]

#### Parameters
* `documentId` The document id to run inference and create a prediction on. 

* `modelId` The id of the model to use for inference 

* `options` Additional options to include in request body 

#### Returns
Prediction response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createPrediction`]`(String documentId,String modelId)` 

Create a prediction on a document using specified model, calls the POST /predictions endpoint.

**See also**: [Client::createDocument]

#### Parameters
* `documentId` The document id to run inference and create a prediction on. 

* `modelId` The id of the model to use for inference 

#### Returns
Prediction response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listPredictions`]`(`[`ListPredictionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_predictions_options)` options)` 

List predictions available, calls the GET /predictions endpoint.

**See also**: [ListPredictionsOptions]

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Predictions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listPredictions`]`()` 

List predictions available, calls the GET /predictions endpoint.

#### Returns
Predictions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createSecret`]`(JSONObject data,`[`CreateSecretOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_secret_options)` options)` 

Creates a secret, calls the POST /secrets endpoint.

**See also**: [CreateSecretOptions]

#### Parameters
* `data` Key-Value pairs to store secretly 

* `options` Additional options to include in request body 

#### Returns
Secret response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createSecret`]`(Map< String, String > data,`[`CreateSecretOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_secret_options)` options)` 

Creates a secret, calls the POST /secrets endpoint.

**See also**: [CreateSecretOptions]

#### Parameters
* `data` Key-Value pairs to store secretly 

* `options` Additional options to include in request body 

#### Returns
Secret response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createSecret`]`(Map< String, String > data)` 

Creates a secret, calls the POST /secrets endpoint.

#### Parameters
* `data` Key-Value pairs to store secretly 

#### Returns
Secret response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createSecret`]`(JSONObject data)` 

Creates a secret, calls the POST /secrets endpoint.

#### Parameters
* `data` Key-Value pairs to store secretly 

#### Returns
Secret response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listSecrets`]`(`[`ListSecretsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_secrets_options)` options)` 

List secrets available, calls the GET /secrets endpoint.

**See also**: [ListSecretsOptions]

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Secrets response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listSecrets`]`()` 

List secrets available, calls the GET /secrets endpoint.

#### Returns
Secrets response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateSecret`]`(String secretId,`[`UpdateSecretOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_secret_options)` options)` 

Updates a secret, calls the PATCH /secrets/{secretId} endpoint.

**See also**: [UpdateSecretOptions]

#### Parameters
* `secretId` Id of the secret 

* `options` Additional options to include in request body 

#### Returns
Secret response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createTransition`]`(`[`TransitionType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)` transitionType,`[`CreateTransitionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options)` options)` 

Creates a transition, calls the POST /transitions endpoint.

**See also**: [CreateTransitionOptions]

**See also**: [TransitionType](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)

#### Parameters
* `transitionType` Type of transition 

* `options` Additional options to include in request body 

#### Returns
Transition response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createTransition`]`(`[`TransitionType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)` transitionType)` 

Creates a transition, calls the POST /transitions endpoint.

**See also**: [TransitionType](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)

#### Parameters
* `transitionType` Type of transition 

#### Returns
Transition response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listTransitions`]`(`[`ListTransitionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transitions_options)` options)` 

List transitions, calls the GET /transitions endpoint.

**See also**: [ListTransitionsOptions]

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Transitions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listTransitions`]`()` 

List transitions, calls the GET /transitions endpoint.

#### Returns
Transitions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getTransition`]`(String transitionId)` 

Get transition, calls the GET /transitions/{transitionId} endpoint.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
Transition response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateTransition`]`(String transitionId,`[`UpdateTransitionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_options)` options)` 

Updates a transition, calls the PATCH /transitions/{transitionId} endpoint.

**See also**: [UpdateTransitionOptions]

#### Parameters
* `transitionId` Id of the transition 

* `options` Additional options to include in request body 

#### Returns
Transition response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`executeTransition`]`(String transitionId)` 

Start executing a manual transition, calls the POST /transitions/{transitionId}/executions endpoint.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
TransitionExecution response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`deleteTransition`]`(String transitionId)` 

Delete a transition, calls the PATCH /transitions/{transitionId} endpoint. Will fail if transition is in use by one or more workflows.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
Transition response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listTransitionExecutions`]`(String transitionId,`[`ListTransitionExecutionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options)` options)` 

List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.

**See also**: [ListTransitionExecutionsOptions]

#### Parameters
* `transitionId` Id of the transition 

* `options` Additional options to pass along as query parameters 

#### Returns
Transition executions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listTransitionExecutions`]`(String transitionId)` 

List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
Transition executions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getTransitionExecution`]`(String transitionId,String executionId)` 

Get an execution of a transition, calls the GET /transitions/{transitionId}/executions/{executionId} endpoint

#### Parameters
* `transitionId` Id of the transition 

* `executionId` Id of the execution 

#### Returns
TransitionExecution response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateTransitionExecution`]`(String transitionId,String executionId,`[`TransitionExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_execution_status)` status,`[`UpdateTransitionExecutionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options)` options)` 

Ends the processing of the transition execution, calls the PATCH /transitions/{transition_id}/executions/{execution_id} endpoint.

**See also**: [UpdateTransitionExecutionOptions]

**See also**: [TransitionExecutionStatus](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_execution_status)

#### Parameters
* `transitionId` Id of the transition 

* `executionId` Id of the execution 

* `status` Status of the execution 

* `options` Additional options to include in request body 

#### Returns
Transition response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`sendHeartbeat`]`(String transitionId,String executionId)` 

Send heartbeat for a manual execution to signal that we are still working on it. Must be done at minimum once every 60 seconds or the transition execution will time out, calls the POST /transitions/{transitionId}/executions/{executionId}/heartbeats endpoint.

#### Parameters
* `transitionId` Id of the transition 

* `executionId` Id of the execution 

#### Returns
Empty response 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createUser`]`(String email,`[`CreateUserOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_user_options)` options)` 

Creates a new user, calls the POST /users endpoint.

**See also**: [CreateUserOptions]

#### Parameters
* `email` Email of the new user 

* `options` Additional options to include in request body 

#### Returns
User response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createUser`]`(String email)` 

Creates a new user, calls the POST /users endpoint.

#### Parameters
* `email` Email to the new user 

#### Returns
User response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listUsers`]`(`[`ListUsersOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_users_options)` options)` 

List users, calls the GET /users endpoint.

**See also**: [ListUsersOptions]

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Users response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listUsers`]`()` 

List users, calls the GET /users endpoint.

#### Returns
Users response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getUser`]`(String userId)` 

Get information about a specific user, calls the GET /users/{user_id} endpoint.

#### Parameters
* `userId` The Id of the user 

#### Returns
User response 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateUser`]`(String userId,`[`UpdateUserOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_user_options)` options)` 

Updates a user, calls the PATCH /users/{userId} endpoint.

**See also**: [UpdateUserOptions]

#### Parameters
* `userId` Id of the user 

* `options` Additional options to include in request body 

#### Returns
User response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`deleteUser`]`(String userId)` 

Delete a user, calls the PATCH /users/{userId} endpoint.

#### Parameters
* `userId` Id of the user 

#### Returns
User response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createWorkflow`]`(JSONObject specification,`[`CreateWorkflowOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_workflow_options)` options)` 

Creates a new workflow, calls the POST /workflows endpoint. Check out Lucidtech's tutorials for more info on how to create a workflow. see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve)

**See also**: [CreateWorkflowOptions]

#### Parameters
* `specification` Specification of the workflow, currently supporting ASL: [https://states-language.net/spec.html](https://states-language.net/spec.html). Check out the tutorials for more information: see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve#creating-the-workflow](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve#creating-the-workflow)

* `options` Additional options to include in request body 

#### Returns
Workflow response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`createWorkflow`]`(JSONObject specification)` 

Creates a new workflow, calls the POST /workflows endpoint. Check out Lucidtech's tutorials for more info on how to create a workflow. see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve)

#### Parameters
* `specification` Specification of the workflow, currently supporting ASL: [https://states-language.net/spec.html](https://states-language.net/spec.html). Check out the tutorials for more information: see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve#creating-the-workflow](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve#creating-the-workflow)

#### Returns
Workflow response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listWorkflows`]`(`[`ListWorkflowsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflows_options)` options)` 

List workflows, calls the GET /workflows endpoint.

**See also**: [ListWorkflowsOptions]

#### Parameters
* `options` Additional options to pass along as query parameters 

#### Returns
Workflows response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listWorkflows`]`()` 

List workflows, calls the GET /workflows endpoint.

#### Returns
Workflows response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`getWorkflow`]`(String workflowId)` 

Get workflow, calls the GET /workflows/{workflowId} endpoint.

#### Parameters
* `workflowId` Id of the workflow 

#### Returns
Workflow response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`updateWorkflow`]`(String workflowId,`[`UpdateWorkflowOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_workflow_options)` options)` 

Updates a workflow, calls the PATCH /workflows/{workflowId} endpoint.

**See also**: [UpdateWorkflowOptions]

#### Parameters
* `workflowId` Id of the workflow 

* `options` Additional options to include in request body 

#### Returns
Workflow response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`deleteWorkflow`]`(String workflowId)` 

Delete a workflow, calls the DELETE /workflows/{workflowId} endpoint.

**See also**: [Client::createWorkflow]

#### Parameters
* `workflowId` Id of the workflow 

#### Returns
Workflow response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`executeWorkflow`]`(String workflowId,JSONObject content)` 

Start a workflow execution, calls the POST /workflows/{workflowId}/executions endpoint.

#### Parameters
* `workflowId` Id of the workflow 

* `content` Input to the first step of the workflow 

#### Returns
WorkflowExecution response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listWorkflowExecutions`]`(String workflowId,`[`ListWorkflowExecutionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflow_executions_options)` options)` 

List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.

**See also**: [ListWorkflowExecutionsOptions]

#### Parameters
* `workflowId` Id of the workflow 

* `options` Additional options to pass along as query parameters 

#### Returns
Workflow executions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`listWorkflowExecutions`]`(String workflowId)` 

List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.

#### Parameters
* `workflowId` Id of the workflow 

#### Returns
Workflow executions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline JSONObject `[`deleteWorkflowExecution`]`(String workflowId,String executionId)` 

Deletes the execution with the provided executionId from workflowId, calls the DELETE /workflows/{workflowId}/executions/{executionId} endpoint.

**See also**: [Client::executeWorkflow]

#### Parameters
* `workflowId` Id of the workflow 

* `executionId` Id of the execution 

#### Returns
WorklowExecution response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

# class `ai::lucidtech::las::sdk::CreateAssetOptions` 

```
class ai::lucidtech::las::sdk::CreateAssetOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< CreateAssetOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::CreateBatchOptions` 

```
class ai::lucidtech::las::sdk::CreateBatchOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< CreateBatchOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::CreateDocumentOptions` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`CreateDocumentOptions`]`()` | 
`public inline `[`CreateDocumentOptions`] [`setConsentId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options_1aea843844d1cabdb367b6ef2fbad74763)`(String consentId)` | 
`public inline `[`CreateDocumentOptions`] [`setBatchId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options_1a6a4643ab2ab9ae0d195e95b6e5858abb)`(String batchId)` | 
`public inline `[`CreateDocumentOptions`] [`setGroundTruth`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options_1a11e5ef2f36fa14e6e048d74d406881f5)`(JSONArray groundTruth)` | 
`public inline JSONObject `[`addOptions`]`(JSONObject body)` | 
`public inline JSONObject `[`toJson`]`()` | 

## Members

#### `public inline  `[`CreateDocumentOptions`]`()` 

#### `public inline `[`CreateDocumentOptions`] [`setConsentId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options_1aea843844d1cabdb367b6ef2fbad74763)`(String consentId)` 

#### `public inline `[`CreateDocumentOptions`] [`setBatchId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options_1a6a4643ab2ab9ae0d195e95b6e5858abb)`(String batchId)` 

#### `public inline `[`CreateDocumentOptions`] [`setGroundTruth`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options_1a11e5ef2f36fa14e6e048d74d406881f5)`(JSONArray groundTruth)` 

#### `public inline JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public inline JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::CreatePredictionOptions` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`CreatePredictionOptions`]`()` | 
`public inline  `[`CreatePredictionOptions`]`(int maxPages,boolean autoRotate)` | 
`public inline `[`CreatePredictionOptions`] [`setMaxPages`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options_1af6a80e5477e27525a936bfa24404cdf0)`(int maxPages)` | 
`public inline `[`CreatePredictionOptions`] [`setAutoRotate`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options_1a82d5ef3dd802caa5785475eeabbbf9dd)`(boolean autoRotate)` | 
`public inline `[`CreatePredictionOptions`] [`setImageQuality`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options_1ad6b7016289238d2e664e6e968a6d59b2)`(`[`ImageQuality`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_image_quality)` imageQuality)` | 
`public inline JSONObject `[`addOptions`]`(JSONObject body)` | 
`public inline JSONObject `[`toJson`]`()` | 

## Members

#### `public inline  `[`CreatePredictionOptions`]`()` 

#### `public inline  `[`CreatePredictionOptions`]`(int maxPages,boolean autoRotate)` 

#### `public inline `[`CreatePredictionOptions`] [`setMaxPages`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options_1af6a80e5477e27525a936bfa24404cdf0)`(int maxPages)` 

#### `public inline `[`CreatePredictionOptions`] [`setAutoRotate`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options_1a82d5ef3dd802caa5785475eeabbbf9dd)`(boolean autoRotate)` 

#### `public inline `[`CreatePredictionOptions`] [`setImageQuality`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options_1ad6b7016289238d2e664e6e968a6d59b2)`(`[`ImageQuality`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_image_quality)` imageQuality)` 

#### `public inline JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public inline JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::CreateSecretOptions` 

```
class ai::lucidtech::las::sdk::CreateSecretOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< CreateSecretOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::CreateTransitionOptions` 

```
class ai::lucidtech::las::sdk::CreateTransitionOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< CreateTransitionOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`CreateTransitionOptions`]`()` | 
`public inline  `[`CreateTransitionOptions`]`(JSONObject parameters)` | 
`public inline `[`CreateTransitionOptions`] [`setParameters`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options_1a4464c8b419c7359a3ebc0507c2926b6f)`(JSONObject schema)` | 
`public inline `[`CreateTransitionOptions`] [`setInputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options_1a8903a4e3773b695c2e8602af25dd7d23)`(JSONObject schema)` | 
`public inline `[`CreateTransitionOptions`] [`setOutputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options_1a666736cded215c9974df0841fdb89ac7)`(JSONObject schema)` | 
`public inline JSONObject `[`addOptions`]`(JSONObject body)` | 
`public inline JSONObject `[`toJson`]`()` | 

## Members

#### `public inline  `[`CreateTransitionOptions`]`()` 

#### `public inline  `[`CreateTransitionOptions`]`(JSONObject parameters)` 

#### `public inline `[`CreateTransitionOptions`] [`setParameters`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options_1a4464c8b419c7359a3ebc0507c2926b6f)`(JSONObject schema)` 

#### `public inline `[`CreateTransitionOptions`] [`setInputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options_1a8903a4e3773b695c2e8602af25dd7d23)`(JSONObject schema)` 

#### `public inline `[`CreateTransitionOptions`] [`setOutputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options_1a666736cded215c9974df0841fdb89ac7)`(JSONObject schema)` 

#### `public inline JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public inline JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::CreateUserOptions` 

```
class ai::lucidtech::las::sdk::CreateUserOptions
  : public ai.lucidtech.las.sdk.UserOptions< CreateUserOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::CreateWorkflowOptions` 

```
class ai::lucidtech::las::sdk::CreateWorkflowOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< CreateWorkflowOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`CreateWorkflowOptions`]`()` | 
`public inline  `[`CreateWorkflowOptions`]`(JSONObject errorConfig)` | 
`public inline `[`CreateWorkflowOptions`] [`setErrorConfig`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_workflow_options_1ac8e4383646a9adcf679b5d243159aedb)`(JSONObject errorConfig)` | 
`public inline JSONObject `[`addOptions`]`(JSONObject body)` | 
`public inline JSONObject `[`toJson`]`()` | 

## Members

#### `public inline  `[`CreateWorkflowOptions`]`()` 

#### `public inline  `[`CreateWorkflowOptions`]`(JSONObject errorConfig)` 

#### `public inline `[`CreateWorkflowOptions`] [`setErrorConfig`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_workflow_options_1ac8e4383646a9adcf679b5d243159aedb)`(JSONObject errorConfig)` 

#### `public inline JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public inline JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::Credentials` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`Credentials`]`(String clientId,String clientSecret,String apiKey,String authEndpoint,String apiEndpoint)` | Used to fetch and store credentials.
`public inline String `[`getAccessToken`]`(HttpClient httpClient)` | #### Parameters
`public inline String `[`getApiKey`]`()` | 
`public inline String `[`getApiEndpoint`]`()` | 

## Members

#### `public inline  `[`Credentials`]`(String clientId,String clientSecret,String apiKey,String authEndpoint,String apiEndpoint)` 

Used to fetch and store credentials.

#### Parameters
* `clientId` [Client] id 

* `clientSecret` [Client] secret 

* `apiKey` API key 

* `authEndpoint` Auth endpoint 

* `apiEndpoint` Domain endpoint of the api, e.g. [https://{prefix}.api.lucidtech.ai/{version}](https://{prefix}.api.lucidtech.ai/{version})

#### Exceptions
* `[MissingCredentialsException]` Raised if some of credentials are missing

#### `public inline String `[`getAccessToken`]`(HttpClient httpClient)` 

#### Parameters
* `httpClient` Instance of HttpClient used to access the authentication endpoint 

#### Returns
Access token, downloading it if necessary 

#### Exceptions
* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public inline String `[`getApiKey`]`()` 

#### `public inline String `[`getApiEndpoint`]`()` 

# class `ai::lucidtech::las::sdk::ListAssetsOptions` 

```
class ai::lucidtech::las::sdk::ListAssetsOptions
  : public ai.lucidtech.las.sdk.ListResourcesOptions< ListAssetsOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::ListDocumentsOptions` 

```
class ai::lucidtech::las::sdk::ListDocumentsOptions
  : public ai.lucidtech.las.sdk.ListResourcesOptions< ListDocumentsOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ListDocumentsOptions`]`()` | 
`public inline `[`ListDocumentsOptions`] [`setConsentId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_documents_options_1a60cbafbb5cb2443c0add044cf7b88abc)`(String consentId)` | 
`public inline `[`ListDocumentsOptions`] [`setBatchId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_documents_options_1ac52ae5b69f46e04451a645abce1e7ac7)`(String batchId)` | 
`public inline List< NameValuePair > `[`toList`]`()` | 

## Members

#### `public inline  `[`ListDocumentsOptions`]`()` 

#### `public inline `[`ListDocumentsOptions`] [`setConsentId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_documents_options_1a60cbafbb5cb2443c0add044cf7b88abc)`(String consentId)` 

#### `public inline `[`ListDocumentsOptions`] [`setBatchId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_documents_options_1ac52ae5b69f46e04451a645abce1e7ac7)`(String batchId)` 

#### `public inline List< NameValuePair > `[`toList`]`()` 

# class `ai::lucidtech::las::sdk::ListModelsOptions` 

```
class ai::lucidtech::las::sdk::ListModelsOptions
  : public ai.lucidtech.las.sdk.ListResourcesOptions< ListModelsOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::ListPredictionsOptions` 

```
class ai::lucidtech::las::sdk::ListPredictionsOptions
  : public ai.lucidtech.las.sdk.ListResourcesOptions< ListPredictionsOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::ListResourcesOptions` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ListResourcesOptions`]`()` | 
`public inline  `[`ListResourcesOptions`]`(int maxResults)` | 
`public inline  `[`ListResourcesOptions`]`(String nextToken)` | 
`public inline  `[`ListResourcesOptions`]`(int maxResults,String nextToken)` | 
`public inline T `[`setMaxResults`]`(int maxResults)` | 
`public inline T `[`setNextToken`]`(String nextToken)` | 
`public inline List< NameValuePair > `[`toList`]`()` | 
`public inline List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` | 
`protected Integer `[`maxResults`] | 
`protected String `[`nextToken`] | 

## Members

#### `public inline  `[`ListResourcesOptions`]`()` 

#### `public inline  `[`ListResourcesOptions`]`(int maxResults)` 

#### `public inline  `[`ListResourcesOptions`]`(String nextToken)` 

#### `public inline  `[`ListResourcesOptions`]`(int maxResults,String nextToken)` 

#### `public inline T `[`setMaxResults`]`(int maxResults)` 

#### `public inline T `[`setNextToken`]`(String nextToken)` 

#### `public inline List< NameValuePair > `[`toList`]`()` 

#### `public inline List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` 

#### `protected Integer `[`maxResults`] 

#### `protected String `[`nextToken`] 

# class `ai::lucidtech::las::sdk::ListSecretsOptions` 

```
class ai::lucidtech::las::sdk::ListSecretsOptions
  : public ai.lucidtech.las.sdk.ListResourcesOptions< ListSecretsOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::ListSortablesOptions` 

```
class ai::lucidtech::las::sdk::ListSortablesOptions
  : public ai::lucidtech::las::sdk::ListResourcesOptions< T >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ListSortablesOptions`]`()` | 
`public inline T `[`setSortBy`]`(String sortBy)` | 
`public inline T `[`setOrder`]`(`[`Order`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_order)` order)` | 
`public inline List< NameValuePair > `[`toList`]`()` | 
`public inline List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` | 
`protected String `[`sortBy`] | 
`protected `[`Order`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_order) [`order`] | 

## Members

#### `public inline  `[`ListSortablesOptions`]`()` 

#### `public inline T `[`setSortBy`]`(String sortBy)` 

#### `public inline T `[`setOrder`]`(`[`Order`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_order)` order)` 

#### `public inline List< NameValuePair > `[`toList`]`()` 

#### `public inline List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` 

#### `protected String `[`sortBy`] 

#### `protected `[`Order`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_order) [`order`] 

# class `ai::lucidtech::las::sdk::ListTransitionExecutionsOptions` 

```
class ai::lucidtech::las::sdk::ListTransitionExecutionsOptions
  : public ai.lucidtech.las.sdk.ListSortablesOptions< ListTransitionExecutionsOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ListTransitionExecutionsOptions`]`()` | 
`public inline `[`ListTransitionExecutionsOptions`] [`setExecutionId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1a17be680d06dd9eaaaf9c3d0df3519d9d)`(List< String > executionId)` | 
`public inline `[`ListTransitionExecutionsOptions`] [`setExecutionId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1a6fed26e978e0eec35e8a3dc4297010b7)`(String executionId)` | 
`public inline `[`ListTransitionExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1aaffb59561c7c6f2ba7249948783b83f0)`(List< `[`TransitionExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_execution_status)` > status)` | 
`public inline `[`ListTransitionExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1af793df3ada1088f6dc7f83117ec02be1)`(`[`TransitionExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_execution_status)` status)` | 
`public inline List< NameValuePair > `[`toList`]`()` | 
`public inline List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` | 

## Members

#### `public inline  `[`ListTransitionExecutionsOptions`]`()` 

#### `public inline `[`ListTransitionExecutionsOptions`] [`setExecutionId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1a17be680d06dd9eaaaf9c3d0df3519d9d)`(List< String > executionId)` 

#### `public inline `[`ListTransitionExecutionsOptions`] [`setExecutionId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1a6fed26e978e0eec35e8a3dc4297010b7)`(String executionId)` 

#### `public inline `[`ListTransitionExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1aaffb59561c7c6f2ba7249948783b83f0)`(List< `[`TransitionExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_execution_status)` > status)` 

#### `public inline `[`ListTransitionExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1af793df3ada1088f6dc7f83117ec02be1)`(`[`TransitionExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_execution_status)` status)` 

#### `public inline List< NameValuePair > `[`toList`]`()` 

#### `public inline List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` 

# class `ai::lucidtech::las::sdk::ListTransitionsOptions` 

```
class ai::lucidtech::las::sdk::ListTransitionsOptions
  : public ai.lucidtech.las.sdk.ListResourcesOptions< ListTransitionsOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ListTransitionsOptions`]`()` | 
`public inline `[`ListTransitionsOptions`] [`setTransitionType`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transitions_options_1a63e360ea5c442b76317e5c0f01ed29d8)`(`[`TransitionType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)` transitionType)` | 
`public inline List< NameValuePair > `[`toList`]`()` | 

## Members

#### `public inline  `[`ListTransitionsOptions`]`()` 

#### `public inline `[`ListTransitionsOptions`] [`setTransitionType`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transitions_options_1a63e360ea5c442b76317e5c0f01ed29d8)`(`[`TransitionType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)` transitionType)` 

#### `public inline List< NameValuePair > `[`toList`]`()` 

# class `ai::lucidtech::las::sdk::ListUsersOptions` 

```
class ai::lucidtech::las::sdk::ListUsersOptions
  : public ai.lucidtech.las.sdk.ListResourcesOptions< ListUsersOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::ListWorkflowExecutionsOptions` 

```
class ai::lucidtech::las::sdk::ListWorkflowExecutionsOptions
  : public ai.lucidtech.las.sdk.ListSortablesOptions< ListWorkflowExecutionsOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ListWorkflowExecutionsOptions`]`()` | 
`public inline `[`ListWorkflowExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflow_executions_options_1aaf7e9a62ee579d8949fd62d36d0e65db)`(List< `[`WorkflowExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_workflow_execution_status)` > status)` | 
`public inline `[`ListWorkflowExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflow_executions_options_1a0b2f966d52b2aeef2b37ac7c5e5eb520)`(`[`WorkflowExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_workflow_execution_status)` status)` | 
`public inline List< NameValuePair > `[`toList`]`()` | 
`public inline List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` | 

## Members

#### `public inline  `[`ListWorkflowExecutionsOptions`]`()` 

#### `public inline `[`ListWorkflowExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflow_executions_options_1aaf7e9a62ee579d8949fd62d36d0e65db)`(List< `[`WorkflowExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_workflow_execution_status)` > status)` 

#### `public inline `[`ListWorkflowExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflow_executions_options_1a0b2f966d52b2aeef2b37ac7c5e5eb520)`(`[`WorkflowExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_workflow_execution_status)` status)` 

#### `public inline List< NameValuePair > `[`toList`]`()` 

#### `public inline List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` 

# class `ai::lucidtech::las::sdk::ListWorkflowsOptions` 

```
class ai::lucidtech::las::sdk::ListWorkflowsOptions
  : public ai.lucidtech.las.sdk.ListResourcesOptions< ListWorkflowsOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::MissingAccessTokenException` 

```
class ai::lucidtech::las::sdk::MissingAccessTokenException
  : public Exception
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::MissingCredentialsException` 

```
class ai::lucidtech::las::sdk::MissingCredentialsException
  : public Exception
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::NameAndDescriptionOptions` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`NameAndDescriptionOptions`]`()` | 
`public inline T `[`setName`]`(String name)` | 
`public inline T `[`setDescription`]`(String description)` | 
`public inline JSONObject `[`addOptions`]`(JSONObject body)` | 
`public inline JSONObject `[`toJson`]`()` | 

## Members

#### `public inline  `[`NameAndDescriptionOptions`]`()` 

#### `public inline T `[`setName`]`(String name)` 

#### `public inline T `[`setDescription`]`(String description)` 

#### `public inline JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public inline JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::UpdateAssetOptions` 

```
class ai::lucidtech::las::sdk::UpdateAssetOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< UpdateAssetOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`UpdateAssetOptions`]`()` | 
`public inline `[`UpdateAssetOptions`] [`setContent`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_asset_options_1a2c82436e7cf26983ee2c2d892d159773)`(byte [] content)` | 
`public inline `[`UpdateAssetOptions`] [`setContent`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_asset_options_1ad86efbed928b01bc637eedda9f19c733)`(InputStream content)` | 
`public inline JSONObject `[`addOptions`]`(JSONObject body)` | 
`public inline JSONObject `[`toJson`]`()` | 

## Members

#### `public inline  `[`UpdateAssetOptions`]`()` 

#### `public inline `[`UpdateAssetOptions`] [`setContent`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_asset_options_1a2c82436e7cf26983ee2c2d892d159773)`(byte [] content)` 

#### `public inline `[`UpdateAssetOptions`] [`setContent`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_asset_options_1ad86efbed928b01bc637eedda9f19c733)`(InputStream content)` 

#### `public inline JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public inline JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::UpdateSecretOptions` 

```
class ai::lucidtech::las::sdk::UpdateSecretOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< UpdateSecretOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`UpdateSecretOptions`]`()` | 
`public inline `[`UpdateSecretOptions`] [`setData`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_secret_options_1a85cd3d884163f771962f080a7cfe9e08)`(JSONObject data)` | 
`public inline `[`UpdateSecretOptions`] [`setData`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_secret_options_1ac88357dcd64d7a950b560e7bf60f9fe4)`(Map< String, String > data)` | 
`public inline JSONObject `[`addOptions`]`(JSONObject body)` | 
`public inline JSONObject `[`toJson`]`()` | 

## Members

#### `public inline  `[`UpdateSecretOptions`]`()` 

#### `public inline `[`UpdateSecretOptions`] [`setData`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_secret_options_1a85cd3d884163f771962f080a7cfe9e08)`(JSONObject data)` 

#### `public inline `[`UpdateSecretOptions`] [`setData`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_secret_options_1ac88357dcd64d7a950b560e7bf60f9fe4)`(Map< String, String > data)` 

#### `public inline JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public inline JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::UpdateTransitionExecutionOptions` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`UpdateTransitionExecutionOptions`]`()` | 
`public inline `[`UpdateTransitionExecutionOptions`] [`setOutput`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options_1afc7f677cd0d46baaea8376d2f02a621d)`(JSONObject error)` | 
`public inline `[`UpdateTransitionExecutionOptions`] [`setError`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options_1a7df40cd9c5c3735c8abfb6f9d91a8f8e)`(JSONObject output)` | 
`public inline `[`UpdateTransitionExecutionOptions`] [`setStartTime`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options_1a91eaf567d5e65b0fb5eb3afd8f68c253)`(String startTime)` | 
`public inline JSONObject `[`addOptions`]`(JSONObject body)` | 
`public inline JSONObject `[`toJson`]`()` | 

## Members

#### `public inline  `[`UpdateTransitionExecutionOptions`]`()` 

#### `public inline `[`UpdateTransitionExecutionOptions`] [`setOutput`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options_1afc7f677cd0d46baaea8376d2f02a621d)`(JSONObject error)` 

#### `public inline `[`UpdateTransitionExecutionOptions`] [`setError`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options_1a7df40cd9c5c3735c8abfb6f9d91a8f8e)`(JSONObject output)` 

#### `public inline `[`UpdateTransitionExecutionOptions`] [`setStartTime`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options_1a91eaf567d5e65b0fb5eb3afd8f68c253)`(String startTime)` 

#### `public inline JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public inline JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::UpdateTransitionOptions` 

```
class ai::lucidtech::las::sdk::UpdateTransitionOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< UpdateTransitionOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`UpdateTransitionOptions`]`()` | 
`public inline `[`UpdateTransitionOptions`] [`setInputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_options_1a2e6d97d967f6270b2f9de77eabebc86d)`(JSONObject schema)` | 
`public inline `[`UpdateTransitionOptions`] [`setOutputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_options_1adcaad2be6ae5fe6c41052101eee65926)`(JSONObject schema)` | 
`public inline JSONObject `[`addOptions`]`(JSONObject body)` | 
`public inline JSONObject `[`toJson`]`()` | 

## Members

#### `public inline  `[`UpdateTransitionOptions`]`()` 

#### `public inline `[`UpdateTransitionOptions`] [`setInputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_options_1a2e6d97d967f6270b2f9de77eabebc86d)`(JSONObject schema)` 

#### `public inline `[`UpdateTransitionOptions`] [`setOutputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_options_1adcaad2be6ae5fe6c41052101eee65926)`(JSONObject schema)` 

#### `public inline JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public inline JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::UpdateUserOptions` 

```
class ai::lucidtech::las::sdk::UpdateUserOptions
  : public ai.lucidtech.las.sdk.UserOptions< UpdateUserOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::UpdateWorkflowOptions` 

```
class ai::lucidtech::las::sdk::UpdateWorkflowOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< UpdateWorkflowOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `ai::lucidtech::las::sdk::UserOptions` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`UserOptions`]`()` | 
`public inline T `[`setName`]`(String name)` | 
`public inline T `[`setAvatar`]`(String avatar)` | 
`public inline T `[`setAvatar`]`(byte [] avatar)` | 
`public inline JSONObject `[`addOptions`]`(JSONObject body)` | 
`public inline JSONObject `[`toJson`]`()` | 

## Members

#### `public inline  `[`UserOptions`]`()` 

#### `public inline T `[`setName`]`(String name)` 

#### `public inline T `[`setAvatar`]`(String avatar)` 

#### `public inline T `[`setAvatar`]`(byte [] avatar)` 

#### `public inline JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public inline JSONObject `[`toJson`]`()` 

Generated by [Moxygen](https://sourcey.com/moxygen)