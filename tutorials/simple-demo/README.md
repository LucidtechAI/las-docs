## Simple demonstration workflow
In this tutorial you will learn how to setup a simple workflow that 
allows you to handle any type of documents in a safe and semi-automatic way.
We will do this by using the 
[sample images](https://github.com/LucidtechAI/las-docs/tree/master/docker-sample-images),
if you need a more customizable workflow check out the other 
[tutorials](https://github.com/LucidtechAI/las-docs/tree/master/tutorials/README.md).
## Prerequisites

* LAS credentials
* A Model for making predictions (This can be fixed after setting up the workflow)


## Steps
* Build the remote component and copy it to the assets folder for the manual step
```                 
cd simple-demo
npm run --prefix frontend build:remote 
cp frontend/dist/remote.js backend/src/ManualApprove/assets/jsRemoteComponent.js
```
* Make sure all environment variables are assigned correcty
* create the demo workflow
```
python backend/build.py
```

## Execute the workflow
Alright, you are good to go! Test the workflow by running the following script:
```
python start_execution.py --workflow-id las:workflow:<hex> --model-id las:model:<hex> /path/to/document.pdf
```
