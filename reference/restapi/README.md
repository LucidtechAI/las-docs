# Rest API

You can find the Open API specification file [here](https://raw.githubusercontent.com/LucidtechAI/las-docs/master/reference/restapi/oas.json)

## Changelog

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