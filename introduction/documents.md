# *Documents*

 - A *Document* can be a .pdf or a .jpeg file along with some meta information.

(TTNote: Consider moving this bullet above to after the first paragraph below.)

Lucidtech delivers services that help you control and automate the flow
of your documents, therefore the *Document* is an important concept. In this 
introduction, you will see how a *Document* can be created, controlled and used together with 
*Batches*, *Consents*, *Predictions*, and *Models*.

## Creating a *Document*
The simplest way to create a *Document* is to use the command line interface (CLI) 
and specify the path of the PDF or JPEG file that you would like to upload. See the example below:

(TTNote: Consider a link for the CLI text to reference how to install/use the CLI, perhaps with https://docs.lucidtech.ai/getting-started/dev/cli )

(TTNote: Suggest some clarity between 'creating' vs. 'uploading' a 'document'. It seems the pdf/jpg file (which is referenced in the first bullet as 'a document') is already 'created' in the file system, and here it's being 'uploaded' to use into the API, also as a 'document'. Perhaps the pdf/jpg is the source file to create a 'document record' or 'document type' in the API?)

```commandline
>> las documents create path/to/my/document.pdf
{
  "documentId": "las:document:84ed1bb2d2634072bd3134274ed56ebe",
  "contentType": "application/pdf"
}
```
Note: You will use this `documentlId` along with a `modelId` to make a prediction on the document. 
See [Predictions](./predictions.md) for more details.


## Grouping Documents with *Batches* or *Consents*

### *Batches*

You can use batches when you have several documents that you want to group together 
for the purpose of constructing a dataset for training a model. See the example below on how to setup a batch:
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

### *Consents*

The same grouping can be done for *Consents*, 
but the purpose of *Consents* is to separate customer data rather that to group them together for training purposes.

(TTNote: Suggest an example be added here for Consents)

For more information on *batches* and *consents* see the page on [batches and consents](./batches_and_consents.md).

(TTNote: The previous link references a github link, should it refefence the respective page on gitbook?)

(TTNote: Consider combining these items above with the 'Batches and Consents' section (https://docs.lucidtech.ai/getting-started/introduction/batches_and_consents) so that the grouping information is all together.)


## Attaching *Ground Truth* to a document

(TTNote: Since 'model' is referenced in this section, consider resequencing the 'model' section to somewhere earlier than this section.)

(TTNote: Consider whether this 'ground truth' section should be a separate section under 'Documents' since it's an important component.)

In order to train or evaluate a model, we first need to define a ground truth for each document. 
See our tutorial on [data training](https://docs.lucidtech.ai/data-training/data-training) for more details.

The ground truth of a document can be provided as additional information when we create the document, or it can be appended afterwards.
Either way, the syntax is the same:
```commandline 
>> las documents create path/to/document.pdf --fields amount=100.00 due_date='2021-05-20'
>> las documents update <document-id> --fields amount=100.00 due_date='2021-05-20'
```
By providing this information, we are able to train our models by comparing our predictions to the ground truth.


