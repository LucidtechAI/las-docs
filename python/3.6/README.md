# las package

## Module contents


### class las.ApiClient(credentials=None)
Bases: `las.client.Client`

A high level client to invoke api methods from Lucidtech AI Services.


#### predict(document_path: str, model_name: str, consent_id: str = 'DEFAULT', extras: Dict[str, Any] = None)
Run inference and create prediction on document.
This method takes care of creating and uploading a document specified by document_path.
as well as running inference using model specified by model_name to create prediction on the document.

```python
>>> from las import ApiClient
>>> api_client = ApiClient(endpoint='<api endpoint>')
>>> api_client.predict(document_path='document.jpeg', model_name='invoice')
```


* **Parameters**

    
    * **document_path** (*str*) – Path to document to run inference on


    * **model_name** (*str*) – The name of the model to use for inference


    * **consent_id** (*str*) – An identifier to mark the owner of the document handle


    * **extras** (*Dict**[**str**, **Any**]*) – Extra information to add to json body



* **Returns**

    Prediction on document



* **Return type**

    Prediction



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### revoke_consent(consent_id: str)
Revoke consent and deleting all documents associated with consent_id.
Consent id is a parameter that is provided by the user upon making a prediction on a document.
See `las.ApiClient.predict()`.

```python
>>> from las import ApiClient
>>> api_client = ApiClient(endpoint='<api endpoint>')
>>> api_client.revoke_consent('<consent id>')
```


* **Parameters**

    **consent_id** (*str*) – Delete documents associated with this consent_id



* **Returns**

    Revoke consent response



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### send_feedback(document_id: str, feedback: List[las.prediction.Field])
Send feedback to the model.
This method takes care of sending feedback related to document specified by document_id.
Feedback consists of ground truth values for the document specified as a list of `Field` instances.

```python
>>> from las import ApiClient
>>> api_client = ApiClient(endpoint='<api endpoint>')
>>> feedback = [Field(label='total_amount', value='120.00'), Field(label='purchase_date', value='2019-03-10')]
>>> api_client.send_feedback('<document id>', feedback)
```


* **Parameters**

    
    * **document_id** (*str*) – The document id of the document that will receive the feedback


    * **feedback** (*List**[**Field**]*) – A list of `Field` representing the ground truth values for the document



* **Returns**

    Feedback response



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



### class las.Client(credentials=None)
Bases: `object`

A low level client to invoke api methods from Lucidtech AI Services.


#### delete_consent_id(consent_id: str)
Delete documents with this consent_id, calls the DELETE /consents/{consentId} endpoint.

```python
>>> from las import Client
>>> client = Client(endpoint='<api endpoint>')
>>> client.delete_consent_id('<consent id>')
```


* **Parameters**

    **consent_id** (*str*) – Delete documents with this consent_id



* **Returns**

    Delete consent id response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### get_document_id(document_id: str)
Get document from the REST API, calls the GET /documents/{documentId} endpoint.

```python
>>> from las import Client
>>> client = Client(endpoint='<api endpoint>')
>>> client.get_document_id(document_id='<document id>')
```


* **Parameters**

    **document_id** (*str*) – The document id to run inference and create a prediction on



* **Returns**

    Document response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### get_documents(batch_id: Optional[str] = None, consent_id: Optional[str] = None)
Get document from the REST API, calls the GET /documents endpoint.

```python
>>> from las import Client
>>> client = Client(endpoint='<api endpoint>')
>>> client.get_documents(batch_id='<batch id>')
```


* **Parameters**

    
    * **batch_id** (*str*) – The batch id that contains the documents of interest


    * **consent_id** (*str*) – An identifier to mark the owner of the document handle



* **Returns**

    Documents from REST API contained in batch <batch id>



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### get_user_id(user_id: str)
Gets consent hash and user_id for a given user_id, calls the GET /users/{user_id} endpoint.

```python
>>> from las import Client
>>> client = Client(endpoint='<api endpoint>')
>>> client.post_batches(description='Data from clients obtained during fall 2019')
```


* **Parameters**

    **user_id** (*str*) – The user_id to get consent hash for



* **Returns**

    batch handle id and pre-signed upload url



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### patch_user_id(user_id: str, consent_hash: str)
Modifies consent hash for a user, calls the PATCH /users/{user_id} endpoint.

```python
>>> from las import Client
>>> client = Client(endpoint='<api endpoint>')
>>> client.post_batches(description='Data from clients obtained during fall 2019')
```


* **Parameters**

    
    * **user_id** (*str*) – The user_id to modify consent hash for


    * **consent_hash** (*str*) – The consent_hash to set



* **Returns**

    batch handle id and pre-signed upload url



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### post_batches(description: str)
Creates a batch handle, calls the POST /batches endpoint.

```python
>>> from las import Client
>>> client = Client(endpoint='<api endpoint>')
>>> client.post_batches(description='Data from clients obtained during fall 2019')
```


* **Parameters**

    **description** (*str*) – A short description of the batch you intend to create



* **Returns**

    batch handle id and pre-signed upload url



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### post_document_id(document_id: str, feedback: Sequence[Dict[str, str]])
Post feedback to the REST API, calls the POST /documents/{documentId} endpoint.
Posting feedback means posting the ground truth data for the particular document.
This enables the API to learn from past mistakes.

```python
>>> from las import Client
>>> client = Client(endpoint='<api endpoint>')
>>> feedback = [{'label': 'total_amount', 'value': '156.00'}, {'label': 'invoice_date', 'value': '2018-10-23'}]
>>> client.post_document_id(document_id='<document id>', feedback=feedback)
```


* **Parameters**

    
    * **document_id** (*str*) – The document id to run inference and create a prediction on


    * **feedback** (*Sequence**[**Dict**[**str**, **str**]**]*) – A list of feedback items {label: value} representing the ground truth values for the document



* **Returns**

    Feedback response from REST API



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### post_documents(content: bytes, content_type: str, consent_id: str, batch_id: str = None, feedback: Sequence[Dict[str, str]] = None)
Creates a document handle, calls the POST /documents endpoint.

```python
>>> from las import Client
>>> client = Client(endpoint='<api endpoint>')
>>> client.post_documents('image/jpeg', consent_id='foobar')
```


* **Parameters**

    
    * **content** (*bytes*) – The contents to POST


    * **content_type** (*str*) – A mime type for the document handle


    * **consent_id** (*str*) – An identifier to mark the owner of the document handle


    * **batch_id** (*str*) – The batch to put the document in


    * **feedback** (*Sequence**[**Dict**[**str**, **str**]**]*) – A list of feedback items {label: value} representing the ground truth values for the document



* **Returns**

    Document handle id



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



#### post_predictions(document_id: str, model_name: str, max_pages: Optional[int] = None, auto_rotate: Optional[bool] = None, extras: Dict[str, Any] = None)
Run inference and create a prediction, calls the POST /predictions endpoint.

```python
>>> from las import Client
>>> client = Client(endpoint='<api endpoint>')
>>> client.post_predictions(document_id='<document id>', model_name='invoice')
```


* **Parameters**

    
    * **document_id** (*str*) – The document id to run inference and create a prediction on


    * **model_name** (*bool*) – The name of the model to use for inference


    * **max_pages** – Maximum number of pages to run predictions on


    * **auto_rotate** – Whether or not to let the API try different rotations on the document when running predictions


    * **extras** (*Dict**[**str**, **Any**]*) – Extra information to add to json body



* **Returns**

    Prediction on document



* **Return type**

    dict



* **Raises**

    `InvalidCredentialsException`, `TooManyRequestsException`, `LimitExceededException`, `requests.exception.RequestException`



### class las.Credentials(credentials_path=None)
Bases: `object`

Used to fetch and store credentials. One of 3 conditions must be met to successfully create credentials.


1. credentials_path is provided


2. credentials is located in default path ~/.lucidtech/credentials.cfg


3. the following environment variables are present:

    
        * LAS_CLIENT_ID


        * LAS_CLIENT_SECRET


        * LAS_API_KEY


        * LAS_AUTH_ENDPOINT


        * LAS_API_ENDPOINT


* **Parameters**

    
    * **credentials_path** (*str*) – Path to credentials file


    * **client_id** (*str*) – Client Id


    * **client_secret** (*str*) – Client Secret


    * **api_key** (*str*) – API key


    * **auth_endpoint** (*str*) – Authorization endpoint



#### property access_token()

### class las.Prediction(document_id: str, consent_id: str, model_name: str, prediction_response: dict)
Bases: `dict`, `typing.Generic`


#### property consent_id()

#### property document_id()

#### property fields()

#### property model_name()

### class las.Field(label: str, value: str, confidence=None)
Bases: `dict`, `typing.Generic`


#### property confidence()

#### property label()

#### property value()
