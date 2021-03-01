# las package

## Module contents


### class las.Client(credentials: Optional[las.credentials.Credentials] = None)
Bases: `object`

A low level client to invoke api methods from Lucidtech AI Services.


#### create_asset(content: Union[bytes, bytearray, str, pathlib.Path, io.IOBase], \*\*optional_args)
Creates an asset, calls the POST /assets endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.create_asset(b'<bytes data>')
```


* **Parameters**

    
    * **content** (*Content*) – Content to POST


    * **name** (*Optional**[**str**]*) – Name of the asset


    * **description** (*Optional**[**str**]*) – Description of the asset



* **Returns**

    Asset response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### create_batch(\*\*optional_args)
Creates a batch, calls the POST /batches endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.create_batch(description='<description>')
```


* **Parameters**

    
    * **name** (*Optional**[**str**]*) – Name of the batch


    * **description** (*Optional**[**str**]*) – Description of the batch



* **Returns**

    Batch response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### create_document(content: Union[bytes, bytearray, str, pathlib.Path, io.IOBase], content_type: str, \*, consent_id: Optional[str] = None, batch_id: str = None, ground_truth: Sequence[Dict[str, str]] = None)
Creates a document, calls the POST /documents endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.create_document(b'<bytes data>', 'image/jpeg', consent_id='<consent id>')
```


* **Parameters**

    
    * **content** (*Content*) – Content to POST


    * **content_type** (*str*) – MIME type for the document


    * **consent_id** (*Optional**[**str**]*) – Id of the consent that marks the owner of the document


    * **batch_id** (*Optional**[**str**]*) – Id of the associated batch


    * **ground_truth** (*Optional**[**Sequence**[**Dict**[**str**, **str**]**]**]*) – List of items {label: value} representing the ground truth values for the document



* **Returns**

    Document response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### create_prediction(document_id: str, model_id: str, \*, max_pages: Optional[int] = None, auto_rotate: Optional[bool] = None)
Create a prediction on a document using specified model, calls the POST /predictions endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.create_prediction(document_id='<document id>', model_id='<model id>')
```


* **Parameters**

    
    * **document_id** (*str*) – Id of the document to run inference and create a prediction on


    * **model_id** (*str*) – Id of the model to use for inference


    * **max_pages** (*Optional**[**int**]*) – Maximum number of pages to run predictions on


    * **auto_rotate** (*Optional**[**bool**]*) – Whether or not to let the API try different rotations on the document when running predictions



* **Returns**

    Prediction response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### create_secret(data: dict, \*\*optional_args)
Creates an secret, calls the POST /secrets endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> data = {'username': '<username>', 'password': '<password>'}
>>> client.create_secret(data, description='<description>')
```


* **Parameters**

    
    * **data** (*str*) – Dict containing the data you want to keep secret


    * **name** (*Optional**[**str**]*) – Name of the secret


    * **description** (*Optional**[**str**]*) – Description of the secret



* **Returns**

    Secret response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### create_transition(transition_type: str, \*, in_schema: Optional[dict] = None, out_schema: Optional[dict] = None, parameters: Optional[dict] = None, \*\*optional_args)
Creates a transition, calls the POST /transitions endpoint.

```python
>>> import json
>>> from pathlib import Path
>>> from las.client import Client
>>> client = Client()
>>> in_schema = {'$schema': 'https://json-schema.org/draft-04/schema#', 'title': 'in', 'properties': {...} }
>>> out_schema = {'$schema': 'https://json-schema.org/draft-04/schema#', 'title': 'out', 'properties': {...} }
>>> # A typical docker transition
>>> docker_params = {
>>>     'imageUrl': '<image_url>',
>>>     'credentials': {'username': '<username>', 'password': '<password>'}
>>> }
>>> client.create_transition('docker', in_schema=in_schema, out_schema=out_schema, params=docker_params)
>>> # A manual transition with UI
>>> assets = {'jsRemoteComponent': 'las:asset:<hex-uuid>', '<other asset name>': 'las:asset:<hex-uuid>'}
>>> manual_params = {'assets': assets}
>>> client.create_transition('manual', in_schema=in_schema, out_schema=out_schema, params=manual_params)
```


* **Parameters**

    
    * **transition_type** (*str*) – Type of transition “docker”|”manual”


    * **in_schema** (*Optional**[**dict**]*) – Json-schema that defines the input to the transition


    * **out_schema** (*Optional**[**dict**]*) – Json-schema that defines the output of the transition


    * **name** (*Optional**[**str**]*) – Name of the transition


    * **parameters** (*Optional**[**dict**]*) – Parameters to the corresponding transition type


    * **description** (*Optional**[**str**]*) – Description of the transition



* **Returns**

    Transition response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### create_user(email: str, \*\*optional_args)
Creates a new user, calls the POST /users endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.create_user('<email>', name='John Doe')
```


* **Parameters**

    
    * **email** (*str*) – Email to the new user


    * **name** (*Optional**[**str**]*) – Name of the user


    * **avatar** (*Optional**[**str**]*) – base64 encoded JPEG avatar of the user



* **Returns**

    User response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### create_workflow(specification: dict, \*, error_config: Optional[dict] = None, \*\*optional_args)
Creates a new workflow, calls the POST /workflows endpoint.
Check out Lucidtech’s tutorials for more info on how to create a workflow.

```python
>>> from las.client import Client
>>> from pathlib import Path
>>> client = Client()
>>> specification = {'language': 'ASL', 'version': '1.0.0', 'definition': {...}}
>>> error_config = {'email': '<error-recipient>'}
>>> client.create_workflow(specification, error_config=error_config)
```


* **Parameters**

    
    * **specification** (*dict*) – Specification of the workflow,
    currently supporting ASL: [https://states-language.net/spec.html](https://states-language.net/spec.html)


    * **name** (*Optional**[**str**]*) – Name of the workflow


    * **description** (*Optional**[**str**]*) – Description of the workflow


    * **error_config** (*Optional**[**dict**]*) – Configuration of error handler



* **Returns**

    Workflow response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### delete_documents(\*, consent_id: Optional[Union[str, List[str]]] = None)
Delete documents with the provided consent_id, calls the DELETE /documents endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.delete_documents(consent_id='<consent id>')
```


* **Parameters**

    **consent_id** (*Optional**[**Queryparam**]*) – Ids of the consents that marks the owner of the document



* **Returns**

    Documents response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### delete_transition(transition_id: str)
Delete the transition with the provided transition_id, calls the DELETE /transitions/{transitionId} endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.delete_transition('<transition_id>')
```


* **Parameters**

    **transition_id** (*str*) – Id of the transition



* **Returns**

    Transition response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### delete_user(user_id: str)
Delete the user with the provided user_id, calls the DELETE /users/{userId} endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.delete_user('<user_id>')
```


* **Parameters**

    **user_id** (*str*) – Id of the user



* **Returns**

    User response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### delete_workflow(workflow_id: str)
Delete the workflow with the provided workflow_id, calls the DELETE /workflows/{workflowId} endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.delete_workflow('<workflow_id>')
```


* **Parameters**

    **workflow_id** (*str*) – Id of the workflow



* **Returns**

    Workflow response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### delete_workflow_execution(workflow_id: str, execution_id: str)
Deletes the execution with the provided execution_id from workflow_id,
calls the DELETE /workflows/{workflowId}/executions/{executionId} endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.delete_workflow_execution('<workflow_id>', '<execution_id>')
```


* **Parameters**

    
    * **workflow_id** (*str*) – Id of the workflow


    * **execution_id** (*str*) – Id of the execution



* **Returns**

    WorkflowExecution response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### execute_transition(transition_id: str)
Start executing a manual transition, calls the POST /transitions/{transitionId}/executions endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.execute_transition('<transition_id>')
```


* **Parameters**

    **transition_id** (*str*) – Id of the transition



* **Returns**

    Transition execution response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### execute_workflow(workflow_id: str, content: dict)
Start a workflow execution, calls the POST /workflows/{workflowId}/executions endpoint.

```python
>>> from las.client import Client
>>> from pathlib import Path
>>> client = Client()
>>> content = {...}
>>> client.execute_workflow('<workflow_id>', content)
```


* **Parameters**

    
    * **workflow_id** (*str*) – Id of the workflow


    * **content** (*dict*) – Input to the first step of the workflow



* **Returns**

    Workflow execution response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### get_asset(asset_id: str)
Get asset, calls the GET /assets/{assetId} endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.get_asset(asset_id='<asset id>')
```


* **Parameters**

    **asset_id** (*str*) – Id of the asset



* **Returns**

    Asset response from REST API with content



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### get_document(document_id: str)
Get document, calls the GET /documents/{documentId} endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.get_document('<document id>')
```


* **Parameters**

    **document_id** (*str*) – Id of the document



* **Returns**

    Document response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### get_log(log_id)
get log, calls the GET /logs/{logId} endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.get_log('<log_id>')
```


* **Parameters**

    **log_id** (*str*) – Id of the log



* **Returns**

    Log response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### get_transition(transition_id: str)
Get the transition with the provided transition_id, calls the GET /transitions/{transitionId} endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.get_transition('<transition_id>')
```


* **Parameters**

    **transition_id** (*str*) – Id of the transition



* **Returns**

    Transition response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### get_transition_execution(transition_id: str, execution_id: str)
Get an execution of a transition, calls the GET /transitions/{transitionId}/executions/{executionId} endpoint

```python
>>> from las.client import Client
>>> client = Client()
>>> client.get_transition_execution('<transition_id>', '<execution_id>')
```


* **Parameters**

    
    * **transition_id** (*str*) – Id of the transition


    * **execution_id** (*str*) – Id of the executions



* **Returns**

    Transition execution responses from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### get_user(user_id: str)
Get information about a specific user, calls the GET /users/{user_id} endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.get_user('<user_id>')
```


* **Parameters**

    **user_id** (*str*) – Id of the user



* **Returns**

    User response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### get_workflow(workflow_id: str)
Get the workflow with the provided workflow_id, calls the GET /workflows/{workflowId} endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.get_workflow('<workflow_id>')
```


* **Parameters**

    **workflow_id** (*str*) – Id of the workflow



* **Returns**

    Workflow response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### list_assets(\*, max_results: Optional[int] = None, next_token: Optional[str] = None)
List assets available, calls the GET /assets endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.list_assets()
```


* **Parameters**

    
    * **max_results** (*Optional**[**int**]*) – Maximum number of results to be returned


    * **next_token** (*Optional**[**str**]*) – A unique token for each page, use the returned token to retrieve the next page.



* **Returns**

    Assets response from REST API without the content of each asset



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### list_documents(\*, batch_id: Optional[Union[str, List[str]]] = None, consent_id: Optional[Union[str, List[str]]] = None, max_results: Optional[int] = None, next_token: Optional[str] = None)
List documents available for inference, calls the GET /documents endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.list_documents(batch_id='<batch_id>', consent_id='<consent_id>')
```


* **Parameters**

    
    * **batch_id** (*Optional**[**Queryparam**]*) – Ids of batches that contains the documents of interest


    * **consent_id** (*Optional**[**Queryparam**]*) – Ids of the consents that marks the owner of the document


    * **max_results** (*Optional**[**int**]*) – Maximum number of results to be returned


    * **next_token** (*Optional**[**str**]*) – A unique token for each page, use the returned token to retrieve the next page.



* **Returns**

    Documents response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### list_models(\*, max_results: Optional[int] = None, next_token: Optional[str] = None)
List models available, calls the GET /models endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.list_models()
```


* **Parameters**

    
    * **max_results** (*Optional**[**int**]*) – Maximum number of results to be returned


    * **next_token** (*Optional**[**str**]*) – A unique token for each page, use the returned token to retrieve the next page.



* **Returns**

    Models response from REST API without the content of each model



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### list_predictions(\*, max_results: Optional[int] = None, next_token: Optional[str] = None)
List predictions available, calls the GET /predictions endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.list_predictions()
```


* **Parameters**

    
    * **max_results** (*Optional**[**int**]*) – Maximum number of results to be returned


    * **next_token** (*Optional**[**str**]*) – A unique token for each page, use the returned token to retrieve the next page.



* **Returns**

    Predictions response from REST API without the content of each prediction



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### list_secrets(\*, max_results: Optional[int] = None, next_token: Optional[str] = None)
List secrets available, calls the GET /secrets endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.list_secrets()
```


* **Parameters**

    
    * **max_results** (*Optional**[**int**]*) – Maximum number of results to be returned


    * **next_token** (*Optional**[**str**]*) – A unique token for each page, use the returned token to retrieve the next page.



* **Returns**

    Secrets response from REST API without the username of each secret



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### list_transition_executions(transition_id: str, \*, status: Optional[Union[str, List[str]]] = None, execution_id: Optional[Union[str, List[str]]] = None, max_results: Optional[int] = None, next_token: Optional[str] = None, sort_by: Optional[str] = None, order: Optional[str] = None)
List executions in a transition, calls the GET /transitions/{transitionId}/executions endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.list_transition_executions('<transition_id>', '<status>')
```


* **Parameters**

    
    * **transition_id** (*str*) – Id of the transition


    * **status** (*Optional**[**Queryparam**]*) – Statuses of the executions


    * **order** (*Optional**[**str**]*) – Order of the executions, either ‘ascending’ or ‘descending’


    * **sort_by** (*Optional**[**str**]*) – the sorting variable of the executions, either ‘endTime’, or ‘startTime’


    * **execution_id** (*Optional**[**Queryparam**]*) – Ids of the executions


    * **max_results** (*Optional**[**int**]*) – Maximum number of results to be returned


    * **next_token** (*Optional**[**str**]*) – A unique token for each page, use the returned token to retrieve the next page.



* **Returns**

    Transition executions responses from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### list_transitions(\*, transition_type: Optional[Union[str, List[str]]] = None, max_results: Optional[int] = None, next_token: Optional[str] = None)
List transitions, calls the GET /transitions endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.list_transitions('<transition_type>')
```


* **Parameters**

    
    * **transition_type** (*Optional**[**Queryparam**]*) – Types of transitions


    * **max_results** (*Optional**[**int**]*) – Maximum number of results to be returned


    * **next_token** (*Optional**[**str**]*) – A unique token for each page, use the returned token to retrieve the next page.



* **Returns**

    Transitions response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### list_users(\*, max_results: Optional[int] = None, next_token: Optional[str] = None)
List users, calls the GET /users endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.list_users()
```


* **Parameters**

    
    * **max_results** (*Optional**[**int**]*) – Maximum number of results to be returned


    * **next_token** (*Optional**[**str**]*) – A unique token for each page, use the returned token to retrieve the next page.



* **Returns**

    Users response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### list_workflow_executions(workflow_id: str, \*, status: Optional[Union[str, List[str]]] = None, sort_by: Optional[str] = None, order: Optional[str] = None, max_results: Optional[int] = None, next_token: Optional[str] = None)
List executions in a workflow, calls the GET /workflows/{workflowId}/executions endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.list_workflow_executions('<workflow_id>', '<status>')
```


* **Parameters**

    
    * **workflow_id** (*str*) – Id of the workflow


    * **order** (*Optional**[**str**]*) – Order of the executions, either ‘ascending’ or ‘descending’


    * **sort_by** (*Optional**[**str**]*) – the sorting variable of the executions, either ‘endTime’, or ‘startTime’


    * **status** (*Optional**[**Queryparam**]*) – Statuses of the executions


    * **max_results** (*Optional**[**int**]*) – Maximum number of results to be returned


    * **next_token** (*Optional**[**str**]*) – A unique token for each page, use the returned token to retrieve the next page.



* **Returns**

    Workflow executions responses from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### list_workflows(\*, max_results: Optional[int] = None, next_token: Optional[str] = None)
List workflows, calls the GET /workflows endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.list_workflows()
```


* **Parameters**

    
    * **max_results** (*Optional**[**int**]*) – Maximum number of results to be returned


    * **next_token** (*Optional**[**str**]*) – A unique token for each page, use the returned token to retrieve the next page.



* **Returns**

    Workflows response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### update_asset(asset_id: str, \*\*optional_args)
Updates an asset, calls the PATCH /assets/{assetId} endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.update_asset('<asset id>', content=b'<bytes data>')
```


* **Parameters**

    
    * **asset_id** (*str*) – Id of the asset


    * **content** (*Optional**[**Content**]*) – Content to PATCH


    * **name** (*Optional**[**str**]*) – Name of the asset


    * **description** (*Optional**[**str**]*) – Description of the asset



* **Returns**

    Asset response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### update_document(document_id: str, ground_truth: Sequence[Dict[str, Union[str, None, bool]]])
Update ground truth for a document, calls the PATCH /documents/{documentId} endpoint.
Updating ground truth means adding the ground truth data for the particular document.
This enables the API to learn from past mistakes.

```python
>>> from las.client import Client
>>> client = Client()
>>> ground_truth = [{'label': 'total_amount', 'value': '156.00'}, {'label': 'date', 'value': '2018-10-23'}]
>>> client.update_document(document_id='<document id>', ground_truth=ground_truth)
```


* **Parameters**

    
    * **document_id** (*str*) – Id of the document


    * **ground_truth** (*Sequence**[**Dict**[**str**, **Union**[**Optional**[**str**]**, **bool**]**]**]*) – List of items {label: value} representing the ground truth values for the document



* **Returns**

    Document response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### update_secret(secret_id: str, \*, data: Optional[dict] = None, \*\*optional_args)
Updates an secret, calls the PATCH /secrets/secretId endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> data = {'username': '<username>', 'password': '<password>'}
>>> client.update_secret('<secret id>', data, description='<description>')
```


* **Parameters**

    
    * **secret_id** (*str*) – Id of the secret


    * **data** (*Optional**[**dict**]*) – Dict containing the data you want to keep secret


    * **name** (*Optional**[**str**]*) – Name of the secret


    * **description** (*Optional**[**str**]*) – Description of the secret



* **Returns**

    Secret response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### update_transition(transition_id: str, \*, in_schema: Optional[dict] = None, out_schema: Optional[dict] = None, \*\*optional_args)
Updates a transition, calls the PATCH /transitions/{transitionId} endpoint.

```python
>>> import json
>>> from pathlib import Path
>>> from las.client import Client
>>> client = Client()
>>> client.update_transition('<transition-id>', name='<name>', description='<description>')
```


* **Parameters**

    
    * **transition_id** – Id of the transition


    * **name** (*Optional**[**str**]*) – Name of the transition


    * **description** (*Optional**[**str**]*) – Description of the transition


    * **in_schema** (*Optional**[**dict**]*) – Json-schema that defines the input to the transition


    * **out_schema** (*Optional**[**dict**]*) – Json-schema that defines the output of the transition



* **Returns**

    Transition response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### update_transition_execution(transition_id: str, execution_id: str, status: str, \*, output: Optional[dict] = None, error: Optional[dict] = None)
Ends the processing of the transition execution,
calls the PATCH /transitions/{transition_id}/executions/{execution_id} endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> output = {...}
>>> client.update_transition_execution('<transition_id>', '<execution_id>', 'succeeded', output)
>>> error = {"message": 'The execution could not be processed due to ...'}
>>> client.update_transition_execution('<transition_id>', '<execution_id>', 'failed', error)
```


* **Parameters**

    
    * **transition_id** (*str*) – Id of the transition that performs the execution


    * **execution_id** (*str*) – Id of the execution to update


    * **status** (*str*) – Status of the execution ‘succeeded|failed’


    * **output** (*Optional**[**str**]*) – Output from the execution, required when status is ‘succeded’


    * **error** (*Optional**[**str**]*) – Error from the execution, required when status is ‘failed’, needs to contain ‘message’



* **Returns**

    Transition execution response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### update_user(user_id: str, \*\*optional_args)
Updates a user, calls the PATCH /users/{userId} endpoint.

```python
>>> from las.client import Client
>>> client = Client()
>>> client.update_user('<user id>', name='John Doe')
```


* **Parameters**

    
    * **user_id** (*str*) – Id of the user


    * **name** (*Optional**[**str**]*) – Name of the user


    * **avatar** (*Optional**[**str**]*) – base64 encoded JPEG avatar of the user



* **Returns**

    User response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### update_workflow(workflow_id: str, \*\*optional_args)
Updates a workflow, calls the PATCH /workflows/{workflowId} endpoint.

```python
>>> import json
>>> from pathlib import Path
>>> from las.client import Client
>>> client = Client()
>>> client.update_workflow('<workflow-id>', name='<name>', description='<description>')
```


* **Parameters**

    
    * **workflow_id** – Id of the workflow


    * **name** (*Optional**[**str**]*) – Name of the workflow


    * **description** (*Optional**[**str**]*) – Description of the workflow



* **Returns**

    Workflow response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



### class las.Credentials(client_id: str, client_secret: str, api_key: str, auth_endpoint: str, api_endpoint: str)
Bases: `object`

Used to fetch and store credentials and to generate/cache an access token.


* **Parameters**

    
    * **client_id** – The client id


    * **client_secret** – The client secret


    * **api_key** – The api key


    * **auth_endpoint** – The auth endpoint


    * **api_endpoint** – The api endpoint



#### property access_token()
