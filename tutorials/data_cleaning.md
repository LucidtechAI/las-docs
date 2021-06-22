
# Tutorial: Setup a data cleaning workflow using LAS CLI 

(TTNote: Again, consider whether 'using the LAS CLI' is needed here to make the title shorter.)

In this tutorial, you will learn how to setup a simple workflow that 
allows you to evaluate the model's performance while cleaning up poorly labeled data. 
Check out the completed folder with examples to get started 
[here](https://github.com/LucidtechAI/las-docs/tree/master/tutorials/data-cleaning/backend/src/).

(TTNote: This link references a github page, consider whether it should be gitbook.) 

The workflow in this tutorial will consist of four steps:
* automatic prediction
* automatic comparison of the existing ground truth with the prediction to filter out poorly labeled data
* manual verification and correction of ground truth (which will only be performed when necessary)
* automatic feedback of the corrected ground truth back to the API

![Workflow](../.gitbook/assets/data-cleaning-workflow.png)

## Prerequisites
* Download the [Lucidtech CLI](https://github.com/LucidtechAI/las-cli)
(TTNote: Note this link references github folder, unclear if it should go to gitbook or a github readme instead.)
* Create a remote component by following [this tutorial](setup_approve_view.md) or just use 
[this standard remote component](https://github.com/LucidtechAI/las-docs/tree/master/tutorials/simple-demo/backend/src/Invoice/assets/jsRemoteComponent.js)
(TTNote: The tutorial link above references a tutorial later in the sequence. Consider if the approval tutorial section should be re-sequenced above this one.)

## Manual inspection and correction (manual transition)
To create a manual step, you first need a remote component that will serve 
as a user interface. 

Note: If you use [this standard remote component](https://github.com/LucidtechAI/las-docs/tree/master/tutorials/simple-demo/backend/src/Invoice/assets/jsRemoteComponent.js),
you can also configure which fields to show and manipulate by adding an asset called `fieldConfig`. 
[Here](https://github.com/LucidtechAI/las-docs/tree/master/tutorials/simple-demo/backend/src/Invoice/assets/fieldConfig.json)
is an example of a fieldconfig json file for a typical invoice.


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
Create a json file, let's call it `params.json` with the following structure:
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


## Automatic transitions (docker transitions)
An automatic step is made by creating a docker image that will perform a task without any user involvement. 
Check our [sample images](https://github.com/LucidtechAI/las-docs/tree/master/docker-image-samples) 
(TTNote: This link references a github page, consider whether it should be gitbook.)
and 
[tutorial](create_your_own_docker_transition.md)
(TTNote: This link references a tutorial later in the sequence. Consider if the docker tutorial should be re-sequenced above this one.)
for inspiration and best practices. 

1-The first step is to build a docker image and push it an existing repository:
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

### Configure the *compare* transition

As you can see in main function of the 
[compare docker image](https://github.com/LucidtechAI/las-docs/tree/master/docker-image-samples/compare-prediction-and-ground-truth),
there are two environment variables that can be adjusted according to your needs. 
Check out [this folder](https://github.com/LucidtechAI/las-docs/tree/master/tutorials/data-cleaning/backend/src/Compare) 
to see an example of files that can be used to configure this transition.
(TTNote: Note the links above references github folder, unclear if they should go to gitbook instead.)

#### CONFIDENCE_THRESHOLD
This variable sets the confidence limit that decides when to consider the predictions as relevant.
CONFIDENCE_THRESHOLD = 0.9 would mean that only those documents that were predicted with a confidence higher than 0.9 
AND were different from the ground truth will be subject for manual inspection. 
The default value is 0.0, which means that every prediction that is different from the ground truth will be subject for inspection.
    
#### GROUND_TRUTH_CONFIDENCE
If you want to inspect every sample manually, you can set this to a value less than 1.0. 

(TTNote: Consider if these variables should be mentioned or referenced in earlier sections under 'documents/ground truth').

To adjust these variables, you can use the CLI and update your transition:

```json
environment.json:
---
{
  "CONFIDENCE_THRESHOLD": "0.1",
  "GROUND_TRUTH_CONFIDENCE": "1.0"
}
```

```commandline
las transitions update las:transition:<hex-uuid> --environment-path environ.json
```

{% hint style="info" %}
When you update the environment, you need to specify **all** variables, not only those you want to change.
{% endhint %}


## Creating the workflow
Now that we have created the transitions, we are ready to put them 
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
    "Comment": "Data Cleaning Workflow",
    "StartAt": "MakePredictions",
    "States": {
      "MakePredictions": {
        "Type": "Task",
        "Resource": "las:transition:<hex>",
        "Next": "Compare"
      },
      "Compare": {
        "Type": "Task",
        "Resource": "las:transition:<hex>",
        "Next": "CorrectOrNot"
      },
      "CorrectOrNot": {
        "Type": "Choice",
        "Choices": [
          {
            "Variable": "$.needsCorrection",
            "BooleanEquals": true,
            "Next": "ManualCorrection"
          },
          {
            "Variable": "$.needsCorrection",
            "BooleanEquals": false,
            "End": true
          }
        ]
      },
      "ManualCorrection": {
        "Type": "Task",
        "Resource": "las:transition:<hex>",
        "Next": "Feedback"
      },
      "Feedback": {
        "Type": "Task",
        "Resource": "las:transition:<hex>",
        "End": true
      }
    }
  }
}
```

Save the file and use it as input for creating the workflow:
```commandline
$ las workflows create workflow.json --name 'Data Cleaning' 
```

### Execute the workflow
You can now define your `input.json` and execute your workflow with a simple call from the CLI:
```json
{
  "documentId": "las:document:<hex-uuid>",
  "modelId": "las:model:<hex-uuid>",
  "autoRotate": true
}
```
```commandline
$ las workflows execute las:workflow:<hex-uuid> input.json 
```
You can also use [this script](data-cleaning/start_execution.py) for execution, 
or use our standard email integration (TTNote: Suggest a link on how to setup email integration) that will allow you to submit your documents by email. 
 

