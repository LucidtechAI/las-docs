# Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`namespace `[`ai::lucidtech::las::sdk`] | 

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
`public  `[`APIException`]` | 
`public  `[`APIException`]` | 
`public  `[`APIException`]` | 

## Members

#### `public  `[`APIException`]` 

#### `public  `[`APIException`]` 

#### `public  `[`APIException`]` 

# class `ai::lucidtech::las::sdk::Client` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`Client`]` | A client to invoke api methods from Lucidtech AI Services.
`public JSONObject `[`createAsset`]` | Creates an asset, calls the POST /assets endpoint.
`public JSONObject `[`createAsset`]` | Creates an asset, calls the POST /assets endpoint.
`public JSONObject `[`createAsset`]` | Creates an asset, calls the POST /assets endpoint.
`public JSONObject `[`createAsset`]` | Creates an asset, calls the POST /assets endpoint.
`public JSONObject `[`listAssets`]` | List assets available, calls the GET /assets endpoint.
`public JSONObject `[`listAssets`]` | List assets available, calls the GET /assets endpoint.
`public JSONObject `[`getAsset`]` | Get asset, calls the GET /assets/{assetId} endpoint.
`public JSONObject `[`updateAsset`]` | Updates an asset, calls the PATCH /assets/{assetId} endpoint.
`public JSONObject `[`createBatch`]` | Creates a batch, calls the POST /batches endpoint.
`public JSONObject `[`createBatch`]` | Creates a batch, calls the POST /batches endpoint.
`public JSONObject `[`createDocument`]` | Creates a document, calls the POST /documents endpoint.
`public JSONObject `[`createDocument`]` | Creates a document, calls the POST /documents endpoint.
`public JSONObject `[`createDocument`]` | Creates a document, calls the POST /documents endpoint.
`public JSONObject `[`createDocument`]` | Creates a document, calls the POST /documents endpoint.
`public JSONObject `[`listDocuments`]` | List documents, calls the GET /documents endpoint.
`public JSONObject `[`listDocuments`]` | List documents, calls the GET /documents endpoint.
`public JSONObject `[`deleteDocuments`]` | Delete documents, calls the DELETE /documents endpoint.
`public JSONObject `[`deleteDocuments`]` | Delete documents with the provided consentId, calls the DELETE /documents endpoint.
`public JSONObject `[`getDocument`]` | Get document, calls the GET /documents/{documentId} endpoint.
`public JSONObject `[`updateDocument`]` | Update ground truth for a document, calls the PATCH /documents/{documentId} endpoint.
`public JSONObject `[`getLog`]` | Get log, calls the GET /logs/{logId} endpoint.
`public JSONObject `[`listModels`]` | List models available, calls the GET /models endpoint.
`public JSONObject `[`listModels`]` | List models available, calls the GET /models endpoint.
`public JSONObject `[`createPrediction`]` | Create a prediction on a document using specified model, calls the POST /predictions endpoint.
`public JSONObject `[`createPrediction`]` | Create a prediction on a document using specified model, calls the POST /predictions endpoint.
`public JSONObject `[`listPredictions`]` | List predictions available, calls the GET /predictions endpoint.
`public JSONObject `[`listPredictions`]` | List predictions available, calls the GET /predictions endpoint.
`public JSONObject `[`createSecret`]` | Creates a secret, calls the POST /secrets endpoint.
`public JSONObject `[`createSecret`]` | Creates a secret, calls the POST /secrets endpoint.
`public JSONObject `[`createSecret`]` | Creates a secret, calls the POST /secrets endpoint.
`public JSONObject `[`createSecret`]` | Creates a secret, calls the POST /secrets endpoint.
`public JSONObject `[`listSecrets`]` | List secrets available, calls the GET /secrets endpoint.
`public JSONObject `[`listSecrets`]` | List secrets available, calls the GET /secrets endpoint.
`public JSONObject `[`updateSecret`]` | Updates a secret, calls the PATCH /secrets/{secretId} endpoint.
`public JSONObject `[`createTransition`]` | Creates a transition, calls the POST /transitions endpoint.
`public JSONObject `[`createTransition`]` | Creates a transition, calls the POST /transitions endpoint.
`public JSONObject `[`listTransitions`]` | List transitions, calls the GET /transitions endpoint.
`public JSONObject `[`listTransitions`]` | List transitions, calls the GET /transitions endpoint.
`public JSONObject `[`getTransition`]` | Get transition, calls the GET /transitions/{transitionId} endpoint.
`public JSONObject `[`updateTransition`]` | Updates a transition, calls the PATCH /transitions/{transitionId} endpoint.
`public JSONObject `[`executeTransition`]` | Start executing a manual transition, calls the POST /transitions/{transitionId}/executions endpoint.
`public JSONObject `[`deleteTransition`]` | Delete a transition, calls the PATCH /transitions/{transitionId} endpoint. Will fail if transition is in use by one or more workflows.
`public JSONObject `[`listTransitionExecutions`]` | List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.
`public JSONObject `[`listTransitionExecutions`]` | List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.
`public JSONObject `[`getTransitionExecution`]` | Get an execution of a transition, calls the GET /transitions/{transitionId}/executions/{executionId} endpoint
`public JSONObject `[`updateTransitionExecution`]` | Ends the processing of the transition execution, calls the PATCH /transitions/{transition_id}/executions/{execution_id} endpoint.
`public JSONObject `[`sendHeartbeat`]` | Send heartbeat for a manual execution to signal that we are still working on it. Must be done at minimum once every 60 seconds or the transition execution will time out, calls the POST /transitions/{transitionId}/executions/{executionId}/heartbeats endpoint.
`public JSONObject `[`createUser`]` | Creates a new user, calls the POST /users endpoint.
`public JSONObject `[`createUser`]` | Creates a new user, calls the POST /users endpoint.
`public JSONObject `[`listUsers`]` | List users, calls the GET /users endpoint.
`public JSONObject `[`listUsers`]` | List users, calls the GET /users endpoint.
`public JSONObject `[`getUser`]` | Get information about a specific user, calls the GET /users/{user_id} endpoint.
`public JSONObject `[`updateUser`]` | Updates a user, calls the PATCH /users/{userId} endpoint.
`public JSONObject `[`deleteUser`]` | Delete a user, calls the PATCH /users/{userId} endpoint.
`public JSONObject `[`createWorkflow`]
`public JSONObject `[`createWorkflow`]
`public JSONObject `[`listWorkflows`]` | List workflows, calls the GET /workflows endpoint.
`public JSONObject `[`listWorkflows`]` | List workflows, calls the GET /workflows endpoint.
`public JSONObject `[`getWorkflow`]` | Get workflow, calls the GET /workflows/{workflowId} endpoint.
`public JSONObject `[`updateWorkflow`]` | Updates a workflow, calls the PATCH /workflows/{workflowId} endpoint.
`public JSONObject `[`deleteWorkflow`]` | Delete a workflow, calls the DELETE /workflows/{workflowId} endpoint.
`public JSONObject `[`executeWorkflow`]` | Start a workflow execution, calls the POST /workflows/{workflowId}/executions endpoint.
`public JSONObject `[`listWorkflowExecutions`]` | List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.
`public JSONObject `[`listWorkflowExecutions`]` | List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.
`public JSONObject `[`deleteWorkflowExecution`]` | Deletes the execution with the provided executionId from workflowId, calls the DELETE /workflows/{workflowId}/executions/{executionId} endpoint.

## Members

#### `public  `[`Client`]` 

A client to invoke api methods from Lucidtech AI Services.

#### Parameters
* `credentials` [Credentials] to use 

**See also**: [Credentials]

#### `public JSONObject `[`createAsset`]` 

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

#### `public JSONObject `[`createAsset`]` 

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

#### `public JSONObject `[`createAsset`]` 

Creates an asset, calls the POST /assets endpoint.

#### Parameters
* `content` Binary data 

#### Returns
Asset response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`createAsset`]` 

Creates an asset, calls the POST /assets endpoint.

#### Parameters
* `content` Data from input stream 

#### Returns
Asset response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`listAssets`]` 

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

#### `public JSONObject `[`listAssets`]` 

List assets available, calls the GET /assets endpoint.

#### Returns
Assets response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`getAsset`]` 

Get asset, calls the GET /assets/{assetId} endpoint.

#### Parameters
* `assetId` Id of the asset 

#### Returns
Asset response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`updateAsset`]` 

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

#### `public JSONObject `[`createBatch`]` 

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

#### `public JSONObject `[`createBatch`]` 

Creates a batch, calls the POST /batches endpoint.

#### Returns
Batch response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`createDocument`]` 

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

#### `public JSONObject `[`createDocument`]` 

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

#### `public JSONObject `[`createDocument`]` 

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

#### `public JSONObject `[`createDocument`]` 

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

#### `public JSONObject `[`listDocuments`]` 

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

#### `public JSONObject `[`listDocuments`]` 

List documents, calls the GET /documents endpoint.

#### Returns
Documents response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`deleteDocuments`]` 

Delete documents, calls the DELETE /documents endpoint.

**See also**: [Client::createDocument]

#### Returns
Documents response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`deleteDocuments`]` 

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

#### `public JSONObject `[`getDocument`]` 

Get document, calls the GET /documents/{documentId} endpoint.

#### Parameters
* `documentId` Id of the document 

#### Returns
Document response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`updateDocument`]` 

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

#### `public JSONObject `[`getLog`]` 

Get log, calls the GET /logs/{logId} endpoint.

#### Parameters
* `logId` Id of the log 

#### Returns
Log response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`listModels`]` 

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

#### `public JSONObject `[`listModels`]` 

List models available, calls the GET /models endpoint.

#### Returns
Models response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`createPrediction`]` 

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

#### `public JSONObject `[`createPrediction`]` 

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

#### `public JSONObject `[`listPredictions`]` 

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

#### `public JSONObject `[`listPredictions`]` 

List predictions available, calls the GET /predictions endpoint.

#### Returns
Predictions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`createSecret`]` 

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

#### `public JSONObject `[`createSecret`]` 

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

#### `public JSONObject `[`createSecret`]` 

Creates a secret, calls the POST /secrets endpoint.

#### Parameters
* `data` Key-Value pairs to store secretly 

#### Returns
Secret response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`createSecret`]` 

Creates a secret, calls the POST /secrets endpoint.

#### Parameters
* `data` Key-Value pairs to store secretly 

#### Returns
Secret response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`listSecrets`]` 

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

#### `public JSONObject `[`listSecrets`]` 

List secrets available, calls the GET /secrets endpoint.

#### Returns
Secrets response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`updateSecret`]` 

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

#### `public JSONObject `[`createTransition`]` 

Creates a transition, calls the POST /transitions endpoint.

**See also**: [CreateTransitionOptions]

**See also**: [TransitionType]

#### Parameters
* `transitionType` Type of transition 

* `options` Additional options to include in request body 

#### Returns
Transition response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`createTransition`]` 

Creates a transition, calls the POST /transitions endpoint.

**See also**: [TransitionType]

#### Parameters
* `transitionType` Type of transition 

#### Returns
Transition response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`listTransitions`]` 

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

#### `public JSONObject `[`listTransitions`]` 

List transitions, calls the GET /transitions endpoint.

#### Returns
Transitions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`getTransition`]` 

Get transition, calls the GET /transitions/{transitionId} endpoint.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
Transition response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`updateTransition`]` 

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

#### `public JSONObject `[`executeTransition`]` 

Start executing a manual transition, calls the POST /transitions/{transitionId}/executions endpoint.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
TransitionExecution response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`deleteTransition`]` 

Delete a transition, calls the PATCH /transitions/{transitionId} endpoint. Will fail if transition is in use by one or more workflows.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
Transition response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`listTransitionExecutions`]` 

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

#### `public JSONObject `[`listTransitionExecutions`]` 

List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.

#### Parameters
* `transitionId` Id of the transition 

#### Returns
Transition executions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`getTransitionExecution`]` 

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

#### `public JSONObject `[`updateTransitionExecution`]` 

Ends the processing of the transition execution, calls the PATCH /transitions/{transition_id}/executions/{execution_id} endpoint.

**See also**: [UpdateTransitionExecutionOptions]

**See also**: [TransitionExecutionStatus]

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

#### `public JSONObject `[`sendHeartbeat`]` 

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

#### `public JSONObject `[`createUser`]` 

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

#### `public JSONObject `[`createUser`]` 

Creates a new user, calls the POST /users endpoint.

#### Parameters
* `email` Email to the new user 

#### Returns
User response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`listUsers`]` 

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

#### `public JSONObject `[`listUsers`]` 

List users, calls the GET /users endpoint.

#### Returns
Users response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`getUser`]` 

Get information about a specific user, calls the GET /users/{user_id} endpoint.

#### Parameters
* `userId` The Id of the user 

#### Returns
User response 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`updateUser`]` 

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

#### `public JSONObject `[`deleteUser`]` 

Delete a user, calls the PATCH /users/{userId} endpoint.

#### Parameters
* `userId` Id of the user 

#### Returns
User response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`createWorkflow`]` 

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

#### `public JSONObject `[`createWorkflow`]` 

Creates a new workflow, calls the POST /workflows endpoint. Check out Lucidtech's tutorials for more info on how to create a workflow. see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve)

#### Parameters
* `specification` Specification of the workflow, currently supporting ASL: [https://states-language.net/spec.html](https://states-language.net/spec.html). Check out the tutorials for more information: see [https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve#creating-the-workflow](https://docs.lucidtech.ai/getting-started/tutorials/setup_predict_and_approve#creating-the-workflow)

#### Returns
Workflow response from API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`listWorkflows`]` 

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

#### `public JSONObject `[`listWorkflows`]` 

List workflows, calls the GET /workflows endpoint.

#### Returns
Workflows response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`getWorkflow`]` 

Get workflow, calls the GET /workflows/{workflowId} endpoint.

#### Parameters
* `workflowId` Id of the workflow 

#### Returns
Workflow response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`updateWorkflow`]` 

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

#### `public JSONObject `[`deleteWorkflow`]` 

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

#### `public JSONObject `[`executeWorkflow`]` 

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

#### `public JSONObject `[`listWorkflowExecutions`]` 

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

#### `public JSONObject `[`listWorkflowExecutions`]` 

List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.

#### Parameters
* `workflowId` Id of the workflow 

#### Returns
Workflow executions response from REST API 

#### Exceptions
* `IOException` General IOException 

* `[APIException]` Raised when API returns an erroneous status code 

* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public JSONObject `[`deleteWorkflowExecution`]` 

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
`public  `[`CreateDocumentOptions`]` | 
`public `[`CreateDocumentOptions`]` | 
`public `[`CreateDocumentOptions`]` | 
`public `[`CreateDocumentOptions`]` | 
`public JSONObject `[`addOptions`]` | 
`public JSONObject `[`toJson`]` | 

## Members

#### `public  `[`CreateDocumentOptions`]` 

#### `public `[`CreateDocumentOptions`]` 

#### `public `[`CreateDocumentOptions`]` 

#### `public `[`CreateDocumentOptions`]` 

#### `public JSONObject `[`addOptions`]` 

#### `public JSONObject `[`toJson`]` 

# class `ai::lucidtech::las::sdk::CreatePredictionOptions` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`CreatePredictionOptions`]` | 
`public  `[`CreatePredictionOptions`]` | 
`public `[`CreatePredictionOptions`]` | 
`public `[`CreatePredictionOptions`]` | 
`public `[`CreatePredictionOptions`]` | 
`public JSONObject `[`addOptions`]` | 
`public JSONObject `[`toJson`]` | 

## Members

#### `public  `[`CreatePredictionOptions`]` 

#### `public  `[`CreatePredictionOptions`]` 

#### `public `[`CreatePredictionOptions`]` 

#### `public `[`CreatePredictionOptions`]` 

#### `public `[`CreatePredictionOptions`]` 

#### `public JSONObject `[`addOptions`]` 

#### `public JSONObject `[`toJson`]` 

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
`public  `[`CreateTransitionOptions`]` | 
`public  `[`CreateTransitionOptions`]` | 
`public `[`CreateTransitionOptions`]` | 
`public `[`CreateTransitionOptions`]` | 
`public `[`CreateTransitionOptions`]` | 
`public JSONObject `[`addOptions`]` | 
`public JSONObject `[`toJson`]` | 

## Members

#### `public  `[`CreateTransitionOptions`]` 

#### `public  `[`CreateTransitionOptions`]` 

#### `public `[`CreateTransitionOptions`]` 

#### `public `[`CreateTransitionOptions`]` 

#### `public `[`CreateTransitionOptions`]` 

#### `public JSONObject `[`addOptions`]` 

#### `public JSONObject `[`toJson`]` 

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
`public  `[`CreateWorkflowOptions`]` | 
`public  `[`CreateWorkflowOptions`]` | 
`public `[`CreateWorkflowOptions`]` | 
`public JSONObject `[`addOptions`]` | 
`public JSONObject `[`toJson`]` | 

## Members

#### `public  `[`CreateWorkflowOptions`]` 

#### `public  `[`CreateWorkflowOptions`]` 

#### `public `[`CreateWorkflowOptions`]` 

#### `public JSONObject `[`addOptions`]` 

#### `public JSONObject `[`toJson`]` 

# class `ai::lucidtech::las::sdk::Credentials` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`Credentials`]` | Used to fetch and store credentials.
`public String `[`getAccessToken`]` | #### Parameters
`public String `[`getApiKey`]` | 
`public String `[`getApiEndpoint`]` | 

## Members

#### `public  `[`Credentials`]` 

Used to fetch and store credentials.

#### Parameters
* `clientId` [Client] id 

* `clientSecret` [Client] secret 

* `apiKey` API key 

* `authEndpoint` Auth endpoint 

* `apiEndpoint` Domain endpoint of the api, e.g. [https://{prefix}.api.lucidtech.ai/{version}](https://{prefix}.api.lucidtech.ai/{version})

#### Exceptions
* `[MissingCredentialsException]` Raised if some of credentials are missing

#### `public String `[`getAccessToken`]` 

#### Parameters
* `httpClient` Instance of HttpClient used to access the authentication endpoint 

#### Returns
Access token, downloading it if necessary 

#### Exceptions
* `[MissingAccessTokenException]` Raised if access token cannot be obtained

#### `public String `[`getApiKey`]` 

#### `public String `[`getApiEndpoint`]` 

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
`public  `[`ListDocumentsOptions`]` | 
`public `[`ListDocumentsOptions`]` | 
`public `[`ListDocumentsOptions`]` | 
`public List< NameValuePair > `[`toList`]` | 

## Members

#### `public  `[`ListDocumentsOptions`]` 

#### `public `[`ListDocumentsOptions`]` 

#### `public `[`ListDocumentsOptions`]` 

#### `public List< NameValuePair > `[`toList`]` 

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
`public  `[`ListResourcesOptions`]` | 
`public  `[`ListResourcesOptions`]` | 
`public  `[`ListResourcesOptions`]` | 
`public  `[`ListResourcesOptions`]` | 
`public T `[`setMaxResults`]` | 
`public T `[`setNextToken`]` | 
`public List< NameValuePair > `[`toList`]` | 
`public List< NameValuePair > `[`addOptions`]` | 
`protected Integer `[`maxResults`] | 
`protected String `[`nextToken`] | 

## Members

#### `public  `[`ListResourcesOptions`]` 

#### `public  `[`ListResourcesOptions`]` 

#### `public  `[`ListResourcesOptions`]` 

#### `public  `[`ListResourcesOptions`]` 

#### `public T `[`setMaxResults`]` 

#### `public T `[`setNextToken`]` 

#### `public List< NameValuePair > `[`toList`]` 

#### `public List< NameValuePair > `[`addOptions`]` 

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
`public  `[`ListSortablesOptions`]` | 
`public T `[`setSortBy`]` | 
`public T `[`setOrder`]` | 
`public List< NameValuePair > `[`toList`]` | 
`public List< NameValuePair > `[`addOptions`]` | 
`protected String `[`sortBy`] | 
`protected `[`Order`] | 

## Members

#### `public  `[`ListSortablesOptions`]` 

#### `public T `[`setSortBy`]` 

#### `public T `[`setOrder`]` 

#### `public List< NameValuePair > `[`toList`]` 

#### `public List< NameValuePair > `[`addOptions`]` 

#### `protected String `[`sortBy`] 

#### `protected `[`Order`] 

# class `ai::lucidtech::las::sdk::ListTransitionExecutionsOptions` 

```
class ai::lucidtech::las::sdk::ListTransitionExecutionsOptions
  : public ai.lucidtech.las.sdk.ListSortablesOptions< ListTransitionExecutionsOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`ListTransitionExecutionsOptions`]` | 
`public `[`ListTransitionExecutionsOptions`]` | 
`public `[`ListTransitionExecutionsOptions`]` | 
`public `[`ListTransitionExecutionsOptions`]` | 
`public `[`ListTransitionExecutionsOptions`]` | 
`public List< NameValuePair > `[`toList`]` | 
`public List< NameValuePair > `[`addOptions`]` | 

## Members

#### `public  `[`ListTransitionExecutionsOptions`]` 

#### `public `[`ListTransitionExecutionsOptions`]` 

#### `public `[`ListTransitionExecutionsOptions`]` 

#### `public `[`ListTransitionExecutionsOptions`]` 

#### `public `[`ListTransitionExecutionsOptions`]` 

#### `public List< NameValuePair > `[`toList`]` 

#### `public List< NameValuePair > `[`addOptions`]` 

# class `ai::lucidtech::las::sdk::ListTransitionsOptions` 

```
class ai::lucidtech::las::sdk::ListTransitionsOptions
  : public ai.lucidtech.las.sdk.ListResourcesOptions< ListTransitionsOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`ListTransitionsOptions`]` | 
`public `[`ListTransitionsOptions`]` | 
`public List< NameValuePair > `[`toList`]` | 

## Members

#### `public  `[`ListTransitionsOptions`]` 

#### `public `[`ListTransitionsOptions`]` 

#### `public List< NameValuePair > `[`toList`]` 

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
`public  `[`ListWorkflowExecutionsOptions`]` | 
`public `[`ListWorkflowExecutionsOptions`]` | 
`public `[`ListWorkflowExecutionsOptions`]` | 
`public List< NameValuePair > `[`toList`]` | 
`public List< NameValuePair > `[`addOptions`]` | 

## Members

#### `public  `[`ListWorkflowExecutionsOptions`]` 

#### `public `[`ListWorkflowExecutionsOptions`]` 

#### `public `[`ListWorkflowExecutionsOptions`]` 

#### `public List< NameValuePair > `[`toList`]` 

#### `public List< NameValuePair > `[`addOptions`]` 

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
`public  `[`NameAndDescriptionOptions`]` | 
`public T `[`setName`]` | 
`public T `[`setDescription`]` | 
`public JSONObject `[`addOptions`]` | 
`public JSONObject `[`toJson`]` | 

## Members

#### `public  `[`NameAndDescriptionOptions`]` 

#### `public T `[`setName`]` 

#### `public T `[`setDescription`]` 

#### `public JSONObject `[`addOptions`]` 

#### `public JSONObject `[`toJson`]` 

# class `ai::lucidtech::las::sdk::UpdateAssetOptions` 

```
class ai::lucidtech::las::sdk::UpdateAssetOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< UpdateAssetOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`UpdateAssetOptions`]` | 
`public `[`UpdateAssetOptions`]` | 
`public `[`UpdateAssetOptions`]` | 
`public JSONObject `[`addOptions`]` | 
`public JSONObject `[`toJson`]` | 

## Members

#### `public  `[`UpdateAssetOptions`]` 

#### `public `[`UpdateAssetOptions`]` 

#### `public `[`UpdateAssetOptions`]` 

#### `public JSONObject `[`addOptions`]` 

#### `public JSONObject `[`toJson`]` 

# class `ai::lucidtech::las::sdk::UpdateSecretOptions` 

```
class ai::lucidtech::las::sdk::UpdateSecretOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< UpdateSecretOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`UpdateSecretOptions`]` | 
`public `[`UpdateSecretOptions`]` | 
`public `[`UpdateSecretOptions`]` | 
`public JSONObject `[`addOptions`]` | 
`public JSONObject `[`toJson`]` | 

## Members

#### `public  `[`UpdateSecretOptions`]` 

#### `public `[`UpdateSecretOptions`]` 

#### `public `[`UpdateSecretOptions`]` 

#### `public JSONObject `[`addOptions`]` 

#### `public JSONObject `[`toJson`]` 

# class `ai::lucidtech::las::sdk::UpdateTransitionExecutionOptions` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`UpdateTransitionExecutionOptions`]` | 
`public `[`UpdateTransitionExecutionOptions`]` | 
`public `[`UpdateTransitionExecutionOptions`]` | 
`public `[`UpdateTransitionExecutionOptions`]` | 
`public JSONObject `[`addOptions`]` | 
`public JSONObject `[`toJson`]` | 

## Members

#### `public  `[`UpdateTransitionExecutionOptions`]` 

#### `public `[`UpdateTransitionExecutionOptions`]` 

#### `public `[`UpdateTransitionExecutionOptions`]` 

#### `public `[`UpdateTransitionExecutionOptions`]` 

#### `public JSONObject `[`addOptions`]` 

#### `public JSONObject `[`toJson`]` 

# class `ai::lucidtech::las::sdk::UpdateTransitionOptions` 

```
class ai::lucidtech::las::sdk::UpdateTransitionOptions
  : public ai.lucidtech.las.sdk.NameAndDescriptionOptions< UpdateTransitionOptions >
```  

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public  `[`UpdateTransitionOptions`]` | 
`public `[`UpdateTransitionOptions`]` | 
`public `[`UpdateTransitionOptions`]` | 
`public JSONObject `[`addOptions`]` | 
`public JSONObject `[`toJson`]` | 

## Members

#### `public  `[`UpdateTransitionOptions`]` 

#### `public `[`UpdateTransitionOptions`]` 

#### `public `[`UpdateTransitionOptions`]` 

#### `public JSONObject `[`addOptions`]` 

#### `public JSONObject `[`toJson`]` 

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
`public  `[`UserOptions`]` | 
`public T `[`setName`]` | 
`public T `[`setAvatar`]` | 
`public T `[`setAvatar`]` | 
`public JSONObject `[`addOptions`]` | 
`public JSONObject `[`toJson`]` | 

## Members

#### `public  `[`UserOptions`]` 

#### `public T `[`setName`]` 

#### `public T `[`setAvatar`]` 

#### `public T `[`setAvatar`]` 

#### `public JSONObject `[`addOptions`]` 

#### `public JSONObject `[`toJson`]` 

Generated by [Moxygen](https://sourcey.com/moxygen)