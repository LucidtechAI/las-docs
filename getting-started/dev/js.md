# JavaScript

## Use browser version

```shell
npm install --save las-sdk-browser
```
```javascript
import { AuthorizationCodeCredentials } from '@lucidtech/las-sdk-browser';
import { Client } from '@lucidtech/las-sdk-core';

const credentials = new AuthorizationCodeCredentials('<apiEndpoint>', '<apiKey>', '<clientId>',  '<redirectUri>', '<launchUriFn>', '<authEndpoint>');
const client = new Client(credentials);
```

## Use node version

```shell
npm install --save las-sdk-node
```
```javascript
import { AuthorizationCodeCredentials } from '@lucidtech/las-sdk-browser';
import { Client } from '@lucidtech/las-sdk-core';

const credentials = new ClientCredentials('<apiEndpoint>', '<apiKey>', '<clientId>',  '<clientSecret>', '<authEndpoint>');
const client = new Client(credentials);
```

## Make a prediction on a document

Suppose we wish to run inference on a document using Lucidtech’s invoice model.

```javascript
client.createDocument('<document content>', '<document mime type>', '<consent id>')
  .then(documentData => {
    client.createPrediction(documentData['documentId'], '<model name>')
      .then(prediction => console.log(prediction.data);
  });
```

## Set ground truth of document

Suppose we make a prediction that returns incorrect values and we wish to improve the model for future use. We can do so by sending feedback to the model, telling it what the expected values should have been.

{% hint style="info" %}
Consent ID is an identifier you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

```javascript
client.createDocument('<document content>', '<document mime type>', '<consent id>')
  .then(documentData => {
    const feedback = [
      { 'label': 'total_amount', 'value': '240.01' },
      { 'label': 'due_date', 'value': '2020-01-31' },
    ];
    client.updateDocument(documentData['documentId']);
  });
```

## Create a batch and associate a few documents with it

Creating a batch is a way to group documents. This is useful for specifying batches of documents to use in improving the model later.

```javascript
client.createBatch(batchDescription)
  .then(batch => client.createDocument(content, contentType, consentId, batch['batchId']))
  .then(batch => client.createDocument(anotherContent, anotherContentType, anotherConsentId, batch['batchId']))
```

