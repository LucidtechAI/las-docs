
# Tutorial: Setup a workflow to predict and approve using the LAS CLI

(TTNote: Consider whether 'using the LAS CLI' is needed here to make the title shorter. If there is no non-LAS CLI version of this tutorial, perhaps it can be removed. Alternately it can be mentioned in a line below as a note. 'Note: This tutorial uses the LAS CLI.')

In this tutorial, you will learn how to setup a simple workflow that 
allows you to handle many types of documents in a safe and semi-automatic way.


The workflow in this tutorial will consist of two steps:
* automatic prediction
* manual verification 

![Workflow](../.gitbook/assets/simple-workflow.png)

## Prerequisites
* Download the [lucidtech CLI](https://github.com/LucidtechAI/las-cli)
(TTNote: Note this link references github folder, unclear if it should go to gitbook or a github readme instead.)

* Create a remote component by following [this tutorial](setup_approve_view.md) or just use 
[this standard remote component](https://github.com/LucidtechAI/las-docs/tree/master/tutorials/simple-demo/backend/src/Invoice/assets/jsRemoteComponent.js) javascript file.

(TTNote: The tutorial link above references a tutorial later in the sequence. Consider if the approval tutorial section should be re-sequenced above this one.)

## Manual approval (manual transition)
To create a manual step, you first need a remote component that will serve 
as a user interface. 

Note: If you use [this standard remote component](https://github.com/LucidtechAI/las-docs/tree/master/tutorials/simple-demo/backend/src/Invoice/assets/jsRemoteComponent.js),
you can also configure the fields to show and manipulate by adding an asset called `fieldConfig`. 
[Here](https://github.com/LucidtechAI/las-docs/tree/master/tutorials/simple-demo/backend/src/Invoice/assets/fieldConfig.json)
is an example of a fieldconfig json file for a typical invoice.

(TTNote: Phrases 'manual approval', 'manual transition', 'manual step' are all used seemingly interchangeably in this section.  Consider whether a consistent phrase should be used throughout.)


#### Create the remote component *asset*
After creating the javascript remote component
(referenced below as `remote_component.js`), you are ready to create an asset:

```commandline
$ las assets create remote_component.js
```

This should give the following output:
```commandline
{
  "assetId": "las:asset:<hex-uuid>",
  "name": null,
  "description": null
}
```
You now have an `assetId` that you can use to refer to this specific asset in the future. 
Note that you can also add a name and a description to help you identify the asset.


#### Create the *transition*
Create a json file, let's call it `params.json`, with the following structure:
```json
{
  "assets": {
    "jsRemoteComponent": "las:asset:<hex-uuid>", 
    "fieldConfig": "las:asset:<hex-uuid>"
  }
}
```
Note: The `las:asset:<hex:uuid>` above should be replaced with the `assetId` that you received in the previous step.

{% hint style="info" %}
`jsRemoteComponent` and `fieldConfig` are used to find the assets, 
so they should be named as shown here.
{% endhint %}

Now you are ready to create the manual step:
```commandline
las transitions create manual -p params.json
```
This should give the following output:
```commandline 
{
  "transitionId": "las:transition:<hex-uuid>",
  "name": null,
  "description": null,
  "transitionType": "manual",
  "inputJsonSchema": {
    "$schema": "https://json-schema.org/draft-04/schema#"
  },
  "outputJsonSchema": {
    "$schema": "https://json-schema.org/draft-04/schema#"
  },
  "parameters": {
    "assets": {
      "jsRemoteComponent": "las:asset:<hex-uuid>"    
    }
  }
}
``` 
As you can see from the output, the transition can also accept name and description arguments. 
This is common for most resources in LAS.

In addition, we recommend providing input and output [json schemas](https://json-schema.org/understanding-json-schema/) 
that can help you catch invalid input immediately instead of triggering bugs at a later point in the workflow. 
Use `las transitions update --help` for more information on how to update your transitions.


## Automatic prediction (docker transition)
An automatic step is made by creating a docker image that will perform a task without any user involvement. 
Check our [sample images](https://github.com/LucidtechAI/las-docs/tree/master/docker-image-samples) 
(TTNote: This link references a github page, consider whether it should be gitbook.)
and 
[tutorial](create_your_own_docker_transition.md)
(TTNote: This link references a tutorial later in the sequence. Consider if the approval tutorial should be re-sequenced above this one.)
for inspiration and best practices. 

(TTNote: Phrases 'automatic prediction', 'docker transition', 'automatic step' are all used seemingly interchangeably in this section.  Consider whether a consistent phrase should be used throughout.)


1-The first step is to build a docker image and push it to an existing repository:
```commandline
$ docker build . -t <image-url> && docker push <image-url>
```

{% hint style="info" %}
It is recommended to place the docker image in a private repository, 
and in that case, you need to store your credentials as a *Secret*.
```commandline
$ las secrets create  username=<username> password=<password> --description 'docker credentials'
```
{% endhint %}


2-The next step is to create a json file that contains the parameters that you need to run the docker image:

```json
{
  "imageUrl": "<image-url>",
  "secretId": "las:secret:<hex-uuid>"
}
```
{% hint style="info" %}
The `secretId` field is only needed if you are using a private image.
{% endhint %}

3-Now, you are ready to create the transition:
```commandline 
las transitions create docker params.json
```

## Creating the workflow
Now that we have created the two transitions, we are ready to put them 
together into a single workflow. The workflow definition must be provided using 
[Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html).
{% hint style="info" %}
The Resource name of each state must be a transition ID.
{% endhint %}
{% hint style="info" %}
The only allowed *types* of states are **Task** and **Choice**.
{% endhint %}


```json
{
  "definition": {
    "Comment": "A workflow for prediction and approval", 
    "StartAt": "Predict",
    "States": {
      "Predict": {
        "Type": "Task",
        "Resource": "las:transition:<docker-hex>",
        "Next": "Approve" 
      },
      "Approve": {
        "Type": "Task",
        "Resource": "las:transition:<manual-hex>",
        "End": true
      }
    }   
  }
}
```

Save the file and use it as input for creating the workflow:
```commandline
$ las workflows create workflow.json --name 'Predict and Approve' 
```

### Execute the workflow
You can now define your `input.json` and execute your workflow with a simple call from the CLI:
```json
{
  "documentId": "las:document:<hex-uuid>",
  "modelId": "las:model:<hex-uuid>"
}
```
```commandline
$ las workflows execute las:workflow:<hex-uuid> input.json 
```
You can also use [this script](simple-demo/start_execution.py) for execution, 
or use our standard email integration (TTNote: Suggest a link on how to setup email integration)
that will allow you to submit your documents by email. 
 

