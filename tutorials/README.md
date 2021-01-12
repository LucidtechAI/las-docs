## Prerequisite

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
