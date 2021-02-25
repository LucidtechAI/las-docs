## Simple demonstration workflow
If you just want to setup a quick and standard workflow to get an idea if this is what you are looking for 
you have come to the right place. 

By completing the steps below you will setup a simple workflow that 
allows you to handle any type of documents in a safe and semi-automatic way.
We will do this by using the 
[sample images](https://github.com/LucidtechAI/las-docs/tree/master/docker-image-samples),
if you need a more customizable workflow check out the other 
[tutorials](https://github.com/LucidtechAI/las-docs/tree/master/tutorials/README.md).
## Prerequisites

* LAS credentials
* A Model for making predictions (This can be fixed after setting up the workflow)


## Create Workflow
Navigate to the simple demo and run the build-script.
```
cd tutorials/simple-demo/backend/
python backend/build.py --workflow-spec src/invoice.json
```

{% hint style="info" %}
This will create resources and if ran multiple times you will eventually reach the limits of the API.
{% endhint %}

## Execute the workflow
Alright, you are good to go! Test the workflow by running the following script:
```
python start_execution.py --workflow-id las:workflow:<hex> --model-id las:model:<hex> /path/to/document.pdf
```
