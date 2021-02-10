# *Documents*

 - A *Document* can be a .pdf, .jpeg or a .png file along with some meta information.
    
Lucidtech delivers services that helps you control and automate the flow
of your documents, and a *Document* is therefore an important concept, and in this 
introduction you will see how a *Document* can be created, controlled and used together with 
*Batches*, *Consents*, *Predictions*, and *Models*.

# Creating a *Document*
The simplest way to create a *Document* is to just specify a path;
```commandline
>> las documents create path/to/my/document.pdf
{
  "documentId": "las:document:84ed1bb2d2634072bd3134274ed56ebe",
  "contentType": "application/pdf"
}
```
Use this `documentlId` along with a `modelId` to make a prediction on the document. 
See [predictions](./predictions.md) for more details.

Now let's say you have several documents that you want to group together 
with a purpose of constructing a dataset for training a model. This is where *Batches* enter the picture
```commandline
>> las batches create --name train --description "documents for training a new model"
{
  "batchId": "las:batch:84ed1bb2d2634072bd3134274ed56ebe",
  "name": "train",
  "description": "documents for training a new model"
}

#### A document can now be created with a belonging `batchId`. 

>> las documents create path/to/my/document.pdf --batch-id las:batch:84ed1bb2d2634072bd3134274ed56ebe 
{
  "documentId": "las:document:0e62b572139b43179076323bc35b220e",
  "contentType": "application/pdf",
  "batchId": "las:batch:84ed1bb2d2634072bd3134274ed56ebe"
}
```
The exact same can be done for *Consents*, 
but the purpose is to separate customers data rather that grouping them together for a training purposes.
Both *Batches* and *Consents* can be used as input when listing documents;
```commandline 
>> las documents list --consent-id las:consent:<hex-uuid>
>> las documents list --batch-id las:batch:<hex-uuid>
```

## Attaching *Ground Truth* to a document
In order to train or evaluate a model we need a ground truth along with each document. 
See our tutorial on [data training](https://docs.lucidtech.ai/data-training/data-training) for more details.

The ground truth of a document can be provided as additional info when we create it, or it can be appended afterwards.
Either way the syntax is pretty much the same:
```commandline 
>> las documents create path/to/document.pdf --fields amount=100.00 due_date='2021-05-20'
>> las documents update <document-id> --fields amount=100.00 due_date='2021-05-20'
```
By providing this information we are able to train our models by comparing our predictions to the ground truth.


