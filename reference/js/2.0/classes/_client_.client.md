[@lucidtech/las-sdk-core](../README.md) › [Globals](../globals.md) › ["client"](../modules/_client_.md) › [Client](_client_.client.md)

# Class: Client

A high-level http client for communicating the Lucidtech REST API

## Hierarchy

* **Client**

## Index

### Constructors

* [constructor](_client_.client.md#constructor)

### Properties

* [apiEndpoint](_client_.client.md#apiendpoint)
* [credentials](_client_.client.md#credentials)

### Methods

* [getAuthorizationHeaders](_client_.client.md#private-getauthorizationheaders)
* [getDocument](_client_.client.md#getdocument)
* [getDocuments](_client_.client.md#getdocuments)
* [getUser](_client_.client.md#getuser)
* [makeAuthorizedRequest](_client_.client.md#private-makeauthorizedrequest)
* [makeDeleteRequest](_client_.client.md#makedeleterequest)
* [makeGetRequest](_client_.client.md#makegetrequest)
* [makePatchRequest](_client_.client.md#makepatchrequest)
* [makePostRequest](_client_.client.md#makepostrequest)
* [patchUser](_client_.client.md#patchuser)
* [postBatches](_client_.client.md#postbatches)
* [postDocumentId](_client_.client.md#postdocumentid)
* [postDocuments](_client_.client.md#postdocuments)
* [postPredictions](_client_.client.md#postpredictions)

## Constructors

###  constructor

\+ **new Client**(`apiEndpoint`: string, `credentials`: [Credentials](_credentials_.credentials.md)): *[Client](_client_.client.md)*

*Defined in [client.ts:12](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`apiEndpoint` | string |
`credentials` | [Credentials](_credentials_.credentials.md) |

**Returns:** *[Client](_client_.client.md)*

## Properties

###  apiEndpoint

• **apiEndpoint**: *string*

*Defined in [client.ts:10](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L10)*

___

###  credentials

• **credentials**: *[Credentials](_credentials_.credentials.md)*

*Defined in [client.ts:12](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L12)*

## Methods

### `Private` getAuthorizationHeaders

▸ **getAuthorizationHeaders**(): *Promise‹any›*

*Defined in [client.ts:185](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L185)*

**Returns:** *Promise‹any›*

___

###  getDocument

▸ **getDocument**(`documentId`: string): *Promise‹any›*

*Defined in [client.ts:25](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L25)*

Get document from the REST API, calls the GET /documets/{documentId} endpoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`documentId` | string | the document id to run inference and create a prediction on |

**Returns:** *Promise‹any›*

- document response from REST API

___

###  getDocuments

▸ **getDocuments**(`batchId`: string, `consentId?`: undefined | string): *Promise‹any›*

*Defined in [client.ts:63](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L63)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`batchId` | string | the batch id that contains the documents of interest |
`consentId?` | undefined &#124; string | - |

**Returns:** *Promise‹any›*

- documents from REST API contained in batch <batchId>

___

###  getUser

▸ **getUser**(`userId`: string): *Promise‹any›*

*Defined in [client.ts:145](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L145)*

Gets consent hash and user id for a given user id, calls the GET /users/{user_id} endpoint.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | the user id to get consent hash for |

**Returns:** *Promise‹any›*

- batch handle id and pre-signed upload url

___

### `Private` makeAuthorizedRequest

▸ **makeAuthorizedRequest**(`axiosFn`: function, `path`: string, `body?`: any): *Promise‹any›*

*Defined in [client.ts:165](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L165)*

**Parameters:**

▪ **axiosFn**: *function*

▸ (`url`: string, `body?`: any, `config?`: AxiosRequestConfig): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`body?` | any |
`config?` | AxiosRequestConfig |

▪ **path**: *string*

▪`Optional`  **body**: *any*

**Returns:** *Promise‹any›*

___

###  makeDeleteRequest

▸ **makeDeleteRequest**(`path`: string): *Promise‹any›*

*Defined in [client.ts:153](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L153)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹any›*

___

###  makeGetRequest

▸ **makeGetRequest**(`path`: string, `query?`: any): *Promise‹any›*

*Defined in [client.ts:149](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L149)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`query?` | any |

**Returns:** *Promise‹any›*

___

###  makePatchRequest

▸ **makePatchRequest**(`path`: string, `body`: any): *Promise‹any›*

*Defined in [client.ts:161](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`body` | any |

**Returns:** *Promise‹any›*

___

###  makePostRequest

▸ **makePostRequest**(`path`: string, `body`: any): *Promise‹any›*

*Defined in [client.ts:157](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`body` | any |

**Returns:** *Promise‹any›*

___

###  patchUser

▸ **patchUser**(`userId`: string, `consentHash`: string): *Promise‹any›*

*Defined in [client.ts:134](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L134)*

Modifies consent hash for a user, calls the PATCH /users/{user_id} endpoint.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | the user id to modify consent hash for |
`consentHash` | string | the consent hash to set |

**Returns:** *Promise‹any›*

- batch handle id and pre-signed upload url

___

###  postBatches

▸ **postBatches**(`description`: string): *Promise‹any›*

*Defined in [client.ts:119](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L119)*

Creates a batch handle, calls the POST /batches endpoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`description` | string | a short description of the batch you intend to create |

**Returns:** *Promise‹any›*

- batch handle id and pre-signed upload url

___

###  postDocumentId

▸ **postDocumentId**(`documentId`: string, `feedback`: Array‹object›): *Promise‹any›*

*Defined in [client.ts:78](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L78)*

Post feedback to the REST API, calls the POST /documents/{documentId} endpoint.
Posting feedback means posting the ground truth data for the particular document.
This enables the API to learn from past mistakes.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`documentId` | string | the document id to run inference and create a prediction on |
`feedback` | Array‹object› | - |

**Returns:** *Promise‹any›*

- feedback response from REST API

___

###  postDocuments

▸ **postDocuments**(`content`: string, `contentType`: string, `consentId`: string, `batchId?`: undefined | string, `feedback?`: Array‹object›): *Promise‹any›*

*Defined in [client.ts:40](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L40)*

Creates a document handle, calls the POST /documents endpoint.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`content` | string | The contents to POST |
`contentType` | string | A MIME type for the document handle |
`consentId` | string | An identifier to mark the owner of the document handle |
`batchId?` | undefined &#124; string | - |
`feedback?` | Array‹object› | - |

**Returns:** *Promise‹any›*

- document handle id

___

###  postPredictions

▸ **postPredictions**(`documentId`: string, `modelName`: string, `maxPages?`: undefined | number, `autoRotate?`: undefined | false | true): *Promise‹any›*

*Defined in [client.ts:96](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/client.ts#L96)*

Run inference and create a prediction, calls the POST /predictions endpoint.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`documentId` | string | the document id to run inference and create a prediction on |
`modelName` | string | the name of the model to use for inference |
`maxPages?` | undefined &#124; number | - |
`autoRotate?` | undefined &#124; false &#124; true | - |

**Returns:** *Promise‹any›*

- prediction on document
