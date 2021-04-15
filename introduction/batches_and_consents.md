# *Batches* and *Consents*

 - A *Batch* is a way to group your documents. The main purpose of grouping documents together in a batch
    is that they can later be used to train a model. A document can only belong to one batch.
    
 - A *Consent* is another way of grouping your documents. The main purpose of grouping documents 
    together under the same *consentId* is that they can be removed at the same time. A document can only 
    have one *consentId*.
    
## Create and list your batches
When creating a batch it is recommended to provide a name and a description;

    >> las batches create --name train --description "documents for training a new model"
    {
      "batchId": "las:batch:84ed1bb2d2634072bd3134274ed56ebe",
      "name": "train",
      "description": "documents for training a new model"
      "numDocuments": 1,
      "createdTime": "2021-04-14T14:13:02.021412+0000"
    }
    
Too see what batches already exists and how many documents belong in them you can use *list*;

    >> las batches list
    {
      "batches": [
        {
          "batchId": "las:batch:84ed1bb2d2634072bd3134274ed56ebe",
          "name": "train",
          "description": "documents for training a new model"
          "numDocuments": 1,
          "createdTime": "2021-04-14T14:13:02.021412+0000"
        }
      ],
      "nextToken": null
    }


{% hint style="info" %}
There is no endpoint for *consents* yet, so please feel free to invent your own on the format `las:consent:<hex-uuid>`
{% endhint %}

## Listing and deleting documents

Both *Batches* and *Consents* can be used as input when listing documents;
    
    >> las documents list --batch-id las:batch:<hex-uuid>
    >> las documents list --consent-id las:consent:<hex-uuid>

But only *consents* can be used as input when deleting documents;

    >> las documents delete --consent-id las:consent:<hex-uuid>


See more examples on how to use *batches* and *consents* in the 
[documents page](./documents.md)

 
