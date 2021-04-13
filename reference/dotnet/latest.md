# Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`namespace `[`Lucidtech::Las`](#a00021) | 
`namespace `[`Lucidtech::Las::Core`](#a00022) | 
`namespace `[`Lucidtech::Las::Utils`](#a00023) | 

# namespace `Lucidtech::Las` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`class `[`Lucidtech::Las::Client`](#a00043) | [Client](#a00043) to invoke api methods from [Lucidtech](#a00020) AI Services.

# class `Lucidtech::Las::Client` 

[Client](#a00043) to invoke api methods from [Lucidtech](#a00020) AI Services.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} RestClient `[`RestSharpClient`](#a00043_1a5e59cc310cc0dd101e74a16824f2fa3a) | 
`{property} `[`Credentials`](#a00067)` `[`LasCredentials`](#a00043_1aed1258913a65f014aa0ce4ef63bd6dfe) | 
`public inline  `[`Client`](#a00043_1a2a95a90e6dfa52e94d3e12a18d583fca)`(`[`Credentials`](#a00067)` credentials)` | [Client](#a00043) constructor.
`public inline  `[`Client`](#a00043_1a0ba3cc00461a4ee4d4a346d9600efa4a)`()` | [Client](#a00043) constructor with credentials read from local file.
`public inline object `[`CreateAsset`](#a00043_1afde4b9ed933fd6fc775770af3cd412e1)`(byte[] content,Dictionary< string, string?>? attributes)` | Creates an asset, calls the POST /assets endpoint.
`public inline object `[`ListAssets`](#a00043_1a3fe859d9bfd3d23d919c708f99141e4f)`(int? maxResults,string? nextToken)` | List available assets, calls the GET /assets endpoint.
`public inline object `[`GetAsset`](#a00043_1a8e338146001a43c4b0ca59d3f4afb901)`(string assetId)` | Get asset from the REST API, calls the GET /assets/{assetId} endpoint.
`public inline object `[`UpdateAsset`](#a00043_1a63e88e264995507702cfde3285150eae)`(string assetId,byte?[] content,Dictionary< string, string?>? attributes)` | Updates an asset, calls the PATCH /assets/{assetId} endpoint.
`public inline object `[`CreateDocument`](#a00043_1aef5c33f1a06ea8010bb6a6ba0c97b236)`(byte[] content,string contentType,string? consentId,string? batchId,List< Dictionary< string, string >>? groundTruth)` | Creates a document handle, calls the POST /documents endpoint
`public inline object `[`ListDocuments`](#a00043_1a6c1c9a3f3a20bad2ccf858ac490f57d5)`(string? batchId,string? consentId,int? maxResults,string? nextToken)` | Get documents from the REST API, calls the GET /documents endpoint.
`public inline object `[`GetDocument`](#a00043_1a1638a8fd9c03e35934af0c16d05cf90b)`(string documentId)` | Get document from the REST API, calls the GET /documents/{documentId} endpoint.
`public inline object `[`UpdateDocument`](#a00043_1a8aa65dc695c9b9918f63d12b92f329b3)`(string documentId,List< Dictionary< string, string >> groundTruth)` | Update ground truth of the document, calls the POST /documents/{documentId} endpoint. This enables the API to learn from past mistakes.
`public inline object `[`DeleteDocuments`](#a00043_1a769dabfc8e4d814d5e4e90400e7895cd)`(string? consentId,int? maxResults,string? nextToken)` | Delete documents with specified consentId, calls DELETE /documents endpoint.
`public inline object `[`CreateBatch`](#a00043_1a67cccdf0e1af3c8ce8b660bf1074f38f)`(string? name,string? description)` | Create a batch handle, calls the POST /batches endpoint.
`public inline object `[`CreatePrediction`](#a00043_1a4cb78d4caa5b0a3f6c077eec720bd4d2)`(string documentId,string modelId,int? maxPages,bool? autoRotate,string? imageQuality)` | Run inference and create a prediction, calls the POST /predictions endpoint.
`public inline object `[`ListPredictions`](#a00043_1aa07c60058c89b9d2464ec8ccd2037a18)`(int? maxResults,string? nextToken)` | List predictions available, calls the GET /predictions endpoint.
`public inline object `[`ListModels`](#a00043_1a2a5979f62ac58a13cdd2fce28c174508)`(int? maxResults,string? nextToken)` | List models available, calls the GET /models endpoint.
`public inline object `[`CreateSecret`](#a00043_1ac9ee5b8c1cedfd849aa258bccdcd1de9)`(Dictionary< string, string > data,Dictionary< string, string?>? attributes)` | Creates an secret, calls the POST /secrets endpoint.
`public inline object `[`ListSecrets`](#a00043_1a4bf28ad750cf50ad0f6e0d8a3558f69f)`(int? maxResults,string? nextToken)` | List secrets available, calls the GET /secrets endpoint.
`public inline object `[`UpdateSecret`](#a00043_1a881282cf8a8cc3618b25a25c64c7feeb)`(string secretId,Dictionary< string, string >? data,Dictionary< string, string?>? attributes)` | Updates a secret, calls the PATCH /secrets/secretId endpoint.
`public inline object `[`CreateTransition`](#a00043_1a5b96f5977dd3041a45770692e81a9d45)`(string transitionType,Dictionary< string, string >? inputJsonSchema,Dictionary< string, string >? outputJsonSchema,Dictionary< string, object?>? parameters,Dictionary< string, string?>? attributes)` | Creates a transition, calls the POST /transitions endpoint.
`public inline object `[`ListTransitions`](#a00043_1a7ecc9e71192ea2432b7efc410119477d)`(string? transitionType,int? maxResults,string? nextToken)` | List transitions, calls the GET /transitions endpoint.
`public inline object `[`GetTransition`](#a00043_1a56a0e83c4b6b97cbd1c59486a71343df)`(string transitionId)` | Get information about a specific transition, calls the GET /transitions/{transition_id} endpoint.
`public inline object `[`DeleteTransition`](#a00043_1aaf07d945d2519bd09cd48779d6d9fd27)`(string transitionId)` | Delete a transition, calls the DELETE /transitions/{transition_id} endpoint. Will fail if transition is in use by one or more workflows.
`public inline object `[`GetTransitionExecution`](#a00043_1a88ae688b39cf43c94052f76afa77fd99)`(string transitionId,string executionId)` | Get an execution of a transition, calls the GET /transitions/{transitionId}/executions/{executionId} endpoint
`public inline object `[`UpdateTransition`](#a00043_1a7a41277f4729358a82624d06d6d6ad78)`(string transitionId,Dictionary< string, string >? inputJsonSchema,Dictionary< string, string >? outputJsonSchema,Dictionary< string, string?> attributes)` | Updates an existing transition, calls the PATCH /transitions/{transitionId} endpoint.
`public inline object `[`ExecuteTransition`](#a00043_1a4e071632c9d31b235242e5de961bfb79)`(string transitionId)` | Start executing a manual transition, calls the POST /transitions/{transitionId}/executions endpoint.
`public inline object `[`ListTransitionExecutions`](#a00043_1af972fa3f12663bdc445c79f5a5e61257)`(string transitionId,string? status,List< string >? executionIds,int? maxResults,string? nextToken,string? sortBy,string? order)` | List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.
`public inline object `[`ListTransitionExecutions`](#a00043_1af764a1fbd83178bf38db12f79decfdc2)`(string transitionId,List< string >? statuses,List< string >? executionIds,int? maxResults,string? nextToken,string? sortBy,string? order)` | List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.
`public inline object `[`UpdateTransitionExecution`](#a00043_1a900c5e8ccbe8b7273b782761cf7e6198)`(string transitionId,string executionId,string status,Dictionary< string, string >? output,Dictionary< string, string >? error,string? startTime)` | Ends the processing of the transition execution, calls the PATCH /transitions/{transitionId}/executions/{executionId} endpoint.
`public inline object `[`SendHeartbeat`](#a00043_1a4d93ff7210887e14489f679963e38d25)`(string transitionId,string executionId)` | Send heartbeat for a manual execution, calls the POST /transitions/{transitionId}/executions/{executionId}/heartbeats endpoint.
`public inline object `[`CreateUser`](#a00043_1aa8b132ac281a0619bc1154a328bf8168)`(string email,Dictionary< string, string?>? attributes)` | Creates a new user, calls the POST /users endpoint.
`public inline object `[`ListUsers`](#a00043_1af3b5f1ae1ad592ed1891641c418506fd)`(int? maxResults,string? nextToken)` | List users, calls the GET /users endpoint.
`public inline object `[`GetUser`](#a00043_1adfa785e09a46221c1603483a5e646142)`(string userId)` | Get information about a specific user, calls the GET /users/{user_id} endpoint.
`public inline object `[`DeleteUser`](#a00043_1af045ddf4f025869ac32e393f8b6f52cb)`(string userId)` | Delete the user with the provided user_id, calls the DELETE /users/{userId} endpoint.
`public inline object `[`UpdateUser`](#a00043_1aa4a3d7f47f150f04c6552953dd6ceb90)`(string userId,Dictionary< string, object?> attributes)` | Updates a user, calls the PATCH /users/{userId} endpoint.
`public inline object `[`CreateWorkflow`](#a00043_1ab9e2e28491d47757858be2250b6351dc)`(Dictionary< string, object > spec,Dictionary< string, string >? errorConfig,Dictionary< string, string?>? attributes)` | Creates a new workflow, calls the POST /workflows endpoint. Check out [Lucidtech](#a00020)'s tutorials for more info on how to create a workflow.
`public inline object `[`ListWorkflows`](#a00043_1a7938e99f5187033a817155e104d14641)`(int? maxResults,string nextToken)` | List workflows, calls the GET /workflows endpoint.
`public inline object `[`UpdateWorkflow`](#a00043_1ab9bef59fbf9f83ff8804facd9bbedf76)`(string workflowId,Dictionary< string, string?> attributes)` | Creates a workflow handle, calls the PATCH /workflows/{workflowId} endpoint.
`public inline object `[`GetWorkflow`](#a00043_1ae3a74c1ee4ab596c0b72f5e3c82c0262)`(string workflowId)` | Get information about a specific workflow, calls the GET /workflows/{workflow_id} endpoint.
`public inline object `[`DeleteWorkflow`](#a00043_1aba8230db99366b8ede332149e8cb3473)`(string workflowId)` | Delete the workflow with the provided workflow_id, calls the DELETE /workflows/{workflowId} endpoint.
`public inline object `[`ExecuteWorkflow`](#a00043_1ae85ba2f8addcba40182b0ac7cce0443d)`(string workflowId,Dictionary< string, object > content)` | Start a workflow execution, calls the POST /workflows/{workflowId}/executions endpoint.
`public inline object `[`ListWorkflowExecutions`](#a00043_1ac2605a8e1b3cb18a76727146e3b5cb7c)`(string workflowId,string? status,int? maxResults,string? nextToken,string? sortBy,string? order)` | List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.
`public inline object `[`ListWorkflowExecutions`](#a00043_1a5c70fbfaa071dd68cd01a50d18aa99a3)`(string workflowId,List< string >? statuses,int? maxResults,string? nextToken,string? sortBy,string? order)` | List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.
`public inline object `[`DeleteWorkflowExecution`](#a00043_1a294ae39590c80ff6b48cb0881eaef5ac)`(string workflowId,string executionId)` | Deletes the execution with the provided execution_id from workflow_id, calls the DELETE /workflows/{workflowId}/executions/{executionId} endpoint.

## Members

#### `{property} RestClient `[`RestSharpClient`](#a00043_1a5e59cc310cc0dd101e74a16824f2fa3a) 

#### `{property} `[`Credentials`](#a00067)` `[`LasCredentials`](#a00043_1aed1258913a65f014aa0ce4ef63bd6dfe) 

#### `public inline  `[`Client`](#a00043_1a2a95a90e6dfa52e94d3e12a18d583fca)`(`[`Credentials`](#a00067)` credentials)` 

[Client](#a00043) constructor.

#### Parameters
* `credentials` Keys, endpoints and credentials needed for authorization

#### `public inline  `[`Client`](#a00043_1a0ba3cc00461a4ee4d4a346d9600efa4a)`()` 

[Client](#a00043) constructor with credentials read from local file.

#### `public inline object `[`CreateAsset`](#a00043_1afde4b9ed933fd6fc775770af3cd412e1)`(byte[] content,Dictionary< string, string?>? attributes)` 

Creates an asset, calls the POST /assets endpoint.

```cpp
Client client = new Client();
byte[] content = File.ReadAllBytes("myScript.js");
client.CreateAsset(content);
```

#### Parameters
* `content` Asset content

* `attributes` Additional attributes

#### Returns
Asset response from REST API

#### `public inline object `[`ListAssets`](#a00043_1a3fe859d9bfd3d23d919c708f99141e4f)`(int? maxResults,string? nextToken)` 

List available assets, calls the GET /assets endpoint.

```cpp
Client client = new Client();
var response = client.ListAssets();
```

#### Parameters
* `maxResults` Number of items to show on a single page

* `nextToken` Token to retrieve the next page

#### Returns
JSON object with two keys:

* "assets" Assets response from REST API without the content of each asset

* "nextToken" allowing for retrieving the next portion of data

#### `public inline object `[`GetAsset`](#a00043_1a8e338146001a43c4b0ca59d3f4afb901)`(string assetId)` 

Get asset from the REST API, calls the GET /assets/{assetId} endpoint.

```cpp
Client client = new Client();
var response = client.GetAsset("<asset_id>");
```

#### Parameters
* `assetId` Asset ID

#### Returns
Asset object

#### `public inline object `[`UpdateAsset`](#a00043_1a63e88e264995507702cfde3285150eae)`(string assetId,byte?[] content,Dictionary< string, string?>? attributes)` 

Updates an asset, calls the PATCH /assets/{assetId} endpoint.

```cpp
Client client = new Client();
byte[] newContent = File.ReadAllBytes("MyScript.js");
var response = client.UpdateAsset("<asset_id>", newContent);
```

#### Parameters
* `assetId` Asset ID

* `content` New content

* `attributes` Additional attributes

#### Returns
Asset object

#### `public inline object `[`CreateDocument`](#a00043_1aef5c33f1a06ea8010bb6a6ba0c97b236)`(byte[] content,string contentType,string? consentId,string? batchId,List< Dictionary< string, string >>? groundTruth)` 

Creates a document handle, calls the POST /documents endpoint

Create a document handle for a jpeg image 
```cpp
Client client = new Client();
byte[] content = File.ReadAllBytes("MyReceipt.jpeg");
var response = client.CreateDocument(content, "image/jpeg", "bar");
```

#### Parameters
* `content` Content to POST 

* `contentType` A mime type for the document handle 

* `consentId` An identifier to mark the owner of the document handle 

* `batchId` Specifies the batch to which the document will be associated with 

* `groundTruth` A list of items {label: value}, representing the ground truth values for the document 

#### Returns
A deserialized object that can be interpreted as a Dictionary with the fields with batchId, documentId, contentType and consentId

#### `public inline object `[`ListDocuments`](#a00043_1a6c1c9a3f3a20bad2ccf858ac490f57d5)`(string? batchId,string? consentId,int? maxResults,string? nextToken)` 

Get documents from the REST API, calls the GET /documents endpoint.

Create a document handle for a jpeg image 
```cpp
Client client = new Client();
var response = client.ListDocuments('<batchId>');
```

#### Parameters
* `batchId` The batch id that contains the documents of interest 

* `consentId` An identifier to mark the owner of the document handle 

* `maxResults` Number of items to show on a single page

* `nextToken` Token to retrieve the next page

#### Returns
Documents from REST API contained in batch

#### `public inline object `[`GetDocument`](#a00043_1a1638a8fd9c03e35934af0c16d05cf90b)`(string documentId)` 

Get document from the REST API, calls the GET /documents/{documentId} endpoint.

Get information of document specified by <documentId> 
```cpp
Client client = new Client();
var response = client.GetDocument('<documentId>');
```

#### Parameters
* `documentId` The document id to run inference and create a prediction on 

#### Returns
Document information from REST API

#### `public inline object `[`UpdateDocument`](#a00043_1a8aa65dc695c9b9918f63d12b92f329b3)`(string documentId,List< Dictionary< string, string >> groundTruth)` 

Update ground truth of the document, calls the POST /documents/{documentId} endpoint. This enables the API to learn from past mistakes.

```cpp
Client client = new Client();
var groundTruth = new List<Dictionary<string, string>>()
{
    new Dictionary<string, string>(){{"label", "total_amount"},{"value", "54.50"}},
    new Dictionary<string, string>(){{"label", "purchase_date"},{"value", "2007-07-30"}}
};
var response = client.UpdateDocument('<documentId>', groundTruth);
```

#### Parameters
* `documentId` Path to document to upload, Same as provided to [CreateDocument](#a00043_1aef5c33f1a06ea8010bb6a6ba0c97b236)

* `groundTruth` A list of ground truth items 

#### Returns
A deserialized object that can be interpreted as a Dictionary with the fields documentId, consentId, uploadUrl, contentType and ground truth.

#### `public inline object `[`DeleteDocuments`](#a00043_1a769dabfc8e4d814d5e4e90400e7895cd)`(string? consentId,int? maxResults,string? nextToken)` 

Delete documents with specified consentId, calls DELETE /documents endpoint.

```cpp
Client client = new Client();
var response = client.DeleteConsent('<consentId>');
```

#### Parameters
* `consentId` Delete documents with provided consentId 

* `maxResults` Maximum number of items to delete

* `nextToken` Token to retrieve the next page

#### Returns
A deserialized object that can be interpreted as a Dictionary with the fields consentId, nextToken and documents

#### `public inline object `[`CreateBatch`](#a00043_1a67cccdf0e1af3c8ce8b660bf1074f38f)`(string? name,string? description)` 

Create a batch handle, calls the POST /batches endpoint.

Create a new batch with the provided description. on the document specified by '<batchId>' 
```cpp
Client client = new Client();
var response = client.CreateBatch("Data gathered from the Mars Rover Invoice Scan Mission");
```

#### Parameters
* `name` Name of the batch

* `description` A brief description of the purpose of the batch 

#### Returns
A deserialized object that can be interpreted as a Dictionary with the fields batchId and description. batchId can be used as an input when posting documents to make them a part of this batch.

#### `public inline object `[`CreatePrediction`](#a00043_1a4cb78d4caa5b0a3f6c077eec720bd4d2)`(string documentId,string modelId,int? maxPages,bool? autoRotate,string? imageQuality)` 

Run inference and create a prediction, calls the POST /predictions endpoint.

Run inference and create a prediction using the invoice model on the document specified by '<documentId>' 
```cpp
Client client = new Client();
var response = client.CreatePrediction('<documentId>',"las:model:99cac468f7cf47ddad12e5e017540389");
```

#### Parameters
* `documentId` Path to document to upload Same as provided to [CreateDocument](#a00043_1aef5c33f1a06ea8010bb6a6ba0c97b236)

* `modelId` Id of the model to use for inference 

* `maxPages` Maximum number of pages to run predictions on 

* `autoRotate` Whether or not to let the API try different rotations on the document when running 

* `extras` Extra information to add to json body 

#### Returns
A deserialized object that can be interpreted as a Dictionary with the fields documentId and predictions, the value of predictions is the output from the model.

#### `public inline object `[`ListPredictions`](#a00043_1aa07c60058c89b9d2464ec8ccd2037a18)`(int? maxResults,string? nextToken)` 

List predictions available, calls the GET /predictions endpoint.

```cpp
Client client = new Client();
var response = client.ListPredictions();
```

#### Parameters
* `maxResults` Number of items to show on a single page

* `nextToken` Token to retrieve the next page

#### Returns
JSON object with two keys:

* "predictions" which contains a list of Prediction objects

* "nextToken" allowing for retrieving the next portion of data

#### `public inline object `[`ListModels`](#a00043_1a2a5979f62ac58a13cdd2fce28c174508)`(int? maxResults,string? nextToken)` 

List models available, calls the GET /models endpoint.

```cpp
Client client = new Client();
var response = client.ListModels();
```

#### Parameters
* `maxResults` Number of items to show on a single page

* `nextToken` Token to retrieve the next page

#### Returns
JSON object with two keys:

* "models" which contains a list of Prediction objects

* "nextToken" allowing for retrieving the next portion of data

#### `public inline object `[`CreateSecret`](#a00043_1ac9ee5b8c1cedfd849aa258bccdcd1de9)`(Dictionary< string, string > data,Dictionary< string, string?>? attributes)` 

Creates an secret, calls the POST /secrets endpoint.

```cpp
Client client = new Client();
var data = new Dictionary<string, string>{
    {"key", "my_secret_value"}
}
var response = client.CreateSecret(data);
```

#### Parameters
* `data` A dictionary containing values to be hidden

* `attributes` Additional attributes

#### Returns
A Secret object

#### `public inline object `[`ListSecrets`](#a00043_1a4bf28ad750cf50ad0f6e0d8a3558f69f)`(int? maxResults,string? nextToken)` 

List secrets available, calls the GET /secrets endpoint.

```cpp
Client client = new Client();
var response = client.ListSecrets();
```

#### Parameters
* `maxResults` Number of items to show on a single page

* `nextToken` Token to retrieve the next page

#### Returns
JSON object with two keys:

* "secrets" which contains a list of Prediction objects

* "nextToken" allowing for retrieving the next portion of data

#### `public inline object `[`UpdateSecret`](#a00043_1a881282cf8a8cc3618b25a25c64c7feeb)`(string secretId,Dictionary< string, string >? data,Dictionary< string, string?>? attributes)` 

Updates a secret, calls the PATCH /secrets/secretId endpoint.

```cpp
Client client = new Client();
var data = new Dictionary<string, string>{
    {"key", "my_new_secret_value"}
}
var response = client.UpdateSecret("<secretId>", data);
```

#### Parameters
* `secretId` Secret ID

* `data` New data

* `attributes` Additional attributes

#### `public inline object `[`CreateTransition`](#a00043_1a5b96f5977dd3041a45770692e81a9d45)`(string transitionType,Dictionary< string, string >? inputJsonSchema,Dictionary< string, string >? outputJsonSchema,Dictionary< string, object?>? parameters,Dictionary< string, string?>? attributes)` 

Creates a transition, calls the POST /transitions endpoint.

```cpp
Client client = new Client();
var inputSchema = new Dictionary<string, string>{
    {"$schema", "https://json-schema.org/draft-04/schema#"},
    {"title", "input"}
};
var outputSchema = new Dictionary<string, string>{
    {"$schema", "https://json-schema/draft-04/schema#"},
    {"title", "output"}
};
var params = new Dictionary<string, object>{
    {"imageUrl", "<image_url>"},
    {"credentials", new Dictionary<string, string>{
        {"username", "<username>"},
        {"password", "<password>"}
    }
};
var response = client.CreateTransition("<transition_type>", inputSchema, outputSchema, parameters: params);
```

#### Parameters
* `transitionType` Type of transition: "docker"|"manual"

* `inputJsonSchema` Json-schema that defines the input to the transition

* `outputJsonSchema` Json-schema that defines the output of the transition

* `parameters` Parameters to the corresponding transition type

* `attributes` Additional attributes

#### Returns
Transition response from REST API

#### `public inline object `[`ListTransitions`](#a00043_1a7ecc9e71192ea2432b7efc410119477d)`(string? transitionType,int? maxResults,string? nextToken)` 

List transitions, calls the GET /transitions endpoint.

```cpp
Client client = new Client();
var response = client.ListTransitions();
```

#### Parameters
* `transitionType` Type of transitions

* `maxResults` Number of items to show on a single page

* `nextToken` Token to retrieve the next page

#### Returns
Transitions response from REST API

#### `public inline object `[`GetTransition`](#a00043_1a56a0e83c4b6b97cbd1c59486a71343df)`(string transitionId)` 

Get information about a specific transition, calls the GET /transitions/{transition_id} endpoint.

```cpp
Client client = new Client();
var response = client.GetTransition("<transition_id>");
```

#### Parameters
* `transitionId` Id of the transition

#### Returns
Transition response from REST API

#### `public inline object `[`DeleteTransition`](#a00043_1aaf07d945d2519bd09cd48779d6d9fd27)`(string transitionId)` 

Delete a transition, calls the DELETE /transitions/{transition_id} endpoint. Will fail if transition is in use by one or more workflows.

```cpp
Client client = new Client();
var response = client.DeleteTransition("<transition_id>");
```

#### Parameters
* `transitionId` Id of the transition

#### Returns
Transition response from REST API

#### `public inline object `[`GetTransitionExecution`](#a00043_1a88ae688b39cf43c94052f76afa77fd99)`(string transitionId,string executionId)` 

Get an execution of a transition, calls the GET /transitions/{transitionId}/executions/{executionId} endpoint

```cpp
Client client = new Client();
var response = client.GetTransitionExecution("<transition_id>", "<execution_id>");
```

#### Parameters
* `transitionId` Id of the transition

* `executionId` Id of the execution

#### Returns
Transition execution response from REST API

#### `public inline object `[`UpdateTransition`](#a00043_1a7a41277f4729358a82624d06d6d6ad78)`(string transitionId,Dictionary< string, string >? inputJsonSchema,Dictionary< string, string >? outputJsonSchema,Dictionary< string, string?> attributes)` 

Updates an existing transition, calls the PATCH /transitions/{transitionId} endpoint.

```cpp
Client client = new Client();
var response = client.UpdateTransition("<transitionId>");
```

#### Parameters
* `transitionId` Id of the transition

* `inputJsonSchema` Json-schema that defines the input to the transition

* `outputJsonSchema` Json-schema that defines the output of the transition

* `attributes` Additional attributes

#### Returns
Transition response from REST API

#### `public inline object `[`ExecuteTransition`](#a00043_1a4e071632c9d31b235242e5de961bfb79)`(string transitionId)` 

Start executing a manual transition, calls the POST /transitions/{transitionId}/executions endpoint.

```cpp
Client client = new Client();
var response = client.ExecuteTransition("<transitionId>");
```

#### Parameters
* `transitionId` Id of the transition

#### Returns
Transition exexution response from REST API

#### `public inline object `[`ListTransitionExecutions`](#a00043_1af972fa3f12663bdc445c79f5a5e61257)`(string transitionId,string? status,List< string >? executionIds,int? maxResults,string? nextToken,string? sortBy,string? order)` 

List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.

```cpp
Client client = new Client();
var response = client.ListTransitionExecutions("<transitionId>", new [] {"succeeded", "failed"});
```

#### Parameters
* `transitionId` Id of the transition

* `status` Status to filter by

* `executionIds` List of execution ids to filter by

* `maxResults` Maximum number of results to be returned

* `nextToken` A unique token used to retrieve the next page

* `sortBy` The sorting variable of the execution: "endTime" | "startTime"

* `order` Order of the executions: "ascending" | "descending"

#### Returns
Transition executions response from the REST API

#### `public inline object `[`ListTransitionExecutions`](#a00043_1af764a1fbd83178bf38db12f79decfdc2)`(string transitionId,List< string >? statuses,List< string >? executionIds,int? maxResults,string? nextToken,string? sortBy,string? order)` 

List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.

```cpp
Client client = new Client();
var response = client.ListTransitionExecutions("<transitionId>", new [] {"succeeded", "failed"});
```

#### Parameters
* `transitionId` Id of the transition

* `statuses` List of execution statuses to filter by

* `executionIds` List of execution ids to filter by

* `maxResults` Maximum number of results to be returned

* `nextToken` A unique token used to retrieve the next page

* `sortBy` The sorting variable of the execution: "endTime" | "startTime"

* `order` Order of the executions: "ascending" | "descending"

#### Returns
Transition executions response from the REST API

#### `public inline object `[`UpdateTransitionExecution`](#a00043_1a900c5e8ccbe8b7273b782761cf7e6198)`(string transitionId,string executionId,string status,Dictionary< string, string >? output,Dictionary< string, string >? error,string? startTime)` 

Ends the processing of the transition execution, calls the PATCH /transitions/{transitionId}/executions/{executionId} endpoint.

```cpp
Client client = new Client();
var output = new Dictionary<string, string>();
client.UpdateTransitionExecution("<transitionId>", "<executionId>, "succeeded", output: output);
```

#### Parameters
* `transitionId` Id of the transition

* `executionId` Id of the execution

* `status` Status of the execution: "succeeded" | "failed"

* `output` Output from the execution, required when status is "succeeded"

* `error` Error from the execution, required when status is "failed"

* `startTime` Utc start time that will replace the original start time of the execution

#### Returns
Transition execution response from REST API

#### `public inline object `[`SendHeartbeat`](#a00043_1a4d93ff7210887e14489f679963e38d25)`(string transitionId,string executionId)` 

Send heartbeat for a manual execution, calls the POST /transitions/{transitionId}/executions/{executionId}/heartbeats endpoint.

```cpp
Client client = new Client();
var response = client.sendHeartbeat("<transitionId>", "<executionId>");
```

#### Parameters
* `transitionId` Id of the transition

* `executionId` Id of the execution

#### Returns
Transition exexution response from REST API

#### `public inline object `[`CreateUser`](#a00043_1aa8b132ac281a0619bc1154a328bf8168)`(string email,Dictionary< string, string?>? attributes)` 

Creates a new user, calls the POST /users endpoint.

```cpp
Client client = new Client();
var response = client.CreateUser("foo@bar.com");
```

#### Parameters
* `email` New user's email

* `attributes` Additional attributes. Currently supported are: name, avatar

#### Returns
User response from REST API

#### `public inline object `[`ListUsers`](#a00043_1af3b5f1ae1ad592ed1891641c418506fd)`(int? maxResults,string? nextToken)` 

List users, calls the GET /users endpoint.

```cpp
Client client = new Client();
var response = client.ListUsers();
```

#### Parameters
* `maxResults` Maximum number of results to be returned

* `nextToken` A unique token used to retrieve the next page

#### Returns
Users response from REST API

#### `public inline object `[`GetUser`](#a00043_1adfa785e09a46221c1603483a5e646142)`(string userId)` 

Get information about a specific user, calls the GET /users/{user_id} endpoint.

```cpp
Client client = new Client();
var response = client.GetUser("<user_id>");
```

#### Parameters
* `userId` Id of the user

#### Returns
User response from REST API

#### `public inline object `[`DeleteUser`](#a00043_1af045ddf4f025869ac32e393f8b6f52cb)`(string userId)` 

Delete the user with the provided user_id, calls the DELETE /users/{userId} endpoint.

```cpp
Client client = new Client();
var response = client.DeleteUser("<user_id>");
```

#### Parameters
* `userId` Id of the user

#### Returns
User response from REST API

#### `public inline object `[`UpdateUser`](#a00043_1aa4a3d7f47f150f04c6552953dd6ceb90)`(string userId,Dictionary< string, object?> attributes)` 

Updates a user, calls the PATCH /users/{userId} endpoint.

```cpp
Client client = new Client();
var parameters = new Dictionary<string, string>{
    {"name", "User"}
};
var response = client.UpdateUser("<user_id>", parameters);
```

#### Parameters
* `userId` Id of the user

* `attributes` Attributes to update. Allowed attributes: name (string), avatar (base64-encoded image) 

#### Returns
User response from REST API

#### `public inline object `[`CreateWorkflow`](#a00043_1ab9e2e28491d47757858be2250b6351dc)`(Dictionary< string, object > spec,Dictionary< string, string >? errorConfig,Dictionary< string, string?>? attributes)` 

Creates a new workflow, calls the POST /workflows endpoint. Check out [Lucidtech](#a00020)'s tutorials for more info on how to create a workflow.

```cpp
Client client = new Client();
var spec = new Dictionary<string, object>{
    {"language", "ASL"},
    {"version", "1.0.0"},
    {"definition", {...}}
};
var errorConfig = new Dictionary<string, string>{
    {"email", "foo@bar.com}
};
var parameters = new Dictionary<string, string>{
    {"name", "Name"},
    {"description", "My awesome workflow"}
};
var response = Client.CreateWorkflow(spec, errorConfig, parameters);
```

#### Parameters
* `spec` Workflow specification. Currently only ASL is supported: [https://states-language.net/spec.html](https://states-language.net/spec.html)

* `errorConfig` Error handler configuration

* `attributes` Additional attributes. Currently supported are: name, description.

#### Returns
Workflow response from REST API

#### `public inline object `[`ListWorkflows`](#a00043_1a7938e99f5187033a817155e104d14641)`(int? maxResults,string nextToken)` 

List workflows, calls the GET /workflows endpoint.

```cpp
Client client = new Client();
var response = client.ListWorkflows();
```

#### Parameters
* `maxResults` Maximum number of results to be returned

* `nextToken` A unique token used to retrieve the next page

#### Returns
Workflows response from REST API

#### `public inline object `[`UpdateWorkflow`](#a00043_1ab9bef59fbf9f83ff8804facd9bbedf76)`(string workflowId,Dictionary< string, string?> attributes)` 

Creates a workflow handle, calls the PATCH /workflows/{workflowId} endpoint.

```cpp
Client client = new Client();
var newParameters = new Dictionary<string, string>{
    {"name", "New Name"},
    {"description", "My updated awesome workflow"}
};
var response = client.UpdateWorkflow("<workflow_id>, newParameters);
```

#### Parameters
* `workflowId` Id of the workflow

* `attributes` Attributes to update. Currently supported are: name, description

#### Returns
Workflow response from REST API

#### `public inline object `[`GetWorkflow`](#a00043_1ae3a74c1ee4ab596c0b72f5e3c82c0262)`(string workflowId)` 

Get information about a specific workflow, calls the GET /workflows/{workflow_id} endpoint.

```cpp
Client client = new Client();
var response = client.GetWorkflow("<workflow_id>");
```

#### Parameters
* `workflowId` Id of the workflow

#### Returns
Workflow response from REST API

#### `public inline object `[`DeleteWorkflow`](#a00043_1aba8230db99366b8ede332149e8cb3473)`(string workflowId)` 

Delete the workflow with the provided workflow_id, calls the DELETE /workflows/{workflowId} endpoint.

```cpp
Client client = new Client();
var response = client.DeleteWorkflow("<workflow_id>");
```

#### Parameters
* `workflowId` Id of the workflow

#### Returns
Workflow response from REST API

#### `public inline object `[`ExecuteWorkflow`](#a00043_1ae85ba2f8addcba40182b0ac7cce0443d)`(string workflowId,Dictionary< string, object > content)` 

Start a workflow execution, calls the POST /workflows/{workflowId}/executions endpoint.

```cpp
Client client = new Client();
var content = new Dictionary<string, object>();
var response = client.ExecuteWorkflow("<workflowId>, content);
```

#### Parameters
* `workflowId` Id of the workflow

* `content` Input to the first step of the workflow

#### Returns
Workflow execution response from REST API

#### `public inline object `[`ListWorkflowExecutions`](#a00043_1ac2605a8e1b3cb18a76727146e3b5cb7c)`(string workflowId,string? status,int? maxResults,string? nextToken,string? sortBy,string? order)` 

List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.

```cpp
Client client = new Client();
var statuses = new [] {"running", "succeeded"};
var response = client.ListWorkflowExecutions("<workflow_id>", statuses);
```

#### Parameters
* `workflowId` Id of the workflow

* `status` Workflow execution status to filter by

* `maxResults` Maximum number of results to be returned

* `nextToken` A unique token used to retrieve the next page

* `sortBy` The sorting variable of the execution: "endTime" | "startTime"

* `order` Order of the executions: "ascending" | "descending"

#### Returns
WorkflowExecutions response from REST API

#### `public inline object `[`ListWorkflowExecutions`](#a00043_1a5c70fbfaa071dd68cd01a50d18aa99a3)`(string workflowId,List< string >? statuses,int? maxResults,string? nextToken,string? sortBy,string? order)` 

List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.

```cpp
Client client = new Client();
var statuses = new [] {"running", "succeeded"};
var response = client.ListWorkflowExecutions("<workflow_id>", statuses);
```

#### Parameters
* `workflowId` Id of the workflow

* `statuses` Workflow execution statuses to filter by

* `maxResults` Maximum number of results to be returned

* `nextToken` A unique token used to retrieve the next page

* `sortBy` The sorting variable of the execution: "endTime" | "startTime"

* `order` Order of the executions: "ascending" | "descending"

#### Returns
WorkflowExecutions response from REST API

#### `public inline object `[`DeleteWorkflowExecution`](#a00043_1a294ae39590c80ff6b48cb0881eaef5ac)`(string workflowId,string executionId)` 

Deletes the execution with the provided execution_id from workflow_id, calls the DELETE /workflows/{workflowId}/executions/{executionId} endpoint.

```cpp
Client client = new Client();
var response = client.DeleteWorkflowExecution("<workflow_id>", "<execution_id>");
```

#### Parameters
* `workflowId` Id of the workflow

* `executionId` Id of the execution

#### Returns
WorkflowExecution response from REST API

# namespace `Lucidtech::Las::Core` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`class `[`Lucidtech::Las::Core::ClientException`](#a00047) | A [ClientException](#a00047) is raised if the client refuses to send request due to incorrect usage or bad request data.
`class `[`Lucidtech::Las::Core::Credentials`](#a00067) | Used to fetch and store credentials. One of 3 conditions must be met to successfully create credentials.
`class `[`Lucidtech::Las::Core::FeedbackResponse`](#a00079) | The structured format of the response from a send feedback request.
`class `[`Lucidtech::Las::Core::InvalidCredentialsException`](#a00051) | An [InvalidCredentialsException](#a00051) is raised if api key, access key id or secret access key is invalid.
`class `[`Lucidtech::Las::Core::LimitExceededException`](#a00059) | A [LimitExceededException](#a00059) is raised if you have reached the limit of total requests per month associated with your credentials.
`class `[`Lucidtech::Las::Core::Prediction`](#a00071) | A class that contains all the necessary information regarding a prediction performed by ApiClient.
`class `[`Lucidtech::Las::Core::RequestException`](#a00063) | A [RequestException](#a00063) is raised if something went wrong with the request.
`class `[`Lucidtech::Las::Core::RevokeResponse`](#a00075) | The structured format of the response from a revoke consent request.
`class `[`Lucidtech::Las::Core::TooManyRequestsException`](#a00055) | A [TooManyRequestsException](#a00055) is raised if you have reached the number of requests per second limit associated with your credentials.

# class `Lucidtech::Las::Core::ClientException` 

```
class Lucidtech::Las::Core::ClientException
  : public Exception
```  

A [ClientException](#a00047) is raised if the client refuses to send request due to incorrect usage or bad request data.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`ClientException`](#a00047_1adcb7f76b61fa3b414e4e71ceaca9fdad)`(string s)` | 

## Members

#### `public inline  `[`ClientException`](#a00047_1adcb7f76b61fa3b414e4e71ceaca9fdad)`(string s)` 

# class `Lucidtech::Las::Core::Credentials` 

Used to fetch and store credentials. One of 3 conditions must be met to successfully create credentials.

* ClientId, ClientSecret, ApiKey, AuthEndpoint and ApiEndpoint are provided

* The path to the file where the credentials are stored is provided

* [Credentials](#a00067) are located in default path ~/.lucidtech/credentials.cfg

Get credentials by contacting [hello@lucidtech.ai](mailto:hello@lucidtech.ai)

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} string `[`ClientId`](#a00067_1a597f4891d6f0fe9ed9f04e7aae21608f) | [Client](#a00043) ID. Provided by [Lucidtech](#a00020).
`{property} string `[`ClientSecret`](#a00067_1aec4e817805386c0c3c10e0d3fcd7b565) | [Client](#a00043) Secret. Provided by [Lucidtech](#a00020).
`{property} string `[`ApiKey`](#a00067_1a08c0214e87897ef9229f99879a7a3b54) | AWS API Gateway API key. Provided by [Lucidtech](#a00020).
`{property} string `[`AuthEndpoint`](#a00067_1aeb48746d4fcd7e93d0ba24aa1dd41659) | AWS Authorization endpoint. Provided by [Lucidtech](#a00020).
`{property} string `[`ApiEndpoint`](#a00067_1a5dc9073eba2810493f73a112d9d076ee) | AWS API Gateway API endpoint. Provided by [Lucidtech](#a00020).
`{property} RestClient `[`RestSharpClient`](#a00067_1a77da9eff9a94f2ac1f03d134d74636f4) | RestClient for making request to the authorization endpoint.
`public inline string `[`GetAccessToken`](#a00067_1a02857d4f347be1b9481ee23fae2547a8)`()` | Get Access token to API endpoint.
`public inline  `[`Credentials`](#a00067_1aa41b89dcd32d09c410fa0ec8c544a5e4)`(string clientId,string clientSecret,string apiKey,string authEndpoint,string apiEndpoint)` | [Credentials](#a00067) constructor where ClientId, ClientSecret, ApiKey, AuthEndpoint and ApiEndpoint are provided by [Lucidtech](#a00020).
`public inline  `[`Credentials`](#a00067_1a6b90bc8b8d133da49e129036886eefd5)`(string credentialsPath)` | [Credentials](#a00067) constructor where the path to the credentials config is provided.
`public inline  `[`Credentials`](#a00067_1aa5fba45758ca0f5651c6e92ebc0250eb)`()` | [Credentials](#a00067) constructor where the credentials are located at the default path. ~/.lucidtech/credentials.cfg for linux and USERPROFILE%.lucidtech\credentials.cfg for Windows.
`protected  `[`string`](#a00067_1a276748a80f0a2bc01026b8b45ae6d9cd) | 
`protected inline virtual void `[`CommonConstructor`](#a00067_1a3ac9a72bb9459b36fb660816cfad1a96)`()` | 

## Members

#### `{property} string `[`ClientId`](#a00067_1a597f4891d6f0fe9ed9f04e7aae21608f) 

[Client](#a00043) ID. Provided by [Lucidtech](#a00020).

#### `{property} string `[`ClientSecret`](#a00067_1aec4e817805386c0c3c10e0d3fcd7b565) 

[Client](#a00043) Secret. Provided by [Lucidtech](#a00020).

#### `{property} string `[`ApiKey`](#a00067_1a08c0214e87897ef9229f99879a7a3b54) 

AWS API Gateway API key. Provided by [Lucidtech](#a00020).

#### `{property} string `[`AuthEndpoint`](#a00067_1aeb48746d4fcd7e93d0ba24aa1dd41659) 

AWS Authorization endpoint. Provided by [Lucidtech](#a00020).

#### `{property} string `[`ApiEndpoint`](#a00067_1a5dc9073eba2810493f73a112d9d076ee) 

AWS API Gateway API endpoint. Provided by [Lucidtech](#a00020).

#### `{property} RestClient `[`RestSharpClient`](#a00067_1a77da9eff9a94f2ac1f03d134d74636f4) 

RestClient for making request to the authorization endpoint.

#### `public inline string `[`GetAccessToken`](#a00067_1a02857d4f347be1b9481ee23fae2547a8)`()` 

Get Access token to API endpoint.

#### `public inline  `[`Credentials`](#a00067_1aa41b89dcd32d09c410fa0ec8c544a5e4)`(string clientId,string clientSecret,string apiKey,string authEndpoint,string apiEndpoint)` 

[Credentials](#a00067) constructor where ClientId, ClientSecret, ApiKey, AuthEndpoint and ApiEndpoint are provided by [Lucidtech](#a00020).

#### Parameters
* `clientId` client id 

* `clientSecret` client secret 

* `apiKey` API key 

* `authEndpoint` Authorization endpoint 

* `apiEndpoint` API endpoint 

#### Exceptions
* `ArgumentException`

#### `public inline  `[`Credentials`](#a00067_1a6b90bc8b8d133da49e129036886eefd5)`(string credentialsPath)` 

[Credentials](#a00067) constructor where the path to the credentials config is provided.

#### Parameters
* `credentialsPath` Path to the file where the credentials are stored

#### `public inline  `[`Credentials`](#a00067_1aa5fba45758ca0f5651c6e92ebc0250eb)`()` 

[Credentials](#a00067) constructor where the credentials are located at the default path. ~/.lucidtech/credentials.cfg for linux and USERPROFILE%.lucidtech\credentials.cfg for Windows.

#### `protected  `[`string`](#a00067_1a276748a80f0a2bc01026b8b45ae6d9cd) 

#### `protected inline virtual void `[`CommonConstructor`](#a00067_1a3ac9a72bb9459b36fb660816cfad1a96)`()` 

# class `Lucidtech::Las::Core::FeedbackResponse` 

The structured format of the response from a send feedback request.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} string `[`DocumentId`](#a00079_1a583fa4e93b2e4d42bc87a8de8e1155ae) | Document id
`{property} string `[`ConsentId`](#a00079_1a3cea748b281d1b4d14690c639f4e2ec6) | Consent id
`{property} string `[`ContentType`](#a00079_1a3410256cf5cb1e92bddb635c79590244) | Content type
`{property} List< Dictionary< string, string > > `[`Feedback`](#a00079_1a58bcc016725bbf3cd77d9d9707c8f633) | The same information as was uploaded as feedback.
`public inline  `[`FeedbackResponse`](#a00079_1a4d8a83b695036d1949218035465561a4)`(object response)` | 
`public inline string `[`ToJsonString`](#a00079_1ab7ca7a2e4f4362d7ba26a4f111bc7426)`(Formatting format)` | Convert an object of this class to a string ready to be interpreted as a json object.

## Members

#### `{property} string `[`DocumentId`](#a00079_1a583fa4e93b2e4d42bc87a8de8e1155ae) 

Document id

#### `{property} string `[`ConsentId`](#a00079_1a3cea748b281d1b4d14690c639f4e2ec6) 

Consent id

#### `{property} string `[`ContentType`](#a00079_1a3410256cf5cb1e92bddb635c79590244) 

Content type

#### `{property} List< Dictionary< string, string > > `[`Feedback`](#a00079_1a58bcc016725bbf3cd77d9d9707c8f633) 

The same information as was uploaded as feedback.

#### `public inline  `[`FeedbackResponse`](#a00079_1a4d8a83b695036d1949218035465561a4)`(object response)` 

#### `public inline string `[`ToJsonString`](#a00079_1ab7ca7a2e4f4362d7ba26a4f111bc7426)`(Formatting format)` 

Convert an object of this class to a string ready to be interpreted as a json object.

#### Parameters
* `format` The format of the string, either `Formatting.None` or `Formatting.Indented`

#### Returns
A string that is formatted as a json object

# class `Lucidtech::Las::Core::InvalidCredentialsException` 

```
class Lucidtech::Las::Core::InvalidCredentialsException
  : public Lucidtech.Las.Core.ClientException
```  

An [InvalidCredentialsException](#a00051) is raised if api key, access key id or secret access key is invalid.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`InvalidCredentialsException`](#a00051_1a666a601ee2b46cd24f54dc062a228d85)`(string s)` | 

## Members

#### `public inline  `[`InvalidCredentialsException`](#a00051_1a666a601ee2b46cd24f54dc062a228d85)`(string s)` 

# class `Lucidtech::Las::Core::LimitExceededException` 

```
class Lucidtech::Las::Core::LimitExceededException
  : public Lucidtech.Las.Core.ClientException
```  

A [LimitExceededException](#a00059) is raised if you have reached the limit of total requests per month associated with your credentials.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`LimitExceededException`](#a00059_1a531eacc7391269340a13d3accebf5d6b)`(string s)` | 

## Members

#### `public inline  `[`LimitExceededException`](#a00059_1a531eacc7391269340a13d3accebf5d6b)`(string s)` 

# class `Lucidtech::Las::Core::Prediction` 

A class that contains all the necessary information regarding a prediction performed by ApiClient.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} string `[`ConsentId`](#a00071_1aff35bf96ba266b12fcd51c39f9980398) | Consent id
`{property} string `[`ModelName`](#a00071_1a3e77070cbaf240ad9e83cbc0d8ca0cae) | Upload url
`{property} string `[`DocumentId`](#a00071_1ad4c7eebd91ad8bf95fb920af3720ab45) | Document id
`{property} List< Dictionary< string, object > > `[`Fields`](#a00071_1ad88d7e901b90fcb00f6788bce2cde1ec) | A list of the responses from a prediction
`public inline  `[`Prediction`](#a00071_1ad2683829a91fd8809e00aeb35c412901)`(string documentId,string consentId,string modelName,List< Dictionary< string, object >> predictionResponse)` | Constructor of s [Prediction](#a00071) object
`public inline string `[`ToJsonString`](#a00071_1a8e22ad69756c2a1d0582d8d6c2dbc9bc)`(Formatting format)` | Convert an object of this class to a string ready to be interpreted as a json object.

## Members

#### `{property} string `[`ConsentId`](#a00071_1aff35bf96ba266b12fcd51c39f9980398) 

Consent id

#### `{property} string `[`ModelName`](#a00071_1a3e77070cbaf240ad9e83cbc0d8ca0cae) 

Upload url

#### `{property} string `[`DocumentId`](#a00071_1ad4c7eebd91ad8bf95fb920af3720ab45) 

Document id

#### `{property} List< Dictionary< string, object > > `[`Fields`](#a00071_1ad88d7e901b90fcb00f6788bce2cde1ec) 

A list of the responses from a prediction

#### `public inline  `[`Prediction`](#a00071_1ad2683829a91fd8809e00aeb35c412901)`(string documentId,string consentId,string modelName,List< Dictionary< string, object >> predictionResponse)` 

Constructor of s [Prediction](#a00071) object

#### Parameters
* `documentId` The id of the document used in the prediction 

* `consentId` The consent id 

* `modelName` The name of the model used 

* `predictionResponse` The response from prediction

#### `public inline string `[`ToJsonString`](#a00071_1a8e22ad69756c2a1d0582d8d6c2dbc9bc)`(Formatting format)` 

Convert an object of this class to a string ready to be interpreted as a json object.

#### Parameters
* `format` The format of the string, either `Formatting.None` or `Formatting.Indented`

#### Returns
A string that is formatted as a json object

# class `Lucidtech::Las::Core::RequestException` 

```
class Lucidtech::Las::Core::RequestException
  : public Lucidtech.Las.Core.ClientException
```  

A [RequestException](#a00063) is raised if something went wrong with the request.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} IRestResponse `[`Response`](#a00063_1a20b3caf6340de32e418ba8c62ab05b82) | 
`public inline  `[`RequestException`](#a00063_1a587aab0b41a24b283809e77493870f2a)`(string s)` | 
`public inline  `[`RequestException`](#a00063_1ac3e3f5ebf0ec4517e27efabdc36c11d6)`(IRestResponse response)` | 

## Members

#### `{property} IRestResponse `[`Response`](#a00063_1a20b3caf6340de32e418ba8c62ab05b82) 

#### `public inline  `[`RequestException`](#a00063_1a587aab0b41a24b283809e77493870f2a)`(string s)` 

#### `public inline  `[`RequestException`](#a00063_1ac3e3f5ebf0ec4517e27efabdc36c11d6)`(IRestResponse response)` 

# class `Lucidtech::Las::Core::RevokeResponse` 

The structured format of the response from a revoke consent request.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} string `[`ConsentId`](#a00075_1a5c9404abd75b168b34bc451e3ee056c2) | The consent Id where documents where deleted.
`{property} List< string > `[`DocumentIds`](#a00075_1aab7c6599db6b09938ad642281f67cebb) | The document Ids of the deleted documents.
`public inline  `[`RevokeResponse`](#a00075_1a87c59407fc6eb36f9b868c412977970a)`(object deleteConsentResponse)` | 
`public inline string `[`ToJsonString`](#a00075_1a8b10fa6a2df43e00ea552a0c9814bb70)`(Formatting format)` | Convert an object of this class to a string ready to be interpreted as a json object.

## Members

#### `{property} string `[`ConsentId`](#a00075_1a5c9404abd75b168b34bc451e3ee056c2) 

The consent Id where documents where deleted.

#### `{property} List< string > `[`DocumentIds`](#a00075_1aab7c6599db6b09938ad642281f67cebb) 

The document Ids of the deleted documents.

#### `public inline  `[`RevokeResponse`](#a00075_1a87c59407fc6eb36f9b868c412977970a)`(object deleteConsentResponse)` 

#### `public inline string `[`ToJsonString`](#a00075_1a8b10fa6a2df43e00ea552a0c9814bb70)`(Formatting format)` 

Convert an object of this class to a string ready to be interpreted as a json object.

#### Parameters
* `format` The format of the string, either `Formatting.None` or `Formatting.Indented`

#### Returns
A string that is formatted as a json object

# class `Lucidtech::Las::Core::TooManyRequestsException` 

```
class Lucidtech::Las::Core::TooManyRequestsException
  : public Lucidtech.Las.Core.ClientException
```  

A [TooManyRequestsException](#a00055) is raised if you have reached the number of requests per second limit associated with your credentials.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`public inline  `[`TooManyRequestsException`](#a00055_1a405f42f24fd1e1ffffb3609b6ea89bd2)`(string s)` | 

## Members

#### `public inline  `[`TooManyRequestsException`](#a00055_1a405f42f24fd1e1ffffb3609b6ea89bd2)`(string s)` 

# namespace `Lucidtech::Las::Utils` 

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`class `[`Lucidtech::Las::Utils::FileType`](#a00083) | Help determine the type of a file, inspired by pythons `imghdr.what()`.
`class `[`Lucidtech::Las::Utils::JsonSerialPublisher`](#a00087) | A Json publishes that allows the user to serialize and deserialize back and forth between serialized json objects and deserialized general objects and specific Dictionaries.

# class `Lucidtech::Las::Utils::FileType` 

Help determine the type of a file, inspired by pythons `imghdr.what()`.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------

## Members

# class `Lucidtech::Las::Utils::JsonSerialPublisher` 

```
class Lucidtech::Las::Utils::JsonSerialPublisher
  : public ISerializer
  : public IDeserializer
```  

A Json publishes that allows the user to serialize and deserialize back and forth between serialized json objects and deserialized general objects and specific Dictionaries.

## Summary

 Members                        | Descriptions                                
--------------------------------|---------------------------------------------
`{property} string `[`ContentType`](#a00087_1a4bccd73b0ef7355d9e4013c4dc69ed0e) | 
`public inline  `[`JsonSerialPublisher`](#a00087_1a4c11e94dba401f14ed1d3315ca17be59)`(Newtonsoft.Json.JsonSerializer serializer)` | 
`public inline string `[`Serialize`](#a00087_1aabb184cf8d6e6511e7b2a5e34fe259af)`(object obj)` | Serialize a general object.
`public inline T `[`Deserialize< T >`](#a00087_1a4d40df27e6e8fe372ef4b3a0f14fe85a)`(IRestResponse response)` | Deserialize the content of an IRestResponse.

## Members

#### `{property} string `[`ContentType`](#a00087_1a4bccd73b0ef7355d9e4013c4dc69ed0e) 

#### `public inline  `[`JsonSerialPublisher`](#a00087_1a4c11e94dba401f14ed1d3315ca17be59)`(Newtonsoft.Json.JsonSerializer serializer)` 

#### `public inline string `[`Serialize`](#a00087_1aabb184cf8d6e6511e7b2a5e34fe259af)`(object obj)` 

Serialize a general object.

#### Parameters
* `obj` A general object to be serialized 

#### Returns
A string ready to be interpreted as a json file

#### `public inline T `[`Deserialize< T >`](#a00087_1a4d40df27e6e8fe372ef4b3a0f14fe85a)`(IRestResponse response)` 

Deserialize the content of an IRestResponse.

#### Parameters
* `response` The response from a request performed by ` RestSharp.RestClient `

#### Parameters
* `T` The type of the output, e.g. Dictionary or a List of some sort 

#### Returns
A deserialized object of type *T*

Generated by [Moxygen](https://sourcey.com/moxygen)