[@lucidtech/las-sdk-core](../README.md) › [Globals](../globals.md) › ["credentials"](../modules/_credentials_.md) › [Token](_credentials_.token.md)

# Class: Token

Wrapper class for an AWS Cognito token

## Hierarchy

* **Token**

## Index

### Constructors

* [constructor](_credentials_.token.md#constructor)

### Properties

* [accessToken](_credentials_.token.md#accesstoken)
* [expiration](_credentials_.token.md#expiration)
* [refreshToken](_credentials_.token.md#optional-refreshtoken)

### Methods

* [isValid](_credentials_.token.md#isvalid)

## Constructors

###  constructor

\+ **new Token**(`accessToken`: string, `expiration`: number, `refreshToken?`: undefined | string): *[Token](_credentials_.token.md)*

*Defined in [credentials.ts:19](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/credentials.ts#L19)*

**Parameters:**

Name | Type |
------ | ------ |
`accessToken` | string |
`expiration` | number |
`refreshToken?` | undefined &#124; string |

**Returns:** *[Token](_credentials_.token.md)*

## Properties

###  accessToken

• **accessToken**: *string*

*Defined in [credentials.ts:8](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/credentials.ts#L8)*

___

###  expiration

• **expiration**: *number*

*Defined in [credentials.ts:10](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/credentials.ts#L10)*

___

### `Optional` refreshToken

• **refreshToken**? : *undefined | string*

*Defined in [credentials.ts:12](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/credentials.ts#L12)*

## Methods

###  isValid

▸ **isValid**(): *boolean*

*Defined in [credentials.ts:17](https://github.com/LucidtechAI/las-sdk-js/blob/6ca7af3/packages/las-sdk-core/src/credentials.ts#L17)*

Checks if current timestamp is larger than token expiration time

**Returns:** *boolean*
