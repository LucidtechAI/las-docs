# Transitions and Workflows

 - A *Transition* is a manual or automatic task that forms the building block of a *Workflow*.
 - A *Workflow* is a set of steps combined to form a finite state machine.
 
By taking advantage of *Transitions* and *Workflows* in Lucidtech's API, 
you can easily structure a complex flow for your documents.
A *Transition* can be either a manual processing step or an automatic operation. Therefore, the workflow can 
combine the power of AI and automation with necessary manual tasks.

## Manual Transitions 
A manual step is often needed for approval of partly automated tasks, 
or tasks that are not yet automated.

A manual transition can be created using the example below:
(TTNote: It's okay to reference the CLI here, just removed it for consistency with previous sections.]

```commandline
las transitions create manual params.json --name Approve --description 'manual approval of invoices'
```
See the tutorials section (TTNote: Consider link here perhaps to https://docs.lucidtech.ai/getting-started/tutorials]) for more details on what to include in the params.json file.

## Docker Transitions 
An automated task that does not require any human intervention requires only a simple docker image.
This makes it easy to test your automated task locally and update it in your favorite docker repository.

Once you have your preferred docker image and the necessary credentials to run it, you can create the docker transition using the example below:
(TTNote: Suggest clarification on what to do if you don't have the necessary credentials.) 

```commandline
las transitions create docker params.json --name Predict --description 'automatic prediction of invoices'
```

See the tutorials section (TTNote: Again, consider same link as above) for more details on what to include in the params.json file.


## Workflow
Once you have all necessary transitions created, you can combine them into one workflow. 
For this example, we will make the following workflow:

![Workflow](../.gitbook/assets/simple-workflow.png)


To achieve this, we need to make a workflow specification, which is a json file written in a limited version of 
[Amazon States Language](https://states-language.net/spec.html) (ASL). 
When creating the json file, be sure that the resource in each step corresponds to the *transitionId* for the transition that you want to use.

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

