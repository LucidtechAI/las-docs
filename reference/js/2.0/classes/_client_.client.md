[@lucidtech/las-sdk-core](../README.md) › [Globals](../globals.md) › ["client"](../modules/_client_.md) › [Client](_client_.client.md)

# Class: Client

A high-level http client for communicating the Lucidtech REST API

## Hierarchy

* **Client**

## Index

### Constructors

* [constructor](_client_.client.md#constructor)

### Properties

* [credentials](_client_.client.md#credentials)

### Methods

* [createBatch](_client_.client.md#createbatch)
* [createDocument](_client_.client.md#createdocument)
* [createPrediction](_client_.client.md#createprediction)
* [getAuthorizationHeaders](_client_.client.md#private-getauthorizationheaders)
* [getDocument](_client_.client.md#getdocument)
* [getUser](_client_.client.md#getuser)
* [listDocuments](_client_.client.md#listdocuments)
* [makeAuthorizedRequest](_client_.client.md#private-makeauthorizedrequest)
* [makeDeleteRequest](_client_.client.md#makedeleterequest)
* [makeGetRequest](_client_.client.md#makegetrequest)
* [makePatchRequest](_client_.client.md#makepatchrequest)
* [makePostRequest](_client_.client.md#makepostrequest)
* [updateDocument](_client_.client.md#updatedocument)
* [updateUser](_client_.client.md#updateuser)

## Constructors

###  constructor

\+ **new Client**(`credentials`: [Credentials](_credentials_.credentials.md)): *[Client](_client_.client.md)*

*Defined in [client.ts:10](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`credentials` | [Credentials](_credentials_.credentials.md) |

**Returns:** *[Client](_client_.client.md)*

## Properties

###  credentials

• **credentials**: *[Credentials](_credentials_.credentials.md)*

*Defined in [client.ts:10](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L10)*

## Methods

###  createBatch

▸ **createBatch**(`description`: string): *Promise‹any›*

*Defined in [client.ts:117](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L117)*

Creates a batch handle, calls the POST /batches endpoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`description` | string | a short description of the batch you intend to create |

**Returns:** *Promise‹any›*

- batch handle id and pre-signed upload url

___

###  createDocument

▸ **createDocument**(`content`: string, `contentType`: string, `consentId`: string, `batchId?`: undefined | string, `feedback?`: Array‹object›): *Promise‹any›*

*Defined in [client.ts:37](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L37)*

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

###  createPrediction

▸ **createPrediction**(`documentId`: string, `modelName`: string, `maxPages?`: undefined | number, `autoRotate?`: undefined | false | true): *Promise‹any›*

*Defined in [client.ts:94](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L94)*

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

___

### `Private` getAuthorizationHeaders

▸ **getAuthorizationHeaders**(): *Promise‹any›*

*Defined in [client.ts:184](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L184)*

**Returns:** *Promise‹any›*

___

###  getDocument

▸ **getDocument**(`documentId`: string): *Promise‹any›*

*Defined in [client.ts:22](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L22)*

Get document from the REST API, calls the GET /documets/{documentId} endpoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`documentId` | string | the document id to run inference and create a prediction on |

**Returns:** *Promise‹any›*

- document response from REST API

___

###  getUser

▸ **getUser**(`userId`: string): *Promise‹any›*

*Defined in [client.ts:144](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L144)*

Gets consent hash and user id for a given user id, calls the GET /users/{user_id} endpoint.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | the user id to get consent hash for |

**Returns:** *Promise‹any›*

- batch handle id and pre-signed upload url

___

###  listDocuments

▸ **listDocuments**(`batchId?`: undefined | string, `consentId?`: undefined | string): *Promise‹any›*

*Defined in [client.ts:60](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L60)*

**Parameters:**

Name | Type |
------ | ------ |
`batchId?` | undefined &#124; string |
`consentId?` | undefined &#124; string |

**Returns:** *Promise‹any›*

- documents from REST API contained in batch <batchId>

___

### `Private` makeAuthorizedRequest

▸ **makeAuthorizedRequest**(`axiosFn`: function, `path`: string, `body?`: any): *Promise‹any›*

*Defined in [client.ts:164](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L164)*

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

*Defined in [client.ts:152](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L152)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |

**Returns:** *Promise‹any›*

___

###  makeGetRequest

▸ **makeGetRequest**(`path`: string, `query?`: any): *Promise‹any›*

*Defined in [client.ts:148](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L148)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`query?` | any |

**Returns:** *Promise‹any›*

___

###  makePatchRequest

▸ **makePatchRequest**(`path`: string, `body`: any): *Promise‹any›*

*Defined in [client.ts:160](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L160)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`body` | any |

**Returns:** *Promise‹any›*

___

###  makePostRequest

▸ **makePostRequest**(`path`: string, `body`: any): *Promise‹any›*

*Defined in [client.ts:156](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`path` | string |
`body` | any |

**Returns:** *Promise‹any›*

___

###  updateDocument

▸ **updateDocument**(`documentId`: string, `feedback`: Array‹object›): *Promise‹any›*

*Defined in [client.ts:75](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L75)*

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

###  updateUser

▸ **updateUser**(`userId`: string, `consentHash`: string): *Promise‹any›*

*Defined in [client.ts:132](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/client.ts#L132)*

Modifies consent hash for a user, calls the PATCH /users/{user_id} endpoint.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`userId` | string | the user id to modify consent hash for |
`consentHash` | string | the consent hash to set |

**Returns:** *Promise‹any›*

- batch handle id and pre-signed upload url
