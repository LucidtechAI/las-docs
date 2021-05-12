
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

Name | Type |
------ | ------ |
`credentials` | [*Credentials*](#classescredentialscredentials-1md) |

**Returns:** [*Client*](#classesclientclient-1md)

Defined in: [client.ts:71](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L71)

## Properties

### credentials

• **credentials**: [*Credentials*](#classescredentialscredentials-1md)

Defined in: [client.ts:71](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L71)

## Methods

### createAppClient

▸ **createAppClient**(`name`: *null* \| *string*, `description`: *null* \| *string*): *Promise*<[*AppClient*](#appclient)\>

Creates an app client, calls the POST /appClients endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *null* \| *string* | Name of app client   |
`description` | *null* \| *string* | Description of app client   |

**Returns:** *Promise*<[*AppClient*](#appclient)\>

AppClient response from REST API

Defined in: [client.ts:84](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L84)

___

### createAsset

▸ **createAsset**(`content`: *string*): *Promise*<[*Asset*](#asset)\>

Creates an asset handle, calls the POST /assets endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`content` | *string* | Content to POST (base64-encoded string | Buffer)   |

**Returns:** *Promise*<[*Asset*](#asset)\>

Asset response from REST API

Defined in: [client.ts:507](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L507)

___

### createBatch

▸ **createBatch**(`options`: [*CreateBatchOptions*](#createbatchoptions)): *Promise*<[*Batch*](#batch)\>

Creates a batch, calls the POST /batches endpoint.

#### Parameters:

Name | Type |
------ | ------ |
`options` | [*CreateBatchOptions*](#createbatchoptions) |

**Returns:** *Promise*<[*Batch*](#batch)\>

Batch response from REST API

Defined in: [client.ts:560](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L560)

___

### createDocument

▸ **createDocument**(`content`: *string* \| *Buffer*, `contentType`: [*ContentType*](#contenttype), `options?`: [*CreateDocumentOptions*](#interfacestypescreatedocumentoptionsmd)): *Promise*<[*LasDocument*](#lasdocument)\>

Creates a document handle, calls the POST /documents endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`content` | *string* \| *Buffer* | Content to POST (base64 string | Buffer)   |
`contentType` | [*ContentType*](#contenttype) | MIME type for the document handle   |
`options?` | [*CreateDocumentOptions*](#interfacestypescreatedocumentoptionsmd) | - |

**Returns:** *Promise*<[*LasDocument*](#lasdocument)\>

Document response from REST API

Defined in: [client.ts:124](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L124)

___

### createPrediction

▸ **createPrediction**(`documentId`: *string*, `modelId`: *string*, `options?`: [*CreatePredictionsOptions*](#interfacestypescreatepredictionsoptionsmd)): *Promise*<[*PredictionResponse*](#predictionresponse)\>

Create a prediction on a document using specified model, calls the POST /predictions endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`documentId` | *string* | Id of the document to run inference and create a prediction on   |
`modelId` | *string* | Id of the model to use for inference   |
`options?` | [*CreatePredictionsOptions*](#interfacestypescreatepredictionsoptionsmd) | - |

**Returns:** *Promise*<[*PredictionResponse*](#predictionresponse)\>

Predicion response from REST API

Defined in: [client.ts:480](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L480)

___

### createSecret

▸ **createSecret**(`data`: *Record*<*any*, *any*\>, `options?`: [*CreateSecretOptions*](#interfacestypescreatesecretoptionsmd)): *Promise*<[*Secret*](#secret)\>

Creates an secret handle, calls the POST /secrets endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`data` | *Record*<*any*, *any*\> | Object containing the data you want to keep secret   |
`options?` | [*CreateSecretOptions*](#interfacestypescreatesecretoptionsmd) | - |

**Returns:** *Promise*<[*Secret*](#secret)\>

Secret response from REST API

Defined in: [client.ts:660](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L660)

___

### createTransition

▸ **createTransition**(`transitionType`: [*TransitionType*](#transitiontype), `options?`: [*CreateTransitionOptions*](#interfacestypescreatetransitionoptionsmd)): *Promise*<[*Transition*](#transition)\>

Creates a transition handle, calls the POST /transitions endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`transitionType` | [*TransitionType*](#transitiontype) | Type of transition "docker"|"manual"   |
`options?` | [*CreateTransitionOptions*](#interfacestypescreatetransitionoptionsmd) | - |

**Returns:** *Promise*<[*Transition*](#transition)\>

Transition response from REST API

Defined in: [client.ts:200](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L200)

___

### createUser

▸ **createUser**(`email`: *string*, `data?`: [*CreateUserOptions*](#createuseroptions)): *Promise*<[*User*](#user)\>

Creates a new user, calls the POST /users endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`email` | *string* | Email to the new user   |
`data?` | [*CreateUserOptions*](#createuseroptions) | - |

**Returns:** *Promise*<[*User*](#user)\>

User response from REST API

Defined in: [client.ts:602](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L602)

___

### createWorkflow

▸ **createWorkflow**(`name`: *string*, `specification`: [*WorkflowSpecification*](#workflowspecification), `options?`: [*CreateWorkflowOptions*](#createworkflowoptions)): *Promise*<[*Workflow*](#workflow)\>

Creates a new workflow, calls the POST /workflows endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | *string* | Name of the workflow   |
`specification` | [*WorkflowSpecification*](#workflowspecification) | Specification of the workflow   |
`options?` | [*CreateWorkflowOptions*](#createworkflowoptions) | - |

**Returns:** *Promise*<[*Workflow*](#workflow)\>

Workflow response from REST API

Defined in: [client.ts:336](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L336)

___

### deleteAppClient

▸ **deleteAppClient**(`appClientId`: *string*): *Promise*<[*AppClient*](#appclient)\>

Delete the app client, calls the DELETE /appClients/{appClientId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`appClientId` | *string* | of the app client   |

**Returns:** *Promise*<[*AppClient*](#appclient)\>

AppClient response from REST API

Defined in: [client.ts:110](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L110)

___

### deleteBatch

▸ **deleteBatch**(`batchId`: *string*, `deleteDocuments?`: *boolean*): *Promise*<[*Batch*](#batch)\>

Deletes a batch, calls the DELETE /batches/{batchId} endpoint.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`batchId` | *string* | - | Id of the batch   |
`deleteDocuments` | *boolean* | false | Set to true to delete documents in batch before deleting batch   |

**Returns:** *Promise*<[*Batch*](#batch)\>

Batch response from REST API

Defined in: [client.ts:582](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L582)

___

### deleteDocuments

▸ **deleteDocuments**(`options?`: [*DeleteDocumentOptions*](#deletedocumentoptions)): *Promise*<[*LasDocumentList*](#lasdocumentlist)\>

Delete documents with the provided consentId, calls the DELETE /documents endpoint.
Will delete all documents when no consentId is provided.

#### Parameters:

Name | Type |
------ | ------ |
`options?` | [*DeleteDocumentOptions*](#deletedocumentoptions) |

**Returns:** *Promise*<[*LasDocumentList*](#lasdocumentlist)\>

Documents response from REST API

Defined in: [client.ts:185](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L185)

___

### deleteTransition

▸ **deleteTransition**(`transitionId`: *string*): *Promise*<[*Transition*](#transition)\>

Delete the transition with the provided transitionId, calls the DELETE /transitions/{transitionId} endpoint.
Will fail if transition is in use by one or more workflows.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`transitionId` | *string* | Id of the transition   |

**Returns:** *Promise*<[*Transition*](#transition)\>

Transition response from REST API

Defined in: [client.ts:252](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L252)

___

### deleteUser

▸ **deleteUser**(`userId`: *string*): *Promise*<[*User*](#user)\>

Delete a user, calls the DELETE /users/{userId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | *string* | Id of the user   |

**Returns:** *Promise*<[*User*](#user)\>

User response from REST API

Defined in: [client.ts:649](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L649)

___

### deleteWorkflow

▸ **deleteWorkflow**(`workflowId`: *string*): *Promise*<[*Workflow*](#workflow)\>

Delete the workflow with the provided workflowId, calls the DELETE /workflows/{workflowId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`workflowId` | *string* | Id of the workflow   |

**Returns:** *Promise*<[*Workflow*](#workflow)\>

Workflow response from REST API

Defined in: [client.ts:380](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L380)

___

### deleteWorkflowExecution

▸ **deleteWorkflowExecution**(`workflowId`: *string*, `executionId`: *string*): *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Deletes the execution with the provided executionId from workflowId,
calls the DELETE /workflows/{workflowId}/executions/{executionId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`workflowId` | *string* | Id of the workflow   |
`executionId` | *string* | Id of the execution   |

**Returns:** *Promise*<[*WorkflowExecution*](#workflowexecution)\>

WorkflowExecution response from REST API

Defined in: [client.ts:464](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L464)

___

### executeTransition

▸ **executeTransition**(`transitionId`: *string*): *Promise*<[*TransitionExecution*](#transitionexecution)\>

Start executing a manual transition, calls the POST /transitions/{transitionId}/executions endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`transitionId` | *string* | Id of the transition   |

**Returns:** *Promise*<[*TransitionExecution*](#transitionexecution)\>

Transition execution response from REST API

Defined in: [client.ts:262](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L262)

___

### executeWorkflow

▸ **executeWorkflow**(`workflowId`: *string*, `input`: *object*): *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Start a workflow execution, calls the POST /workflows/{workflowId}/executions endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`workflowId` | *string* | Id of the workflow   |
`input` | *object* | Input to the first step of the workflow   |

**Returns:** *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Workflow execution response from REST API

Defined in: [client.ts:401](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L401)

___

### getAsset

▸ **getAsset**(`assetId`: *string*): *Promise*<[*Asset*](#asset)\>

Get asset from the REST API, calls the GET /assets/{assetId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`assetId` | *string* | Id of the asset   |

**Returns:** *Promise*<[*Asset*](#asset)\>

Asset response from REST API

Defined in: [client.ts:529](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L529)

___

### getDocument

▸ **getDocument**(`documentId`: *string*): *Promise*<[*LasDocument*](#lasdocument)\>

Get document from the REST API, calls the GET /documents/{documentId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`documentId` | *string* | Id of the document   |

**Returns:** *Promise*<[*LasDocument*](#lasdocument)\>

Document response from REST API

Defined in: [client.ts:148](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L148)

___

### getLog

▸ **getLog**(`logId`: *string*): *Promise*<[*Log*](#log)\>

Get log, calls the GET /logs/{logId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`logId` | *string* | Id of the log   |

**Returns:** *Promise*<[*Log*](#log)\>

Log response from REST API

Defined in: [client.ts:698](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L698)

___

### getTransition

▸ **getTransition**(`transitionId`: *string*): *Promise*<[*Transition*](#transition)\>

Get the transition with the provided transitionId, calls the GET /transitions/{transitionId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`transitionId` | *string* | Id of the transition   |

**Returns:** *Promise*<[*Transition*](#transition)\>

Transition response from REST API

Defined in: [client.ts:218](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L218)

___

### getTransitionExecution

▸ **getTransitionExecution**(`transitionId`: *string*, `transitionExecutionId`: *string*): *Promise*<[*TransitionExecution*](#transitionexecution)\>

Get an execution of a transition, calls the GET /transitions/{transitionId}/executions/{executionId} endpoint

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`transitionId` | *string* | Id of the transition   |
`transitionExecutionId` | *string* | Id of the execution   |

**Returns:** *Promise*<[*TransitionExecution*](#transitionexecution)\>

Transition execution responses from REST API

Defined in: [client.ts:273](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L273)

___

### getUser

▸ **getUser**(`userId`: *string*): *Promise*<[*User*](#user)\>

Get information about a specific user, calls the GET /users/{userId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | *string* | Id of the user   |

**Returns:** *Promise*<[*User*](#user)\>

User response from REST API

Defined in: [client.ts:627](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L627)

___

### getWorkflow

▸ **getWorkflow**(`workflowId`: *string*): *Promise*<[*Workflow*](#workflow)\>

Get the workflow with the provided workflowId, calls the GET /workflows/{workflowId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`workflowId` | *string* | Id of the workflow   |

**Returns:** *Promise*<[*Workflow*](#workflow)\>

Workflow response from REST API

Defined in: [client.ts:359](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L359)

___

### getWorkflowExecution

▸ **getWorkflowExecution**(`workflowId`: *string*, `executionId`: *string*): *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Get a workflow execution, calls the GET /workflows/{workflowId}/executions/{executionId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`workflowId` | *string* | Id of the workflow that performs the execution   |
`executionId` | *string* | Id of the execution to get   |

**Returns:** *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Workflow execution response from REST API

Defined in: [client.ts:434](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L434)

___

### listAppClients

▸ **listAppClients**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*AppClientList*](#appclientlist)\>

List app clients, calls the GET /appClients endpoint.

#### Parameters:

Name | Type |
------ | ------ |
`options?` | [*PaginationOptions*](#interfacestypespaginationoptionsmd) |

**Returns:** *Promise*<[*AppClientList*](#appclientlist)\>

AppClientList response from REST API

Defined in: [client.ts:100](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L100)

___

### listAssets

▸ **listAssets**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*AssetList*](#assetlist)\>

List assets available, calls the GET /assets endpoint.

#### Parameters:

Name | Type |
------ | ------ |
`options?` | [*PaginationOptions*](#interfacestypespaginationoptionsmd) |

**Returns:** *Promise*<[*AssetList*](#assetlist)\>

Assets response from REST API without the content of each asset

Defined in: [client.ts:519](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L519)

___

### listBatches

▸ **listBatches**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*BatchList*](#batchlist)\>

List batches, calls the GET /batches endpoint.

#### Parameters:

Name | Type |
------ | ------ |
`options?` | [*PaginationOptions*](#interfacestypespaginationoptionsmd) |

**Returns:** *Promise*<[*BatchList*](#batchlist)\>

BatchList response from REST API

Defined in: [client.ts:571](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L571)

___

### listDocuments

▸ **listDocuments**(`options?`: [*ListDocumentsOptions*](#listdocumentsoptions)): *Promise*<[*LasDocumentList*](#lasdocumentlist)\>

List documents available for inference, calls the GET /documents endpoint.

#### Parameters:

Name | Type |
------ | ------ |
`options?` | [*ListDocumentsOptions*](#listdocumentsoptions) |

**Returns:** *Promise*<[*LasDocumentList*](#lasdocumentlist)\>

Documents response from REST API

Defined in: [client.ts:161](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L161)

___

### listModels

▸ **listModels**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*ModelList*](#modellist)\>

List models available, calls the GET /models endpoint.

#### Parameters:

Name | Type |
------ | ------ |
`options?` | [*PaginationOptions*](#interfacestypespaginationoptionsmd) |

**Returns:** *Promise*<[*ModelList*](#modellist)\>

Models response from the REST API

Defined in: [client.ts:688](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L688)

___

### listPredictions

▸ **listPredictions**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*PredictionList*](#predictionlist)\>

#### Parameters:

Name | Type |
------ | ------ |
`options?` | [*PaginationOptions*](#interfacestypespaginationoptionsmd) |

**Returns:** *Promise*<[*PredictionList*](#predictionlist)\>

Defined in: [client.ts:497](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L497)

___

### listSecrets

▸ **listSecrets**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*SecretList*](#secretlist)\>

List secrets available, calls the GET /secrets endpoint.

#### Parameters:

Name | Type |
------ | ------ |
`options?` | [*PaginationOptions*](#interfacestypespaginationoptionsmd) |

**Returns:** *Promise*<[*SecretList*](#secretlist)\>

Secrets response from REST API without the username of each secret

Defined in: [client.ts:677](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L677)

___

### listTransitionExecutions

▸ **listTransitionExecutions**(`transitionId`: *string*, `options?`: [*TransitionExecutionListOptions*](#transitionexecutionlistoptions)): *Promise*<[*TransitionExecutionList*](#transitionexecutionlist)\>

List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`transitionId` | *string* | Id of the transition   |
`options?` | [*TransitionExecutionListOptions*](#transitionexecutionlistoptions) | - |

**Returns:** *Promise*<[*TransitionExecutionList*](#transitionexecutionlist)\>

Transition executions responses from REST API

Defined in: [client.ts:307](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L307)

___

### listTransitions

▸ **listTransitions**(`options?`: [*ListTransitionOptions*](#listtransitionoptions)): *Promise*<[*TransitionList*](#transitionlist)\>

List transitions, calls the GET /transitions endpoint.

#### Parameters:

Name | Type |
------ | ------ |
`options?` | [*ListTransitionOptions*](#listtransitionoptions) |

**Returns:** *Promise*<[*TransitionList*](#transitionlist)\>

Transitions response from REST API

Defined in: [client.ts:230](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L230)

___

### listUsers

▸ **listUsers**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*UserList*](#userlist)\>

List users, calls the GET /users endpoint.

#### Parameters:

Name | Type |
------ | ------ |
`options?` | [*PaginationOptions*](#interfacestypespaginationoptionsmd) |

**Returns:** *Promise*<[*UserList*](#userlist)\>

User response from REST API

Defined in: [client.ts:617](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L617)

___

### listWorkflowExecutions

▸ **listWorkflowExecutions**(`workflowId`: *string*, `options?`: [*ListWorkflowExecutionsOptions*](#listworkflowexecutionsoptions)): *Promise*<[*WorkflowExecutionList*](#workflowexecutionlist)\>

List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`workflowId` | *string* | Id of the workflow   |
`options?` | [*ListWorkflowExecutionsOptions*](#listworkflowexecutionsoptions) | - |

**Returns:** *Promise*<[*WorkflowExecutionList*](#workflowexecutionlist)\>

Workflow executions responses from REST API

Defined in: [client.ts:420](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L420)

___

### listWorkflows

▸ **listWorkflows**(`options?`: [*PaginationOptions*](#interfacestypespaginationoptionsmd)): *Promise*<[*WorkflowList*](#workflowlist)\>

List workflows, calls the GET /workflows endpoint.

#### Parameters:

Name | Type |
------ | ------ |
`options?` | [*PaginationOptions*](#interfacestypespaginationoptionsmd) |

**Returns:** *Promise*<[*WorkflowList*](#workflowlist)\>

Workflows response from REST API

Defined in: [client.ts:370](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L370)

___

### makeDeleteRequest

▸ **makeDeleteRequest**<T\>(`path`: *string*, `query?`: *any*): *Promise*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |
`query?` | *any* |

**Returns:** *Promise*<T\>

Defined in: [client.ts:719](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L719)

___

### makeGetRequest

▸ **makeGetRequest**<T\>(`path`: *string*, `query?`: *any*): *Promise*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |
`query?` | *any* |

**Returns:** *Promise*<T\>

Defined in: [client.ts:715](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L715)

___

### makePatchRequest

▸ **makePatchRequest**<T\>(`path`: *string*, `body`: *any*): *Promise*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |
`body` | *any* |

**Returns:** *Promise*<T\>

Defined in: [client.ts:727](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L727)

___

### makePostRequest

▸ **makePostRequest**<T\>(`path`: *string*, `body`: *any*): *Promise*<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`path` | *string* |
`body` | *any* |

**Returns:** *Promise*<T\>

Defined in: [client.ts:723](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L723)

___

### sendHeartbeat

▸ **sendHeartbeat**(`transitionId`: *string*, `transitionExecutionId`: *string*): *Promise*<*unknown*\>

Send heartbeat for a manual execution to signal that we are still working on it.
Must be done at minimum once every 60 seconds or the transition execution will time out.
Calls the POST /transitions/{transitionId}/executions/{executionId}/heartbeats endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`transitionId` | *string* | Id of the transition   |
`transitionExecutionId` | *string* | Id of the transition execution   |

**Returns:** *Promise*<*unknown*\>

Empty response

Defined in: [client.ts:323](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L323)

___

### updateAsset

▸ **updateAsset**(`assetId`: *string*, `data`: [*UpdateAssetOptions*](#interfacestypesupdateassetoptionsmd)): *Promise*<[*Asset*](#asset)\>

Updates an asset, calls the PATCH /assets/{assetId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`assetId` | *string* | Id of the asset   |
`data` | [*UpdateAssetOptions*](#interfacestypesupdateassetoptionsmd) | - |

**Returns:** *Promise*<[*Asset*](#asset)\>

Asset response from REST API with content

Defined in: [client.ts:540](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L540)

___

### updateDocument

▸ **updateDocument**(`documentId`: *string*, `data`: [*UpdateDocumentOptions*](#interfacestypesupdatedocumentoptionsmd)): *Promise*<[*LasDocument*](#lasdocument)\>

Post ground truth to the REST API, calls the PATCH /documents/{documentId} endpoint.
Posting ground truth means posting the ground truth data for the particular document.
This enables the API to learn from past mistakes.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`documentId` | *string* | Id of the document   |
`data` | [*UpdateDocumentOptions*](#interfacestypesupdatedocumentoptionsmd) | - |

**Returns:** *Promise*<[*LasDocument*](#lasdocument)\>

Document response from REST API

Defined in: [client.ts:174](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L174)

___

### updateSecret

▸ **updateSecret**(`secretId`: *string*, `data`: [*UpdateSecretOptions*](#interfacestypesupdatesecretoptionsmd)): *Promise*<[*Secret*](#secret)\>

Updates a secret, calls the PATCH /secrets/{secretId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`secretId` | *string* | Id of the secret   |
`data` | [*UpdateSecretOptions*](#interfacestypesupdatesecretoptionsmd) | - |

**Returns:** *Promise*<[*Secret*](#secret)\>

Defined in: [client.ts:710](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L710)

___

### updateTransition

▸ **updateTransition**(`transitionId`: *string*, `data`: [*UpdateTransitionOptions*](#updatetransitionoptions)): *Promise*<[*Transition*](#transition)\>

Updates a transition, calls the PATCH /transitions/{transitionId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`transitionId` | *string* | Id of the transition   |
`data` | [*UpdateTransitionOptions*](#updatetransitionoptions) | Transition fields to PATCH   |

**Returns:** *Promise*<[*Transition*](#transition)\>

Transition response from REST API

Defined in: [client.ts:241](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L241)

___

### updateTransitionExecution

▸ **updateTransitionExecution**(`transitionId`: *string*, `executionId`: *string*, `data`: [*UpdateTransitionExecution*](#interfacestypesupdatetransitionexecutionmd)): *Promise*<[*TransitionExecution*](#transitionexecution)\>

Ends the processing of the transition execution, calls the
PATCH /transitions/{transitionId}/executions/{executionId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`transitionId` | *string* | Id of the transition that performs the execution   |
`executionId` | *string* | Id of the execution to update   |
`data` | [*UpdateTransitionExecution*](#interfacestypesupdatetransitionexecutionmd) | - |

**Returns:** *Promise*<[*TransitionExecution*](#transitionexecution)\>

Transition execution response from REST API

Defined in: [client.ts:289](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L289)

___

### updateUser

▸ **updateUser**(`userId`: *string*, `data`: [*UpdateUserOptions*](#updateuseroptions)): *Promise*<[*User*](#user)\>

Updates a user, calls the PATCH /users/{userId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userId` | *string* | Id of the user   |
`data` | [*UpdateUserOptions*](#updateuseroptions) | - |

**Returns:** *Promise*<[*User*](#user)\>

User response from REST API

Defined in: [client.ts:639](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L639)

___

### updateWorkflow

▸ **updateWorkflow**(`workflowId`: *string*, `data`: [*UpdateWorkflowOptions*](#interfacestypesupdateworkflowoptionsmd)): *Promise*<[*Workflow*](#workflow)\>

Updates a workflow, calls the PATCH /workflows/{workflowId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`workflowId` | *string* | Id of the workflow   |
`data` | [*UpdateWorkflowOptions*](#interfacestypesupdateworkflowoptionsmd) | Workflow fields to PATCH   |

**Returns:** *Promise*<[*Workflow*](#workflow)\>

Workflow response from REST API

Defined in: [client.ts:390](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L390)

___

### updateWorkflowExecution

▸ **updateWorkflowExecution**(`workflowId`: *string*, `executionId`: *string*, `data`: [*UpdateWorkflowExecutionOptions*](#interfacestypesupdateworkflowexecutionoptionsmd)): *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Retry or end the processing of a workflow execution,
calls the PATCH /workflows/{workflowId}/executions/{executionId} endpoint.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`workflowId` | *string* | Id of the workflow that performs the execution   |
`executionId` | *string* | Id of the execution to update   |
`data` | [*UpdateWorkflowExecutionOptions*](#interfacestypesupdateworkflowexecutionoptionsmd) | - |

**Returns:** *Promise*<[*WorkflowExecution*](#workflowexecution)\>

Workflow execution response from REST API

Defined in: [client.ts:448](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/client.ts#L448)


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

Name | Type |
------ | ------ |
`apiEndpoint` | *string* |
`apiKey` | *string* |
`storage?` | [*TokenStorage*](#interfacesstoragetokenstoragemd)<[*Token*](#classescredentialstokenmd)\> |

**Returns:** [*Credentials*](#classescredentialscredentials-1md)

Defined in: [credentials.ts:43](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/credentials.ts#L43)

## Properties

### apiEndpoint

• `Readonly` **apiEndpoint**: *string*

Defined in: [credentials.ts:37](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/credentials.ts#L37)

___

### apiKey

• `Readonly` **apiKey**: *string*

Defined in: [credentials.ts:39](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/credentials.ts#L39)

## Methods

### getAccessToken

▸ **getAccessToken**(): *Promise*<*string*\>

Method used to get and cache an access token. Algorithm used:
1. Look for a valid token in memory.
2. Look for a valid token in the storage (if provided);
3. Fetch a new token from server and cache it (both in memory and in storage).

**Returns:** *Promise*<*string*\>

Defined in: [credentials.ts:57](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/credentials.ts#L57)


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

Name | Type |
------ | ------ |
`accessToken` | *string* |
`expiration` | *number* |
`refreshToken?` | *string* |

**Returns:** [*Token*](#classescredentialstokenmd)

Defined in: [credentials.ts:19](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/credentials.ts#L19)

## Properties

### accessToken

• `Readonly` **accessToken**: *string*

Defined in: [credentials.ts:8](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/credentials.ts#L8)

___

### expiration

• `Readonly` **expiration**: *number*

Defined in: [credentials.ts:10](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/credentials.ts#L10)

___

### refreshToken

• `Optional` `Readonly` **refreshToken**: *undefined* \| *string*

Defined in: [credentials.ts:12](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/credentials.ts#L12)

## Methods

### isValid

▸ **isValid**(): *boolean*

Checks if current timestamp is larger than token expiration time

**Returns:** *boolean*

Defined in: [credentials.ts:17](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/credentials.ts#L17)


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

Defined in: [types.ts:24](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L24)

___

### consentId

• `Optional` **consentId**: *undefined* \| *string*

Defined in: [types.ts:23](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L23)

___

### groundTruth

• `Optional` **groundTruth**: *undefined* \| [*GroundTruth*](#groundtruth)[]

Defined in: [types.ts:25](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L25)


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

Defined in: [types.ts:9](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L9)

___

### imageQuality

• `Optional` **imageQuality**: *undefined* \| *LOW* \| *HIGH*

Defined in: [types.ts:10](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L10)

___

### maxPages

• `Optional` **maxPages**: *undefined* \| *number*

Defined in: [types.ts:8](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L8)


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

Defined in: [types.ts:279](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L279)


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

Defined in: [types.ts:61](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L61)

___

### inputJsonSchema

• `Optional` **inputJsonSchema**: *undefined* \| *Record*<*any*, *any*\>

Defined in: [types.ts:59](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L59)

___

### name

• `Optional` **name**: *undefined* \| *null* \| *string*

Defined in: [types.ts:58](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L58)

___

### outputJsonSchema

• `Optional` **outputJsonSchema**: *undefined* \| *Record*<*any*, *any*\>

Defined in: [types.ts:60](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L60)

___

### parameters

• `Optional` **parameters**: *undefined* \| [*CreateTransitionDockerParams*](#createtransitiondockerparams) \| [*CreateTransitionManualParams*](#createtransitionmanualparams)

Defined in: [types.ts:62](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L62)


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

Defined in: [types.ts:14](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L14)

___

### nextToken

• `Optional` **nextToken**: *undefined* \| *string*

Defined in: [types.ts:15](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L15)


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

Defined in: [types.ts:374](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L374)


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

Defined in: [types.ts:29](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L29)


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

Defined in: [types.ts:283](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L283)

___

### description

• `Optional` **description**: *undefined* \| *null* \| *string*

Defined in: [types.ts:284](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L284)

___

### name

• `Optional` **name**: *undefined* \| *null* \| *string*

Defined in: [types.ts:285](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L285)


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

Defined in: [types.ts:53](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L53)

___

### output

• `Optional` **output**: *undefined* \| *Record*<*any*, *any*\>

Defined in: [types.ts:52](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L52)

___

### startTime

• `Optional` **startTime**: *undefined* \| *string*

Defined in: [types.ts:54](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L54)

___

### status

• **status**: *succeeded* \| *failed* \| *retry* \| *rejected*

Defined in: [types.ts:51](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L51)


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

Defined in: [types.ts:158](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L158)


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

Defined in: [types.ts:154](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L154)

___

### name

• `Optional` **name**: *undefined* \| *string*

Defined in: [types.ts:153](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L153)


<a name="interfacesstoragetokenstoragemd"></a>

[@lucidtech/las-sdk-core](#readmemd) / [Exports](#modulesmd) / [storage](#modulesstoragemd) / TokenStorage

# Interface: TokenStorage<T\>

[storage](#modulesstoragemd).TokenStorage

## Type parameters

Name | Type |
------ | ------ |
`T` | [*Token*](#classescredentialstokenmd) |

## Hierarchy

* **TokenStorage**

## Table of contents

### Properties

- [getPersistentToken](#getpersistenttoken)
- [setPersistentToken](#setpersistenttoken)

## Properties

### getPersistentToken

• **getPersistentToken**: () => *null* \| T

Defined in: [storage.ts:5](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/storage.ts#L5)

___

### setPersistentToken

• **setPersistentToken**: (`value`: T) => *void*

Defined in: [storage.ts:6](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/storage.ts#L6)


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

Defined in: [types.ts:24](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L24)

___

### consentId

• `Optional` **consentId**: *undefined* \| *string*

Defined in: [types.ts:23](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L23)

___

### groundTruth

• `Optional` **groundTruth**: *undefined* \| [*GroundTruth*](#groundtruth)[]

Defined in: [types.ts:25](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L25)


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

Defined in: [types.ts:9](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L9)

___

### imageQuality

• `Optional` **imageQuality**: *undefined* \| *LOW* \| *HIGH*

Defined in: [types.ts:10](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L10)

___

### maxPages

• `Optional` **maxPages**: *undefined* \| *number*

Defined in: [types.ts:8](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L8)


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

Defined in: [types.ts:279](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L279)


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

Defined in: [types.ts:61](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L61)

___

### inputJsonSchema

• `Optional` **inputJsonSchema**: *undefined* \| *Record*<*any*, *any*\>

Defined in: [types.ts:59](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L59)

___

### name

• `Optional` **name**: *undefined* \| *null* \| *string*

Defined in: [types.ts:58](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L58)

___

### outputJsonSchema

• `Optional` **outputJsonSchema**: *undefined* \| *Record*<*any*, *any*\>

Defined in: [types.ts:60](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L60)

___

### parameters

• `Optional` **parameters**: *undefined* \| [*CreateTransitionDockerParams*](#createtransitiondockerparams) \| [*CreateTransitionManualParams*](#createtransitionmanualparams)

Defined in: [types.ts:62](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L62)


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

Defined in: [types.ts:14](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L14)

___

### nextToken

• `Optional` **nextToken**: *undefined* \| *string*

Defined in: [types.ts:15](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L15)


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

Defined in: [types.ts:374](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L374)


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

Defined in: [types.ts:29](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L29)


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

Defined in: [types.ts:283](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L283)

___

### description

• `Optional` **description**: *undefined* \| *null* \| *string*

Defined in: [types.ts:284](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L284)

___

### name

• `Optional` **name**: *undefined* \| *null* \| *string*

Defined in: [types.ts:285](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L285)


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

Defined in: [types.ts:53](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L53)

___

### output

• `Optional` **output**: *undefined* \| *Record*<*any*, *any*\>

Defined in: [types.ts:52](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L52)

___

### startTime

• `Optional` **startTime**: *undefined* \| *string*

Defined in: [types.ts:54](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L54)

___

### status

• **status**: *succeeded* \| *failed* \| *retry* \| *rejected*

Defined in: [types.ts:51](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L51)


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

Defined in: [types.ts:158](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L158)


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

Defined in: [types.ts:154](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L154)

___

### name

• `Optional` **name**: *undefined* \| *string*

Defined in: [types.ts:153](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L153)


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

Name | Type |
------ | ------ |
`apiKey` | *string* |
`appClientId` | *string* |
`callbackUrls` | *string*[] \| *null* |
`clientId` | *string* |
`clientSecret?` | *string* |
`createdTime` | *string* \| *null* |
`description` | *string* \| *null* |
`hasSecret` | *boolean* |
`logoutUrls` | *string*[] \| *null* |
`name` | *string* \| *null* |

Defined in: [types.ts:303](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L303)

___

### AppClientList

Ƭ **AppClientList**: { `appClients`: [*AppClient*](#appclient)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`appClients` | [*AppClient*](#appclient)[] |
`nextToken` | *string* \| *null* |

Defined in: [types.ts:316](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L316)

___

### Asset

Ƭ **Asset**: { `assetId`: *string* ; `content`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`assetId` | *string* |
`content` | *string* |

Defined in: [types.ts:323](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L323)

___

### AssetList

Ƭ **AssetList**: { `assets`: [*AssetWithoutContent*](#assetwithoutcontent)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`assets` | [*AssetWithoutContent*](#assetwithoutcontent)[] |
`nextToken` | *string* \| *null* |

Defined in: [types.ts:330](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L330)

___

### AssetWithoutContent

Ƭ **AssetWithoutContent**: *Omit*<[*Asset*](#asset), *content*\>

Defined in: [types.ts:328](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L328)

___

### AuthorizationHeaders

Ƭ **AuthorizationHeaders**: { `Authorization`: *string* ; `X-Api-Key`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`Authorization` | *string* |
`X-Api-Key` | *string* |

Defined in: [types.ts:385](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L385)

___

### AxiosFn

Ƭ **AxiosFn**: <T, R\>(`url`: *string*, `body?`: *any*, `config?`: AxiosRequestConfig) => *Promise*<R\>

Defined in: [types.ts:390](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L390)

___

### Batch

Ƭ **Batch**: { `batchId`: *string* ; `containsPersonallyIdentifiableInformation`: *boolean* ; `createdTime`: *string* ; `description`: *string* ; `name`: *string* ; `numDocuments`: *number* ; `retentionInDays`: *number* ; `storageLocation`: *EU*  }

#### Type declaration:

Name | Type |
------ | ------ |
`batchId` | *string* |
`containsPersonallyIdentifiableInformation` | *boolean* |
`createdTime` | *string* |
`description` | *string* |
`name` | *string* |
`numDocuments` | *number* |
`retentionInDays` | *number* |
`storageLocation` | *EU* |

Defined in: [types.ts:223](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L223)

___

### BatchList

Ƭ **BatchList**: { `batches`: [*Batch*](#batch)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`batches` | [*Batch*](#batch)[] |
`nextToken` | *string* \| *null* |

Defined in: [types.ts:234](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L234)

___

### ContentType

Ƭ **ContentType**: *application/pdf* \| *image/jpeg* \| *image/png* \| *image/tiff*

Defined in: [types.ts:5](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L5)

___

### CreateBatchOptions

Ƭ **CreateBatchOptions**: { `containsPersonallyIdentifiableInformation?`: *boolean* ; `description?`: *string* ; `name?`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`containsPersonallyIdentifiableInformation?` | *boolean* |
`description?` | *string* |
`name?` | *string* |

Defined in: [types.ts:367](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L367)

___

### CreateTransitionDockerParams

Ƭ **CreateTransitionDockerParams**: { `cpu?`: *256* ; `credentials?`: { `password`: *string* ; `username`: *string*  } ; `environment?`: *object* ; `imageUrl`: *string* ; `memory?`: *512* \| *1024* \| *2048*  }

#### Type declaration:

Name | Type |
------ | ------ |
`cpu?` | *256* |
`credentials?` | { `password`: *string* ; `username`: *string*  } |
`environment?` | *object* |
`imageUrl` | *string* |
`memory?` | *512* \| *1024* \| *2048* |

Defined in: [types.ts:71](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L71)

___

### CreateTransitionManualParams

Ƭ **CreateTransitionManualParams**: { `assets?`: { `jsRemoteComponent?`: *string*  } & *Record*<*string*, *string*\>  }

#### Type declaration:

Name | Type |
------ | ------ |
`assets?` | { `jsRemoteComponent?`: *string*  } & *Record*<*string*, *string*\> |

Defined in: [types.ts:82](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L82)

___

### CreateTransitionParams

Ƭ **CreateTransitionParams**: [*CreateTransitionDockerParams*](#createtransitiondockerparams) \| [*CreateTransitionManualParams*](#createtransitionmanualparams)

Defined in: [types.ts:89](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L89)

___

### CreateUserOptions

Ƭ **CreateUserOptions**: { `avatar?`: *string* \| *null* ; `name?`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`avatar?` | *string* \| *null* |
`name?` | *string* \| *null* |

Defined in: [types.ts:248](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L248)

___

### CreateWorkflowOptions

Ƭ **CreateWorkflowOptions**: { `description?`: *string* ; `errorConfig?`: { `email`: *string*  }  }

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | *string* |
`errorConfig?` | { `email`: *string*  } |

Defined in: [types.ts:147](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L147)

___

### DeleteDocumentOptions

Ƭ **DeleteDocumentOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `batchId?`: *string* \| *string*[] ; `consentId?`: *string* \| *string*[]  }

Defined in: [types.ts:192](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L192)

___

### Field

Ƭ **Field**: { `description`: *string* ; `maxLength`: *number* ; `type`: *all* \| *alphanum* \| *alphanumext* \| *amount* \| *date* \| *letter* \| *number* \| *phone*  }

#### Type declaration:

Name | Type |
------ | ------ |
`description` | *string* |
`maxLength` | *number* |
`type` | *all* \| *alphanum* \| *alphanumext* \| *amount* \| *date* \| *letter* \| *number* \| *phone* |

Defined in: [types.ts:341](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L341)

___

### GroundTruth

Ƭ **GroundTruth**: { `label`: *string* ; `value`: *string* \| *boolean* \| *null*  }

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`label` | *string* | maxLength: 36, minLength: 1, pattern: ^[0-9A-Za-z_]+$   |
`value` | *string* \| *boolean* \| *null* | maxLength: 64, minLength: 1   |

Defined in: [types.ts:185](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L185)

___

### LasDocument

Ƭ **LasDocument**: { `batchId?`: *string* ; `consentId?`: *string* ; `content`: *string* ; `contentType`: [*ContentType*](#contenttype) ; `documentId`: *string* ; `groundTruth?`: [*GroundTruth*](#groundtruth)[]  }

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`batchId?` | *string* | pattern: ^las:batch:[a-f0-9]{32}$   |
`consentId?` | *string* | pattern: ^las:consent:[a-f0-9]{32}$   |
`content` | *string* | minimum: 1   |
`contentType` | [*ContentType*](#contenttype) | - |
`documentId` | *string* | pattern: ^las:document:[a-f0-9]{32}$   |
`groundTruth?` | [*GroundTruth*](#groundtruth)[] | - |

Defined in: [types.ts:290](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L290)

___

### LasDocumentList

Ƭ **LasDocumentList**: { `batchId?`: *string* ; `documents`: [*LasDocumentWithoutContent*](#lasdocumentwithoutcontent)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`batchId?` | *string* |
`documents` | [*LasDocumentWithoutContent*](#lasdocumentwithoutcontent)[] |
`nextToken` | *string* \| *null* |

Defined in: [types.ts:65](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L65)

___

### LasDocumentWithoutContent

Ƭ **LasDocumentWithoutContent**: *Omit*<[*LasDocument*](#lasdocument), *content*\>

Defined in: [types.ts:288](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L288)

___

### ListAppClientsOptions

Ƭ **ListAppClientsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:321](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L321)

___

### ListAssetsOptions

Ƭ **ListAssetsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:377](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L377)

___

### ListBatchesOptions

Ƭ **ListBatchesOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:239](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L239)

___

### ListDocumentsOptions

Ƭ **ListDocumentsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `batchId?`: *string* \| *string*[] ; `consentId?`: *string* \| *string*[]  }

Defined in: [types.ts:32](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L32)

___

### ListModelsOptions

Ƭ **ListModelsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:360](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L360)

___

### ListPredictionsOptions

Ƭ **ListPredictionsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:216](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L216)

___

### ListSecretsOptions

Ƭ **ListSecretsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:271](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L271)

___

### ListTransitionOptions

Ƭ **ListTransitionOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `transitionType?`: *string* \| *string*[]  }

Defined in: [types.ts:18](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L18)

___

### ListUsersOptions

Ƭ **ListUsersOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:258](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L258)

___

### ListWorkflowExecutionsOptions

Ƭ **ListWorkflowExecutionsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `order?`: *ascending* \| *descending* ; `sortBy?`: *startTime* \| *endTime* ; `status?`: *string* \| *string*[]  }

Defined in: [types.ts:141](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L141)

___

### ListWorkflowOptions

Ƭ **ListWorkflowOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:139](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L139)

___

### Log

Ƭ **Log**: { `events`: *Record*<*any*, *any*\>[] ; `logId`: *string* ; `transitionId?`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`events` | *Record*<*any*, *any*\>[] |
`logId` | *string* |
`transitionId?` | *string* \| *null* |

Defined in: [types.ts:379](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L379)

___

### Model

Ƭ **Model**: { `createdTime`: *string* \| *null* ; `description`: *string* \| *null* ; `fieldConfig`: *Record*<*string*, [*Field*](#field)\> \| *null* ; `height`: *number* ; `modelId`: *string* ; `name`: *string* \| *null* ; `preprocessConfig`: [*PreprocessConfig*](#preprocessconfig) ; `status`: *active* \| *training* ; `updatedTime`: *string* \| *null* ; `width`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`createdTime` | *string* \| *null* |
`description` | *string* \| *null* |
`fieldConfig` | *Record*<*string*, [*Field*](#field)\> \| *null* |
`height` | *number* |
`modelId` | *string* |
`name` | *string* \| *null* |
`preprocessConfig` | [*PreprocessConfig*](#preprocessconfig) |
`status` | *active* \| *training* |
`updatedTime` | *string* \| *null* |
`width` | *number* |

Defined in: [types.ts:347](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L347)

___

### ModelList

Ƭ **ModelList**: { `models`: [*Model*](#model)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`models` | [*Model*](#model)[] |
`nextToken` | *string* \| *null* |

Defined in: [types.ts:362](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L362)

___

### PostPredictions

Ƭ **PostPredictions**: [*CreatePredictionsOptions*](#interfacestypescreatepredictionsoptionsmd) & { `documentId`: *string* ; `modelId`: *string*  }

Defined in: [types.ts:197](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L197)

___

### Prediction

Ƭ **Prediction**: [*GroundTruth*](#groundtruth) & { `confidence`: *number*  }

Defined in: [types.ts:202](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L202)

___

### PredictionList

Ƭ **PredictionList**: { `nextToken`: *string* \| *null* ; `predictions`: [*PredictionResponse*](#predictionresponse)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`nextToken` | *string* \| *null* |
`predictions` | [*PredictionResponse*](#predictionresponse)[] |

Defined in: [types.ts:218](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L218)

___

### PredictionResponse

Ƭ **PredictionResponse**: { `documentId`: *string* ; `inferenceTime`: *number* ; `modelId`: *string* ; `predictionId`: *string* ; `predictions`: [*Prediction*](#prediction)[] ; `timestamp`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`documentId` | *string* |
`inferenceTime` | *number* |
`modelId` | *string* |
`predictionId` | *string* |
`predictions` | [*Prediction*](#prediction)[] |
`timestamp` | *number* |

Defined in: [types.ts:207](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L207)

___

### PreprocessConfig

Ƭ **PreprocessConfig**: { `autoRotate`: *boolean* ; `imageQuality`: *LOW* \| *HIGH* ; `maxPages`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`autoRotate` | *boolean* |
`imageQuality` | *LOW* \| *HIGH* |
`maxPages` | *number* |

Defined in: [types.ts:335](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L335)

___

### Secret

Ƭ **Secret**: { `description`: *string* \| *null* ; `name`: *string* \| *null* ; `secredId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`description` | *string* \| *null* |
`name` | *string* \| *null* |
`secredId` | *string* |

Defined in: [types.ts:265](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L265)

___

### SecretList

Ƭ **SecretList**: { `nextToken`: *string* \| *null* ; `secrets`: [*Secret*](#secret)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`nextToken` | *string* \| *null* |
`secrets` | [*Secret*](#secret)[] |

Defined in: [types.ts:273](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L273)

___

### Transition

Ƭ **Transition**: { `assets?`: *Record*<*string*, *string*\> ; `description`: *string* ; `inputJsonSchema`: *unknown* ; `name`: *string* ; `outputJsonSchema?`: *unknown* ; `parameters`: *Record*<*string*, *any*\> ; `transitionId`: *string* ; `transitionType`: [*TransitionType*](#transitiontype)  }

#### Type declaration:

Name | Type |
------ | ------ |
`assets?` | *Record*<*string*, *string*\> |
`description` | *string* |
`inputJsonSchema` | *unknown* |
`name` | *string* |
`outputJsonSchema?` | *unknown* |
`parameters` | *Record*<*string*, *any*\> |
`transitionId` | *string* |
`transitionType` | [*TransitionType*](#transitiontype) |

Defined in: [types.ts:100](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L100)

___

### TransitionExecution

Ƭ **TransitionExecution**: { `completedBy`: *string* \| *null* ; `endTime`: *string* \| *null* ; `executionId`: *string* ; `input`: *Record*<*any*, *any*\> ; `logId`: *string* \| *null* ; `startTime`: *string* \| *null* ; `status`: *succeeded* \| *failed* \| *retry* \| *running* \| *rejected* ; `transitionId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`completedBy` | *string* \| *null* |
`endTime` | *string* \| *null* |
`executionId` | *string* |
`input` | *Record*<*any*, *any*\> |
`logId` | *string* \| *null* |
`startTime` | *string* \| *null* |
`status` | *succeeded* \| *failed* \| *retry* \| *running* \| *rejected* |
`transitionId` | *string* |

Defined in: [types.ts:116](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L116)

___

### TransitionExecutionList

Ƭ **TransitionExecutionList**: { `executions`: [*TransitionExecution*](#transitionexecution)[] ; `nextToken`: *string* \| *null* ; `transitionId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`executions` | [*TransitionExecution*](#transitionexecution)[] |
`nextToken` | *string* \| *null* |
`transitionId` | *string* |

Defined in: [types.ts:37](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L37)

___

### TransitionExecutionListOptions

Ƭ **TransitionExecutionListOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `executionId?`: *string* \| *string*[] ; `order?`: *ascending* \| *descending* ; `sortBy?`: *startTime* \| *endTime* ; `status?`: *succeeded* \| *failed* \| *retry* \| *running* \| *rejected*  }

Defined in: [types.ts:43](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L43)

___

### TransitionList

Ƭ **TransitionList**: { `nextToken`: *string* \| *null* ; `transitions`: [*Transition*](#transition)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`nextToken` | *string* \| *null* |
`transitions` | [*Transition*](#transition)[] |

Defined in: [types.ts:111](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L111)

___

### TransitionType

Ƭ **TransitionType**: *docker* \| *manual*

Defined in: [types.ts:91](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L91)

___

### UpdateTransitionOptions

Ƭ **UpdateTransitionOptions**: { `description?`: *string* ; `inputJsonSchema?`: *Record*<*any*, *any*\> ; `name?`: *string* ; `outputJsonSchema?`: *Record*<*any*, *any*\>  }

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | *string* |
`inputJsonSchema?` | *Record*<*any*, *any*\> |
`name?` | *string* |
`outputJsonSchema?` | *Record*<*any*, *any*\> |

Defined in: [types.ts:93](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L93)

___

### UpdateUserOptions

Ƭ **UpdateUserOptions**: { `avatar?`: *string* \| *null* ; `name?`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`avatar?` | *string* \| *null* |
`name?` | *string* \| *null* |

Defined in: [types.ts:253](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L253)

___

### User

Ƭ **User**: { `avatar`: *string* \| *null* ; `email`: *string* ; `name`: *string* \| *null* ; `userId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`avatar` | *string* \| *null* |
`email` | *string* |
`name` | *string* \| *null* |
`userId` | *string* |

Defined in: [types.ts:241](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L241)

___

### UserList

Ƭ **UserList**: { `nextToken`: *string* \| *null* ; `users`: [*User*](#user)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`nextToken` | *string* \| *null* |
`users` | [*User*](#user)[] |

Defined in: [types.ts:260](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L260)

___

### Workflow

Ƭ **Workflow**: { `description?`: *string* ; `name`: *string* ; `workflowId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | *string* |
`name` | *string* |
`workflowId` | *string* |

Defined in: [types.ts:133](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L133)

___

### WorkflowExecution

Ƭ **WorkflowExecution**: { `completedBy`: *string*[] ; `endTime`: *string* \| *null* ; `executionId`: *string* ; `input`: *Record*<*any*, *any*\> ; `logId`: *string* \| *null* ; `output`: *Record*<*any*, *any*\> ; `startTime`: *string* \| *null* ; `status`: *succeeded* \| *failed* \| *running* \| *rejected* \| *retry* \| *error* ; `transitionExecutions`: *Record*<*string*, *string*[]\> \| *null* ; `workflowId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`completedBy` | *string*[] |
`endTime` | *string* \| *null* |
`executionId` | *string* |
`input` | *Record*<*any*, *any*\> |
`logId` | *string* \| *null* |
`output` | *Record*<*any*, *any*\> |
`startTime` | *string* \| *null* |
`status` | *succeeded* \| *failed* \| *running* \| *rejected* \| *retry* \| *error* |
`transitionExecutions` | *Record*<*string*, *string*[]\> \| *null* |
`workflowId` | *string* |

Defined in: [types.ts:165](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L165)

___

### WorkflowExecutionList

Ƭ **WorkflowExecutionList**: { `executions`: *Required*<[*WorkflowExecution*](#workflowexecution)\>[] ; `nextToken`: *string* \| *null* ; `status?`: *succeeded* \| *failed* \| *running* \| *rejected* ; `workflowId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`executions` | *Required*<[*WorkflowExecution*](#workflowexecution)\>[] |
`nextToken` | *string* \| *null* |
`status?` | *succeeded* \| *failed* \| *running* \| *rejected* |
`workflowId` | *string* |

Defined in: [types.ts:178](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L178)

___

### WorkflowList

Ƭ **WorkflowList**: { `workflows`: [*Workflow*](#workflow)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`workflows` | [*Workflow*](#workflow)[] |

Defined in: [types.ts:161](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L161)

___

### WorkflowSpecification

Ƭ **WorkflowSpecification**: { `definition`: *object* ; `language?`: *ASL* ; `version?`: *1.0.0*  }

#### Type declaration:

Name | Type |
------ | ------ |
`definition` | *object* |
`language?` | *ASL* |
`version?` | *1.0.0* |

Defined in: [types.ts:127](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L127)


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

Name | Type |
------ | ------ |
`apiKey` | *string* |
`appClientId` | *string* |
`callbackUrls` | *string*[] \| *null* |
`clientId` | *string* |
`clientSecret?` | *string* |
`createdTime` | *string* \| *null* |
`description` | *string* \| *null* |
`hasSecret` | *boolean* |
`logoutUrls` | *string*[] \| *null* |
`name` | *string* \| *null* |

Defined in: [types.ts:303](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L303)

___

### AppClientList

Ƭ **AppClientList**: { `appClients`: [*AppClient*](#appclient)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`appClients` | [*AppClient*](#appclient)[] |
`nextToken` | *string* \| *null* |

Defined in: [types.ts:316](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L316)

___

### Asset

Ƭ **Asset**: { `assetId`: *string* ; `content`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`assetId` | *string* |
`content` | *string* |

Defined in: [types.ts:323](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L323)

___

### AssetList

Ƭ **AssetList**: { `assets`: [*AssetWithoutContent*](#assetwithoutcontent)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`assets` | [*AssetWithoutContent*](#assetwithoutcontent)[] |
`nextToken` | *string* \| *null* |

Defined in: [types.ts:330](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L330)

___

### AssetWithoutContent

Ƭ **AssetWithoutContent**: *Omit*<[*Asset*](#asset), *content*\>

Defined in: [types.ts:328](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L328)

___

### AuthorizationHeaders

Ƭ **AuthorizationHeaders**: { `Authorization`: *string* ; `X-Api-Key`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`Authorization` | *string* |
`X-Api-Key` | *string* |

Defined in: [types.ts:385](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L385)

___

### AxiosFn

Ƭ **AxiosFn**: <T, R\>(`url`: *string*, `body?`: *any*, `config?`: AxiosRequestConfig) => *Promise*<R\>

Defined in: [types.ts:390](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L390)

___

### Batch

Ƭ **Batch**: { `batchId`: *string* ; `containsPersonallyIdentifiableInformation`: *boolean* ; `createdTime`: *string* ; `description`: *string* ; `name`: *string* ; `numDocuments`: *number* ; `retentionInDays`: *number* ; `storageLocation`: *EU*  }

#### Type declaration:

Name | Type |
------ | ------ |
`batchId` | *string* |
`containsPersonallyIdentifiableInformation` | *boolean* |
`createdTime` | *string* |
`description` | *string* |
`name` | *string* |
`numDocuments` | *number* |
`retentionInDays` | *number* |
`storageLocation` | *EU* |

Defined in: [types.ts:223](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L223)

___

### BatchList

Ƭ **BatchList**: { `batches`: [*Batch*](#batch)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`batches` | [*Batch*](#batch)[] |
`nextToken` | *string* \| *null* |

Defined in: [types.ts:234](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L234)

___

### ContentType

Ƭ **ContentType**: *application/pdf* \| *image/jpeg* \| *image/png* \| *image/tiff*

Defined in: [types.ts:5](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L5)

___

### CreateBatchOptions

Ƭ **CreateBatchOptions**: { `containsPersonallyIdentifiableInformation?`: *boolean* ; `description?`: *string* ; `name?`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`containsPersonallyIdentifiableInformation?` | *boolean* |
`description?` | *string* |
`name?` | *string* |

Defined in: [types.ts:367](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L367)

___

### CreateTransitionDockerParams

Ƭ **CreateTransitionDockerParams**: { `cpu?`: *256* ; `credentials?`: { `password`: *string* ; `username`: *string*  } ; `environment?`: *object* ; `imageUrl`: *string* ; `memory?`: *512* \| *1024* \| *2048*  }

#### Type declaration:

Name | Type |
------ | ------ |
`cpu?` | *256* |
`credentials?` | { `password`: *string* ; `username`: *string*  } |
`environment?` | *object* |
`imageUrl` | *string* |
`memory?` | *512* \| *1024* \| *2048* |

Defined in: [types.ts:71](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L71)

___

### CreateTransitionManualParams

Ƭ **CreateTransitionManualParams**: { `assets?`: { `jsRemoteComponent?`: *string*  } & *Record*<*string*, *string*\>  }

#### Type declaration:

Name | Type |
------ | ------ |
`assets?` | { `jsRemoteComponent?`: *string*  } & *Record*<*string*, *string*\> |

Defined in: [types.ts:82](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L82)

___

### CreateTransitionParams

Ƭ **CreateTransitionParams**: [*CreateTransitionDockerParams*](#createtransitiondockerparams) \| [*CreateTransitionManualParams*](#createtransitionmanualparams)

Defined in: [types.ts:89](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L89)

___

### CreateUserOptions

Ƭ **CreateUserOptions**: { `avatar?`: *string* \| *null* ; `name?`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`avatar?` | *string* \| *null* |
`name?` | *string* \| *null* |

Defined in: [types.ts:248](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L248)

___

### CreateWorkflowOptions

Ƭ **CreateWorkflowOptions**: { `description?`: *string* ; `errorConfig?`: { `email`: *string*  }  }

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | *string* |
`errorConfig?` | { `email`: *string*  } |

Defined in: [types.ts:147](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L147)

___

### DeleteDocumentOptions

Ƭ **DeleteDocumentOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `batchId?`: *string* \| *string*[] ; `consentId?`: *string* \| *string*[]  }

Defined in: [types.ts:192](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L192)

___

### Field

Ƭ **Field**: { `description`: *string* ; `maxLength`: *number* ; `type`: *all* \| *alphanum* \| *alphanumext* \| *amount* \| *date* \| *letter* \| *number* \| *phone*  }

#### Type declaration:

Name | Type |
------ | ------ |
`description` | *string* |
`maxLength` | *number* |
`type` | *all* \| *alphanum* \| *alphanumext* \| *amount* \| *date* \| *letter* \| *number* \| *phone* |

Defined in: [types.ts:341](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L341)

___

### GroundTruth

Ƭ **GroundTruth**: { `label`: *string* ; `value`: *string* \| *boolean* \| *null*  }

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`label` | *string* | maxLength: 36, minLength: 1, pattern: ^[0-9A-Za-z_]+$   |
`value` | *string* \| *boolean* \| *null* | maxLength: 64, minLength: 1   |

Defined in: [types.ts:185](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L185)

___

### LasDocument

Ƭ **LasDocument**: { `batchId?`: *string* ; `consentId?`: *string* ; `content`: *string* ; `contentType`: [*ContentType*](#contenttype) ; `documentId`: *string* ; `groundTruth?`: [*GroundTruth*](#groundtruth)[]  }

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`batchId?` | *string* | pattern: ^las:batch:[a-f0-9]{32}$   |
`consentId?` | *string* | pattern: ^las:consent:[a-f0-9]{32}$   |
`content` | *string* | minimum: 1   |
`contentType` | [*ContentType*](#contenttype) | - |
`documentId` | *string* | pattern: ^las:document:[a-f0-9]{32}$   |
`groundTruth?` | [*GroundTruth*](#groundtruth)[] | - |

Defined in: [types.ts:290](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L290)

___

### LasDocumentList

Ƭ **LasDocumentList**: { `batchId?`: *string* ; `documents`: [*LasDocumentWithoutContent*](#lasdocumentwithoutcontent)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`batchId?` | *string* |
`documents` | [*LasDocumentWithoutContent*](#lasdocumentwithoutcontent)[] |
`nextToken` | *string* \| *null* |

Defined in: [types.ts:65](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L65)

___

### LasDocumentWithoutContent

Ƭ **LasDocumentWithoutContent**: *Omit*<[*LasDocument*](#lasdocument), *content*\>

Defined in: [types.ts:288](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L288)

___

### ListAppClientsOptions

Ƭ **ListAppClientsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:321](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L321)

___

### ListAssetsOptions

Ƭ **ListAssetsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:377](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L377)

___

### ListBatchesOptions

Ƭ **ListBatchesOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:239](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L239)

___

### ListDocumentsOptions

Ƭ **ListDocumentsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `batchId?`: *string* \| *string*[] ; `consentId?`: *string* \| *string*[]  }

Defined in: [types.ts:32](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L32)

___

### ListModelsOptions

Ƭ **ListModelsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:360](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L360)

___

### ListPredictionsOptions

Ƭ **ListPredictionsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:216](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L216)

___

### ListSecretsOptions

Ƭ **ListSecretsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:271](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L271)

___

### ListTransitionOptions

Ƭ **ListTransitionOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `transitionType?`: *string* \| *string*[]  }

Defined in: [types.ts:18](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L18)

___

### ListUsersOptions

Ƭ **ListUsersOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:258](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L258)

___

### ListWorkflowExecutionsOptions

Ƭ **ListWorkflowExecutionsOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `order?`: *ascending* \| *descending* ; `sortBy?`: *startTime* \| *endTime* ; `status?`: *string* \| *string*[]  }

Defined in: [types.ts:141](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L141)

___

### ListWorkflowOptions

Ƭ **ListWorkflowOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd)

Defined in: [types.ts:139](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L139)

___

### Log

Ƭ **Log**: { `events`: *Record*<*any*, *any*\>[] ; `logId`: *string* ; `transitionId?`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`events` | *Record*<*any*, *any*\>[] |
`logId` | *string* |
`transitionId?` | *string* \| *null* |

Defined in: [types.ts:379](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L379)

___

### Model

Ƭ **Model**: { `createdTime`: *string* \| *null* ; `description`: *string* \| *null* ; `fieldConfig`: *Record*<*string*, [*Field*](#field)\> \| *null* ; `height`: *number* ; `modelId`: *string* ; `name`: *string* \| *null* ; `preprocessConfig`: [*PreprocessConfig*](#preprocessconfig) ; `status`: *active* \| *training* ; `updatedTime`: *string* \| *null* ; `width`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`createdTime` | *string* \| *null* |
`description` | *string* \| *null* |
`fieldConfig` | *Record*<*string*, [*Field*](#field)\> \| *null* |
`height` | *number* |
`modelId` | *string* |
`name` | *string* \| *null* |
`preprocessConfig` | [*PreprocessConfig*](#preprocessconfig) |
`status` | *active* \| *training* |
`updatedTime` | *string* \| *null* |
`width` | *number* |

Defined in: [types.ts:347](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L347)

___

### ModelList

Ƭ **ModelList**: { `models`: [*Model*](#model)[] ; `nextToken`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`models` | [*Model*](#model)[] |
`nextToken` | *string* \| *null* |

Defined in: [types.ts:362](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L362)

___

### PostPredictions

Ƭ **PostPredictions**: [*CreatePredictionsOptions*](#interfacestypescreatepredictionsoptionsmd) & { `documentId`: *string* ; `modelId`: *string*  }

Defined in: [types.ts:197](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L197)

___

### Prediction

Ƭ **Prediction**: [*GroundTruth*](#groundtruth) & { `confidence`: *number*  }

Defined in: [types.ts:202](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L202)

___

### PredictionList

Ƭ **PredictionList**: { `nextToken`: *string* \| *null* ; `predictions`: [*PredictionResponse*](#predictionresponse)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`nextToken` | *string* \| *null* |
`predictions` | [*PredictionResponse*](#predictionresponse)[] |

Defined in: [types.ts:218](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L218)

___

### PredictionResponse

Ƭ **PredictionResponse**: { `documentId`: *string* ; `inferenceTime`: *number* ; `modelId`: *string* ; `predictionId`: *string* ; `predictions`: [*Prediction*](#prediction)[] ; `timestamp`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`documentId` | *string* |
`inferenceTime` | *number* |
`modelId` | *string* |
`predictionId` | *string* |
`predictions` | [*Prediction*](#prediction)[] |
`timestamp` | *number* |

Defined in: [types.ts:207](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L207)

___

### PreprocessConfig

Ƭ **PreprocessConfig**: { `autoRotate`: *boolean* ; `imageQuality`: *LOW* \| *HIGH* ; `maxPages`: *number*  }

#### Type declaration:

Name | Type |
------ | ------ |
`autoRotate` | *boolean* |
`imageQuality` | *LOW* \| *HIGH* |
`maxPages` | *number* |

Defined in: [types.ts:335](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L335)

___

### Secret

Ƭ **Secret**: { `description`: *string* \| *null* ; `name`: *string* \| *null* ; `secredId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`description` | *string* \| *null* |
`name` | *string* \| *null* |
`secredId` | *string* |

Defined in: [types.ts:265](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L265)

___

### SecretList

Ƭ **SecretList**: { `nextToken`: *string* \| *null* ; `secrets`: [*Secret*](#secret)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`nextToken` | *string* \| *null* |
`secrets` | [*Secret*](#secret)[] |

Defined in: [types.ts:273](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L273)

___

### Transition

Ƭ **Transition**: { `assets?`: *Record*<*string*, *string*\> ; `description`: *string* ; `inputJsonSchema`: *unknown* ; `name`: *string* ; `outputJsonSchema?`: *unknown* ; `parameters`: *Record*<*string*, *any*\> ; `transitionId`: *string* ; `transitionType`: [*TransitionType*](#transitiontype)  }

#### Type declaration:

Name | Type |
------ | ------ |
`assets?` | *Record*<*string*, *string*\> |
`description` | *string* |
`inputJsonSchema` | *unknown* |
`name` | *string* |
`outputJsonSchema?` | *unknown* |
`parameters` | *Record*<*string*, *any*\> |
`transitionId` | *string* |
`transitionType` | [*TransitionType*](#transitiontype) |

Defined in: [types.ts:100](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L100)

___

### TransitionExecution

Ƭ **TransitionExecution**: { `completedBy`: *string* \| *null* ; `endTime`: *string* \| *null* ; `executionId`: *string* ; `input`: *Record*<*any*, *any*\> ; `logId`: *string* \| *null* ; `startTime`: *string* \| *null* ; `status`: *succeeded* \| *failed* \| *retry* \| *running* \| *rejected* ; `transitionId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`completedBy` | *string* \| *null* |
`endTime` | *string* \| *null* |
`executionId` | *string* |
`input` | *Record*<*any*, *any*\> |
`logId` | *string* \| *null* |
`startTime` | *string* \| *null* |
`status` | *succeeded* \| *failed* \| *retry* \| *running* \| *rejected* |
`transitionId` | *string* |

Defined in: [types.ts:116](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L116)

___

### TransitionExecutionList

Ƭ **TransitionExecutionList**: { `executions`: [*TransitionExecution*](#transitionexecution)[] ; `nextToken`: *string* \| *null* ; `transitionId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`executions` | [*TransitionExecution*](#transitionexecution)[] |
`nextToken` | *string* \| *null* |
`transitionId` | *string* |

Defined in: [types.ts:37](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L37)

___

### TransitionExecutionListOptions

Ƭ **TransitionExecutionListOptions**: [*PaginationOptions*](#interfacestypespaginationoptionsmd) & { `executionId?`: *string* \| *string*[] ; `order?`: *ascending* \| *descending* ; `sortBy?`: *startTime* \| *endTime* ; `status?`: *succeeded* \| *failed* \| *retry* \| *running* \| *rejected*  }

Defined in: [types.ts:43](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L43)

___

### TransitionList

Ƭ **TransitionList**: { `nextToken`: *string* \| *null* ; `transitions`: [*Transition*](#transition)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`nextToken` | *string* \| *null* |
`transitions` | [*Transition*](#transition)[] |

Defined in: [types.ts:111](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L111)

___

### TransitionType

Ƭ **TransitionType**: *docker* \| *manual*

Defined in: [types.ts:91](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L91)

___

### UpdateTransitionOptions

Ƭ **UpdateTransitionOptions**: { `description?`: *string* ; `inputJsonSchema?`: *Record*<*any*, *any*\> ; `name?`: *string* ; `outputJsonSchema?`: *Record*<*any*, *any*\>  }

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | *string* |
`inputJsonSchema?` | *Record*<*any*, *any*\> |
`name?` | *string* |
`outputJsonSchema?` | *Record*<*any*, *any*\> |

Defined in: [types.ts:93](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L93)

___

### UpdateUserOptions

Ƭ **UpdateUserOptions**: { `avatar?`: *string* \| *null* ; `name?`: *string* \| *null*  }

#### Type declaration:

Name | Type |
------ | ------ |
`avatar?` | *string* \| *null* |
`name?` | *string* \| *null* |

Defined in: [types.ts:253](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L253)

___

### User

Ƭ **User**: { `avatar`: *string* \| *null* ; `email`: *string* ; `name`: *string* \| *null* ; `userId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`avatar` | *string* \| *null* |
`email` | *string* |
`name` | *string* \| *null* |
`userId` | *string* |

Defined in: [types.ts:241](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L241)

___

### UserList

Ƭ **UserList**: { `nextToken`: *string* \| *null* ; `users`: [*User*](#user)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`nextToken` | *string* \| *null* |
`users` | [*User*](#user)[] |

Defined in: [types.ts:260](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L260)

___

### Workflow

Ƭ **Workflow**: { `description?`: *string* ; `name`: *string* ; `workflowId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`description?` | *string* |
`name` | *string* |
`workflowId` | *string* |

Defined in: [types.ts:133](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L133)

___

### WorkflowExecution

Ƭ **WorkflowExecution**: { `completedBy`: *string*[] ; `endTime`: *string* \| *null* ; `executionId`: *string* ; `input`: *Record*<*any*, *any*\> ; `logId`: *string* \| *null* ; `output`: *Record*<*any*, *any*\> ; `startTime`: *string* \| *null* ; `status`: *succeeded* \| *failed* \| *running* \| *rejected* \| *retry* \| *error* ; `transitionExecutions`: *Record*<*string*, *string*[]\> \| *null* ; `workflowId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`completedBy` | *string*[] |
`endTime` | *string* \| *null* |
`executionId` | *string* |
`input` | *Record*<*any*, *any*\> |
`logId` | *string* \| *null* |
`output` | *Record*<*any*, *any*\> |
`startTime` | *string* \| *null* |
`status` | *succeeded* \| *failed* \| *running* \| *rejected* \| *retry* \| *error* |
`transitionExecutions` | *Record*<*string*, *string*[]\> \| *null* |
`workflowId` | *string* |

Defined in: [types.ts:165](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L165)

___

### WorkflowExecutionList

Ƭ **WorkflowExecutionList**: { `executions`: *Required*<[*WorkflowExecution*](#workflowexecution)\>[] ; `nextToken`: *string* \| *null* ; `status?`: *succeeded* \| *failed* \| *running* \| *rejected* ; `workflowId`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`executions` | *Required*<[*WorkflowExecution*](#workflowexecution)\>[] |
`nextToken` | *string* \| *null* |
`status?` | *succeeded* \| *failed* \| *running* \| *rejected* |
`workflowId` | *string* |

Defined in: [types.ts:178](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L178)

___

### WorkflowList

Ƭ **WorkflowList**: { `workflows`: [*Workflow*](#workflow)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`workflows` | [*Workflow*](#workflow)[] |

Defined in: [types.ts:161](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L161)

___

### WorkflowSpecification

Ƭ **WorkflowSpecification**: { `definition`: *object* ; `language?`: *ASL* ; `version?`: *1.0.0*  }

#### Type declaration:

Name | Type |
------ | ------ |
`definition` | *object* |
`language?` | *ASL* |
`version?` | *1.0.0* |

Defined in: [types.ts:127](https://github.com/LucidtechAI/las-sdk-js/blob/7bfac85/packages/las-sdk-core/src/types.ts#L127)
