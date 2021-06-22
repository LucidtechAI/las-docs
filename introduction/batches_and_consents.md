# *Batches* and *Consents*

 - A *Batch* is a way to group your documents so they can later be used to train a model. Note: A document can only belong to one batch.
    
 - A *Consent* is another way of grouping your documents, but here the primary purpose is to group together customer data, rather than to train a model.
With *Consents*, the data is grouped under the same `consentID` which makes it easier to remove all of the data for a given customer in order to exercise their rights under GDPR. 
Note: A document can only have one `consentId`.
    
## Create and list batches
When creating a batch, it is recommended to provide a name and a description, as in the example below:

```commandline
>> las batches create --name train --description "documents for training a new model"
{
  "batchId": "las:batch:<hex-uuid>",
  "name": "train",
  "description": "documents for training a new model"
  "numDocuments": 1,
  "createdTime": "2021-04-14T14:13:02.021412+0000"
}
```
    
Use *list* to see what batches already exists and how many documents belong to each one:

```commandline
>> las batches list
{
  "batches": [
    {
      "batchId": "las:batch:<hex-uuid>",
      "name": "train",
      "description": "documents for training a new model"
      "numDocuments": 1,
      "createdTime": "2021-04-14T14:13:02.021412+0000"
    }
  ],
  "nextToken": null
}
```


## Create and list consents

(TTNote: Unclear what an endpoint in the comment below is referencing, but the assumption is that the commands above for batches is not yet available for consents, so suggesting a 'header' for consents here so that this note doesn't look like it belongs to batches.)

{% hint style="info" %}
There is no endpoint for *consents* yet, so please feel free to invent your own using the format `las:consent:<hex-uuid>`
{% endhint %}


## List and delete grouped documents

Both *Batches* and *Consents* can be used as input when listing documents:
    
```commandline
>> las documents list --batch-id las:batch:<hex-uuid>
>> las documents list --consent-id las:consent:<hex-uuid>
```

Only *Consents* can be used as input when deleting documents:

```commandline
>> las documents delete --consent-id las:consent:<hex-uuid>
```


See more examples on how to use *batches* and *consents* in 
[Documents](./documents.md).

 
