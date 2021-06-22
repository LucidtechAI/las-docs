## JavaScript SDK for Lucidtech AI Services API

(TTNote: Consider common headings for all SDKs, either remove 'for Lucidtech AI Services API' from this page, or add it to .net, Python, and others for consistency.)


### Installation

(TTNote: Consider whether Installation should be repeated here as it is in the quickstart section, or if it should be linked instead. But if it is duplicated here, the syntax should match (here, yarn is mentioned and shell is different versus how it appears in quickstart.)


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

### Usage

(TTNote: Consider whether consistent headings is needed here (i.e. Getting Started) as in other sections.)

```javascript
import { Client } from '@lucidtech/las-sdk-core';
import { ClientCredentials } from '@lucidtech/las-sdk-node';

const credentials = new ClientCredentials('<apiEndpoint>', '<apiKey>', '<clientId>',  '<clientSecret>', '<authEndpoint>');
const client = new Client(credentials);

const content = '<read image content>'
client.postDocuments(content, 'image/jpeg', '<consentId>').then(documentResponse => {
    console.log(documentResponse);
}).catch(error => {
    console.log(error);
})
```

### Contributing

(TTNote: Suggest an alternate title for clarity, unclear what contributing is referring to.)

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
