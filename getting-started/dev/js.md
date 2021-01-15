# JavaScript

## Use browser version

```text
npm install --save las-sdk-browser
```

```javascript
import { AuthorizationCodeCredentials } from '@lucidtech/las-sdk-browser';
import { Client } from '@lucidtech/las-sdk-core';

const credentials = new AuthorizationCodeCredentials('<apiEndpoint>', '<apiKey>', '<clientId>',  '<redirectUri>', '<launchUriFn>', '<authEndpoint>');
const client = new Client(credentials);
```

## Use node version

```text
npm install --save las-sdk-node
```

```javascript
import { AuthorizationCodeCredentials } from '@lucidtech/las-sdk-node';
import { Client } from '@lucidtech/las-sdk-core';

const credentials = new ClientCredentials('<apiEndpoint>', '<apiKey>', '<clientId>',  '<clientSecret>', '<authEndpoint>');
const client = new Client(credentials);
```

## Make a prediction on a document

Suppose we wish to run inference on a document using Lucidtech’s invoice model.

```javascript
const { documentId } = await client.createDocument('<document content>', '<document mime type>', { consentId: '<consent id>' });
const { predictions } = await client.createPrediction(documentId, '<model name>');
console.log(predictions);
```

## Set ground truth of document

Suppose we make a prediction that returns incorrect values and we wish to improve the model for future use. We can do so by sending feedback to the model, telling it what the expected values should have been.

{% hint style="info" %}
Consent ID is an identifier you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

```javascript
const { documentId } = await client.createDocument('<document content>', '<document mime type>', { consentId: '<consent id>' });
const groundTruths = [
  { 'label': 'total_amount', 'value': '240.01' },
  { 'label': 'due_date', 'value': '2020-01-31' },
];
client.updateDocument(documentId, groundTruths);
```

## Create a batch and associate a few documents with it

Creating a batch is a way to group documents. This is useful for specifying batches of documents to use in improving the model later.

```javascript
const { batchId } = await client.createBatch(batchDescription);
await client.createDocument('<document content>', '<document mime type>', { consentId: '<consent id>',  batchId })
await client.createDocument('<another content>', '<another mime type>', { consentId: '<consent id>',  batchId })
```

