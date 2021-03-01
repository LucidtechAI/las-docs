
# Tutoral: Predict and approve - setup using LAS CLI 

In this tutorial you will learn how to setup a simple workflow that 
allows you to handle any type of documents in a safe and semi-automatic way.


The workflow in this tutorial will consist of two steps:
* automatic prediction
* manual verification 

![Workflow](../.gitbook/assets/simple-workflow.png)
## Prerequisites
* Download the [lucidtech CLI](https://github.com/LucidtechAI/las-cli)
* Create a remote component by following [this tutorial](custom_approve_view.md) or just use 
[this standard remote component](https://github.com/LucidtechAI/las-docs/tree/master/tutorials/simple-demo/backend/src/Invoice/assets/jsRemoteComponent.js)


## Manual approval (manual transition)
To create a manual step you first need a remote component that will serve 
as a user interface. For an example on a simple remote component see 
[This tutorial](https://github.com/LucidtechAI/flyt-form/tree/master/examples). 

#### Create the remote component *asset*
When you have created your javascript remote component, 
lets call it `remote_component.js` you are ready to create an asset.
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
You now have an assetId that we will use to refer to this specific asset in the future. 
Note that you can also add a name and a description to help you identify the asset.


#### Create the *transition*
Create a json file, let's call it `params.json` with the following structure:
```json
{
  "assets": {
    "jsRemoteComponent": "las:asset:<hex-uuid>" 
  }
}
```
Where `las:asset:<hex:uuid>` is replaced with the `assetId` you got in the previous step.
Now you are ready to create the manual step
```commandline
las transitions create manual -p params.json
```
This should give the following output
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
As you can see from the output the transition can also accept name and description arguments, 
that is common for most resources in LAS.
In addition we recommend to provide input and output [json-schemas](https://json-schema.org/understanding-json-schema/) 
that can help you catch bad input immediately instead of triggering bugs at a later point in the workflow. 
Use `las transitions update --help` for more information on how to update your transitions.


## Automatic prediction (docker transition)
An automatic step is made by creating a docker image that will perform a task without any user involved. 
Check our [sample images](https://github.com/LucidtechAI/las-docs/tree/master/docker-image-samples) and 
[tutorial](create_your_own_docker_transition.md)
for inspiration and best practices. 

The first step is to build a docker image and push it to some repository
```commandline
$ docker build . -t <image-url> && docker push <image-url>
```

{% hint style="info" %}
*It is recommended to place the docker image in a private repository, 
if that is the case you need to store your credentials as a secret.*
```commandline
$ las secrets create  username=<username> password=<password> --description 'docker credentials'
```
{% endhint %}
The next step is to create a json-file that contains the parameters you need to run the docker image.

```json
{
  "imageUrl": "<image-url>",
  "secretId": "las:secret:<hex-uuid>"
}
```
{% hint style="info" %}
The secretId field is only needed if you are using a private image.
{% endhint %}

Now we are ready to create the transition
```commandline 
las transitions create docker params.json
```

## Creating the workflow
Now that we have created the two transitions we are ready to put them 
together in a single workflow. The workflow definition must be provided using 
[Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html).
{% hint style="info" %}
The Resource name of each state must be a transition ID.
{% endhint %}
{% hint style="info" %}
The only allowed *types* of States are **Task** and **Choice**.
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

store the file and use it as input for creating the workflow
```commandline
$ las workflows create workflow.json --name 'Predict and Approve' 
```

###Execute workflow
You can now define your `input.json` and execute your workflow with a simple call from the CLI
```json
{
  "documentId": "las:document:<hex-uuid>",
  "modelId": "las:model:<hex-uuid>"
}
```
```commandline
$ las workflows execute las:workflow:<hex-uuid> input.json 
```
You can also use [this](simple-demo/start_execution.py) script for execution, 
or use or standard email-integration that will allow you to send in your documents by email. 
 

