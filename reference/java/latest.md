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
`public  `[`APIException`]`()` | 
`public  `[`APIException`]`(String message)` | 
`public  `[`APIException`]`(int code,String message)` | 

## Members

#### `public  `[`APIException`]`()` 

#### `public  `[`APIException`]`(String message)` 

#### `public  `[`APIException`]`(int code,String message)` 

# class `ai::lucidtech::las::sdk::Client` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`Client`]`(`[`Credentials`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials)` credentials)` | A client to invoke api methods from Lucidtech AI Services.
`public JSONObject `[`createAsset`]`(byte[] content,`[`CreateAssetOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_asset_options)` options)` | Creates an asset, calls the POST /assets endpoint.
`public JSONObject `[`createAsset`]`(InputStream content,`[`CreateAssetOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_asset_options)` options)` | Creates an asset, calls the POST /assets endpoint.
`public JSONObject `[`createAsset`]`(byte[] content)` | Creates an asset, calls the POST /assets endpoint.
`public JSONObject `[`createAsset`]`(InputStream content)` | Creates an asset, calls the POST /assets endpoint.
`public JSONObject `[`listAssets`]`(`[`ListAssetsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_assets_options)` options)` | List assets available, calls the GET /assets endpoint.
`public JSONObject `[`listAssets`]`()` | List assets available, calls the GET /assets endpoint.
`public JSONObject `[`getAsset`]`(String assetId)` | Get asset, calls the GET /assets/{assetId} endpoint.
`public JSONObject `[`updateAsset`]`(String assetId,`[`UpdateAssetOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_asset_options)` options)` | Updates an asset, calls the PATCH /assets/{assetId} endpoint.
`public JSONObject `[`createBatch`]`(`[`CreateBatchOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_batch_options)` options)` | Creates a batch, calls the POST /batches endpoint.
`public JSONObject `[`createBatch`]`()` | Creates a batch, calls the POST /batches endpoint.
`public JSONObject `[`createDocument`]`(byte[] content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType,`[`CreateDocumentOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options)` options)` | Creates a document, calls the POST /documents endpoint.
`public JSONObject `[`createDocument`]`(InputStream content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType,`[`CreateDocumentOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options)` options)` | Creates a document, calls the POST /documents endpoint.
`public JSONObject `[`createDocument`]`(InputStream content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType)` | Creates a document, calls the POST /documents endpoint.
`public JSONObject `[`createDocument`]`(byte[] content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType)` | Creates a document, calls the POST /documents endpoint.
`public JSONObject `[`listDocuments`]`(`[`ListDocumentsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_documents_options)` options)` | List documents, calls the GET /documents endpoint.
`public JSONObject `[`listDocuments`]`()` | List documents, calls the GET /documents endpoint.
`public JSONObject `[`deleteDocuments`]`()` | Delete documents, calls the DELETE /documents endpoint.
`public JSONObject `[`deleteDocuments`]`(String consentId)` | Delete documents with the provided consentId, calls the DELETE /documents endpoint.
`public JSONObject `[`getDocument`]`(String documentId)` | Get document, calls the GET /documents/{documentId} endpoint.
`public JSONObject `[`updateDocument`]`(String documentId,JSONArray groundTruth)` | Update ground truth for a document, calls the PATCH /documents/{documentId} endpoint.
`public JSONObject `[`getLog`]`(String logId)` | Get log, calls the GET /logs/{logId} endpoint.
`public JSONObject `[`listModels`]`(`[`ListModelsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_models_options)` options)` | List models available, calls the GET /models endpoint.
`public JSONObject `[`listModels`]`()` | List models available, calls the GET /models endpoint.
`public JSONObject `[`createPrediction`]`(String documentId,String modelId,`[`CreatePredictionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options)` options)` | Create a prediction on a document using specified model, calls the POST /predictions endpoint.
`public JSONObject `[`createPrediction`]`(String documentId,String modelId)` | Create a prediction on a document using specified model, calls the POST /predictions endpoint.
`public JSONObject `[`listPredictions`]`(`[`ListPredictionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_predictions_options)` options)` | List predictions available, calls the GET /predictions endpoint.
`public JSONObject `[`listPredictions`]`()` | List predictions available, calls the GET /predictions endpoint.
`public JSONObject `[`createSecret`]`(JSONObject data,`[`CreateSecretOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_secret_options)` options)` | Creates a secret, calls the POST /secrets endpoint.
`public JSONObject `[`createSecret`]`(Map< String, String > data,`[`CreateSecretOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_secret_options)` options)` | Creates a secret, calls the POST /secrets endpoint.
`public JSONObject `[`createSecret`]`(Map< String, String > data)` | Creates a secret, calls the POST /secrets endpoint.
`public JSONObject `[`createSecret`]`(JSONObject data)` | Creates a secret, calls the POST /secrets endpoint.
`public JSONObject `[`listSecrets`]`(`[`ListSecretsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_secrets_options)` options)` | List secrets available, calls the GET /secrets endpoint.
`public JSONObject `[`listSecrets`]`()` | List secrets available, calls the GET /secrets endpoint.
`public JSONObject `[`updateSecret`]`(String secretId,`[`UpdateSecretOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_secret_options)` options)` | Updates a secret, calls the PATCH /secrets/{secretId} endpoint.
`public JSONObject `[`createTransition`]`(`[`TransitionType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)` transitionType,`[`CreateTransitionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options)` options)` | Creates a transition, calls the POST /transitions endpoint.
`public JSONObject `[`createTransition`]`(`[`TransitionType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)` transitionType)` | Creates a transition, calls the POST /transitions endpoint.
`public JSONObject `[`listTransitions`]`(`[`ListTransitionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transitions_options)` options)` | List transitions, calls the GET /transitions endpoint.
`public JSONObject `[`listTransitions`]`()` | List transitions, calls the GET /transitions endpoint.
`public JSONObject `[`getTransition`]`(String transitionId)` | Get transition, calls the GET /transitions/{transitionId} endpoint.
`public JSONObject `[`updateTransition`]`(String transitionId,`[`UpdateTransitionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_options)` options)` | Updates a transition, calls the PATCH /transitions/{transitionId} endpoint.
`public JSONObject `[`executeTransition`]`(String transitionId)` | Start executing a manual transition, calls the POST /transitions/{transitionId}/executions endpoint.
`public JSONObject `[`deleteTransition`]`(String transitionId)` | Delete a transition, calls the PATCH /transitions/{transitionId} endpoint. Will fail if transition is in use by one or more workflows.
`public JSONObject `[`listTransitionExecutions`]`(String transitionId,`[`ListTransitionExecutionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options)` options)` | List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.
`public JSONObject `[`listTransitionExecutions`]`(String transitionId)` | List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.
`public JSONObject `[`getTransitionExecution`]`(String transitionId,String executionId)` | Get an execution of a transition, calls the GET /transitions/{transitionId}/executions/{executionId} endpoint
`public JSONObject `[`updateTransitionExecution`]`(String transitionId,String executionId,`[`TransitionExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_execution_status)` status,`[`UpdateTransitionExecutionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options)` options)` | Ends the processing of the transition execution, calls the PATCH /transitions/{transition_id}/executions/{execution_id} endpoint.
`public JSONObject `[`sendHeartbeat`]`(String transitionId,String executionId)` | Send heartbeat for a manual execution to signal that we are still working on it. Must be done at minimum once every 60 seconds or the transition execution will time out, calls the POST /transitions/{transitionId}/executions/{executionId}/heartbeats endpoint.
`public JSONObject `[`createUser`]`(String email,`[`CreateUserOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_user_options)` options)` | Creates a new user, calls the POST /users endpoint.
`public JSONObject `[`createUser`]`(String email)` | Creates a new user, calls the POST /users endpoint.
`public JSONObject `[`listUsers`]`(`[`ListUsersOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_users_options)` options)` | List users, calls the GET /users endpoint.
`public JSONObject `[`listUsers`]`()` | List users, calls the GET /users endpoint.
`public JSONObject `[`getUser`]`(String userId)` | Get information about a specific user, calls the GET /users/{user_id} endpoint.
`public JSONObject `[`updateUser`]`(String userId,`[`UpdateUserOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_user_options)` options)` | Updates a user, calls the PATCH /users/{userId} endpoint.
`public JSONObject `[`deleteUser`]`(String userId)` | Delete a user, calls the PATCH /users/{userId} endpoint.
`public JSONObject `[`createWorkflow`]`(JSONObject specification,`[`CreateWorkflowOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_workflow_options)` options)` | Creates a new workflow, calls the POST /workflows endpoint. Check out Lucidtech's tutorials for more info on how to create a workflow. see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve)
`public JSONObject `[`createWorkflow`]`(JSONObject specification)` | Creates a new workflow, calls the POST /workflows endpoint. Check out Lucidtech's tutorials for more info on how to create a workflow. see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve)
`public JSONObject `[`listWorkflows`]`(`[`ListWorkflowsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflows_options)` options)` | List workflows, calls the GET /workflows endpoint.
`public JSONObject `[`listWorkflows`]`()` | List workflows, calls the GET /workflows endpoint.
`public JSONObject `[`getWorkflow`]`(String workflowId)` | Get workflow, calls the GET /workflows/{workflowId} endpoint.
`public JSONObject `[`updateWorkflow`]`(String workflowId,`[`UpdateWorkflowOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_workflow_options)` options)` | Updates a workflow, calls the PATCH /workflows/{workflowId} endpoint.
`public JSONObject `[`deleteWorkflow`]`(String workflowId)` | Delete a workflow, calls the DELETE /workflows/{workflowId} endpoint.
`public JSONObject `[`executeWorkflow`]`(String workflowId,JSONObject content)` | Start a workflow execution, calls the POST /workflows/{workflowId}/executions endpoint.
`public JSONObject `[`listWorkflowExecutions`]`(String workflowId,`[`ListWorkflowExecutionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflow_executions_options)` options)` | List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.
`public JSONObject `[`listWorkflowExecutions`]`(String workflowId)` | List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.
`public JSONObject `[`deleteWorkflowExecution`]`(String workflowId,String executionId)` | Deletes the execution with the provided executionId from workflowId, calls the DELETE /workflows/{workflowId}/executions/{executionId} endpoint.

## Members

#### `public  `[`Client`]`(`[`Credentials`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_credentials)` credentials)` 

A client to invoke api methods from Lucidtech AI Services.

#### Parameters
* `credentials` [Credentials] to use 

**See also**: [Credentials]

#### `public JSONObject `[`createAsset`]`(byte[] content,`[`CreateAssetOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_asset_options)` options)` 

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

#### `public JSONObject `[`createAsset`]`(InputStream content,`[`CreateAssetOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_asset_options)` options)` 

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

#### `public JSONObject `[`createAsset`]`(byte[] content)` 

Creates an asset, calls the POST /assets endpoint.

#### Parameters
* `content` Binary data 

#### Returns
Asset response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`createAsset`]`(InputStream content)` 

Creates an asset, calls the POST /assets endpoint.

#### Parameters
* `content` Data from input stream 

#### Returns
Asset response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`listAssets`]`(`[`ListAssetsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_assets_options)` options)` 

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

#### `public JSONObject `[`listAssets`]`()` 

List assets available, calls the GET /assets endpoint.

#### Returns
Assets response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`getAsset`]`(String assetId)` 

Get asset, calls the GET /assets/{assetId} endpoint.

#### Parameters
* `assetId` Id of the asset 

#### Returns
Asset response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`updateAsset`]`(String assetId,`[`UpdateAssetOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_asset_options)` options)` 

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

#### `public JSONObject `[`createBatch`]`(`[`CreateBatchOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_batch_options)` options)` 

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

#### `public JSONObject `[`createBatch`]`()` 

Creates a batch, calls the POST /batches endpoint.

#### Returns
Batch response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`createDocument`]`(byte[] content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType,`[`CreateDocumentOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options)` options)` 

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

#### `public JSONObject `[`createDocument`]`(InputStream content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType,`[`CreateDocumentOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options)` options)` 

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

#### `public JSONObject `[`createDocument`]`(InputStream content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType)` 

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

#### `public JSONObject `[`createDocument`]`(byte[] content,`[`ContentType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_content_type)` contentType)` 

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

#### `public JSONObject `[`listDocuments`]`(`[`ListDocumentsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_documents_options)` options)` 

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

#### `public JSONObject `[`listDocuments`]`()` 

List documents, calls the GET /documents endpoint.

#### Returns
Documents response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`deleteDocuments`]`()` 

Delete documents, calls the DELETE /documents endpoint.

**See also**: [Client::createDocument]

#### Returns
Documents response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`deleteDocuments`]`(String consentId)` 

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

#### `public JSONObject `[`getDocument`]`(String documentId)` 

Get document, calls the GET /documents/{documentId} endpoint.

#### Parameters
* `documentId` Id of the document 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`updateDocument`]`(String documentId,JSONArray groundTruth)` 

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

#### `public JSONObject `[`getLog`]`(String logId)` 

Get log, calls the GET /logs/{logId} endpoint.

#### Parameters
* `logId` Id of the log 

#### Returns
Log response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`listModels`]`(`[`ListModelsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_models_options)` options)` 

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

#### `public JSONObject `[`listModels`]`()` 

List models available, calls the GET /models endpoint.

#### Returns
Models response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`createPrediction`]`(String documentId,String modelId,`[`CreatePredictionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options)` options)` 

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

#### `public JSONObject `[`createPrediction`]`(String documentId,String modelId)` 

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

#### `public JSONObject `[`listPredictions`]`(`[`ListPredictionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_predictions_options)` options)` 

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

#### `public JSONObject `[`listPredictions`]`()` 

List predictions available, calls the GET /predictions endpoint.

#### Returns
Predictions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`createSecret`]`(JSONObject data,`[`CreateSecretOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_secret_options)` options)` 

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

#### `public JSONObject `[`createSecret`]`(Map< String, String > data,`[`CreateSecretOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_secret_options)` options)` 

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

#### `public JSONObject `[`createSecret`]`(Map< String, String > data)` 

Creates a secret, calls the POST /secrets endpoint.

#### Parameters
* `data` Key-Value pairs to store secretly 

#### Returns
Secret response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`createSecret`]`(JSONObject data)` 

Creates a secret, calls the POST /secrets endpoint.

#### Parameters
* `data` Key-Value pairs to store secretly 

#### Returns
Secret response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`listSecrets`]`(`[`ListSecretsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_secrets_options)` options)` 

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

#### `public JSONObject `[`listSecrets`]`()` 

List secrets available, calls the GET /secrets endpoint.

#### Returns
Secrets response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`updateSecret`]`(String secretId,`[`UpdateSecretOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_secret_options)` options)` 

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

#### `public JSONObject `[`createTransition`]`(`[`TransitionType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)` transitionType,`[`CreateTransitionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options)` options)` 

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

#### `public JSONObject `[`createTransition`]`(`[`TransitionType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)` transitionType)` 

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

#### `public JSONObject `[`listTransitions`]`(`[`ListTransitionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transitions_options)` options)` 

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

#### `public JSONObject `[`listTransitions`]`()` 

List transitions, calls the GET /transitions endpoint.

#### Returns
Transitions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`getTransition`]`(String transitionId)` 

Get transition, calls the GET /transitions/{transitionId} endpoint.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
Transition response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`updateTransition`]`(String transitionId,`[`UpdateTransitionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_options)` options)` 

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

#### `public JSONObject `[`executeTransition`]`(String transitionId)` 

Start executing a manual transition, calls the POST /transitions/{transitionId}/executions endpoint.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
TransitionExecution response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`deleteTransition`]`(String transitionId)` 

Delete a transition, calls the PATCH /transitions/{transitionId} endpoint. Will fail if transition is in use by one or more workflows.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
Transition response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`listTransitionExecutions`]`(String transitionId,`[`ListTransitionExecutionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options)` options)` 

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

#### `public JSONObject `[`listTransitionExecutions`]`(String transitionId)` 

List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
Transition executions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`getTransitionExecution`]`(String transitionId,String executionId)` 

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

#### `public JSONObject `[`updateTransitionExecution`]`(String transitionId,String executionId,`[`TransitionExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_execution_status)` status,`[`UpdateTransitionExecutionOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options)` options)` 

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

#### `public JSONObject `[`sendHeartbeat`]`(String transitionId,String executionId)` 

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

#### `public JSONObject `[`createUser`]`(String email,`[`CreateUserOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_user_options)` options)` 

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

#### `public JSONObject `[`createUser`]`(String email)` 

Creates a new user, calls the POST /users endpoint.

#### Parameters
* `email` Email to the new user 

#### Returns
User response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`listUsers`]`(`[`ListUsersOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_users_options)` options)` 

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

#### `public JSONObject `[`listUsers`]`()` 

List users, calls the GET /users endpoint.

#### Returns
Users response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`getUser`]`(String userId)` 

Get information about a specific user, calls the GET /users/{user_id} endpoint.

#### Parameters
* `userId` The Id of the user 

#### Returns
User response 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`updateUser`]`(String userId,`[`UpdateUserOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_user_options)` options)` 

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

#### `public JSONObject `[`deleteUser`]`(String userId)` 

Delete a user, calls the PATCH /users/{userId} endpoint.

#### Parameters
* `userId` Id of the user 

#### Returns
User response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`createWorkflow`]`(JSONObject specification,`[`CreateWorkflowOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_workflow_options)` options)` 

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

#### `public JSONObject `[`createWorkflow`]`(JSONObject specification)` 

Creates a new workflow, calls the POST /workflows endpoint. Check out Lucidtech's tutorials for more info on how to create a workflow. see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve)

#### Parameters
* `specification` Specification of the workflow, currently supporting ASL: [https://states-language.net/spec.html](https://states-language.net/spec.html). Check out the tutorials for more information: see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve#creating-the-workflow](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve#creating-the-workflow)

#### Returns
Workflow response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`listWorkflows`]`(`[`ListWorkflowsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflows_options)` options)` 

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

#### `public JSONObject `[`listWorkflows`]`()` 

List workflows, calls the GET /workflows endpoint.

#### Returns
Workflows response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`getWorkflow`]`(String workflowId)` 

Get workflow, calls the GET /workflows/{workflowId} endpoint.

#### Parameters
* `workflowId` Id of the workflow 

#### Returns
Workflow response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`updateWorkflow`]`(String workflowId,`[`UpdateWorkflowOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_workflow_options)` options)` 

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

#### `public JSONObject `[`deleteWorkflow`]`(String workflowId)` 

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

#### `public JSONObject `[`executeWorkflow`]`(String workflowId,JSONObject content)` 

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

#### `public JSONObject `[`listWorkflowExecutions`]`(String workflowId,`[`ListWorkflowExecutionsOptions`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflow_executions_options)` options)` 

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

#### `public JSONObject `[`listWorkflowExecutions`]`(String workflowId)` 

List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.

#### Parameters
* `workflowId` Id of the workflow 

#### Returns
Workflow executions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`deleteWorkflowExecution`]`(String workflowId,String executionId)` 

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
`public  `[`CreateDocumentOptions`]`()` | 
`public `[`CreateDocumentOptions`] [`setConsentId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options_1aea843844d1cabdb367b6ef2fbad74763)`(String consentId)` | 
`public `[`CreateDocumentOptions`] [`setBatchId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options_1a6a4643ab2ab9ae0d195e95b6e5858abb)`(String batchId)` | 
`public `[`CreateDocumentOptions`] [`setGroundTruth`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options_1a11e5ef2f36fa14e6e048d74d406881f5)`(JSONArray groundTruth)` | 
`public JSONObject `[`addOptions`]`(JSONObject body)` | 
`public JSONObject `[`toJson`]`()` | 

## Members

#### `public  `[`CreateDocumentOptions`]`()` 

#### `public `[`CreateDocumentOptions`] [`setConsentId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options_1aea843844d1cabdb367b6ef2fbad74763)`(String consentId)` 

#### `public `[`CreateDocumentOptions`] [`setBatchId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options_1a6a4643ab2ab9ae0d195e95b6e5858abb)`(String batchId)` 

#### `public `[`CreateDocumentOptions`] [`setGroundTruth`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_document_options_1a11e5ef2f36fa14e6e048d74d406881f5)`(JSONArray groundTruth)` 

#### `public JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::CreatePredictionOptions` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`CreatePredictionOptions`]`()` | 
`public  `[`CreatePredictionOptions`]`(int maxPages,boolean autoRotate)` | 
`public `[`CreatePredictionOptions`] [`setMaxPages`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options_1af6a80e5477e27525a936bfa24404cdf0)`(int maxPages)` | 
`public `[`CreatePredictionOptions`] [`setAutoRotate`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options_1a82d5ef3dd802caa5785475eeabbbf9dd)`(boolean autoRotate)` | 
`public `[`CreatePredictionOptions`] [`setImageQuality`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options_1ad6b7016289238d2e664e6e968a6d59b2)`(`[`ImageQuality`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_image_quality)` imageQuality)` | 
`public JSONObject `[`addOptions`]`(JSONObject body)` | 
`public JSONObject `[`toJson`]`()` | 

## Members

#### `public  `[`CreatePredictionOptions`]`()` 

#### `public  `[`CreatePredictionOptions`]`(int maxPages,boolean autoRotate)` 

#### `public `[`CreatePredictionOptions`] [`setMaxPages`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options_1af6a80e5477e27525a936bfa24404cdf0)`(int maxPages)` 

#### `public `[`CreatePredictionOptions`] [`setAutoRotate`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options_1a82d5ef3dd802caa5785475eeabbbf9dd)`(boolean autoRotate)` 

#### `public `[`CreatePredictionOptions`] [`setImageQuality`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_prediction_options_1ad6b7016289238d2e664e6e968a6d59b2)`(`[`ImageQuality`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_image_quality)` imageQuality)` 

#### `public JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public JSONObject `[`toJson`]`()` 

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
`public  `[`CreateTransitionOptions`]`()` | 
`public  `[`CreateTransitionOptions`]`(JSONObject parameters)` | 
`public `[`CreateTransitionOptions`] [`setParameters`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options_1a4464c8b419c7359a3ebc0507c2926b6f)`(JSONObject schema)` | 
`public `[`CreateTransitionOptions`] [`setInputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options_1a8903a4e3773b695c2e8602af25dd7d23)`(JSONObject schema)` | 
`public `[`CreateTransitionOptions`] [`setOutputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options_1a666736cded215c9974df0841fdb89ac7)`(JSONObject schema)` | 
`public JSONObject `[`addOptions`]`(JSONObject body)` | 
`public JSONObject `[`toJson`]`()` | 

## Members

#### `public  `[`CreateTransitionOptions`]`()` 

#### `public  `[`CreateTransitionOptions`]`(JSONObject parameters)` 

#### `public `[`CreateTransitionOptions`] [`setParameters`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options_1a4464c8b419c7359a3ebc0507c2926b6f)`(JSONObject schema)` 

#### `public `[`CreateTransitionOptions`] [`setInputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options_1a8903a4e3773b695c2e8602af25dd7d23)`(JSONObject schema)` 

#### `public `[`CreateTransitionOptions`] [`setOutputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_transition_options_1a666736cded215c9974df0841fdb89ac7)`(JSONObject schema)` 

#### `public JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public JSONObject `[`toJson`]`()` 

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
`public  `[`CreateWorkflowOptions`]`()` | 
`public  `[`CreateWorkflowOptions`]`(JSONObject errorConfig)` | 
`public `[`CreateWorkflowOptions`] [`setErrorConfig`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_workflow_options_1ac8e4383646a9adcf679b5d243159aedb)`(JSONObject errorConfig)` | 
`public JSONObject `[`addOptions`]`(JSONObject body)` | 
`public JSONObject `[`toJson`]`()` | 

## Members

#### `public  `[`CreateWorkflowOptions`]`()` 

#### `public  `[`CreateWorkflowOptions`]`(JSONObject errorConfig)` 

#### `public `[`CreateWorkflowOptions`] [`setErrorConfig`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_create_workflow_options_1ac8e4383646a9adcf679b5d243159aedb)`(JSONObject errorConfig)` 

#### `public JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::Credentials` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`Credentials`]`(String clientId,String clientSecret,String apiKey,String authEndpoint,String apiEndpoint)` | Used to fetch and store credentials.
`public String `[`getAccessToken`]`(HttpClient httpClient)` | #### Parameters
`public String `[`getApiKey`]`()` | 
`public String `[`getApiEndpoint`]`()` | 

## Members

#### `public  `[`Credentials`]`(String clientId,String clientSecret,String apiKey,String authEndpoint,String apiEndpoint)` 

Used to fetch and store credentials.

#### Parameters
* `clientId` [Client] id 

* `clientSecret` [Client] secret 

* `apiKey` API key 

* `authEndpoint` Auth endpoint 

* `apiEndpoint` Domain endpoint of the api, e.g. [https://{prefix}.api.lucidtech.ai/{version}](https://{prefix}.api.lucidtech.ai/{version})

#### Exceptions
* `[MissingCredentialsException]` Raised if some of credentials are missing

#### `public String `[`getAccessToken`]`(HttpClient httpClient)` 

#### Parameters
* `httpClient` Instance of HttpClient used to access the authentication endpoint 

#### Returns
Access token, downloading it if necessary 

#### Exceptions
* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public String `[`getApiKey`]`()` 

#### `public String `[`getApiEndpoint`]`()` 

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
`public  `[`ListDocumentsOptions`]`()` | 
`public `[`ListDocumentsOptions`] [`setConsentId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_documents_options_1a60cbafbb5cb2443c0add044cf7b88abc)`(String consentId)` | 
`public `[`ListDocumentsOptions`] [`setBatchId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_documents_options_1ac52ae5b69f46e04451a645abce1e7ac7)`(String batchId)` | 
`public List< NameValuePair > `[`toList`]`()` | 

## Members

#### `public  `[`ListDocumentsOptions`]`()` 

#### `public `[`ListDocumentsOptions`] [`setConsentId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_documents_options_1a60cbafbb5cb2443c0add044cf7b88abc)`(String consentId)` 

#### `public `[`ListDocumentsOptions`] [`setBatchId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_documents_options_1ac52ae5b69f46e04451a645abce1e7ac7)`(String batchId)` 

#### `public List< NameValuePair > `[`toList`]`()` 

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
`public  `[`ListResourcesOptions`]`()` | 
`public  `[`ListResourcesOptions`]`(int maxResults)` | 
`public  `[`ListResourcesOptions`]`(String nextToken)` | 
`public  `[`ListResourcesOptions`]`(int maxResults,String nextToken)` | 
`public T `[`setMaxResults`]`(int maxResults)` | 
`public T `[`setNextToken`]`(String nextToken)` | 
`public List< NameValuePair > `[`toList`]`()` | 
`public List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` | 
`protected Integer `[`maxResults`] | 
`protected String `[`nextToken`] | 

## Members

#### `public  `[`ListResourcesOptions`]`()` 

#### `public  `[`ListResourcesOptions`]`(int maxResults)` 

#### `public  `[`ListResourcesOptions`]`(String nextToken)` 

#### `public  `[`ListResourcesOptions`]`(int maxResults,String nextToken)` 

#### `public T `[`setMaxResults`]`(int maxResults)` 

#### `public T `[`setNextToken`]`(String nextToken)` 

#### `public List< NameValuePair > `[`toList`]`()` 

#### `public List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` 

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
`public  `[`ListSortablesOptions`]`()` | 
`public T `[`setSortBy`]`(String sortBy)` | 
`public T `[`setOrder`]`(`[`Order`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_order)` order)` | 
`public List< NameValuePair > `[`toList`]`()` | 
`public List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` | 
`protected String `[`sortBy`] | 
`protected `[`Order`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_order) [`order`] | 

## Members

#### `public  `[`ListSortablesOptions`]`()` 

#### `public T `[`setSortBy`]`(String sortBy)` 

#### `public T `[`setOrder`]`(`[`Order`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_order)` order)` 

#### `public List< NameValuePair > `[`toList`]`()` 

#### `public List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` 

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
`public  `[`ListTransitionExecutionsOptions`]`()` | 
`public `[`ListTransitionExecutionsOptions`] [`setExecutionId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1a17be680d06dd9eaaaf9c3d0df3519d9d)`(List< String > executionId)` | 
`public `[`ListTransitionExecutionsOptions`] [`setExecutionId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1a6fed26e978e0eec35e8a3dc4297010b7)`(String executionId)` | 
`public `[`ListTransitionExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1aaffb59561c7c6f2ba7249948783b83f0)`(List< `[`TransitionExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_execution_status)` > status)` | 
`public `[`ListTransitionExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1af793df3ada1088f6dc7f83117ec02be1)`(`[`TransitionExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_execution_status)` status)` | 
`public List< NameValuePair > `[`toList`]`()` | 
`public List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` | 

## Members

#### `public  `[`ListTransitionExecutionsOptions`]`()` 

#### `public `[`ListTransitionExecutionsOptions`] [`setExecutionId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1a17be680d06dd9eaaaf9c3d0df3519d9d)`(List< String > executionId)` 

#### `public `[`ListTransitionExecutionsOptions`] [`setExecutionId`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1a6fed26e978e0eec35e8a3dc4297010b7)`(String executionId)` 

#### `public `[`ListTransitionExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1aaffb59561c7c6f2ba7249948783b83f0)`(List< `[`TransitionExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_execution_status)` > status)` 

#### `public `[`ListTransitionExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transition_executions_options_1af793df3ada1088f6dc7f83117ec02be1)`(`[`TransitionExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_execution_status)` status)` 

#### `public List< NameValuePair > `[`toList`]`()` 

#### `public List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` 

# class `ai::lucidtech::las::sdk::ListTransitionsOptions` 

```
class ai::lucidtech::las::sdk::ListTransitionsOptions
  : public ai.lucidtech.las.sdk.ListResourcesOptions< ListTransitionsOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`ListTransitionsOptions`]`()` | 
`public `[`ListTransitionsOptions`] [`setTransitionType`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transitions_options_1a63e360ea5c442b76317e5c0f01ed29d8)`(`[`TransitionType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)` transitionType)` | 
`public List< NameValuePair > `[`toList`]`()` | 

## Members

#### `public  `[`ListTransitionsOptions`]`()` 

#### `public `[`ListTransitionsOptions`] [`setTransitionType`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_transitions_options_1a63e360ea5c442b76317e5c0f01ed29d8)`(`[`TransitionType`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_transition_type)` transitionType)` 

#### `public List< NameValuePair > `[`toList`]`()` 

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
`public  `[`ListWorkflowExecutionsOptions`]`()` | 
`public `[`ListWorkflowExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflow_executions_options_1aaf7e9a62ee579d8949fd62d36d0e65db)`(List< `[`WorkflowExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_workflow_execution_status)` > status)` | 
`public `[`ListWorkflowExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflow_executions_options_1a0b2f966d52b2aeef2b37ac7c5e5eb520)`(`[`WorkflowExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_workflow_execution_status)` status)` | 
`public List< NameValuePair > `[`toList`]`()` | 
`public List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` | 

## Members

#### `public  `[`ListWorkflowExecutionsOptions`]`()` 

#### `public `[`ListWorkflowExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflow_executions_options_1aaf7e9a62ee579d8949fd62d36d0e65db)`(List< `[`WorkflowExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_workflow_execution_status)` > status)` 

#### `public `[`ListWorkflowExecutionsOptions`] [`setStatus`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_list_workflow_executions_options_1a0b2f966d52b2aeef2b37ac7c5e5eb520)`(`[`WorkflowExecutionStatus`](#enumai_1_1lucidtech_1_1las_1_1sdk_1_1_workflow_execution_status)` status)` 

#### `public List< NameValuePair > `[`toList`]`()` 

#### `public List< NameValuePair > `[`addOptions`]`(List< NameValuePair > parameters)` 

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
`public  `[`NameAndDescriptionOptions`]`()` | 
`public T `[`setName`]`(String name)` | 
`public T `[`setDescription`]`(String description)` | 
`public JSONObject `[`addOptions`]`(JSONObject body)` | 
`public JSONObject `[`toJson`]`()` | 

## Members

#### `public  `[`NameAndDescriptionOptions`]`()` 

#### `public T `[`setName`]`(String name)` 

#### `public T `[`setDescription`]`(String description)` 

#### `public JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::UpdateAssetOptions` 

```
class ai::lucidtech::las::sdk::UpdateAssetOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< UpdateAssetOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`UpdateAssetOptions`]`()` | 
`public `[`UpdateAssetOptions`] [`setContent`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_asset_options_1a2c82436e7cf26983ee2c2d892d159773)`(byte[] content)` | 
`public `[`UpdateAssetOptions`] [`setContent`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_asset_options_1ad86efbed928b01bc637eedda9f19c733)`(InputStream content)` | 
`public JSONObject `[`addOptions`]`(JSONObject body)` | 
`public JSONObject `[`toJson`]`()` | 

## Members

#### `public  `[`UpdateAssetOptions`]`()` 

#### `public `[`UpdateAssetOptions`] [`setContent`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_asset_options_1a2c82436e7cf26983ee2c2d892d159773)`(byte[] content)` 

#### `public `[`UpdateAssetOptions`] [`setContent`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_asset_options_1ad86efbed928b01bc637eedda9f19c733)`(InputStream content)` 

#### `public JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::UpdateSecretOptions` 

```
class ai::lucidtech::las::sdk::UpdateSecretOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< UpdateSecretOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`UpdateSecretOptions`]`()` | 
`public `[`UpdateSecretOptions`] [`setData`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_secret_options_1a85cd3d884163f771962f080a7cfe9e08)`(JSONObject data)` | 
`public `[`UpdateSecretOptions`] [`setData`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_secret_options_1ac88357dcd64d7a950b560e7bf60f9fe4)`(Map< String, String > data)` | 
`public JSONObject `[`addOptions`]`(JSONObject body)` | 
`public JSONObject `[`toJson`]`()` | 

## Members

#### `public  `[`UpdateSecretOptions`]`()` 

#### `public `[`UpdateSecretOptions`] [`setData`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_secret_options_1a85cd3d884163f771962f080a7cfe9e08)`(JSONObject data)` 

#### `public `[`UpdateSecretOptions`] [`setData`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_secret_options_1ac88357dcd64d7a950b560e7bf60f9fe4)`(Map< String, String > data)` 

#### `public JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::UpdateTransitionExecutionOptions` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`UpdateTransitionExecutionOptions`]`()` | 
`public `[`UpdateTransitionExecutionOptions`] [`setOutput`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options_1afc7f677cd0d46baaea8376d2f02a621d)`(JSONObject error)` | 
`public `[`UpdateTransitionExecutionOptions`] [`setError`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options_1a7df40cd9c5c3735c8abfb6f9d91a8f8e)`(JSONObject output)` | 
`public `[`UpdateTransitionExecutionOptions`] [`setStartTime`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options_1a91eaf567d5e65b0fb5eb3afd8f68c253)`(String startTime)` | 
`public JSONObject `[`addOptions`]`(JSONObject body)` | 
`public JSONObject `[`toJson`]`()` | 

## Members

#### `public  `[`UpdateTransitionExecutionOptions`]`()` 

#### `public `[`UpdateTransitionExecutionOptions`] [`setOutput`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options_1afc7f677cd0d46baaea8376d2f02a621d)`(JSONObject error)` 

#### `public `[`UpdateTransitionExecutionOptions`] [`setError`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options_1a7df40cd9c5c3735c8abfb6f9d91a8f8e)`(JSONObject output)` 

#### `public `[`UpdateTransitionExecutionOptions`] [`setStartTime`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_execution_options_1a91eaf567d5e65b0fb5eb3afd8f68c253)`(String startTime)` 

#### `public JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public JSONObject `[`toJson`]`()` 

# class `ai::lucidtech::las::sdk::UpdateTransitionOptions` 

```
class ai::lucidtech::las::sdk::UpdateTransitionOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< UpdateTransitionOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`UpdateTransitionOptions`]`()` | 
`public `[`UpdateTransitionOptions`] [`setInputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_options_1a2e6d97d967f6270b2f9de77eabebc86d)`(JSONObject schema)` | 
`public `[`UpdateTransitionOptions`] [`setOutputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_options_1adcaad2be6ae5fe6c41052101eee65926)`(JSONObject schema)` | 
`public JSONObject `[`addOptions`]`(JSONObject body)` | 
`public JSONObject `[`toJson`]`()` | 

## Members

#### `public  `[`UpdateTransitionOptions`]`()` 

#### `public `[`UpdateTransitionOptions`] [`setInputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_options_1a2e6d97d967f6270b2f9de77eabebc86d)`(JSONObject schema)` 

#### `public `[`UpdateTransitionOptions`] [`setOutputJsonSchema`](#classai_1_1lucidtech_1_1las_1_1sdk_1_1_update_transition_options_1adcaad2be6ae5fe6c41052101eee65926)`(JSONObject schema)` 

#### `public JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public JSONObject `[`toJson`]`()` 

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
`public  `[`UserOptions`]`()` | 
`public T `[`setName`]`(String name)` | 
`public T `[`setAvatar`]`(String avatar)` | 
`public T `[`setAvatar`]`(byte[] avatar)` | 
`public JSONObject `[`addOptions`]`(JSONObject body)` | 
`public JSONObject `[`toJson`]`()` | 

## Members

#### `public  `[`UserOptions`]`()` 

#### `public T `[`setName`]`(String name)` 

#### `public T `[`setAvatar`]`(String avatar)` 

#### `public T `[`setAvatar`]`(byte[] avatar)` 

#### `public JSONObject `[`addOptions`]`(JSONObject body)` 

#### `public JSONObject `[`toJson`]`()` 

Generated by [Moxygen](https://sourcey.com/moxygen)