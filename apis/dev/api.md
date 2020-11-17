---
title: nikita-dev v2020-11-16T16:35:43Z
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="nikita-dev">nikita-dev v2020-11-16T16:35:43Z</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}">https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}</a>

    * **basePath** -  Default: /dev

# Authentication

* API Key (nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer)
    - Parameter Name: **Authorization**, in: header. 

* API Key (api_key)
    - Parameter Name: **x-api-key**, in: header. 

<h1 id="nikita-dev-default">Default</h1>

## get__transitions

> Code samples

```shell
# You can also use wget
curl -X GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /transitions`

*Get transitions*

<h3 id="get__transitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|transitionType|query|string|false|none|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": "string",
  "transitions": [
    {
      "outputJsonSchema": {},
      "assets": {
        "jsRemoteComponent": "string"
      },
      "transitionId": "string",
      "transitionType": "string",
      "inputJsonSchema": {}
    }
  ],
  "transitionType": "docker"
}
```

<h3 id="get__transitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Transitions](#schematransitions)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/transitions.get ), api_key
</aside>

## post__transitions

> Code samples

```shell
# You can also use wget
curl -X POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: API_KEY'

```

```http
POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json
Content-Type: string

```

```javascript
const inputBody = '{
  "outputJsonSchema": {},
  "params": {
    "environment": {},
    "memory": 512,
    "credentials": {
      "password": "string",
      "username": "string"
    },
    "imageUrl": "string",
    "cpu": 256
  },
  "transitionType": "docker",
  "inputJsonSchema": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'API_KEY'
}

r = requests.post('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transitions`

*Post transitions*

> Body parameter

```json
{
  "outputJsonSchema": {},
  "params": {
    "environment": {},
    "memory": 512,
    "credentials": {
      "password": "string",
      "username": "string"
    },
    "imageUrl": "string",
    "cpu": 256
  },
  "transitionType": "docker",
  "inputJsonSchema": {}
}
```

<h3 id="post__transitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostTransitions](#schemaposttransitions)|true|none|

> Example responses

> 200 Response

```json
{
  "outputJsonSchema": {},
  "assets": {
    "jsRemoteComponent": "string"
  },
  "transitionId": "string",
  "transitionType": "string",
  "inputJsonSchema": {}
}
```

<h3 id="post__transitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Transition](#schematransition)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/transitions.post ), api_key
</aside>

## options__transitions

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /transitions`

> Body parameter

```json
{}
```

<h3 id="options__transitions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__transitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get__workflows_{workflowId}_executions

> Code samples

```shell
# You can also use wget
curl -X GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /workflows/{workflowId}/executions`

*Get workflows executions*

<h3 id="get__workflows_{workflowid}_executions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|status|query|string|false|none|
|workflowId|path|string|true|none|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "executions": [
    {
      "executionId": "string",
      "workflowId": "string",
      "status": "string"
    }
  ],
  "nextToken": "string",
  "workflowId": "string",
  "status": "string"
}
```

<h3 id="get__workflows_{workflowid}_executions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[WorkflowExecutions](#schemaworkflowexecutions)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/workflows.workflowid.executions.get ), api_key
</aside>

## post__workflows_{workflowId}_executions

> Code samples

```shell
# You can also use wget
curl -X POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: API_KEY'

```

```http
POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json
Content-Type: string

```

```javascript
const inputBody = '{
  "input": {}
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'API_KEY'
}

r = requests.post('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /workflows/{workflowId}/executions`

*Post workflow executions*

> Body parameter

```json
{
  "input": {}
}
```

<h3 id="post__workflows_{workflowid}_executions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|workflowId|path|string|true|none|
|body|body|[PostWorkflowExecutions](#schemapostworkflowexecutions)|true|none|

> Example responses

> 200 Response

```json
{
  "executionId": "string",
  "workflowId": "string",
  "status": "string"
}
```

<h3 id="post__workflows_{workflowid}_executions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[WorkflowExecution](#schemaworkflowexecution)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/workflows.workflowid.executions.post ), api_key
</aside>

## options__workflows_{workflowId}_executions

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}/executions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /workflows/{workflowId}/executions`

> Body parameter

```json
{}
```

<h3 id="options__workflows_{workflowid}_executions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__workflows_{workflowid}_executions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get__assets_{assetId}

> Code samples

```shell
# You can also use wget
curl -X GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId} \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /assets/{assetId}`

*Get asset by id*

<h3 id="get__assets_{assetid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|assetId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "assetId": "string",
  "content": "string"
}
```

<h3 id="get__assets_{assetid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Asset](#schemaasset)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/assets.assetid.get ), api_key
</aside>

## options__assets_{assetId}

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /assets/{assetId}`

> Body parameter

```json
{}
```

<h3 id="options__assets_{assetid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__assets_{assetid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch__assets_{assetId}

> Code samples

```shell
# You can also use wget
curl -X PATCH https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: API_KEY'

```

```http
PATCH https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json
Content-Type: string

```

```javascript
const inputBody = '{
  "content": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.patch 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'API_KEY'
}

r = requests.patch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PATCH','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets/{assetId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /assets/{assetId}`

> Body parameter

```json
{
  "content": "string"
}
```

<h3 id="patch__assets_{assetid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|assetId|path|string|true|none|
|body|body|[PatchAssetId](#schemapatchassetid)|true|none|

> Example responses

> 200 Response

```json
{
  "assetId": "string",
  "content": "string"
}
```

<h3 id="patch__assets_{assetid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Asset](#schemaasset)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/assets.assetid.patch ), api_key
</aside>

## get__users

> Code samples

```shell
# You can also use wget
curl -X GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users`

*Get users*

<h3 id="get__users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "nextToken": "string",
  "users": [
    {
      "userId": "string",
      "email": "string"
    }
  ]
}
```

<h3 id="get__users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Users](#schemausers)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/users.get ), api_key
</aside>

## post__users

> Code samples

```shell
# You can also use wget
curl -X POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: API_KEY'

```

```http
POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json
Content-Type: string

```

```javascript
const inputBody = '{
  "email": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'API_KEY'
}

r = requests.post('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /users`

*Create a user*

> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="post__users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostUsers](#schemapostusers)|true|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "email": "string"
}
```

<h3 id="post__users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[User](#schemauser)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/users.post ), api_key
</aside>

## options__users

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /users`

> Body parameter

```json
{}
```

<h3 id="options__users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get__documents_{documentId}

> Code samples

```shell
# You can also use wget
curl -X GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId} \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /documents/{documentId}`

*Get document by id*

<h3 id="get__documents_{documentid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|documentId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "feedback": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "consentId": "string",
  "inferenceTime": 0,
  "documentId": "string",
  "batchId": "string",
  "contentType": "application/pdf",
  "updated": 1,
  "content": "string",
  "predictions": [
    {
      "confidence": 0,
      "label": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="get__documents_{documentid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Document](#schemadocument)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/documents.documentid.get ), api_key
</aside>

## options__documents_{documentId}

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /documents/{documentId}`

> Body parameter

```json
{}
```

<h3 id="options__documents_{documentid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__documents_{documentid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch__documents_{documentId}

> Code samples

```shell
# You can also use wget
curl -X PATCH https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: API_KEY'

```

```http
PATCH https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json
Content-Type: string

```

```javascript
const inputBody = '{
  "feedback": [
    {
      "label": "string",
      "value": "string"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.patch 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'API_KEY'
}

r = requests.patch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PATCH','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents/{documentId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /documents/{documentId}`

*Update attributes*

> Body parameter

```json
{
  "feedback": [
    {
      "label": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="patch__documents_{documentid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|documentId|path|string|true|none|
|body|body|[PatchDocumentId](#schemapatchdocumentid)|true|none|

> Example responses

> 200 Response

```json
{
  "feedback": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "consentId": "string",
  "inferenceTime": 0,
  "documentId": "string",
  "batchId": "string",
  "contentType": "application/pdf",
  "updated": 1,
  "content": "string",
  "predictions": [
    {
      "confidence": 0,
      "label": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="patch__documents_{documentid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Document](#schemadocument)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/documents.documentid.patch ), api_key
</aside>

## get__assets

> Code samples

```shell
# You can also use wget
curl -X GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /assets`

*Get all assets*

<h3 id="get__assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "assetId": "string",
      "content": "string"
    }
  ],
  "nextToken": "string"
}
```

<h3 id="get__assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Assets](#schemaassets)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/assets.get ), api_key
</aside>

## post__assets

> Code samples

```shell
# You can also use wget
curl -X POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: API_KEY'

```

```http
POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json
Content-Type: string

```

```javascript
const inputBody = '{
  "content": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'API_KEY'
}

r = requests.post('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /assets`

*Post asset*

> Body parameter

```json
{
  "content": "string"
}
```

<h3 id="post__assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostAssets](#schemapostassets)|true|none|

> Example responses

> 200 Response

```json
{
  "assetId": "string",
  "content": "string"
}
```

<h3 id="post__assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Asset](#schemaasset)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/assets.post ), api_key
</aside>

## options__assets

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/assets", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /assets`

> Body parameter

```json
{}
```

<h3 id="options__assets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__assets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## options__transitions_{transitionId}_executions_{executionId}

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId}',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /transitions/{transitionId}/executions/{executionId}`

> Body parameter

```json
{}
```

<h3 id="options__transitions_{transitionid}_executions_{executionid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__transitions_{transitionid}_executions_{executionid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## patch__transitions_{transitionId}_executions_{executionId}

> Code samples

```shell
# You can also use wget
curl -X PATCH https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: API_KEY'

```

```http
PATCH https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json
Content-Type: string

```

```javascript
const inputBody = '{
  "status": "succeeded"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.patch 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'API_KEY'
}

r = requests.patch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PATCH','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions/{executionId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /transitions/{transitionId}/executions/{executionId}`

*Patch execution id*

> Body parameter

```json
{
  "status": "succeeded"
}
```

<h3 id="patch__transitions_{transitionid}_executions_{executionid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|transitionId|path|string|true|none|
|executionId|path|string|true|none|
|body|body|[PatchTransistionExecutionId](#schemapatchtransistionexecutionid)|true|none|

> Example responses

> 200 Response

```json
{
  "executionId": "string",
  "input": {},
  "transitionId": "string",
  "status": "string"
}
```

<h3 id="patch__transitions_{transitionid}_executions_{executionid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[TransitionExecution](#schematransitionexecution)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/transitions.transitionid.executions.executionid.patch ), api_key
</aside>

## post__batches

> Code samples

```shell
# You can also use wget
curl -X POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: API_KEY'

```

```http
POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json
Content-Type: string

```

```javascript
const inputBody = '{
  "description": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'API_KEY'
}

r = requests.post('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /batches`

*Create a batch*

> Body parameter

```json
{
  "description": "string"
}
```

<h3 id="post__batches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostBatches](#schemapostbatches)|true|none|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "batchId": "string"
}
```

<h3 id="post__batches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Batch](#schemabatch)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/batches.post ), api_key
</aside>

## options__batches

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/batches", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /batches`

> Body parameter

```json
{}
```

<h3 id="options__batches-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__batches-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## options__transitions_{transitionId}

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /transitions/{transitionId}`

> Body parameter

```json
{}
```

<h3 id="options__transitions_{transitionid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__transitions_{transitionid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get__documents

> Code samples

```shell
# You can also use wget
curl -X GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /documents`

*Get all documents*

<h3 id="get__documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|batchId|query|string|false|none|
|consentId|query|string|false|none|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "consentId": "string",
  "documents": [
    {
      "feedback": [
        {
          "label": "string",
          "value": "string"
        }
      ],
      "consentId": "string",
      "inferenceTime": 0,
      "documentId": "string",
      "batchId": "string",
      "contentType": "application/pdf",
      "updated": 1,
      "content": "string",
      "predictions": [
        {
          "confidence": 0,
          "label": "string",
          "value": "string"
        }
      ]
    }
  ],
  "nextToken": "string",
  "batchId": "string"
}
```

<h3 id="get__documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Documents](#schemadocuments)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/documents.get ), api_key
</aside>

## post__documents

> Code samples

```shell
# You can also use wget
curl -X POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: API_KEY'

```

```http
POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json
Content-Type: string

```

```javascript
const inputBody = '{
  "feedback": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "consentId": "string",
  "batchId": "string",
  "contentType": "application/pdf",
  "content": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'API_KEY'
}

r = requests.post('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /documents`

*Upload a document*

> Body parameter

```json
{
  "feedback": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "consentId": "string",
  "batchId": "string",
  "contentType": "application/pdf",
  "content": "string"
}
```

<h3 id="post__documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostDocuments](#schemapostdocuments)|true|none|

> Example responses

> 200 Response

```json
{
  "feedback": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "consentId": "string",
  "inferenceTime": 0,
  "documentId": "string",
  "batchId": "string",
  "contentType": "application/pdf",
  "updated": 1,
  "content": "string",
  "predictions": [
    {
      "confidence": 0,
      "label": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="post__documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Document](#schemadocument)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/documents.post ), api_key
</aside>

## delete__documents

> Code samples

```shell
# You can also use wget
curl -X DELETE https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
DELETE https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.delete 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.delete('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /documents`

*Delete document*

<h3 id="delete__documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|consentId|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "consentId": "string",
  "documents": [
    {
      "feedback": [
        {
          "label": "string",
          "value": "string"
        }
      ],
      "consentId": "string",
      "inferenceTime": 0,
      "documentId": "string",
      "batchId": "string",
      "contentType": "application/pdf",
      "updated": 1,
      "content": "string",
      "predictions": [
        {
          "confidence": 0,
          "label": "string",
          "value": "string"
        }
      ]
    }
  ],
  "nextToken": "string",
  "batchId": "string"
}
```

<h3 id="delete__documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Documents](#schemadocuments)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/documents.delete ), api_key
</aside>

## options__documents

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/documents", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /documents`

> Body parameter

```json
{}
```

<h3 id="options__documents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## post__predictions

> Code samples

```shell
# You can also use wget
curl -X POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: API_KEY'

```

```http
POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json
Content-Type: string

```

```javascript
const inputBody = '{
  "modelId": "string",
  "maxPages": 1,
  "documentId": "string",
  "autoRotate": true
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'API_KEY'
}

r = requests.post('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /predictions`

*Create a prediction*

> Body parameter

```json
{
  "modelId": "string",
  "maxPages": 1,
  "documentId": "string",
  "autoRotate": true
}
```

<h3 id="post__predictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostPredictions](#schemapostpredictions)|true|none|

> Example responses

> 200 Response

```json
{
  "documentId": "string",
  "predictions": [
    {
      "confidence": 0,
      "label": "string",
      "value": "string"
    }
  ]
}
```

<h3 id="post__predictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Prediction](#schemaprediction)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/predictions.post ), api_key
</aside>

## options__predictions

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/predictions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /predictions`

> Body parameter

```json
{}
```

<h3 id="options__predictions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__predictions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get__users_{userId}

> Code samples

```shell
# You can also use wget
curl -X GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId} \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /users/{userId}`

*Get user by id*

<h3 id="get__users_{userid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "email": "string"
}
```

<h3 id="get__users_{userid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[User](#schemauser)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/users.userid.get ), api_key
</aside>

## delete__users_{userId}

> Code samples

```shell
# You can also use wget
curl -X DELETE https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId} \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
DELETE https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.delete 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.delete('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /users/{userId}`

*Delete user*

<h3 id="delete__users_{userid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "userId": "string",
  "email": "string"
}
```

<h3 id="delete__users_{userid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[User](#schemauser)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/users.userid.delete ), api_key
</aside>

## options__users_{userId}

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/users/{userId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /users/{userId}`

> Body parameter

```json
{}
```

<h3 id="options__users_{userid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__users_{userid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## post__transitions_{transitionId}_executions

> Code samples

```shell
# You can also use wget
curl -X POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: API_KEY'

```

```http
POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json
Content-Type: string

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'API_KEY'
}

r = requests.post('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /transitions/{transitionId}/executions`

*Post transition executions*

> Body parameter

```json
{}
```

<h3 id="post__transitions_{transitionid}_executions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|transitionId|path|string|true|none|
|body|body|[PostTransitionExecution](#schemaposttransitionexecution)|true|none|

> Example responses

> 200 Response

```json
{
  "executionId": "string",
  "input": {},
  "transitionId": "string",
  "status": "string"
}
```

<h3 id="post__transitions_{transitionid}_executions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[TransitionExecution](#schematransitionexecution)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/transitions.transitionid.executions.post ), api_key
</aside>

## options__transitions_{transitionId}_executions

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/transitions/{transitionId}/executions", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /transitions/{transitionId}/executions`

> Body parameter

```json
{}
```

<h3 id="options__transitions_{transitionid}_executions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__transitions_{transitionid}_executions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## delete__workflows_{workflowId}

> Code samples

```shell
# You can also use wget
curl -X DELETE https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId} \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
DELETE https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.delete 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.delete('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /workflows/{workflowId}`

*Delete workflow*

<h3 id="delete__workflows_{workflowid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|workflowId|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="delete__workflows_{workflowid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

<h3 id="delete__workflows_{workflowid}-responseschema">Response Schema</h3>

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/workflows.workflowid.delete ), api_key
</aside>

## options__workflows_{workflowId}

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId} HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows/{workflowId}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /workflows/{workflowId}`

> Body parameter

```json
{}
```

<h3 id="options__workflows_{workflowid}-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__workflows_{workflowid}-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## get__workflows

> Code samples

```shell
# You can also use wget
curl -X GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows \
  -H 'Accept: application/json' \
  -H 'Authorization: API_KEY'

```

```http
GET https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'API_KEY'
}

result = RestClient.get 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'API_KEY'
}

r = requests.get('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /workflows`

*Get workflows*

<h3 id="get__workflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextToken|query|string|false|none|
|maxResults|query|string|false|none|

> Example responses

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="get__workflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

<h3 id="get__workflows-responseschema">Response Schema</h3>

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/workflows.get ), api_key
</aside>

## post__workflows

> Code samples

```shell
# You can also use wget
curl -X POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Content-Type: string' \
  -H 'Authorization: API_KEY'

```

```http
POST https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json
Content-Type: string

```

```javascript
const inputBody = '{
  "name": "string",
  "description": "string",
  "specification": {
    "language": "ASL",
    "definition": {},
    "version": "1.0.0"
  },
  "errorConfig": {
    "email": "string"
  }
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Content-Type':'string',
  'Authorization':'API_KEY'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Content-Type' => 'string',
  'Authorization' => 'API_KEY'
}

result = RestClient.post 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Content-Type': 'string',
  'Authorization': 'API_KEY'
}

r = requests.post('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Content-Type' => 'string',
    'Authorization' => 'API_KEY',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Content-Type": []string{"string"},
        "Authorization": []string{"API_KEY"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /workflows`

*Post workflows*

> Body parameter

```json
{
  "name": "string",
  "description": "string",
  "specification": {
    "language": "ASL",
    "definition": {},
    "version": "1.0.0"
  },
  "errorConfig": {
    "email": "string"
  }
}
```

<h3 id="post__workflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|Content-Type|header|string|true|none|
|body|body|[PostWorkflows](#schemapostworkflows)|true|none|

> Example responses

> 400 Response

```json
{
  "message": "string"
}
```

<h3 id="post__workflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|400 response|[Error](#schemaerror)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|404 response|[Error](#schemaerror)|
|415|[Unsupported Media Type](https://tools.ietf.org/html/rfc7231#section-6.5.13)|415 response|[Error](#schemaerror)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|500 response|[Error](#schemaerror)|

<h3 id="post__workflows-responseschema">Response Schema</h3>

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|400|Access-Control-Allow-Origin|string||none|
|404|Access-Control-Allow-Origin|string||none|
|415|Access-Control-Allow-Origin|string||none|
|500|Access-Control-Allow-Origin|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
nikita-dev-ApiStack-1WOWO6HUMS8BI-Authorizer ( Scopes: nikita-dev.lucidtech.io/workflows.post ), api_key
</aside>

## options__workflows

> Code samples

```shell
# You can also use wget
curl -X OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
OPTIONS https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows HTTP/1.1
Host: lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows',
{
  method: 'OPTIONS',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.options 'https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.options('https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('OPTIONS','https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("OPTIONS");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("OPTIONS", "https://lzl6bzrxlk.execute-api.eu-west-1.amazonaws.com/{basePath}/workflows", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`OPTIONS /workflows`

> Body parameter

```json
{}
```

<h3 id="options__workflows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Empty](#schemaempty)|true|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="options__workflows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|200 response|[Empty](#schemaempty)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Access-Control-Allow-Origin|string||none|
|200|Access-Control-Allow-Methods|string||none|
|200|Access-Control-Allow-Headers|string||none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_PostBatches">PostBatches</h2>
<!-- backwards compatibility -->
<a id="schemapostbatches"></a>
<a id="schema_PostBatches"></a>
<a id="tocSpostbatches"></a>
<a id="tocspostbatches"></a>

```json
{
  "description": "string"
}

```

POST /batches

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|

<h2 id="tocS_WorkflowExecutions">WorkflowExecutions</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecutions"></a>
<a id="schema_WorkflowExecutions"></a>
<a id="tocSworkflowexecutions"></a>
<a id="tocsworkflowexecutions"></a>

```json
{
  "executions": [
    {
      "executionId": "string",
      "workflowId": "string",
      "status": "string"
    }
  ],
  "nextToken": "string",
  "workflowId": "string",
  "status": "string"
}

```

workflow-executions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executions|[object]|true|none|none|
|» executionId|string|true|none|none|
|» workflowId|string|true|none|none|
|» status|string|true|none|none|
|nextToken|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|workflowId|string|true|none|none|
|status|string|false|none|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "userId": "string",
  "email": "string"
}

```

user

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|true|none|none|
|email|string|true|none|none|

<h2 id="tocS_PostWorkflowExecutions">PostWorkflowExecutions</h2>
<!-- backwards compatibility -->
<a id="schemapostworkflowexecutions"></a>
<a id="schema_PostWorkflowExecutions"></a>
<a id="tocSpostworkflowexecutions"></a>
<a id="tocspostworkflowexecutions"></a>

```json
{
  "input": {}
}

```

POST /workflows/{workflowId}/executions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|input|object|true|none|none|

<h2 id="tocS_Transitions">Transitions</h2>
<!-- backwards compatibility -->
<a id="schematransitions"></a>
<a id="schema_Transitions"></a>
<a id="tocStransitions"></a>
<a id="tocstransitions"></a>

```json
{
  "nextToken": "string",
  "transitions": [
    {
      "outputJsonSchema": {},
      "assets": {
        "jsRemoteComponent": "string"
      },
      "transitionId": "string",
      "transitionType": "string",
      "inputJsonSchema": {}
    }
  ],
  "transitionType": "docker"
}

```

transitions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transitions|[object]|true|none|none|
|» outputJsonSchema|object|false|none|none|
|» assets|object|false|none|none|
|»» jsRemoteComponent|string|false|none|none|
|» transitionId|any|true|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|string|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» transitionType|string|true|none|none|
|» inputJsonSchema|object|false|none|none|
|transitionType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|transitionType|docker|
|transitionType|manual|

<h2 id="tocS_Users">Users</h2>
<!-- backwards compatibility -->
<a id="schemausers"></a>
<a id="schema_Users"></a>
<a id="tocSusers"></a>
<a id="tocsusers"></a>

```json
{
  "nextToken": "string",
  "users": [
    {
      "userId": "string",
      "email": "string"
    }
  ]
}

```

users

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|users|[object]|true|none|none|
|» userId|string|true|none|none|
|» email|string|true|none|none|

<h2 id="tocS_Document">Document</h2>
<!-- backwards compatibility -->
<a id="schemadocument"></a>
<a id="schema_Document"></a>
<a id="tocSdocument"></a>
<a id="tocsdocument"></a>

```json
{
  "feedback": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "consentId": "string",
  "inferenceTime": 0,
  "documentId": "string",
  "batchId": "string",
  "contentType": "application/pdf",
  "updated": 1,
  "content": "string",
  "predictions": [
    {
      "confidence": 0,
      "label": "string",
      "value": "string"
    }
  ]
}

```

document

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedback|[object]|false|none|none|
|» label|string|true|none|none|
|» value|any|true|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|string|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|boolean|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentId|string|false|none|none|
|inferenceTime|number|false|none|none|
|documentId|string|true|none|none|
|batchId|string|false|none|none|
|contentType|string|true|none|none|
|updated|integer|false|none|none|
|content|string|false|none|none|
|predictions|[object]|false|none|none|
|» confidence|number|true|none|none|
|» label|string|true|none|none|
|» value|any|true|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|contentType|application/pdf|
|contentType|image/jpeg|

<h2 id="tocS_PatchDocumentId">PatchDocumentId</h2>
<!-- backwards compatibility -->
<a id="schemapatchdocumentid"></a>
<a id="schema_PatchDocumentId"></a>
<a id="tocSpatchdocumentid"></a>
<a id="tocspatchdocumentid"></a>

```json
{
  "feedback": [
    {
      "label": "string",
      "value": "string"
    }
  ]
}

```

PATCH /documents/{documentId}

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedback|[object]|true|none|none|
|» label|string|true|none|none|
|» value|any|true|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|string|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|boolean|false|none|none|

<h2 id="tocS_PostPredictions">PostPredictions</h2>
<!-- backwards compatibility -->
<a id="schemapostpredictions"></a>
<a id="schema_PostPredictions"></a>
<a id="tocSpostpredictions"></a>
<a id="tocspostpredictions"></a>

```json
{
  "modelId": "string",
  "maxPages": 1,
  "documentId": "string",
  "autoRotate": true
}

```

POST /predictions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|modelId|string|true|none|none|
|maxPages|integer|false|none|none|
|documentId|string|true|none|none|
|autoRotate|boolean|false|none|none|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}

```

Empty Schema

### Properties

*None*

<h2 id="tocS_Batch">Batch</h2>
<!-- backwards compatibility -->
<a id="schemabatch"></a>
<a id="schema_Batch"></a>
<a id="tocSbatch"></a>
<a id="tocsbatch"></a>

```json
{
  "description": "string",
  "batchId": "string"
}

```

batch

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|true|none|none|
|batchId|string|true|none|none|

<h2 id="tocS_Assets">Assets</h2>
<!-- backwards compatibility -->
<a id="schemaassets"></a>
<a id="schema_Assets"></a>
<a id="tocSassets"></a>
<a id="tocsassets"></a>

```json
{
  "assets": [
    {
      "assetId": "string",
      "content": "string"
    }
  ],
  "nextToken": "string"
}

```

assets

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[object]|true|none|none|
|» assetId|string|true|none|none|
|» content|string|false|none|none|
|nextToken|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

<h2 id="tocS_Asset">Asset</h2>
<!-- backwards compatibility -->
<a id="schemaasset"></a>
<a id="schema_Asset"></a>
<a id="tocSasset"></a>
<a id="tocsasset"></a>

```json
{
  "assetId": "string",
  "content": "string"
}

```

asset

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetId|string|true|none|none|
|content|string|false|none|none|

<h2 id="tocS_Prediction">Prediction</h2>
<!-- backwards compatibility -->
<a id="schemaprediction"></a>
<a id="schema_Prediction"></a>
<a id="tocSprediction"></a>
<a id="tocsprediction"></a>

```json
{
  "documentId": "string",
  "predictions": [
    {
      "confidence": 0,
      "label": "string",
      "value": "string"
    }
  ]
}

```

prediction

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documentId|string|true|none|none|
|predictions|[object]|true|none|none|
|» confidence|number|true|none|none|
|» label|string|true|none|none|
|» value|any|true|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|string|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "message": "string"
}

```

Error Schema

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|

<h2 id="tocS_PostTransitions">PostTransitions</h2>
<!-- backwards compatibility -->
<a id="schemaposttransitions"></a>
<a id="schema_PostTransitions"></a>
<a id="tocSposttransitions"></a>
<a id="tocsposttransitions"></a>

```json
{
  "outputJsonSchema": {},
  "params": {
    "environment": {},
    "memory": 512,
    "credentials": {
      "password": "string",
      "username": "string"
    },
    "imageUrl": "string",
    "cpu": 256
  },
  "transitionType": "docker",
  "inputJsonSchema": {}
}

```

POST /transitions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputJsonSchema|object|true|none|none|
|params|any|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|
|»» environment|object|false|none|none|
|»» memory|integer|false|none|none|
|»» credentials|object|false|none|none|
|»»» password|string|true|none|none|
|»»» username|string|true|none|none|
|»» imageUrl|string|true|none|none|
|»» cpu|integer|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|
|»» assets|object|false|none|none|
|»»» jsRemoteComponent|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transitionType|string|true|none|none|
|inputJsonSchema|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|memory|512|
|memory|1024|
|memory|2048|
|cpu|256|
|transitionType|docker|
|transitionType|manual|

<h2 id="tocS_PostAssets">PostAssets</h2>
<!-- backwards compatibility -->
<a id="schemapostassets"></a>
<a id="schema_PostAssets"></a>
<a id="tocSpostassets"></a>
<a id="tocspostassets"></a>

```json
{
  "content": "string"
}

```

POST /assets

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|none|

<h2 id="tocS_PostUsers">PostUsers</h2>
<!-- backwards compatibility -->
<a id="schemapostusers"></a>
<a id="schema_PostUsers"></a>
<a id="tocSpostusers"></a>
<a id="tocspostusers"></a>

```json
{
  "email": "string"
}

```

POST /users

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|true|none|none|

<h2 id="tocS_PostDocuments">PostDocuments</h2>
<!-- backwards compatibility -->
<a id="schemapostdocuments"></a>
<a id="schema_PostDocuments"></a>
<a id="tocSpostdocuments"></a>
<a id="tocspostdocuments"></a>

```json
{
  "feedback": [
    {
      "label": "string",
      "value": "string"
    }
  ],
  "consentId": "string",
  "batchId": "string",
  "contentType": "application/pdf",
  "content": "string"
}

```

POST /documents

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedback|[object]|false|none|none|
|» label|string|true|none|none|
|» value|any|true|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|string|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»» *anonymous*|boolean|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentId|string|false|none|none|
|batchId|string|false|none|none|
|contentType|string|true|none|none|
|content|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|contentType|application/pdf|
|contentType|image/jpeg|

<h2 id="tocS_TransitionExecution">TransitionExecution</h2>
<!-- backwards compatibility -->
<a id="schematransitionexecution"></a>
<a id="schema_TransitionExecution"></a>
<a id="tocStransitionexecution"></a>
<a id="tocstransitionexecution"></a>

```json
{
  "executionId": "string",
  "input": {},
  "transitionId": "string",
  "status": "string"
}

```

transition-execution

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionId|string|true|none|none|
|input|object|true|none|none|
|transitionId|any|true|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|

<h2 id="tocS_PostTransitionExecution">PostTransitionExecution</h2>
<!-- backwards compatibility -->
<a id="schemaposttransitionexecution"></a>
<a id="schema_PostTransitionExecution"></a>
<a id="tocSposttransitionexecution"></a>
<a id="tocsposttransitionexecution"></a>

```json
{}

```

POST /transitions/{transitionId}/executions

### Properties

*None*

<h2 id="tocS_Documents">Documents</h2>
<!-- backwards compatibility -->
<a id="schemadocuments"></a>
<a id="schema_Documents"></a>
<a id="tocSdocuments"></a>
<a id="tocsdocuments"></a>

```json
{
  "consentId": "string",
  "documents": [
    {
      "feedback": [
        {
          "label": "string",
          "value": "string"
        }
      ],
      "consentId": "string",
      "inferenceTime": 0,
      "documentId": "string",
      "batchId": "string",
      "contentType": "application/pdf",
      "updated": 1,
      "content": "string",
      "predictions": [
        {
          "confidence": 0,
          "label": "string",
          "value": "string"
        }
      ]
    }
  ],
  "nextToken": "string",
  "batchId": "string"
}

```

documents

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consentId|string|false|none|none|
|documents|[object]|true|none|none|
|» feedback|[object]|false|none|none|
|»» label|string|true|none|none|
|»» value|any|true|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|string|false|none|none|

or

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|boolean|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» consentId|string|false|none|none|
|» inferenceTime|number|false|none|none|
|» documentId|string|true|none|none|
|» batchId|string|false|none|none|
|» contentType|string|true|none|none|
|» updated|integer|false|none|none|
|» content|string|false|none|none|
|» predictions|[object]|false|none|none|
|»» confidence|number|true|none|none|
|»» label|string|true|none|none|
|»» value|any|true|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|»»» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextToken|any|false|none|none|

anyOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|batchId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|contentType|application/pdf|
|contentType|image/jpeg|

<h2 id="tocS_Transition">Transition</h2>
<!-- backwards compatibility -->
<a id="schematransition"></a>
<a id="schema_Transition"></a>
<a id="tocStransition"></a>
<a id="tocstransition"></a>

```json
{
  "outputJsonSchema": {},
  "assets": {
    "jsRemoteComponent": "string"
  },
  "transitionId": "string",
  "transitionType": "string",
  "inputJsonSchema": {}
}

```

transition

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputJsonSchema|object|false|none|none|
|assets|object|false|none|none|
|» jsRemoteComponent|string|false|none|none|
|transitionId|any|true|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|string|false|none|none|

continued

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transitionType|string|true|none|none|
|inputJsonSchema|object|false|none|none|

<h2 id="tocS_PatchAssetId">PatchAssetId</h2>
<!-- backwards compatibility -->
<a id="schemapatchassetid"></a>
<a id="schema_PatchAssetId"></a>
<a id="tocSpatchassetid"></a>
<a id="tocspatchassetid"></a>

```json
{
  "content": "string"
}

```

PATCH /assets/assetId

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|true|none|none|

<h2 id="tocS_PostWorkflows">PostWorkflows</h2>
<!-- backwards compatibility -->
<a id="schemapostworkflows"></a>
<a id="schema_PostWorkflows"></a>
<a id="tocSpostworkflows"></a>
<a id="tocspostworkflows"></a>

```json
{
  "name": "string",
  "description": "string",
  "specification": {
    "language": "ASL",
    "definition": {},
    "version": "1.0.0"
  },
  "errorConfig": {
    "email": "string"
  }
}

```

POST /workflows

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|description|string|false|none|none|
|specification|object|true|none|none|
|» language|string|false|none|none|
|» definition|object|true|none|none|
|» version|string|false|none|none|
|errorConfig|object|false|none|none|
|» email|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|language|ASL|
|version|1.0.0|

<h2 id="tocS_WorkflowExecution">WorkflowExecution</h2>
<!-- backwards compatibility -->
<a id="schemaworkflowexecution"></a>
<a id="schema_WorkflowExecution"></a>
<a id="tocSworkflowexecution"></a>
<a id="tocsworkflowexecution"></a>

```json
{
  "executionId": "string",
  "workflowId": "string",
  "status": "string"
}

```

workflow-execution

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|executionId|string|true|none|none|
|workflowId|string|true|none|none|
|status|string|true|none|none|

<h2 id="tocS_PatchTransistionExecutionId">PatchTransistionExecutionId</h2>
<!-- backwards compatibility -->
<a id="schemapatchtransistionexecutionid"></a>
<a id="schema_PatchTransistionExecutionId"></a>
<a id="tocSpatchtransistionexecutionid"></a>
<a id="tocspatchtransistionexecutionid"></a>

```json
{
  "status": "succeeded"
}

```

PATCH transitions/{transitionId}/executions/{executionId}

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|output|object|false|none|none|
|error|object|false|none|none|
|» message|string|true|none|none|
|status|string|false|none|none|

oneOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» status|string|false|none|none|

xor

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|succeeded|
|status|failed|
|status|rejected|

