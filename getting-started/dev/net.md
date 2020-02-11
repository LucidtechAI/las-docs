# .NET

#### Make a prediction on a document

Suppose we wish to run inference on a document using Lucidtech’s invoice model.

```C#
```

#### Set ground truth of document

Suppose we make a prediction that returns incorrect values and we wish to improve the model for future use. We can 
do so by sending feedback to the model, telling it what the expected values should have been.

```C#
```

#### Create a document with consent id

{% hint style="info" %}
Consent ID is an identifier you can assign to documents to keep track of document ownership for your customers.
{% endhint %}

```C#
```

#### Revoking consent and deleting documents

Suppose we wish to delete all documents associated with a customer in our ERP database or other systems. We need 
to provide a consent_id to the prediction method that uniquely identifies the customer and use that consent_id to 
delete documents.

```C#
```

#### Create a batch and associate a few documents with it

Creating a batch is a way to group documents. This is useful for specifying batches of documents to use in improving 
the model later.

```C#
```

