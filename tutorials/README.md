## Prerequisite

* LAS credentials


## Steps
* Build the remote component and copy it to the assets folder for the manual step
```                 
npm run --prefix frontend build:remote 
cp frontend/dist/remote.js backend/src/ManualApprove/assets/jsRemoteComponent.js
```
* Make sure all environment variables are sat correcty
* create the demo workflow
```
python backend/build.py
```
* 