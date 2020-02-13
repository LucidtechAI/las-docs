[@lucidtech/las-sdk-core](../README.md) › [Globals](../globals.md) › ["helpers.spec"](../modules/_helpers_spec_.md) › [TestCredentials](_helpers_spec_.testcredentials.md)

# Class: TestCredentials

## Hierarchy

* [Credentials](_credentials_.credentials.md)

  ↳ **TestCredentials**

## Index

### Constructors

* [constructor](_helpers_spec_.testcredentials.md#constructor)

### Properties

* [apiEndpoint](_helpers_spec_.testcredentials.md#apiendpoint)
* [apiKey](_helpers_spec_.testcredentials.md#apikey)
* [testAccessToken](_helpers_spec_.testcredentials.md#testaccesstoken)
* [testExpiration](_helpers_spec_.testcredentials.md#testexpiration)
* [testRefreshToken](_helpers_spec_.testcredentials.md#testrefreshtoken)

### Methods

* [getAccessToken](_helpers_spec_.testcredentials.md#getaccesstoken)
* [getToken](_helpers_spec_.testcredentials.md#gettoken)

## Constructors

###  constructor

\+ **new TestCredentials**(`testEndpoint`: string, `testApiKey`: string, `testAccessToken`: string, `testExpiresInSeconds`: number, `testRefreshToken`: string): *[TestCredentials](_helpers_spec_.testcredentials.md)*

*Defined in [helpers.spec.ts:11](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/helpers.spec.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`testEndpoint` | string |
`testApiKey` | string |
`testAccessToken` | string |
`testExpiresInSeconds` | number |
`testRefreshToken` | string |

**Returns:** *[TestCredentials](_helpers_spec_.testcredentials.md)*

## Properties

###  apiEndpoint

• **apiEndpoint**: *string*

*Inherited from [Credentials](_credentials_.credentials.md).[apiEndpoint](_credentials_.credentials.md#apiendpoint)*

*Defined in [credentials.ts:37](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/credentials.ts#L37)*

___

###  apiKey

• **apiKey**: *string*

*Inherited from [Credentials](_credentials_.credentials.md).[apiKey](_credentials_.credentials.md#apikey)*

*Defined in [credentials.ts:39](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/credentials.ts#L39)*

___

###  testAccessToken

• **testAccessToken**: *string*

*Defined in [helpers.spec.ts:7](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/helpers.spec.ts#L7)*

___

###  testExpiration

• **testExpiration**: *number*

*Defined in [helpers.spec.ts:9](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/helpers.spec.ts#L9)*

___

###  testRefreshToken

• **testRefreshToken**: *string*

*Defined in [helpers.spec.ts:11](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/helpers.spec.ts#L11)*

## Methods

###  getAccessToken

▸ **getAccessToken**(): *Promise‹string›*

*Inherited from [Credentials](_credentials_.credentials.md).[getAccessToken](_credentials_.credentials.md#getaccesstoken)*

*Defined in [credentials.ts:57](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/credentials.ts#L57)*

Method used to get and cache an access token. Algorithm used:
1. Look for a valid token in memory.
2. Look for a valid token in the storage (if provided);
3. Fetch a new token from server and cache it (both in memory and in storage).

**Returns:** *Promise‹string›*

___

###  getToken

▸ **getToken**(): *Promise‹[Token](_credentials_.token.md)›*

*Defined in [helpers.spec.ts:27](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/helpers.spec.ts#L27)*

**Returns:** *Promise‹[Token](_credentials_.token.md)›*
