# Rest API

You can find the Open API specification file [here](https://raw.githubusercontent.com/LucidtechAI/las-docs/master/reference/restapi/oas.json)

## Changelog

### 2021-09-17

- Fixed a bug preventing resources to be deleted sometimes when calling DELETE /documents/:id or DELETE /assets/:id
- Fixed a bug causing negative values to be returned for several fields (e.g. numberOfDocuments, numberOfDataBundles)

### 2021-09-08

- Updated Login UI
- API key is no longer needed

### 2021-08-18

- Fixed a bug preventing a transition execution from starting for transitions with the docker type
- Added GET /datasets/:id
- Extended the period in which temporary credentials are valid upon first time invitation to Typenode or Flyt from 30 days to 90 days
- Listing endpoints like DELETE /documents and GET /documents should now respond faster
- Added more descriptive error message for 404 responses
- Added createdBy, updatedTime, updatedBy to /appClients
- Added createdTime, createdBy, updatedTime, updatedBy to /users
- Added createdTime, createdBy, updatedTime, updatedBy to /assets
- Added createdTime, createdBy, updatedTime, updatedBy to /documents
- Added createdBy, updatedBy to /models
- Added createdBy, updatedBy to /models/:id/dataBundles
- Added createdTime, createdBy, updatedTime, updatedBy to /secrets
- Added createdTime, createdBy, updatedTime, updatedBy to /transitions
- Added createdTime, createdBy, updatedTime, updatedBy to /workflows
- Added createdBy, updatedBy to /datasets
- Added updatedTime, updatedBy to /organizations
- Added retentionInDays to /documents. For documents with a datasetId, the minimum retentionInDays of the dataset and the document is chosen

### 2021-07-08

- Extended the period in which temporary credentials are valid upon first time invitation to Typenode or Flyt from 7 days to 30 days
- Added timeoutInSeconds to /transitions
- Fixed a bug preventing login to complete successfully in Typenode and Flyt
- Fixed a bug preventing expired users from getting new temporary credentials when invited again

### 2021-07-01

- Added datasetId query parameter to DELETE /documents
- Added datasetId query parameter to GET /documents
- Fixed a bug preventing completion config in /workflows to be executed in some situations
- Added datasetId to PATCH /documents/:id
- Fixed error in JSON schema for /datasets, numDocuments -> numberOfDocuments

### 2021-06-25

- Deprecated /batches endpoint. It's replaced by /datasets. Your current batches will be unaffected until 2021-09-06, after which we will remove the entire endpoint and all of its data. Documents in batches will not be affected, only the batches themselves. Until 2021-09-06 you will not be able to create new batches. Please consider replacing your batches with datasets.
- Added POST /datasets
- Added GET /datasets
- Added PATCH /datasets/:id
- Added DELETE /datasets/:id
- Added POST /models/:id/dataBundles
- Added GET /models/:id/dataBundles
- Added PATCH /models/:id/dataBundles/:id
- Added DELETE /models/:id/dataBundles/:id
- Fixed a bug causing incorrect error messages to be returned from the API
- POST /transitions will now attempt to return appropriate status 400 error message when imageUrl is incomplete
- PATCH /transitions/:id/executions/:id will now return status 400 error message when attempting to PATCH a timed out transition execution

### 2021-06-16

- Added loginUrls, defaultLoginUrl to PATCH /appClients/:id

### 2021-06-10

- Added GET /organizations/:id
- Added PATCH /organizations/:id
- Fixed a bug preventing the first log message to be written for workflow executions
- Updated the email invite and verification code layout
- Added numberOfRunningExecutions to /workflows

### 2021-05-26

- Added DELETE /models/:id
- description in /models fieldConfig is no longer required

### 2021-05-19

- Added loginUrls, defaultLoginUrl to /appClients
- Link to login button in invitation email now sends you to the app corresponding to the defaultLoginUrl in /appClients

### 2021-05-12

- Added PATCH /batches/:id
- Added PATCH /appClients/:id
- Added GET /models/:id
- Added PATCH /models/:id
- Added POST /models
- Updated OAuth2 scopes
- Added new possible value 'inactive' for status in /models

### 2021-04-27

- Added storageLocation, retentionInDays, containsPersonallyIdentifiableInformation to /batches
- Added DELETE /batches/:id. Documents in batch must be deleted before deleting the batch
- Added batchId query parameter to DELETE /documents

### 2021-04-23

- Added GET /logs. Use query parameters workflowId, workflowExecutionId, transitionId, transitionExecutionId to filter.
- Added default retry configuration for workflow transitions that don't explicitly define one.
- Added startTime, transitionExecutionId, workflowExecutionId to /logs

### 2021-04-14

- Now possible to create public app clients by using the generateSecret parameter set to false (defaults to true) and providing callback and logout urls
- Added createdTime, apiKey, callbackUrls, logoutUrls, hasSecret to /appClients
- Now preventing users from deleting themselves using DELETE /users/:id 
- Now preventing app clients from deleting itself using DELETE /appClients/:id

### 2021-04-13

- Added GET /batches
- Added createdTime and numDocuments to /batches
- Added POST /appClients
- Added GET /appClients
- Added DELETE /appClients/:id
- Added createdTime, updatedTime, fieldConfig, preprocessConfig and status to /models

### 2021-04-09

- Added DELETE /secrets/:id
- Added DELETE /assets/:id
- Added paging to DELETE /documents. Supports deleting up to 1000 documents each API call. 