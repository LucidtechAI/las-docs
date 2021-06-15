# Transitions and Workflows

 - A *Transition* is a manual or automatic task that forms the building block of a *Workflow*.
 - A *Workflow* is a set of steps combined to a finite state machine.
 
TextAndTables test line

By taking advantage of Transitions and Workflows in Lucidtech's API 
you can easily structure a complex flow for your documents.
A Transition can be either a manual processing step or an automatic operation, and the workflow can therefore 
combine the power of AI and automation with necessary manual tasks.

## Manual Transition 
A manual step is often needed for approval of partly automated tasks, 
or tasks that are not yet automated.

A manual transition can be created in the following manner using Lucidtech's CLI. 

```commandline
las transitions create manual params.json --name Approve --description 'manual approval of invoices'
```
See the tutorials-section for more information on what to put in the params.json file.

## Docker transitions 
An automated task does not require any human interaction and requires only a simple docker image.
This makes it easy to test your automated task locally and update it in your favorite docker repository.
Once you have a docker image you want to use and credentials necessary to run it you are able to create 
the transition by using Lucidtech's CLI:

```commandline
las transitions create docker params.json --name Predict --description 'automatic prediction of invoices'
```

See the tutorials-section for more information on what to put in the params.json file.


## Workflow
When you have all necessary transitions ready you can combine them into one workflow, 
for this example we will make the following workflow.

![Workflow](../.gitbook/assets/simple-workflow.png)


To achieve this we need to make a workflow-specification, this is a json-file written in a limited version of 
[Amazon States Language](https://states-language.net/spec.html) (ASL). 
Just make sure that the resource in each step corresponds to the *transitionId* for the transition you want to use.
An example of a workflow specification for a simple workflow with one manual and one automatic step would look 
something like this:

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

