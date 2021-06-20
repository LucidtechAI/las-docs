# Using JavaScript

## Install browser version

```text
npm install --save las-sdk-browser
```

```javascript
import { AuthorizationCodeCredentials } from '@lucidtech/las-sdk-browser';
import { Client } from '@lucidtech/las-sdk-core';

const credentials = new AuthorizationCodeCredentials('<apiEndpoint>', '<apiKey>', '<clientId>',  '<redirectUri>', '<launchUriFn>', '<authEndpoint>');
const client = new Client(credentials);
```

## Install node version

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
(TTNote: For consistency with CLI, consider if a `list` is needed first. Then consider a description to replace the above line such as: 'Upload a document then run inference using the invoice model:')

```javascript
const { documentId } = await client.createDocument('<document content>', '<document mime type>', { consentId: '<consent id>' });
const { predictions } = await client.createPrediction(documentId, '<model name>');
console.log(predictions);
```

## Set ground truth of document

When uploading data that will be used for training and evaluation, we need to provide a ground truth:
```javascript
const groundTruth = [
  { 'label': 'total_amount', 'value': '240.01' },
  { 'label': 'due_date', 'value': '2020-01-31' },
];
const { documentId } = await client.createDocument('<document content>', '<document mime type>', { groundTruth });
```

### Update an existing document

If a prediction reveals incorrect values in the ground truth of a document, 
we can update the existing document with new ground truth values:

```javascript
const groundTruth = [
  { 'label': 'total_amount', 'value': '240.01' },
  { 'label': 'due_date', 'value': '2020-01-31' },
];
client.updateDocument('las:document:<hex-uuid>', groundTruth);
```

{% hint style="info" %}
Providing ground truth is necessary to retrain a model, whether the model was right or wrong. So always provide 
the ground truth if it is available.
{% endhint %}


## Create a document with a consentId

{% hint style="info" %}
ConsentID is an identifier that you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

(TTNote: Consider a link here to the 'consents' section for more information.)

```javascript
const { documentId } = await client.createDocument('<document content>', '<document mime type>', { consentId: '<consent id>' });
```

(TTNote: Consider if sections 'get document and download document content' and 'revoke consent and delete documents' are needed here for consistency.)


## Create a batch and associate documents with it

Creating a batch is a way to group documents. This is useful for specifying batches of documents to use in improving the model later.
(TTNote: Consider a link here to the batches and consents details.)

```javascript
const { batchId } = await client.createBatch(batchDescription);
await client.createDocument('<document content>', '<document mime type>', { consentId: '<consent id>',  batchId })
await client.createDocument('<another content>', '<another mime type>', { consentId: '<consent id>',  batchId })
```

