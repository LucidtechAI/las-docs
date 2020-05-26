# JavaScript SDK
[@lucidtech/las-sdk-core](./) › [Globals](./2.0/globals.md)

## @lucidtech/las-sdk-core 2.0

## JavaScript SDK for Lucidtech AI Services API

### Installation

#### Browser version

```text
$ yarn add @lucidtech/las-sdk-browser
$ npm install @lucidtech/las-sdk-browser
```

#### Node version

```text
$ yarn add @lucidtech/las-sdk-node
$ npm install @lucidtech/las-sdk-node
```

### Example usage

```javascript
import {ClientCredentials} from '@lucidtech/las-sdk-core';
import {Client} from '@lucidtech/las-sdk-node';

const credentials = new ClientCredentials('<apiKey>', '<clientId>',  '<clientSecret>', '<authEndpoint>');
const client = new Client('<apiEndpoint>', credentials);

const content = '<read image content>'
client.postDocuments(content, 'image/jpeg', '<consentId>').then(documentResponse => {
    console.log(documentResponse);
}).catch(error => {
    console.log(error);
})
```
