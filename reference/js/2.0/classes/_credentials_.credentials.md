[@lucidtech/las-sdk-core](../README.md) › [Globals](../globals.md) › ["credentials"](../modules/_credentials_.md) › [Credentials](_credentials_.credentials.md)

# Class: Credentials

Use to fetch and store credentials and to generate/cache an access token

## Hierarchy

* **Credentials**

  ↳ [TestCredentials](_helpers_spec_.testcredentials.md)

## Index

### Properties

* [apiEndpoint](_credentials_.credentials.md#apiendpoint)
* [apiKey](_credentials_.credentials.md#apikey)

### Methods

* [getAccessToken](_credentials_.credentials.md#getaccesstoken)

## Properties

###  apiEndpoint

• **apiEndpoint**: *string*

*Defined in [credentials.ts:37](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/credentials.ts#L37)*

___

###  apiKey

• **apiKey**: *string*

*Defined in [credentials.ts:39](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/credentials.ts#L39)*

## Methods

###  getAccessToken

▸ **getAccessToken**(): *Promise‹string›*

*Defined in [credentials.ts:57](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/credentials.ts#L57)*

Method used to get and cache an access token. Algorithm used:
1. Look for a valid token in memory.
2. Look for a valid token in the storage (if provided);
3. Fetch a new token from server and cache it (both in memory and in storage).

**Returns:** *Promise‹string›*
