[@lucidtech/las-sdk-core](../README.md) › [Globals](../globals.md) › ["helpers.spec"](../modules/_helpers_spec_.md) › [TestCredentials](_helpers_spec_.testcredentials.md)

# Class: TestCredentials

## Hierarchy

* [Credentials](_credentials_.credentials.md)

  ↳ **TestCredentials**

## Index

### Constructors

* [constructor](_helpers_spec_.testcredentials.md#constructor)

### Properties

* [apiKey](_helpers_spec_.testcredentials.md#apikey)
* [storage](_helpers_spec_.testcredentials.md#protected-optional-storage)
* [testAccessToken](_helpers_spec_.testcredentials.md#testaccesstoken)
* [testExpiration](_helpers_spec_.testcredentials.md#testexpiration)
* [testRefreshToken](_helpers_spec_.testcredentials.md#testrefreshtoken)
* [token](_helpers_spec_.testcredentials.md#protected-optional-token)

### Methods

* [getAccessToken](_helpers_spec_.testcredentials.md#getaccesstoken)
* [getToken](_helpers_spec_.testcredentials.md#gettoken)

## Constructors

###  constructor

\+ **new TestCredentials**(`testApiKey`: string, `testAccessToken`: string, `testExpiresInSeconds`: number, `testRefreshToken`: string): *[TestCredentials](_helpers_spec_.testcredentials.md)*

*Overrides [Credentials](_credentials_.credentials.md).[constructor](_credentials_.credentials.md#protected-constructor)*

*Defined in [helpers.spec.ts:9](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/helpers.spec.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`testApiKey` | string |
`testAccessToken` | string |
`testExpiresInSeconds` | number |
`testRefreshToken` | string |

**Returns:** *[TestCredentials](_helpers_spec_.testcredentials.md)*

## Properties

###  apiKey

• **apiKey**: *string*

*Inherited from [Credentials](_credentials_.credentials.md).[apiKey](_credentials_.credentials.md#apikey)*

*Defined in [credentials.ts:37](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/credentials.ts#L37)*

___

### `Protected` `Optional` storage

• **storage**? : *[TokenStorage](../interfaces/_storage_.tokenstorage.md)‹[Token](_credentials_.token.md)›*

*Inherited from [Credentials](_credentials_.credentials.md).[storage](_credentials_.credentials.md#protected-optional-storage)*

*Defined in [credentials.ts:41](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/credentials.ts#L41)*

___

###  testAccessToken

• **testAccessToken**: *string*

*Defined in [helpers.spec.ts:5](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/helpers.spec.ts#L5)*

___

###  testExpiration

• **testExpiration**: *number*

*Defined in [helpers.spec.ts:7](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/helpers.spec.ts#L7)*

___

###  testRefreshToken

• **testRefreshToken**: *string*

*Defined in [helpers.spec.ts:9](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/helpers.spec.ts#L9)*

___

### `Protected` `Optional` token

• **token**? : *[Token](_credentials_.token.md)*

*Inherited from [Credentials](_credentials_.credentials.md).[token](_credentials_.credentials.md#protected-optional-token)*

*Defined in [credentials.ts:39](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/credentials.ts#L39)*

## Methods

###  getAccessToken

▸ **getAccessToken**(): *Promise‹string›*

*Inherited from [Credentials](_credentials_.credentials.md).[getAccessToken](_credentials_.credentials.md#getaccesstoken)*

*Defined in [credentials.ts:54](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/credentials.ts#L54)*

Method used to get and cache an access token. Algorithm used:
1. Look for a valid token in memory.
2. Look for a valid token in the storage (if provided);
3. Fetch a new token from server and cache it (both in memory and in storage).

**Returns:** *Promise‹string›*

___

###  getToken

▸ **getToken**(): *Promise‹[Token](_credentials_.token.md)›*

*Overrides [Credentials](_credentials_.credentials.md).[getToken](_credentials_.credentials.md#protected-abstract-gettoken)*

*Defined in [helpers.spec.ts:24](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/helpers.spec.ts#L24)*

**Returns:** *Promise‹[Token](_credentials_.token.md)›*
