
# Tutoral: Predict and validate

In this tutorial you will learn how to setup a simple workflow that 
allows you to handle any type of documents in a safe and semi-automatic way.


The workflow will consist of two steps

# Prerequisites
* Download the lucidtech CLI
* create a remote component  https://github.com/LucidtechAI/flyt-form/tree/master/examples


## Manual approval (manual transition)
To create a manual step you first need a remote component that will serve 
as a user interface. For an example on a simple remote component see 
[This tutorial](https://github.com/LucidtechAI/flyt-form/tree/master/examples) 

```commandline
$ las assets create remote_component.js 
```

Create a json file with the following structure,
```json
{
  "assets": {
    "jsRemoteComponent": "las:asset:<hex-uuid>" 
  }
}
```

Now you are ready to create the manual step
```commandline
las transitions create manual params.json
```


## Automatic prediction (docker transition)
An automatic step is made by creating a docker image that will perform a task 
without any user involved. 
This folder contains a `Dockerfile` along with `main.py` which is all you need 
to automatically make predictions on your documents.

The first step is to build a docker image and push it to some repository
```commandline
$ docker build . -t <image-url> && docker push <image-url>
```

If the docker image is placed in a private repository (which is recommended) you need 
to store your credentials as a secret
```commandline
$ las secrets create  username=<username> password=<password> --description 'docker credentials'
```

Create a json-file that contains the parameters you need to run the docker image
```json
{
  "imageUrl": "<image-url>",
  "secretId": "las:secret:<hex-uuid>"
}
```

Now we are ready to create the transition
```commandline 
las transitions create docker params.json
```

## Creating the workflow
Now that we have created the two transitions we are ready to put them 
together in a single workflow. The workflow definition must be provided using 
[Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html).
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
$ las workflows create workflow.json 'Predict and Approve' 
```
