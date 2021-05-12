
<a name="readmemd"></a>

@lucidtech/las-sdk-core / [Exports](#modulesmd)

# JavaScript SDK for Lucidtech AI Services API

## Installation

#### Browser version
```
$ yarn add @lucidtech/las-sdk-browser
$ npm install @lucidtech/las-sdk-browser
```

#### Node version
```
$ yarn add @lucidtech/las-sdk-node
$ npm install @lucidtech/las-sdk-node
```

## Usage

```javascript
import { Client } from '@lucidtech/las-sdk-core';
import { ClientCredentials } from '@lucidtech/las-sdk-node';

const credentials = new ClientCredentials('<apiEndpoint>', '<apiKey>', '<clientId>',  '<clientSecret>', '<authEndpoint>');
const client = new Client(credentials);

const content = '<read image content>'
client.createDocument(content, 'image/jpeg').then(documentResponse => {
    console.log(documentResponse);
}).catch(error => {
    console.log(error);
})
```

## Contributing

Install dependencies
```
$ npm install && npm run upgrade-lucidtech
```

Build
```
$ npm run build
```

Run tests
```
$ npm run test test
```


<a name="classesclientclient-1md"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [client](#modulesclientmd) / Client

# Class: Client

[client](#modulesclientmd).Client

A high-level http client for communicating with the Lucidtech REST API

## Hierarchy

* **Client**

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [credentials](#credentials)

### Methods

- [createAppClient](#createappclient)
- [createAsset](#createasset)
- [createBatch](#createbatch)
- [createDocument](#createdocument)
- [createPrediction](#createprediction)
- [createSecret](#createsecret)
- [createTransition](#createtransition)
- [createUser](#createuser)
- [createWorkflow](#createworkflow)
- [deleteAppClient](#deleteappclient)
- [deleteBatch](#deletebatch)
- [deleteDocuments](#deletedocuments)
- [deleteTransition](#deletetransition)
- [deleteUser](#deleteuser)
- [deleteWorkflow](#deleteworkflow)
- [deleteWorkflowExecution](#deleteworkflowexecution)
- [executeTransition](#executetransition)
- [executeWorkflow](#executeworkflow)
- [getAsset](#getasset)
- [getDocument](#getdocument)
- [getLog](#getlog)
- [getTransition](#gettransition)
- [getTransitionExecution](#gettransitionexecution)
- [getUser](#getuser)
- [getWorkflow](#getworkflow)
- [getWorkflowExecution](#getworkflowexecution)
- [listAppClients](#listappclients)
- [listAssets](#listassets)
- [listBatches](#listbatches)
- [listDocuments](#listdocuments)
- [listModels](#listmodels)
- [listPredictions](#listpredictions)
- [listSecrets](#listsecrets)
- [listTransitionExecutions](#listtransitionexecutions)
- [listTransitions](#listtransitions)
- [listUsers](#listusers)
- [listWorkflowExecutions](#listworkflowexecutions)
- [listWorkflows](#listworkflows)
- [makeDeleteRequest](#makedeleterequest)
- [makeGetRequest](#makegetrequest)
- [makePatchRequest](#makepatchrequest)
- [makePostRequest](#makepostrequest)
- [sendHeartbeat](#sendheartbeat)
- [updateAsset](#updateasset)
- [updateDocument](#updatedocument)
- [updateSecret](#updatesecret)
- [updateTransition](#updatetransition)
- [updateTransitionExecution](#updatetransitionexecution)
- [updateUser](#updateuser)
- [updateWorkflow](#updateworkflow)
- [updateWorkflowExecution](#updateworkflowexecution)

## Constructors

### constructor

\+ **new Client**(`credentials`: [*Credentials*](#classescredentialscredentials-1md)): [*Client*](#classesclientclient-1md)

#### Parameters:

`credentials` [*Credentials*](#classescredentialscredentials-1md)

**Returns:** [*Client*](#classesclientclient-1md)


## Properties

### credentials

• **credentials**: [*Credentials*](#classescredentialscredentials-1md)


## Methods

### createAppClient

▸ **createAppClient**(`name`: *null* \| *string*, `description`: *null* \| *string*): *Promise*<[*AppClient*](#appclient)\>

Creates an app client, calls the POST /appClients endpoint.

#### Parameters:

`name` *null* \| *string* Name of app client  
`description` *null* \| *string* Description of app client  

**Returns:** *Promise*<[*AppClient*](#appclient)\>

AppClient response from REST API


___

### createAsset

▸ **createAsset**(`content`: *string*): *Promise*<[*Asset*](#asset)\>

Creates an asset handle, calls the POST /assets endpoint.

#### Parameters:

`content` *string* Content to POST (base64-encoded string Buffer)  

**Returns:** *Promise*<[*Asset*](#asset)\>

Asset response from REST API


___

### createBatch

▸ **createBatch**(`options`: [*CreateBatchOptions*](#createbatchoptions)): *Promise*<[*Batch*](#batch)\>

Creates a batch, calls the POST /batches endpoint.

#### Parameters:

`options` [*CreateBatchOptions*](#createbatchoptions)

**Returns:** *Promise*<[*Batch*](#batch)\>

Batch response from REST API


___

### createDocument

▸ **createDocument**(`content`: *string* \| *Buffer*, `contentType`: [*ContentType*](#contenttype), `options?`: [*CreateDocumentOptions*](#interfacestypescreatedocumentoptionsmd)): *Promise*<[*LasDocument*](#lasdocument)\>

Creates a document handle, calls the POST /documents endpoint.

#### Parameters:

`content` *string* \| *Buffer* Content to POST (base64 string Buffer)  
`contentType` [*ContentType*](#contenttype) MIME type for the document handle  
`options?` [*CreateDocumentOptions*](#interfacestypescreatedocumentoptionsmd) -

**Returns:** *Promise*<[*LasDocument*](#lasdocument)\>

Document response from REST API


___

### createPrediction

▸ **createPrediction**(`documentId`: *string*, `modelId`: *string*, `options?`: [*CreatePredictionsOptions*](#interfacestypescreatepredictionsoptionsmd)): *Promise*<[*PredictionResponse*](#predictionresponse)\>

Create a prediction on a document using specified model, calls the POST /predictions endpoint.

#### Parameters:

`documentId` *string* Id of the document to run inference and create a prediction on  
`modelId` *string* Id of the model to use for inference  
`options?` [*CreatePredictionsOptions*](#interfacestypescreatepredictionsoptionsmd) -

**Returns:** *Promise*<[*PredictionResponse*](#predictionresponse)\>

Predicion response from REST API


___

### createSecret

▸ **createSecret**(`data`: *Record*<*any*, *any*\>, `options?`: [*CreateSecretOptions*](#interfacestypescreatesecretoptionsmd)): *Promise*<[*Secret*](#secret)\>

Creates an secret handle, calls the POST /secrets endpoint.

#### Parameters:

`data` *Record*<*any*, *any*\> Object containing the data you want to keep secret  
`options?` [*CreateSecretOptions*](#interfacestypescreatesecretoptionsmd) -

**Returns:** *Promise*<[*Secret*](#secret)\>

Secret response from REST API


___

### createTransition

▸ **createTransition**(`transitionType`: [*TransitionType*](#transitiontype), `options?`: [*CreateTransitionOptions*](#interfacestypescreatetransitionoptionsmd)): *Promise*<[*Transition*](#transition)\>

Creates a transition handle, calls the POST /transitions endpoint.

#### Parameters:

`transitionType` [*TransitionType*](#transitiontype) Type of transition "docker"|"manual"  
`options?` [*CreateTransitionOptions*](#interfacestypescreatetransitionoptionsmd) -

**Returns:** *Promise*<[*Transition*](#transition)\>

Transition response from REST API


___

### createUser

▸ **createUser**(`email`: *string*, `data?`: [*CreateUserOptions*](#createuseroptions)): *Promise*<[*User*](#user)\>

Creates a new user, calls the POST /users endpoint.

#### Parameters:

`email` *string* Email to the new user  
`data?` [*CreateUserOptions*](#createuseroptions) -

**Returns:** *Promise*<[*User*](#user)\>

User response from REST API


___

### createWorkflow

▸ **createWorkflow**(`name`: *string*, `specification`: [*WorkflowSpecification*](#workflowspecification), `options?`: [*CreateWorkflowOptions*](#createworkflowoptions)): *Promise*<[*Workflow*](#workflow)\>

Creates a new workflow, calls the POST /workflows endpoint.

#### Parameters:

`name` *string* Name of the workflow  
`specification` [*WorkflowSpecification*](#workflowspecification) Specification of the workflow  
`options?` [*CreateWorkflowOptions*](#createworkflowoptions) -

**Returns:** *Promise*<[*Workflow*](#workflow)\>

Workflow response from REST API


___

### deleteAppClient

▸ **deleteAppClient**(`appClientId`: *string*): *Promise*<[*AppClient*](#appclient)\>

Delete the app client, calls the DELETE /appClients/{appClientId} endpoint.

#### Parameters:

`appClientId` *string* of the app client  

**Returns:** *Promise*<[*AppClient*](#appclient)\>

AppClient response from REST API


___

### deleteBatch

▸ **deleteBatch**(`batchId`: *string*, `deleteDocuments?`: *boolean*): *Promise*<[*Batch*](#batch)\>

Deletes a batch, calls the DELETE /batches/{batchId} endpoint.

#### Parameters:

`batchId` *string* - Id of the batch  
`deleteDocuments` *boolean* false Set to true to delete documents in batch before deleting batch  

**Returns:** *Promise*<[*Batch*](#batch)\>

Batch response from REST API


___

### deleteDocuments

▸ **deleteDocuments**(`options?`: [*DeleteDocumentOptions*](#deletedocumentoptions)): *Promise*<[*LasDocumentList*](#lasdocumentlist)\>

Delete documents with the provided consentId, calls the DELETE /documents endpoint.
Will delete all documents when no consentId is provided.

#### Parameters:

`options?` [*DeleteDocumentOptions*](#deletedocumentoptions)

**Returns:** *Promise*<[*LasDocumentList*](#lasdocumentlist)\>

Documents response from REST API


___

### deleteTransition

▸ **deleteTransition**(`transitionId`: *string*): *Promise*<[*Transition*](#transition)\>

Delete the transition with the provided transitionId, calls the DELETE /transitions/{transitionId} endpoint.
Will fail if transition is in use by one or more workflows.

#### Parameters:

`transitionId` *string* Id of the transition  

**Returns:** *Promise*<[*Transition*](#transition)\>

Transition response from REST API


___

### deleteUser

▸ **deleteUser**(`userId`: *string*): *Promise*<[*User*](#user)\>

Delete a user, calls the DELETE /users/{userId} endpoint.

#### Parameters:

`userId` *string* Id of the user  

**Returns:** *Promise*<[*User*](#user)\>

User response from REST API


___

### deleteWorkflow

▸ **deleteWorkflow**(`workflowId`: *string*): *Promise*<[*Workflow*](#workflow)\>

Delete the workflow with the provided workflowId, calls the DELETE /workflows/{workflowId} endpoint.

#### Parameters:

`workflowId` *string* Id of the workflow  

**Returns:** *Promise*<[*Workflow*](#workflow)\>

Workflow response from REST API


___

### deleteWorkflowExecution

▸ **deleteWorkflowExecution**(`workflowId`: *string*, `executionId`: *string*): *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Deletes the execution with the provided executionId from workflowId,
calls the DELETE /workflows/{workflowId}/executions/{executionId} endpoint.

#### Parameters:

`workflowId` *string* Id of the workflow  
`executionId` *string* Id of the execution  

**Returns:** *Promise*<[*WorkflowExecution*](#workflowexecution)\>

WorkflowExecution response from REST API


___

### executeTransition

▸ **executeTransition**(`transitionId`: *string*): *Promise*<[*TransitionExecution*](#transitionexecution)\>

Start executing a manual transition, calls the POST /transitions/{transitionId}/executions endpoint.

#### Parameters:

`transitionId` *string* Id of the transition  

**Returns:** *Promise*<[*TransitionExecution*](#transitionexecution)\>

Transition execution response from REST API


___

### executeWorkflow

▸ **executeWorkflow**(`workflowId`: *string*, `input`: *object*): *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Start a workflow execution, calls the POST /workflows/{workflowId}/executions endpoint.

#### Parameters:

`workflowId` *string* Id of the workflow  
`input` *object* Input to the first step of the workflow  

**Returns:** *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Workflow execution response from REST API


___

### getAsset

▸ **getAsset**(`assetId`: *string*): *Promise*<[*Asset*](#asset)\>

Get asset from the REST API, calls the GET /assets/{assetId} endpoint.

#### Parameters:

`assetId` *string* Id of the asset  

**Returns:** *Promise*<[*Asset*](#asset)\>

Asset response from REST API


___

### getDocument

▸ **getDocument**(`documentId`: *string*): *Promise*<[*LasDocument*](#lasdocument)\>

Get document from the REST API, calls the GET /documents/{documentId} endpoint.

#### Parameters:

`documentId` *string* Id of the document  

**Returns:** *Promise*<[*LasDocument*](#lasdocument)\>

Document response from REST API


___

### getLog

▸ **getLog**(`logId`: *string*): *Promise*<[*Log*](#log)\>

Get log, calls the GET /logs/{logId} endpoint.

#### Parameters:

`logId` *string* Id of the log  

**Returns:** *Promise*<[*Log*](#log)\>

Log response from REST API


___

### getTransition

▸ **getTransition**(`transitionId`: *string*): *Promise*<[*Transition*](#transition)\>

Get the transition with the provided transitionId, calls the GET /transitions/{transitionId} endpoint.

#### Parameters:

`transitionId` *string* Id of the transition  

**Returns:** *Promise*<[*Transition*](#transition)\>

Transition response from REST API


___

### getTransitionExecution

▸ **getTransitionExecution**(`transitionId`: *string*, `transitionExecutionId`: *string*): *Promise*<[*TransitionExecution*](#transitionexecution)\>

Get an execution of a transition, calls the GET /transitions/{transitionId}/executions/{executionId} endpoint

#### Parameters:

`transitionId` *string* Id of the transition  
`transitionExecutionId` *string* Id of the execution  

**Returns:** *Promise*<[*TransitionExecution*](#transitionexecution)\>

Transition execution responses from REST API


___

### getUser

▸ **getUser**(`userId`: *string*): *Promise*<[*User*](#user)\>

Get information about a specific user, calls the GET /users/{userId} endpoint.

#### Parameters:

`userId` *string* Id of the user  

**Returns:** *Promise*<[*User*](#user)\>

User response from REST API


___

### getWorkflow

▸ **getWorkflow**(`workflowId`: *string*): *Promise*<[*Workflow*](#workflow)\>

Get the workflow with the provided workflowId, calls the GET /workflows/{workflowId} endpoint.

#### Parameters:

`workflowId` *string* Id of the workflow  

**Returns:** *Promise*<[*Workflow*](#workflow)\>

Workflow response from REST API


___

### getWorkflowExecution

▸ **getWorkflowExecution**(`workflowId`: *string*, `executionId`: *string*): *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Get a workflow execution, calls the GET /workflows/{workflowId}/executions/{executionId} endpoint.

#### Parameters:

`workflowId` *string* Id of the workflow that performs the execution  
`executionId` *string* Id of the execution to get  

**Returns:** *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Workflow execution response from REST API


___

### listAppClients

▸ **listAppClients**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*AppClientList*](#appclientlist)\>

List app clients, calls the GET /appClients endpoint.

#### Parameters:

`options?` [*PaginationOptions*](#interfacestypespaginationoptionsmd)

**Returns:** *Promise*<[*AppClientList*](#appclientlist)\>

AppClientList response from REST API


___

### listAssets

▸ **listAssets**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*AssetList*](#assetlist)\>

List assets available, calls the GET /assets endpoint.

#### Parameters:

`options?` [*PaginationOptions*](#interfacestypespaginationoptionsmd)

**Returns:** *Promise*<[*AssetList*](#assetlist)\>

Assets response from REST API without the content of each asset


___

### listBatches

▸ **listBatches**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*BatchList*](#batchlist)\>

List batches, calls the GET /batches endpoint.

#### Parameters:

`options?` [*PaginationOptions*](#interfacestypespaginationoptionsmd)

**Returns:** *Promise*<[*BatchList*](#batchlist)\>

BatchList response from REST API


___

### listDocuments

▸ **listDocuments**(`options?`: [*ListDocumentsOptions*](#listdocumentsoptions)): *Promise*<[*LasDocumentList*](#lasdocumentlist)\>

List documents available for inference, calls the GET /documents endpoint.

#### Parameters:

`options?` [*ListDocumentsOptions*](#listdocumentsoptions)

**Returns:** *Promise*<[*LasDocumentList*](#lasdocumentlist)\>

Documents response from REST API


___

### listModels

▸ **listModels**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*ModelList*](#modellist)\>

List models available, calls the GET /models endpoint.

#### Parameters:

`options?` [*PaginationOptions*](#interfacestypespaginationoptionsmd)

**Returns:** *Promise*<[*ModelList*](#modellist)\>

Models response from the REST API


___

### listPredictions

▸ **listPredictions**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*PredictionList*](#predictionlist)\>

#### Parameters:

`options?` [*PaginationOptions*](#interfacestypespaginationoptionsmd)

**Returns:** *Promise*<[*PredictionList*](#predictionlist)\>


___

### listSecrets

▸ **listSecrets**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*SecretList*](#secretlist)\>

List secrets available, calls the GET /secrets endpoint.

#### Parameters:

`options?` [*PaginationOptions*](#interfacestypespaginationoptionsmd)

**Returns:** *Promise*<[*SecretList*](#secretlist)\>

Secrets response from REST API without the username of each secret


___

### listTransitionExecutions

▸ **listTransitionExecutions**(`transitionId`: *string*, `options?`: [*TransitionExecutionListOptions*](#transitionexecutionlistoptions)): *Promise*<[*TransitionExecutionList*](#transitionexecutionlist)\>

List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.

#### Parameters:

`transitionId` *string* Id of the transition  
`options?` [*TransitionExecutionListOptions*](#transitionexecutionlistoptions) -

**Returns:** *Promise*<[*TransitionExecutionList*](#transitionexecutionlist)\>

Transition executions responses from REST API


___

### listTransitions

▸ **listTransitions**(`options?`: [*ListTransitionOptions*](#listtransitionoptions)): *Promise*<[*TransitionList*](#transitionlist)\>

List transitions, calls the GET /transitions endpoint.

#### Parameters:

`options?` [*ListTransitionOptions*](#listtransitionoptions)

**Returns:** *Promise*<[*TransitionList*](#transitionlist)\>

Transitions response from REST API


___

### listUsers

▸ **listUsers**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*UserList*](#userlist)\>

List users, calls the GET /users endpoint.

#### Parameters:

`options?` [*PaginationOptions*](#interfacestypespaginationoptionsmd)

**Returns:** *Promise*<[*UserList*](#userlist)\>

User response from REST API


___

### listWorkflowExecutions

▸ **listWorkflowExecutions**(`workflowId`: *string*, `options?`: [*ListWorkflowExecutionsOptions*](#listworkflowexecutionsoptions)): *Promise*<[*WorkflowExecutionList*](#workflowexecutionlist)\>

List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.

#### Parameters:

`workflowId` *string* Id of the workflow  
`options?` [*ListWorkflowExecutionsOptions*](#listworkflowexecutionsoptions) -

**Returns:** *Promise*<[*WorkflowExecutionList*](#workflowexecutionlist)\>

Workflow executions responses from REST API


___

### listWorkflows

▸ **listWorkflows**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*WorkflowList*](#workflowlist)\>

List workflows, calls the GET /workflows endpoint.

#### Parameters:

`options?` [*PaginationOptions*](#interfacestypespaginationoptionsmd)

**Returns:** *Promise*<[*WorkflowList*](#workflowlist)\>

Workflows response from REST API


___

### makeDeleteRequest

▸ **makeDeleteRequest**<T\>(`path`: *string*, `query?`: *any*): *Promise*<T\>

#### Type parameters:

`T`

#### Parameters:

`path` *string*
`query?` *any*

**Returns:** *Promise*<T\>


___

### makeGetRequest

▸ **makeGetRequest**<T\>(`path`: *string*, `query?`: *any*): *Promise*<T\>

#### Type parameters:

`T`

#### Parameters:

`path` *string*
`query?` *any*

**Returns:** *Promise*<T\>


___

### makePatchRequest

▸ **makePatchRequest**<T\>(`path`: *string*, `body`: *any*): *Promise*<T\>

#### Type parameters:

`T`

#### Parameters:

`path` *string*
`body` *any*

**Returns:** *Promise*<T\>


___

### makePostRequest

▸ **makePostRequest**<T\>(`path`: *string*, `body`: *any*): *Promise*<T\>

#### Type parameters:

`T`

#### Parameters:

`path` *string*
`body` *any*

**Returns:** *Promise*<T\>


___

### sendHeartbeat

▸ **sendHeartbeat**(`transitionId`: *string*, `transitionExecutionId`: *string*): *Promise*<*unknown*\>

Send heartbeat for a manual execution to signal that we are still working on it.
Must be done at minimum once every 60 seconds or the transition execution will time out.
Calls the POST /transitions/{transitionId}/executions/{executionId}/heartbeats endpoint.

#### Parameters:

`transitionId` *string* Id of the transition  
`transitionExecutionId` *string* Id of the transition execution  

**Returns:** *Promise*<*unknown*\>

Empty response


___

### updateAsset

▸ **updateAsset**(`assetId`: *string*, `data`: [*UpdateAssetOptions*](#interfacestypesupdateassetoptionsmd)): *Promise*<[*Asset*](#asset)\>

Updates an asset, calls the PATCH /assets/{assetId} endpoint.

#### Parameters:

`assetId` *string* Id of the asset  
`data` [*UpdateAssetOptions*](#interfacestypesupdateassetoptionsmd) -

**Returns:** *Promise*<[*Asset*](#asset)\>

Asset response from REST API with content


___

### updateDocument

▸ **updateDocument**(`documentId`: *string*, `data`: [*UpdateDocumentOptions*](#interfacestypesupdatedocumentoptionsmd)): *Promise*<[*LasDocument*](#lasdocument)\>

Post ground truth to the REST API, calls the PATCH /documents/{documentId} endpoint.
Posting ground truth means posting the ground truth data for the particular document.
This enables the API to learn from past mistakes.

#### Parameters:

`documentId` *string* Id of the document  
`data` [*UpdateDocumentOptions*](#interfacestypesupdatedocumentoptionsmd) -

**Returns:** *Promise*<[*LasDocument*](#lasdocument)\>

Document response from REST API


___

### updateSecret

▸ **updateSecret**(`secretId`: *string*, `data`: [*UpdateSecretOptions*](#interfacestypesupdatesecretoptionsmd)): *Promise*<[*Secret*](#secret)\>

Updates a secret, calls the PATCH /secrets/{secretId} endpoint.

#### Parameters:

`secretId` *string* Id of the secret  
`data` [*UpdateSecretOptions*](#interfacestypesupdatesecretoptionsmd) -

**Returns:** *Promise*<[*Secret*](#secret)\>


___

### updateTransition

▸ **updateTransition**(`transitionId`: *string*, `data`: [*UpdateTransitionOptions*](#updatetransitionoptions)): *Promise*<[*Transition*](#transition)\>

Updates a transition, calls the PATCH /transitions/{transitionId} endpoint.

#### Parameters:

`transitionId` *string* Id of the transition  
`data` [*UpdateTransitionOptions*](#updatetransitionoptions) Transition fields to PATCH  

**Returns:** *Promise*<[*Transition*](#transition)\>

Transition response from REST API


___

### updateTransitionExecution

▸ **updateTransitionExecution**(`transitionId`: *string*, `executionId`: *string*, `data`: [*UpdateTransitionExecution*](#interfacestypesupdatetransitionexecutionmd)): *Promise*<[*TransitionExecution*](#transitionexecution)\>

Ends the processing of the transition execution, calls the
PATCH /transitions/{transitionId}/executions/{executionId} endpoint.

#### Parameters:

`transitionId` *string* Id of the transition that performs the execution  
`executionId` *string* Id of the execution to update  
`data` [*UpdateTransitionExecution*](#interfacestypesupdatetransitionexecutionmd) -

**Returns:** *Promise*<[*TransitionExecution*](#transitionexecution)\>

Transition execution response from REST API


___

### updateUser

▸ **updateUser**(`userId`: *string*, `data`: [*UpdateUserOptions*](#updateuseroptions)): *Promise*<[*User*](#user)\>

Updates a user, calls the PATCH /users/{userId} endpoint.

#### Parameters:

`userId` *string* Id of the user  
`data` [*UpdateUserOptions*](#updateuseroptions) -

**Returns:** *Promise*<[*User*](#user)\>

User response from REST API


___

### updateWorkflow

▸ **updateWorkflow**(`workflowId`: *string*, `data`: [*UpdateWorkflowOptions*](#interfacestypesupdateworkflowoptionsmd)): *Promise*<[*Workflow*](#workflow)\>

Updates a workflow, calls the PATCH /workflows/{workflowId} endpoint.

#### Parameters:

`workflowId` *string* Id of the workflow  
`data` [*UpdateWorkflowOptions*](#interfacestypesupdateworkflowoptionsmd) Workflow fields to PATCH  

**Returns:** *Promise*<[*Workflow*](#workflow)\>

Workflow response from REST API


___

### updateWorkflowExecution

▸ **updateWorkflowExecution**(`workflowId`: *string*, `executionId`: *string*, `data`: [*UpdateWorkflowExecutionOptions*](#interfacestypesupdateworkflowexecutionoptionsmd)): *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Retry or end the processing of a workflow execution,
calls the PATCH /workflows/{workflowId}/executions/{executionId} endpoint.

#### Parameters:

`workflowId` *string* Id of the workflow that performs the execution  
`executionId` *string* Id of the execution to update  
`data` [*UpdateWorkflowExecutionOptions*](#interfacestypesupdateworkflowexecutionoptionsmd) -

**Returns:** *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Workflow execution response from REST API



<a name="classescredentialscredentials-1md"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [credentials](#modulescredentialsmd) / Credentials

# Class: Credentials

[credentials](#modulescredentialsmd).Credentials

Use to fetch and store credentials and to generate/cache an access token

## Hierarchy

* **Credentials**

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [apiEndpoint](#apiendpoint)
- [apiKey](#apikey)

### Methods

- [getAccessToken](#getaccesstoken)

## Constructors

### constructor

\+ **new Credentials**(`apiEndpoint`: *string*, `apiKey`: *string*, `storage?`: [*TokenStorage*](#interfacesstoragetokenstoragemd)<[*Token*](#classescredentialstokenmd)\>): [*Credentials*](#classescredentialscredentials-1md)

#### Parameters:

`apiEndpoint` *string*
`apiKey` *string*
`storage?` [*TokenStorage*](#interfacesstoragetokenstoragemd)<[*Token*](#classescredentialstokenmd)\>

**Returns:** [*Credentials*](#classescredentialscredentials-1md)


## Properties

### apiEndpoint

• `Readonly` **apiEndpoint**: *string*


___

### apiKey

• `Readonly` **apiKey**: *string*


## Methods

### getAccessToken

▸ **getAccessToken**(): *Promise*<*string*\>

Method used to get and cache an access token. Algorithm used:
1. Look for a valid token in memory.
2. Look for a valid token in the storage (if provided);
3. Fetch a new token from server and cache it (both in memory and in storage).

**Returns:** *Promise*<*string*\>



<a name="classescredentialstokenmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [credentials](#modulescredentialsmd) / Token

# Class: Token

[credentials](#modulescredentialsmd).Token

Wrapper class for an AWS Cognito token

## Hierarchy

* **Token**

## Table of contents

### Constructors

- [constructor](#constructor)

### Properties

- [accessToken](#accesstoken)
- [expiration](#expiration)
- [refreshToken](#refreshtoken)

### Methods

- [isValid](#isvalid)

## Constructors

### constructor

\+ **new Token**(`accessToken`: *string*, `expiration`: *number*, `refreshToken?`: *string*): [*Token*](#classescredentialstokenmd)

#### Parameters:

`accessToken` *string*
`expiration` *number*
`refreshToken?` *string*

**Returns:** [*Token*](#classescredentialstokenmd)


## Properties

### accessToken

• `Readonly` **accessToken**: *string*


___

### expiration

• `Readonly` **expiration**: *number*


___

### refreshToken

• `Optional` `Readonly` **refreshToken**: *undefined* \| *string*


## Methods

### isValid

▸ **isValid**(): *boolean*

Checks if current timestamp is larger than token expiration time

**Returns:** *boolean*



<a name="interfacesindexcreatedocumentoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / CreateDocumentOptions

# Interface: CreateDocumentOptions

[index](#modulesindexmd).CreateDocumentOptions

## Hierarchy

* **CreateDocumentOptions**

## Table of contents

### Properties

- [batchId](#batchid)
- [consentId](#consentid)
- [groundTruth](#groundtruth)

## Properties

### batchId

• `Optional` **batchId**: *undefined* \| *string*


___

### consentId

• `Optional` **consentId**: *undefined* \| *string*


___

### groundTruth

• `Optional` **groundTruth**: *undefined* \| [*GroundTruth*](#groundtruth)[]



<a name="interfacesindexcreatepredictionsoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / CreatePredictionsOptions

# Interface: CreatePredictionsOptions

[index](#modulesindexmd).CreatePredictionsOptions

## Hierarchy

* **CreatePredictionsOptions**

## Table of contents

### Properties

- [autoRotate](#autorotate)
- [imageQuality](#imagequality)
- [maxPages](#maxpages)

## Properties

### autoRotate

• `Optional` **autoRotate**: *undefined* \| *boolean*


___

### imageQuality

• `Optional` **imageQuality**: *undefined* \| *LOW* \| *HIGH*


___

### maxPages

• `Optional` **maxPages**: *undefined* \| *number*



<a name="interfacesindexcreatesecretoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / CreateSecretOptions

# Interface: CreateSecretOptions

[index](#modulesindexmd).CreateSecretOptions

## Hierarchy

* **CreateSecretOptions**

## Table of contents

### Properties

- [description](#description)

## Properties

### description

• `Optional` **description**: *undefined* \| *string*



<a name="interfacesindexcreatetransitionoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / CreateTransitionOptions

# Interface: CreateTransitionOptions

[index](#modulesindexmd).CreateTransitionOptions

## Hierarchy

* **CreateTransitionOptions**

## Table of contents

### Properties

- [description](#description)
- [inputJsonSchema](#inputjsonschema)
- [name](#name)
- [outputJsonSchema](#outputjsonschema)
- [parameters](#parameters)

## Properties

### description

• `Optional` **description**: *undefined* \| *null* \| *string*


___

### inputJsonSchema

• `Optional` **inputJsonSchema**: *undefined* \| *Record*<*any*, *any*\>


___

### name

• `Optional` **name**: *undefined* \| *null* \| *string*


___

### outputJsonSchema

• `Optional` **outputJsonSchema**: *undefined* \| *Record*<*any*, *any*\>


___

### parameters

• `Optional` **parameters**: *undefined* \| [*CreateTransitionDockerParams*](#createtransitiondockerparams) \| [*CreateTransitionManualParams*](#createtransitionmanualparams)



<a name="interfacesindexpaginationoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / PaginationOptions

# Interface: PaginationOptions

[index](#modulesindexmd).PaginationOptions

## Hierarchy

* **PaginationOptions**

## Table of contents

### Properties

- [maxResults](#maxresults)
- [nextToken](#nexttoken)

## Properties

### maxResults

• `Optional` **maxResults**: *undefined* \| *number*


___

### nextToken

• `Optional` **nextToken**: *undefined* \| *string*



<a name="interfacesindexupdateassetoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / UpdateAssetOptions

# Interface: UpdateAssetOptions

[index](#modulesindexmd).UpdateAssetOptions

## Hierarchy

* **UpdateAssetOptions**

## Table of contents

### Properties

- [content](#content)

## Properties

### content

• `Optional` **content**: *undefined* \| *string* \| *Buffer*



<a name="interfacesindexupdatedocumentoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / UpdateDocumentOptions

# Interface: UpdateDocumentOptions

[index](#modulesindexmd).UpdateDocumentOptions

## Hierarchy

* **UpdateDocumentOptions**

## Table of contents

### Properties

- [groundTruth](#groundtruth)

## Properties

### groundTruth

• `Optional` **groundTruth**: *undefined* \| [*GroundTruth*](#groundtruth)[]



<a name="interfacesindexupdatesecretoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / UpdateSecretOptions

# Interface: UpdateSecretOptions

[index](#modulesindexmd).UpdateSecretOptions

## Hierarchy

* **UpdateSecretOptions**

## Table of contents

### Properties

- [data](#data)
- [description](#description)
- [name](#name)

## Properties

### data

• `Optional` **data**: *undefined* \| *Record*<*any*, *any*\>


___

### description

• `Optional` **description**: *undefined* \| *null* \| *string*


___

### name

• `Optional` **name**: *undefined* \| *null* \| *string*



<a name="interfacesindexupdatetransitionexecutionmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / UpdateTransitionExecution

# Interface: UpdateTransitionExecution

[index](#modulesindexmd).UpdateTransitionExecution

## Hierarchy

* **UpdateTransitionExecution**

## Table of contents

### Properties

- [error](#error)
- [output](#output)
- [startTime](#starttime)
- [status](#status)

## Properties

### error

• `Optional` **error**: *undefined* \| { `message`: *string*  }


___

### output

• `Optional` **output**: *undefined* \| *Record*<*any*, *any*\>


___

### startTime

• `Optional` **startTime**: *undefined* \| *string*


___

### status

• **status**: *succeeded* \| *failed* \| *retry* \| *rejected*



<a name="interfacesindexupdateworkflowexecutionoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / UpdateWorkflowExecutionOptions

# Interface: UpdateWorkflowExecutionOptions

[index](#modulesindexmd).UpdateWorkflowExecutionOptions

## Hierarchy

* **UpdateWorkflowExecutionOptions**

## Table of contents

### Properties

- [nextTransitionId](#nexttransitionid)

## Properties

### nextTransitionId

• **nextTransitionId**: *string*



<a name="interfacesindexupdateworkflowoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [index](#modulesindexmd) / UpdateWorkflowOptions

# Interface: UpdateWorkflowOptions

[index](#modulesindexmd).UpdateWorkflowOptions

## Hierarchy

* **UpdateWorkflowOptions**

## Table of contents

### Properties

- [description](#description)
- [name](#name)

## Properties

### description

• `Optional` **description**: *undefined* \| *string*


___

### name

• `Optional` **name**: *undefined* \| *string*



<a name="interfacesstoragetokenstoragemd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [storage](#modulesstoragemd) / TokenStorage

# Interface: TokenStorage<T\>

[storage](#modulesstoragemd).TokenStorage

## Type parameters

`T` [*Token*](#classescredentialstokenmd)

## Hierarchy

* **TokenStorage**

## Table of contents

### Properties

- [getPersistentToken](#getpersistenttoken)
- [setPersistentToken](#setpersistenttoken)

## Properties

### getPersistentToken

• **getPersistentToken**: () => *null* \| T


___

### setPersistentToken

• **setPersistentToken**: (`value`: T) => *void*



<a name="interfacestypescreatedocumentoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [types](#modulestypesmd) / CreateDocumentOptions

# Interface: CreateDocumentOptions

[types](#modulestypesmd).CreateDocumentOptions

## Hierarchy

* **CreateDocumentOptions**

## Table of contents

### Properties

- [batchId](#batchid)
- [consentId](#consentid)
- [groundTruth](#groundtruth)

## Properties

### batchId

• `Optional` **batchId**: *undefined* \| *string*


___

### consentId

• `Optional` **consentId**: *undefined* \| *string*


___

### groundTruth

• `Optional` **groundTruth**: *undefined* \| [*GroundTruth*](#groundtruth)[]



<a name="interfacestypescreatepredictionsoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [types](#modulestypesmd) / CreatePredictionsOptions

# Interface: CreatePredictionsOptions

[types](#modulestypesmd).CreatePredictionsOptions

## Hierarchy

* **CreatePredictionsOptions**

## Table of contents

### Properties

- [autoRotate](#autorotate)
- [imageQuality](#imagequality)
- [maxPages](#maxpages)

## Properties

### autoRotate

• `Optional` **autoRotate**: *undefined* \| *boolean*


___

### imageQuality

• `Optional` **imageQuality**: *undefined* \| *LOW* \| *HIGH*


___

### maxPages

• `Optional` **maxPages**: *undefined* \| *number*



<a name="interfacestypescreatesecretoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [types](#modulestypesmd) / CreateSecretOptions

# Interface: CreateSecretOptions

[types](#modulestypesmd).CreateSecretOptions

## Hierarchy

* **CreateSecretOptions**

## Table of contents

### Properties

- [description](#description)

## Properties

### description

• `Optional` **description**: *undefined* \| *string*



<a name="interfacestypescreatetransitionoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [types](#modulestypesmd) / CreateTransitionOptions

# Interface: CreateTransitionOptions

[types](#modulestypesmd).CreateTransitionOptions

## Hierarchy

* **CreateTransitionOptions**

## Table of contents

### Properties

- [description](#description)
- [inputJsonSchema](#inputjsonschema)
- [name](#name)
- [outputJsonSchema](#outputjsonschema)
- [parameters](#parameters)

## Properties

### description

• `Optional` **description**: *undefined* \| *null* \| *string*


___

### inputJsonSchema

• `Optional` **inputJsonSchema**: *undefined* \| *Record*<*any*, *any*\>


___

### name

• `Optional` **name**: *undefined* \| *null* \| *string*


___

### outputJsonSchema

• `Optional` **outputJsonSchema**: *undefined* \| *Record*<*any*, *any*\>


___

### parameters

• `Optional` **parameters**: *undefined* \| [*CreateTransitionDockerParams*](#createtransitiondockerparams) \| [*CreateTransitionManualParams*](#createtransitionmanualparams)



<a name="interfacestypespaginationoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [types](#modulestypesmd) / PaginationOptions

# Interface: PaginationOptions

[types](#modulestypesmd).PaginationOptions

## Hierarchy

* **PaginationOptions**

## Table of contents

### Properties

- [maxResults](#maxresults)
- [nextToken](#nexttoken)

## Properties

### maxResults

• `Optional` **maxResults**: *undefined* \| *number*


___

### nextToken

• `Optional` **nextToken**: *undefined* \| *string*



<a name="interfacestypesupdateassetoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [types](#modulestypesmd) / UpdateAssetOptions

# Interface: UpdateAssetOptions

[types](#modulestypesmd).UpdateAssetOptions

## Hierarchy

* **UpdateAssetOptions**

## Table of contents

### Properties

- [content](#content)

## Properties

### content

• `Optional` **content**: *undefined* \| *string* \| *Buffer*



<a name="interfacestypesupdatedocumentoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [types](#modulestypesmd) / UpdateDocumentOptions

# Interface: UpdateDocumentOptions

[types](#modulestypesmd).UpdateDocumentOptions

## Hierarchy

* **UpdateDocumentOptions**

## Table of contents

### Properties

- [groundTruth](#groundtruth)

## Properties

### groundTruth

• `Optional` **groundTruth**: *undefined* \| [*GroundTruth*](#groundtruth)[]



<a name="interfacestypesupdatesecretoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [types](#modulestypesmd) / UpdateSecretOptions

# Interface: UpdateSecretOptions

[types](#modulestypesmd).UpdateSecretOptions

## Hierarchy

* **UpdateSecretOptions**

## Table of contents

### Properties

- [data](#data)
- [description](#description)
- [name](#name)

## Properties

### data

• `Optional` **data**: *undefined* \| *Record*<*any*, *any*\>


___

### description

• `Optional` **description**: *undefined* \| *null* \| *string*


___

### name

• `Optional` **name**: *undefined* \| *null* \| *string*



<a name="interfacestypesupdatetransitionexecutionmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [types](#modulestypesmd) / UpdateTransitionExecution

# Interface: UpdateTransitionExecution

[types](#modulestypesmd).UpdateTransitionExecution

## Hierarchy

* **UpdateTransitionExecution**

## Table of contents

### Properties

- [error](#error)
- [output](#output)
- [startTime](#starttime)
- [status](#status)

## Properties

### error

• `Optional` **error**: *undefined* \| { `message`: *string*  }


___

### output

• `Optional` **output**: *undefined* \| *Record*<*any*, *any*\>


___

### startTime

• `Optional` **startTime**: *undefined* \| *string*


___

### status

• **status**: *succeeded* \| *failed* \| *retry* \| *rejected*



<a name="interfacestypesupdateworkflowexecutionoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [types](#modulestypesmd) / UpdateWorkflowExecutionOptions

# Interface: UpdateWorkflowExecutionOptions

[types](#modulestypesmd).UpdateWorkflowExecutionOptions

## Hierarchy

* **UpdateWorkflowExecutionOptions**

## Table of contents

### Properties

- [nextTransitionId](#nexttransitionid)

## Properties

### nextTransitionId

• **nextTransitionId**: *string*



<a name="interfacestypesupdateworkflowoptionsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [types](#modulestypesmd) / UpdateWorkflowOptions

# Interface: UpdateWorkflowOptions

[types](#modulestypesmd).UpdateWorkflowOptions

## Hierarchy

* **UpdateWorkflowOptions**

## Table of contents

### Properties

- [description](#description)
- [name](#name)

## Properties

### description

• `Optional` **description**: *undefined* \| *string*


___

### name

• `Optional` **name**: *undefined* \| *string*



<a name="modulesmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / Exports

# @lucidtech/las-sdk-core

## Table of contents

### Modules

- [client](#modulesclientmd)
- [credentials](#modulescredentialsmd)
- [index](#modulesindexmd)
- [storage](#modulesstoragemd)
- [types](#modulestypesmd)


<a name="modulesclientmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / client

# Module: client

## Table of contents

### References

- [default](#default)

### Classes

- [Client](#classesclientclient-1md)

## References

### default

Renames and exports: [Client](#classesclientclient-1md)


<a name="modulescredentialsmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / credentials

# Module: credentials

## Table of contents

### Classes

- [Credentials](#classescredentialscredentials-1md)
- [Token](#classescredentialstokenmd)


<a name="modulesindexmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / index

# Module: index

## Table of contents

### References

- [Client](#client)
- [Credentials](#credentials)
- [Token](#token)
- [TokenStorage](#tokenstorage)

### Interfaces

- [CreateDocumentOptions](#interfacesindexcreatedocumentoptionsmd)
- [CreatePredictionsOptions](#interfacesindexcreatepredictionsoptionsmd)
- [CreateSecretOptions](#interfacesindexcreatesecretoptionsmd)
- [CreateTransitionOptions](#interfacesindexcreatetransitionoptionsmd)
- [PaginationOptions](#interfacesindexpaginationoptionsmd)
- [UpdateAssetOptions](#interfacesindexupdateassetoptionsmd)
- [UpdateDocumentOptions](#interfacesindexupdatedocumentoptionsmd)
- [UpdateSecretOptions](#interfacesindexupdatesecretoptionsmd)
- [UpdateTransitionExecution](#interfacesindexupdatetransitionexecutionmd)
- [UpdateWorkflowExecutionOptions](#interfacesindexupdateworkflowexecutionoptionsmd)
- [UpdateWorkflowOptions](#interfacesindexupdateworkflowoptionsmd)

### Type aliases

- [AppClient](#appclient)
- [AppClientList](#appclientlist)
- [Asset](#asset)
- [AssetList](#assetlist)
- [AssetWithoutContent](#assetwithoutcontent)
- [AuthorizationHeaders](#authorizationheaders)
- [AxiosFn](#axiosfn)
- [Batch](#batch)
- [BatchList](#batchlist)
- [ContentType](#contenttype)
- [CreateBatchOptions](#createbatchoptions)
- [CreateTransitionDockerParams](#createtransitiondockerparams)
- [CreateTransitionManualParams](#createtransitionmanualparams)
- [CreateTransitionParams](#createtransitionparams)
- [CreateUserOptions](#createuseroptions)
- [CreateWorkflowOptions](#createworkflowoptions)
- [DeleteDocumentOptions](#deletedocumentoptions)
- [Field](#field)
- [GroundTruth](#groundtruth)
- [LasDocument](#lasdocument)
- [LasDocumentList](#lasdocumentlist)
- [LasDocumentWithoutContent](#lasdocumentwithoutcontent)
- [ListAppClientsOptions](#listappclientsoptions)
- [ListAssetsOptions](#listassetsoptions)
- [ListBatchesOptions](#listbatchesoptions)
- [ListDocumentsOptions](#listdocumentsoptions)
- [ListModelsOptions](#listmodelsoptions)
- [ListPredictionsOptions](#listpredictionsoptions)
- [ListSecretsOptions](#listsecretsoptions)
- [ListTransitionOptions](#listtransitionoptions)
- [ListUsersOptions](#listusersoptions)
- [ListWorkflowExecutionsOptions](#listworkflowexecutionsoptions)
- [ListWorkflowOptions](#listworkflowoptions)
- [Log](#log)
- [Model](#model)
- [ModelList](#modellist)
- [PostPredictions](#postpredictions)
- [Prediction](#prediction)
- [PredictionList](#predictionlist)
- [PredictionResponse](#predictionresponse)
- [PreprocessConfig](#preprocessconfig)
- [Secret](#secret)
- [SecretList](#secretlist)
- [Transition](#transition)
- [TransitionExecution](#transitionexecution)
- [TransitionExecutionList](#transitionexecutionlist)
- [TransitionExecutionListOptions](#transitionexecutionlistoptions)
- [TransitionList](#transitionlist)
- [TransitionType](#transitiontype)
- [UpdateTransitionOptions](#updatetransitionoptions)
- [UpdateUserOptions](#updateuseroptions)
- [User](#user)
- [UserList](#userlist)
- [Workflow](#workflow)
- [WorkflowExecution](#workflowexecution)
- [WorkflowExecutionList](#workflowexecutionlist)
- [WorkflowList](#workflowlist)
- [WorkflowSpecification](#workflowspecification)

## References

### Client

Re-exports: [Client](#classesclientclient-1md)

___

### Credentials

Re-exports: [Credentials](#classescredentialscredentials-1md)

___

### Token

Re-exports: [Token](#classescredentialstokenmd)

___

### TokenStorage

Re-exports: [TokenStorage](#interfacesstoragetokenstoragemd)

## Type aliases

### AppClient

Ƭ **AppClient**: { `apiKey`: *string* ; `appClientId`: *string* ; `callbackUrls`: *string*[] \| *null* ; `clientId`: *string* ; `clientSecret?`: *string* ; `createdTime`: *string* \| *null* ; `description`: *string* \| *null* ; `hasSecret`: *boolean* ; `logoutUrls`: *string*[] \| *null* ; `name`: *string* \| *null*  }

#### Type declaration:

`apiKey` *string*
`appClientId` *string*
`callbackUrls` *string*[] \| *null*
`clientId` *string*
`clientSecret?` *string*
`createdTime` *string* \| *null*
`description` *string* \| *null*
`hasSecret` *boolean*
`logoutUrls` *string*[] \| *null*
`name` *string* \| *null*


___

### AppClientList

Ƭ **AppClientList**: { `appClients`: [*AppClient*](#appclient)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

`appClients` [*AppClient*](#appclient)[]
`nextToken` *string* \| *null*


___

### Asset

Ƭ **Asset**: { `assetId`: *string* ; `content`: *string*  }

#### Type declaration:

`assetId` *string*
`content` *string*


___

### AssetList

Ƭ **AssetList**: { `assets`: [*AssetWithoutContent*](#assetwithoutcontent)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

`assets` [*AssetWithoutContent*](#assetwithoutcontent)[]
`nextToken` *string* \| *null*


___

### AssetWithoutContent

Ƭ **AssetWithoutContent**: *Omit*<[*Asset*](#asset), *content*\>


___

### AuthorizationHeaders

Ƭ **AuthorizationHeaders**: { `Authorization`: *string* ; `X-Api-Key`: *string*  }

#### Type declaration:

`Authorization` *string*
`X-Api-Key` *string*


___

### AxiosFn

Ƭ **AxiosFn**: <T, R\>(`url`: *string*, `body?`: *any*, `config?`: AxiosRequestConfig) => *Promise*<R\>


___

### Batch

Ƭ **Batch**: { `batchId`: *string* ; `containsPersonallyIdentifiableInformation`: *boolean* ; `createdTime`: *string* ; `description`: *string* ; `name`: *string* ; `numDocuments`: *number* ; `retentionInDays`: *number* ; `storageLocation`: *EU*  }

#### Type declaration:

`batchId` *string*
`containsPersonallyIdentifiableInformation` *boolean*
`createdTime` *string*
`description` *string*
`name` *string*
`numDocuments` *number*
`retentionInDays` *number*
`storageLocation` *EU*


___

### BatchList

Ƭ **BatchList**: { `batches`: [*Batch*](#batch)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

`batches` [*Batch*](#batch)[]
`nextToken` *string* \| *null*


___

### ContentType

Ƭ **ContentType**: *application/pdf* \| *image/jpeg* \| *image/png* \| *image/tiff*


___

### CreateBatchOptions

Ƭ **CreateBatchOptions**: { `containsPersonallyIdentifiableInformation?`: *boolean* ; `description?`: *string* ; `name?`: *string*  }

#### Type declaration:

`containsPersonallyIdentifiableInformation?` *boolean*
`description?` *string*
`name?` *string*


___

### CreateTransitionDockerParams

Ƭ **CreateTransitionDockerParams**: { `cpu?`: *256* ; `credentials?`: { `password`: *string* ; `username`: *string*  } ; `environment?`: *object* ; `imageUrl`: *string* ; `memory?`: *512* \| *1024* \| *2048*  }

#### Type declaration:

`cpu?` *256*
`credentials?` { `password`: *string* ; `username`: *string*  }
`environment?` *object*
`imageUrl` *string*
`memory?` *512* \| *1024* \| *2048*


___

### CreateTransitionManualParams

Ƭ **CreateTransitionManualParams**: { `assets?`: { `jsRemoteComponent?`: *string*  } & *Record*<*string*, *string*\>  }

#### Type declaration:

`assets?` { `jsRemoteComponent?`: *string*  } & *Record*<*string*, *string*\>


___

### CreateTransitionParams

Ƭ **CreateTransitionParams**: [*CreateTransitionDockerParams*](#createtransitiondockerparams) \| [*CreateTransitionManualParams*](#createtransitionmanualparams)


___

### CreateUserOptions

Ƭ **CreateUserOptions**: { `avatar?`: *string* \| *null* ; `name?`: *string* \| *null*  }

#### Type declaration:

`avatar?` *string* \| *null*
`name?` *string* \| *null*


___

### CreateWorkflowOptions

Ƭ **CreateWorkflowOptions**: { `description?`: *string* ; `errorConfig?`: { `email`: *string*  }  }

#### Type declaration:

`description?` *string*
`errorConfig?` { `email`: *string*  }


___

### DeleteDocumentOptions

Ƭ **DeleteDocumentOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `batchId?`: *string* \| *string*[] ; `consentId?`: *string* \| *string*[]  }


___

### Field

Ƭ **Field**: { `description`: *string* ; `maxLength`: *number* ; `type`: *all* \| *alphanum* \| *alphanumext* \| *amount* \| *date* \| *letter* \| *number* \| *phone*  }

#### Type declaration:

`description` *string*
`maxLength` *number*
`type` *all* \| *alphanum* \| *alphanumext* \| *amount* \| *date* \| *letter* \| *number* \| *phone*


___

### GroundTruth

Ƭ **GroundTruth**: { `label`: *string* ; `value`: *string* \| *boolean* \| *null*  }

#### Type declaration:

`label` *string* maxLength: 36, minLength: 1, pattern: ^[0-9A-Za-z_]+$  
`value` *string* \| *boolean* \| *null* maxLength: 64, minLength: 1  


___

### LasDocument

Ƭ **LasDocument**: { `batchId?`: *string* ; `consentId?`: *string* ; `content`: *string* ; `contentType`: [*ContentType*](#contenttype) ; `documentId`: *string* ; `groundTruth?`: [*GroundTruth*](#groundtruth)[]  }

#### Type declaration:

`batchId?` *string* pattern: ^las:batch:[a-f0-9]{32}$  
`consentId?` *string* pattern: ^las:consent:[a-f0-9]{32}$  
`content` *string* minimum: 1  
`contentType` [*ContentType*](#contenttype) -
`documentId` *string* pattern: ^las:document:[a-f0-9]{32}$  
`groundTruth?` [*GroundTruth*](#groundtruth)[] -


___

### LasDocumentList

Ƭ **LasDocumentList**: { `batchId?`: *string* ; `documents`: [*LasDocumentWithoutContent*](#lasdocumentwithoutcontent)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

`batchId?` *string*
`documents` [*LasDocumentWithoutContent*](#lasdocumentwithoutcontent)[]
`nextToken` *string* \| *null*


___

### LasDocumentWithoutContent

Ƭ **LasDocumentWithoutContent**: *Omit*<[*LasDocument*](#lasdocument), *content*\>


___

### ListAppClientsOptions

Ƭ **ListAppClientsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListAssetsOptions

Ƭ **ListAssetsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListBatchesOptions

Ƭ **ListBatchesOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListDocumentsOptions

Ƭ **ListDocumentsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `batchId?`: *string* \| *string*[] ; `consentId?`: *string* \| *string*[]  }


___

### ListModelsOptions

Ƭ **ListModelsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListPredictionsOptions

Ƭ **ListPredictionsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListSecretsOptions

Ƭ **ListSecretsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListTransitionOptions

Ƭ **ListTransitionOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `transitionType?`: *string* \| *string*[]  }


___

### ListUsersOptions

Ƭ **ListUsersOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListWorkflowExecutionsOptions

Ƭ **ListWorkflowExecutionsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `order?`: *ascending* \| *descending* ; `sortBy?`: *startTime* \| *endTime* ; `status?`: *string* \| *string*[]  }


___

### ListWorkflowOptions

Ƭ **ListWorkflowOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### Log

Ƭ **Log**: { `events`: *Record*<*any*, *any*\>[] ; `logId`: *string* ; `transitionId?`: *string* \| *null*  }

#### Type declaration:

`events` *Record*<*any*, *any*\>[]
`logId` *string*
`transitionId?` *string* \| *null*


___

### Model

Ƭ **Model**: { `createdTime`: *string* \| *null* ; `description`: *string* \| *null* ; `fieldConfig`: *Record*<*string*, [*Field*](#field)\> \| *null* ; `height`: *number* ; `modelId`: *string* ; `name`: *string* \| *null* ; `preprocessConfig`: [*PreprocessConfig*](#preprocessconfig) ; `status`: *active* \| *training* ; `updatedTime`: *string* \| *null* ; `width`: *number*  }

#### Type declaration:

`createdTime` *string* \| *null*
`description` *string* \| *null*
`fieldConfig` *Record*<*string*, [*Field*](#field)\> \| *null*
`height` *number*
`modelId` *string*
`name` *string* \| *null*
`preprocessConfig` [*PreprocessConfig*](#preprocessconfig)
`status` *active* \| *training*
`updatedTime` *string* \| *null*
`width` *number*


___

### ModelList

Ƭ **ModelList**: { `models`: [*Model*](#model)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

`models` [*Model*](#model)[]
`nextToken` *string* \| *null*


___

### PostPredictions

Ƭ **PostPredictions**: [*CreatePredictionsOptions*](#interfacestypescreatepredictionsoptionsmd) & { `documentId`: *string* ; `modelId`: *string*  }


___

### Prediction

Ƭ **Prediction**: [*GroundTruth*](#groundtruth) & { `confidence`: *number*  }


___

### PredictionList

Ƭ **PredictionList**: { `nextToken`: *string* \| *null* ; `predictions`: [*PredictionResponse*](#predictionresponse)[]  }

#### Type declaration:

`nextToken` *string* \| *null*
`predictions` [*PredictionResponse*](#predictionresponse)[]


___

### PredictionResponse

Ƭ **PredictionResponse**: { `documentId`: *string* ; `inferenceTime`: *number* ; `modelId`: *string* ; `predictionId`: *string* ; `predictions`: [*Prediction*](#prediction)[] ; `timestamp`: *number*  }

#### Type declaration:

`documentId` *string*
`inferenceTime` *number*
`modelId` *string*
`predictionId` *string*
`predictions` [*Prediction*](#prediction)[]
`timestamp` *number*


___

### PreprocessConfig

Ƭ **PreprocessConfig**: { `autoRotate`: *boolean* ; `imageQuality`: *LOW* \| *HIGH* ; `maxPages`: *number*  }

#### Type declaration:

`autoRotate` *boolean*
`imageQuality` *LOW* \| *HIGH*
`maxPages` *number*


___

### Secret

Ƭ **Secret**: { `description`: *string* \| *null* ; `name`: *string* \| *null* ; `secredId`: *string*  }

#### Type declaration:

`description` *string* \| *null*
`name` *string* \| *null*
`secredId` *string*


___

### SecretList

Ƭ **SecretList**: { `nextToken`: *string* \| *null* ; `secrets`: [*Secret*](#secret)[]  }

#### Type declaration:

`nextToken` *string* \| *null*
`secrets` [*Secret*](#secret)[]


___

### Transition

Ƭ **Transition**: { `assets?`: *Record*<*string*, *string*\> ; `description`: *string* ; `inputJsonSchema`: *unknown* ; `name`: *string* ; `outputJsonSchema?`: *unknown* ; `parameters`: *Record*<*string*, *any*\> ; `transitionId`: *string* ; `transitionType`: [*TransitionType*](#transitiontype)  }

#### Type declaration:

`assets?` *Record*<*string*, *string*\>
`description` *string*
`inputJsonSchema` *unknown*
`name` *string*
`outputJsonSchema?` *unknown*
`parameters` *Record*<*string*, *any*\>
`transitionId` *string*
`transitionType` [*TransitionType*](#transitiontype)


___

### TransitionExecution

Ƭ **TransitionExecution**: { `completedBy`: *string* \| *null* ; `endTime`: *string* \| *null* ; `executionId`: *string* ; `input`: *Record*<*any*, *any*\> ; `logId`: *string* \| *null* ; `startTime`: *string* \| *null* ; `status`: *succeeded* \| *failed* \| *retry* \| *running* \| *rejected* ; `transitionId`: *string*  }

#### Type declaration:

`completedBy` *string* \| *null*
`endTime` *string* \| *null*
`executionId` *string*
`input` *Record*<*any*, *any*\>
`logId` *string* \| *null*
`startTime` *string* \| *null*
`status` *succeeded* \| *failed* \| *retry* \| *running* \| *rejected*
`transitionId` *string*


___

### TransitionExecutionList

Ƭ **TransitionExecutionList**: { `executions`: [*TransitionExecution*](#transitionexecution)[] ; `nextToken`: *string* \| *null* ; `transitionId`: *string*  }

#### Type declaration:

`executions` [*TransitionExecution*](#transitionexecution)[]
`nextToken` *string* \| *null*
`transitionId` *string*


___

### TransitionExecutionListOptions

Ƭ **TransitionExecutionListOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `executionId?`: *string* \| *string*[] ; `order?`: *ascending* \| *descending* ; `sortBy?`: *startTime* \| *endTime* ; `status?`: *succeeded* \| *failed* \| *retry* \| *running* \| *rejected*  }


___

### TransitionList

Ƭ **TransitionList**: { `nextToken`: *string* \| *null* ; `transitions`: [*Transition*](#transition)[]  }

#### Type declaration:

`nextToken` *string* \| *null*
`transitions` [*Transition*](#transition)[]


___

### TransitionType

Ƭ **TransitionType**: *docker* \| *manual*


___

### UpdateTransitionOptions

Ƭ **UpdateTransitionOptions**: { `description?`: *string* ; `inputJsonSchema?`: *Record*<*any*, *any*\> ; `name?`: *string* ; `outputJsonSchema?`: *Record*<*any*, *any*\>  }

#### Type declaration:

`description?` *string*
`inputJsonSchema?` *Record*<*any*, *any*\>
`name?` *string*
`outputJsonSchema?` *Record*<*any*, *any*\>


___

### UpdateUserOptions

Ƭ **UpdateUserOptions**: { `avatar?`: *string* \| *null* ; `name?`: *string* \| *null*  }

#### Type declaration:

`avatar?` *string* \| *null*
`name?` *string* \| *null*


___

### User

Ƭ **User**: { `avatar`: *string* \| *null* ; `email`: *string* ; `name`: *string* \| *null* ; `userId`: *string*  }

#### Type declaration:

`avatar` *string* \| *null*
`email` *string*
`name` *string* \| *null*
`userId` *string*


___

### UserList

Ƭ **UserList**: { `nextToken`: *string* \| *null* ; `users`: [*User*](#user)[]  }

#### Type declaration:

`nextToken` *string* \| *null*
`users` [*User*](#user)[]


___

### Workflow

Ƭ **Workflow**: { `description?`: *string* ; `name`: *string* ; `workflowId`: *string*  }

#### Type declaration:

`description?` *string*
`name` *string*
`workflowId` *string*


___

### WorkflowExecution

Ƭ **WorkflowExecution**: { `completedBy`: *string*[] ; `endTime`: *string* \| *null* ; `executionId`: *string* ; `input`: *Record*<*any*, *any*\> ; `logId`: *string* \| *null* ; `output`: *Record*<*any*, *any*\> ; `startTime`: *string* \| *null* ; `status`: *succeeded* \| *failed* \| *running* \| *rejected* \| *retry* \| *error* ; `transitionExecutions`: *Record*<*string*, *string*[]\> \| *null* ; `workflowId`: *string*  }

#### Type declaration:

`completedBy` *string*[]
`endTime` *string* \| *null*
`executionId` *string*
`input` *Record*<*any*, *any*\>
`logId` *string* \| *null*
`output` *Record*<*any*, *any*\>
`startTime` *string* \| *null*
`status` *succeeded* \| *failed* \| *running* \| *rejected* \| *retry* \| *error*
`transitionExecutions` *Record*<*string*, *string*[]\> \| *null*
`workflowId` *string*


___

### WorkflowExecutionList

Ƭ **WorkflowExecutionList**: { `executions`: *Required*<[*WorkflowExecution*](#workflowexecution)\>[] ; `nextToken`: *string* \| *null* ; `status?`: *succeeded* \| *failed* \| *running* \| *rejected* ; `workflowId`: *string*  }

#### Type declaration:

`executions` *Required*<[*WorkflowExecution*](#workflowexecution)\>[]
`nextToken` *string* \| *null*
`status?` *succeeded* \| *failed* \| *running* \| *rejected*
`workflowId` *string*


___

### WorkflowList

Ƭ **WorkflowList**: { `workflows`: [*Workflow*](#workflow)[]  }

#### Type declaration:

`workflows` [*Workflow*](#workflow)[]


___

### WorkflowSpecification

Ƭ **WorkflowSpecification**: { `definition`: *object* ; `language?`: *ASL* ; `version?`: *1.0.0*  }

#### Type declaration:

`definition` *object*
`language?` *ASL*
`version?` *1.0.0*



<a name="modulesstoragemd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / storage

# Module: storage

## Table of contents

### Interfaces

- [TokenStorage](#interfacesstoragetokenstoragemd)


<a name="modulestypesmd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / types

# Module: types

## Table of contents

### Interfaces

- [CreateDocumentOptions](#interfacestypescreatedocumentoptionsmd)
- [CreatePredictionsOptions](#interfacestypescreatepredictionsoptionsmd)
- [CreateSecretOptions](#interfacestypescreatesecretoptionsmd)
- [CreateTransitionOptions](#interfacestypescreatetransitionoptionsmd)
- [PaginationOptions](#interfacestypespaginationoptionsmd)
- [UpdateAssetOptions](#interfacestypesupdateassetoptionsmd)
- [UpdateDocumentOptions](#interfacestypesupdatedocumentoptionsmd)
- [UpdateSecretOptions](#interfacestypesupdatesecretoptionsmd)
- [UpdateTransitionExecution](#interfacestypesupdatetransitionexecutionmd)
- [UpdateWorkflowExecutionOptions](#interfacestypesupdateworkflowexecutionoptionsmd)
- [UpdateWorkflowOptions](#interfacestypesupdateworkflowoptionsmd)

### Type aliases

- [AppClient](#appclient)
- [AppClientList](#appclientlist)
- [Asset](#asset)
- [AssetList](#assetlist)
- [AssetWithoutContent](#assetwithoutcontent)
- [AuthorizationHeaders](#authorizationheaders)
- [AxiosFn](#axiosfn)
- [Batch](#batch)
- [BatchList](#batchlist)
- [ContentType](#contenttype)
- [CreateBatchOptions](#createbatchoptions)
- [CreateTransitionDockerParams](#createtransitiondockerparams)
- [CreateTransitionManualParams](#createtransitionmanualparams)
- [CreateTransitionParams](#createtransitionparams)
- [CreateUserOptions](#createuseroptions)
- [CreateWorkflowOptions](#createworkflowoptions)
- [DeleteDocumentOptions](#deletedocumentoptions)
- [Field](#field)
- [GroundTruth](#groundtruth)
- [LasDocument](#lasdocument)
- [LasDocumentList](#lasdocumentlist)
- [LasDocumentWithoutContent](#lasdocumentwithoutcontent)
- [ListAppClientsOptions](#listappclientsoptions)
- [ListAssetsOptions](#listassetsoptions)
- [ListBatchesOptions](#listbatchesoptions)
- [ListDocumentsOptions](#listdocumentsoptions)
- [ListModelsOptions](#listmodelsoptions)
- [ListPredictionsOptions](#listpredictionsoptions)
- [ListSecretsOptions](#listsecretsoptions)
- [ListTransitionOptions](#listtransitionoptions)
- [ListUsersOptions](#listusersoptions)
- [ListWorkflowExecutionsOptions](#listworkflowexecutionsoptions)
- [ListWorkflowOptions](#listworkflowoptions)
- [Log](#log)
- [Model](#model)
- [ModelList](#modellist)
- [PostPredictions](#postpredictions)
- [Prediction](#prediction)
- [PredictionList](#predictionlist)
- [PredictionResponse](#predictionresponse)
- [PreprocessConfig](#preprocessconfig)
- [Secret](#secret)
- [SecretList](#secretlist)
- [Transition](#transition)
- [TransitionExecution](#transitionexecution)
- [TransitionExecutionList](#transitionexecutionlist)
- [TransitionExecutionListOptions](#transitionexecutionlistoptions)
- [TransitionList](#transitionlist)
- [TransitionType](#transitiontype)
- [UpdateTransitionOptions](#updatetransitionoptions)
- [UpdateUserOptions](#updateuseroptions)
- [User](#user)
- [UserList](#userlist)
- [Workflow](#workflow)
- [WorkflowExecution](#workflowexecution)
- [WorkflowExecutionList](#workflowexecutionlist)
- [WorkflowList](#workflowlist)
- [WorkflowSpecification](#workflowspecification)

## Type aliases

### AppClient

Ƭ **AppClient**: { `apiKey`: *string* ; `appClientId`: *string* ; `callbackUrls`: *string*[] \| *null* ; `clientId`: *string* ; `clientSecret?`: *string* ; `createdTime`: *string* \| *null* ; `description`: *string* \| *null* ; `hasSecret`: *boolean* ; `logoutUrls`: *string*[] \| *null* ; `name`: *string* \| *null*  }

#### Type declaration:

`apiKey` *string*
`appClientId` *string*
`callbackUrls` *string*[] \| *null*
`clientId` *string*
`clientSecret?` *string*
`createdTime` *string* \| *null*
`description` *string* \| *null*
`hasSecret` *boolean*
`logoutUrls` *string*[] \| *null*
`name` *string* \| *null*


___

### AppClientList

Ƭ **AppClientList**: { `appClients`: [*AppClient*](#appclient)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

`appClients` [*AppClient*](#appclient)[]
`nextToken` *string* \| *null*


___

### Asset

Ƭ **Asset**: { `assetId`: *string* ; `content`: *string*  }

#### Type declaration:

`assetId` *string*
`content` *string*


___

### AssetList

Ƭ **AssetList**: { `assets`: [*AssetWithoutContent*](#assetwithoutcontent)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

`assets` [*AssetWithoutContent*](#assetwithoutcontent)[]
`nextToken` *string* \| *null*


___

### AssetWithoutContent

Ƭ **AssetWithoutContent**: *Omit*<[*Asset*](#asset), *content*\>


___

### AuthorizationHeaders

Ƭ **AuthorizationHeaders**: { `Authorization`: *string* ; `X-Api-Key`: *string*  }

#### Type declaration:

`Authorization` *string*
`X-Api-Key` *string*


___

### AxiosFn

Ƭ **AxiosFn**: <T, R\>(`url`: *string*, `body?`: *any*, `config?`: AxiosRequestConfig) => *Promise*<R\>


___

### Batch

Ƭ **Batch**: { `batchId`: *string* ; `containsPersonallyIdentifiableInformation`: *boolean* ; `createdTime`: *string* ; `description`: *string* ; `name`: *string* ; `numDocuments`: *number* ; `retentionInDays`: *number* ; `storageLocation`: *EU*  }

#### Type declaration:

`batchId` *string*
`containsPersonallyIdentifiableInformation` *boolean*
`createdTime` *string*
`description` *string*
`name` *string*
`numDocuments` *number*
`retentionInDays` *number*
`storageLocation` *EU*


___

### BatchList

Ƭ **BatchList**: { `batches`: [*Batch*](#batch)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

`batches` [*Batch*](#batch)[]
`nextToken` *string* \| *null*


___

### ContentType

Ƭ **ContentType**: *application/pdf* \| *image/jpeg* \| *image/png* \| *image/tiff*


___

### CreateBatchOptions

Ƭ **CreateBatchOptions**: { `containsPersonallyIdentifiableInformation?`: *boolean* ; `description?`: *string* ; `name?`: *string*  }

#### Type declaration:

`containsPersonallyIdentifiableInformation?` *boolean*
`description?` *string*
`name?` *string*


___

### CreateTransitionDockerParams

Ƭ **CreateTransitionDockerParams**: { `cpu?`: *256* ; `credentials?`: { `password`: *string* ; `username`: *string*  } ; `environment?`: *object* ; `imageUrl`: *string* ; `memory?`: *512* \| *1024* \| *2048*  }

#### Type declaration:

`cpu?` *256*
`credentials?` { `password`: *string* ; `username`: *string*  }
`environment?` *object*
`imageUrl` *string*
`memory?` *512* \| *1024* \| *2048*


___

### CreateTransitionManualParams

Ƭ **CreateTransitionManualParams**: { `assets?`: { `jsRemoteComponent?`: *string*  } & *Record*<*string*, *string*\>  }

#### Type declaration:

`assets?` { `jsRemoteComponent?`: *string*  } & *Record*<*string*, *string*\>


___

### CreateTransitionParams

Ƭ **CreateTransitionParams**: [*CreateTransitionDockerParams*](#createtransitiondockerparams) \| [*CreateTransitionManualParams*](#createtransitionmanualparams)


___

### CreateUserOptions

Ƭ **CreateUserOptions**: { `avatar?`: *string* \| *null* ; `name?`: *string* \| *null*  }

#### Type declaration:

`avatar?` *string* \| *null*
`name?` *string* \| *null*


___

### CreateWorkflowOptions

Ƭ **CreateWorkflowOptions**: { `description?`: *string* ; `errorConfig?`: { `email`: *string*  }  }

#### Type declaration:

`description?` *string*
`errorConfig?` { `email`: *string*  }


___

### DeleteDocumentOptions

Ƭ **DeleteDocumentOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `batchId?`: *string* \| *string*[] ; `consentId?`: *string* \| *string*[]  }


___

### Field

Ƭ **Field**: { `description`: *string* ; `maxLength`: *number* ; `type`: *all* \| *alphanum* \| *alphanumext* \| *amount* \| *date* \| *letter* \| *number* \| *phone*  }

#### Type declaration:

`description` *string*
`maxLength` *number*
`type` *all* \| *alphanum* \| *alphanumext* \| *amount* \| *date* \| *letter* \| *number* \| *phone*


___

### GroundTruth

Ƭ **GroundTruth**: { `label`: *string* ; `value`: *string* \| *boolean* \| *null*  }

#### Type declaration:

`label` *string* maxLength: 36, minLength: 1, pattern: ^[0-9A-Za-z_]+$  
`value` *string* \| *boolean* \| *null* maxLength: 64, minLength: 1  


___

### LasDocument

Ƭ **LasDocument**: { `batchId?`: *string* ; `consentId?`: *string* ; `content`: *string* ; `contentType`: [*ContentType*](#contenttype) ; `documentId`: *string* ; `groundTruth?`: [*GroundTruth*](#groundtruth)[]  }

#### Type declaration:

`batchId?` *string* pattern: ^las:batch:[a-f0-9]{32}$  
`consentId?` *string* pattern: ^las:consent:[a-f0-9]{32}$  
`content` *string* minimum: 1  
`contentType` [*ContentType*](#contenttype) -
`documentId` *string* pattern: ^las:document:[a-f0-9]{32}$  
`groundTruth?` [*GroundTruth*](#groundtruth)[] -


___

### LasDocumentList

Ƭ **LasDocumentList**: { `batchId?`: *string* ; `documents`: [*LasDocumentWithoutContent*](#lasdocumentwithoutcontent)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

`batchId?` *string*
`documents` [*LasDocumentWithoutContent*](#lasdocumentwithoutcontent)[]
`nextToken` *string* \| *null*


___

### LasDocumentWithoutContent

Ƭ **LasDocumentWithoutContent**: *Omit*<[*LasDocument*](#lasdocument), *content*\>


___

### ListAppClientsOptions

Ƭ **ListAppClientsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListAssetsOptions

Ƭ **ListAssetsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListBatchesOptions

Ƭ **ListBatchesOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListDocumentsOptions

Ƭ **ListDocumentsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `batchId?`: *string* \| *string*[] ; `consentId?`: *string* \| *string*[]  }


___

### ListModelsOptions

Ƭ **ListModelsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListPredictionsOptions

Ƭ **ListPredictionsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListSecretsOptions

Ƭ **ListSecretsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListTransitionOptions

Ƭ **ListTransitionOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `transitionType?`: *string* \| *string*[]  }


___

### ListUsersOptions

Ƭ **ListUsersOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### ListWorkflowExecutionsOptions

Ƭ **ListWorkflowExecutionsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `order?`: *ascending* \| *descending* ; `sortBy?`: *startTime* \| *endTime* ; `status?`: *string* \| *string*[]  }


___

### ListWorkflowOptions

Ƭ **ListWorkflowOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)


___

### Log

Ƭ **Log**: { `events`: *Record*<*any*, *any*\>[] ; `logId`: *string* ; `transitionId?`: *string* \| *null*  }

#### Type declaration:

`events` *Record*<*any*, *any*\>[]
`logId` *string*
`transitionId?` *string* \| *null*


___

### Model

Ƭ **Model**: { `createdTime`: *string* \| *null* ; `description`: *string* \| *null* ; `fieldConfig`: *Record*<*string*, [*Field*](#field)\> \| *null* ; `height`: *number* ; `modelId`: *string* ; `name`: *string* \| *null* ; `preprocessConfig`: [*PreprocessConfig*](#preprocessconfig) ; `status`: *active* \| *training* ; `updatedTime`: *string* \| *null* ; `width`: *number*  }

#### Type declaration:

`createdTime` *string* \| *null*
`description` *string* \| *null*
`fieldConfig` *Record*<*string*, [*Field*](#field)\> \| *null*
`height` *number*
`modelId` *string*
`name` *string* \| *null*
`preprocessConfig` [*PreprocessConfig*](#preprocessconfig)
`status` *active* \| *training*
`updatedTime` *string* \| *null*
`width` *number*


___

### ModelList

Ƭ **ModelList**: { `models`: [*Model*](#model)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

`models` [*Model*](#model)[]
`nextToken` *string* \| *null*


___

### PostPredictions

Ƭ **PostPredictions**: [*CreatePredictionsOptions*](#interfacestypescreatepredictionsoptionsmd) & { `documentId`: *string* ; `modelId`: *string*  }


___

### Prediction

Ƭ **Prediction**: [*GroundTruth*](#groundtruth) & { `confidence`: *number*  }


___

### PredictionList

Ƭ **PredictionList**: { `nextToken`: *string* \| *null* ; `predictions`: [*PredictionResponse*](#predictionresponse)[]  }

#### Type declaration:

`nextToken` *string* \| *null*
`predictions` [*PredictionResponse*](#predictionresponse)[]


___

### PredictionResponse

Ƭ **PredictionResponse**: { `documentId`: *string* ; `inferenceTime`: *number* ; `modelId`: *string* ; `predictionId`: *string* ; `predictions`: [*Prediction*](#prediction)[] ; `timestamp`: *number*  }

#### Type declaration:

`documentId` *string*
`inferenceTime` *number*
`modelId` *string*
`predictionId` *string*
`predictions` [*Prediction*](#prediction)[]
`timestamp` *number*


___

### PreprocessConfig

Ƭ **PreprocessConfig**: { `autoRotate`: *boolean* ; `imageQuality`: *LOW* \| *HIGH* ; `maxPages`: *number*  }

#### Type declaration:

`autoRotate` *boolean*
`imageQuality` *LOW* \| *HIGH*
`maxPages` *number*


___

### Secret

Ƭ **Secret**: { `description`: *string* \| *null* ; `name`: *string* \| *null* ; `secredId`: *string*  }

#### Type declaration:

`description` *string* \| *null*
`name` *string* \| *null*
`secredId` *string*


___

### SecretList

Ƭ **SecretList**: { `nextToken`: *string* \| *null* ; `secrets`: [*Secret*](#secret)[]  }

#### Type declaration:

`nextToken` *string* \| *null*
`secrets` [*Secret*](#secret)[]


___

### Transition

Ƭ **Transition**: { `assets?`: *Record*<*string*, *string*\> ; `description`: *string* ; `inputJsonSchema`: *unknown* ; `name`: *string* ; `outputJsonSchema?`: *unknown* ; `parameters`: *Record*<*string*, *any*\> ; `transitionId`: *string* ; `transitionType`: [*TransitionType*](#transitiontype)  }

#### Type declaration:

`assets?` *Record*<*string*, *string*\>
`description` *string*
`inputJsonSchema` *unknown*
`name` *string*
`outputJsonSchema?` *unknown*
`parameters` *Record*<*string*, *any*\>
`transitionId` *string*
`transitionType` [*TransitionType*](#transitiontype)


___

### TransitionExecution

Ƭ **TransitionExecution**: { `completedBy`: *string* \| *null* ; `endTime`: *string* \| *null* ; `executionId`: *string* ; `input`: *Record*<*any*, *any*\> ; `logId`: *string* \| *null* ; `startTime`: *string* \| *null* ; `status`: *succeeded* \| *failed* \| *retry* \| *running* \| *rejected* ; `transitionId`: *string*  }

#### Type declaration:

`completedBy` *string* \| *null*
`endTime` *string* \| *null*
`executionId` *string*
`input` *Record*<*any*, *any*\>
`logId` *string* \| *null*
`startTime` *string* \| *null*
`status` *succeeded* \| *failed* \| *retry* \| *running* \| *rejected*
`transitionId` *string*


___

### TransitionExecutionList

Ƭ **TransitionExecutionList**: { `executions`: [*TransitionExecution*](#transitionexecution)[] ; `nextToken`: *string* \| *null* ; `transitionId`: *string*  }

#### Type declaration:

`executions` [*TransitionExecution*](#transitionexecution)[]
`nextToken` *string* \| *null*
`transitionId` *string*


___

### TransitionExecutionListOptions

Ƭ **TransitionExecutionListOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `executionId?`: *string* \| *string*[] ; `order?`: *ascending* \| *descending* ; `sortBy?`: *startTime* \| *endTime* ; `status?`: *succeeded* \| *failed* \| *retry* \| *running* \| *rejected*  }


___

### TransitionList

Ƭ **TransitionList**: { `nextToken`: *string* \| *null* ; `transitions`: [*Transition*](#transition)[]  }

#### Type declaration:

`nextToken` *string* \| *null*
`transitions` [*Transition*](#transition)[]


___

### TransitionType

Ƭ **TransitionType**: *docker* \| *manual*


___

### UpdateTransitionOptions

Ƭ **UpdateTransitionOptions**: { `description?`: *string* ; `inputJsonSchema?`: *Record*<*any*, *any*\> ; `name?`: *string* ; `outputJsonSchema?`: *Record*<*any*, *any*\>  }

#### Type declaration:

`description?` *string*
`inputJsonSchema?` *Record*<*any*, *any*\>
`name?` *string*
`outputJsonSchema?` *Record*<*any*, *any*\>


___

### UpdateUserOptions

Ƭ **UpdateUserOptions**: { `avatar?`: *string* \| *null* ; `name?`: *string* \| *null*  }

#### Type declaration:

`avatar?` *string* \| *null*
`name?` *string* \| *null*


___

### User

Ƭ **User**: { `avatar`: *string* \| *null* ; `email`: *string* ; `name`: *string* \| *null* ; `userId`: *string*  }

#### Type declaration:

`avatar` *string* \| *null*
`email` *string*
`name` *string* \| *null*
`userId` *string*


___

### UserList

Ƭ **UserList**: { `nextToken`: *string* \| *null* ; `users`: [*User*](#user)[]  }

#### Type declaration:

`nextToken` *string* \| *null*
`users` [*User*](#user)[]


___

### Workflow

Ƭ **Workflow**: { `description?`: *string* ; `name`: *string* ; `workflowId`: *string*  }

#### Type declaration:

`description?` *string*
`name` *string*
`workflowId` *string*


___

### WorkflowExecution

Ƭ **WorkflowExecution**: { `completedBy`: *string*[] ; `endTime`: *string* \| *null* ; `executionId`: *string* ; `input`: *Record*<*any*, *any*\> ; `logId`: *string* \| *null* ; `output`: *Record*<*any*, *any*\> ; `startTime`: *string* \| *null* ; `status`: *succeeded* \| *failed* \| *running* \| *rejected* \| *retry* \| *error* ; `transitionExecutions`: *Record*<*string*, *string*[]\> \| *null* ; `workflowId`: *string*  }

#### Type declaration:

`completedBy` *string*[]
`endTime` *string* \| *null*
`executionId` *string*
`input` *Record*<*any*, *any*\>
`logId` *string* \| *null*
`output` *Record*<*any*, *any*\>
`startTime` *string* \| *null*
`status` *succeeded* \| *failed* \| *running* \| *rejected* \| *retry* \| *error*
`transitionExecutions` *Record*<*string*, *string*[]\> \| *null*
`workflowId` *string*


___

### WorkflowExecutionList

Ƭ **WorkflowExecutionList**: { `executions`: *Required*<[*WorkflowExecution*](#workflowexecution)\>[] ; `nextToken`: *string* \| *null* ; `status?`: *succeeded* \| *failed* \| *running* \| *rejected* ; `workflowId`: *string*  }

#### Type declaration:

`executions` *Required*<[*WorkflowExecution*](#workflowexecution)\>[]
`nextToken` *string* \| *null*
`status?` *succeeded* \| *failed* \| *running* \| *rejected*
`workflowId` *string*


___

### WorkflowList

Ƭ **WorkflowList**: { `workflows`: [*Workflow*](#workflow)[]  }

#### Type declaration:

`workflows` [*Workflow*](#workflow)[]


___

### WorkflowSpecification

Ƭ **WorkflowSpecification**: { `definition`: *object* ; `language?`: *ASL* ; `version?`: *1.0.0*  }

#### Type declaration:

`definition` *object*
`language?` *ASL*
`version?` *1.0.0*

