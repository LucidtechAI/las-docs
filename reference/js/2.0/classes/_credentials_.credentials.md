[@lucidtech/las-sdk-core](../README.md) › [Globals](../globals.md) › ["credentials"](../modules/_credentials_.md) › [Credentials](_credentials_.credentials.md)

# Class: Credentials

Use to fetch and store credentials and to generate/cache an access token

## Hierarchy

* **Credentials**

  ↳ [TestCredentials](_helpers_spec_.testcredentials.md)

## Index

### Constructors

* [constructor](_credentials_.credentials.md#protected-constructor)

### Properties

* [apiKey](_credentials_.credentials.md#apikey)
* [storage](_credentials_.credentials.md#protected-optional-storage)
* [token](_credentials_.credentials.md#protected-optional-token)

### Methods

* [getAccessToken](_credentials_.credentials.md#getaccesstoken)
* [getToken](_credentials_.credentials.md#protected-abstract-gettoken)

## Constructors

### `Protected` constructor

\+ **new Credentials**(`apiKey`: string, `storage?`: [TokenStorage](../interfaces/_storage_.tokenstorage.md)‹[Token](_credentials_.token.md)›): *[Credentials](_credentials_.credentials.md)*

*Defined in [credentials.ts:41](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/credentials.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`apiKey` | string |
`storage?` | [TokenStorage](../interfaces/_storage_.tokenstorage.md)‹[Token](_credentials_.token.md)› |

**Returns:** *[Credentials](_credentials_.credentials.md)*

## Properties

###  apiKey

• **apiKey**: *string*

*Defined in [credentials.ts:37](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/credentials.ts#L37)*

___

### `Protected` `Optional` storage

• **storage**? : *[TokenStorage](../interfaces/_storage_.tokenstorage.md)‹[Token](_credentials_.token.md)›*

*Defined in [credentials.ts:41](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/credentials.ts#L41)*

___

### `Protected` `Optional` token

• **token**? : *[Token](_credentials_.token.md)*

*Defined in [credentials.ts:39](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/credentials.ts#L39)*

## Methods

###  getAccessToken

▸ **getAccessToken**(): *Promise‹string›*

*Defined in [credentials.ts:54](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/credentials.ts#L54)*

Method used to get and cache an access token. Algorithm used:
1. Look for a valid token in memory.
2. Look for a valid token in the storage (if provided);
3. Fetch a new token from server and cache it (both in memory and in storage).

**Returns:** *Promise‹string›*

___

### `Protected` `Abstract` getToken

▸ **getToken**(): *Promise‹[Token](_credentials_.token.md)›*

*Defined in [credentials.ts:83](https://github.com/LucidtechAI/las-sdk-js/blob/3e32c37/packages/las-sdk-core/src/credentials.ts#L83)*

**Returns:** *Promise‹[Token](_credentials_.token.md)›*
