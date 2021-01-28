#### GET /assets





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list |
| maxResults | Maximum number of resources to list |


JSON Schema for request body



#### POST /assets





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "properties": {
    "content": {
      "minLength": 1,
      "type": "string"
    },
    "description": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "name": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    }
  },
  "required": [
    "content"
  ],
  "title": "POST /assets",
  "type": "object"
}
```


#### GET /assets/{assetId}


| Path name | Path value |
| --- | --- |
| assetId | Id of asset on the form las:asset:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body



#### PATCH /assets/{assetId}


| Path name | Path value |
| --- | --- |
| assetId | Id of asset on the form las:asset:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "minProperties": 1,
  "properties": {
    "content": {
      "minLength": 1,
      "type": "string"
    },
    "description": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "name": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    }
  },
  "title": "PATCH /assets/assetId",
  "type": "object"
}
```


#### POST /batches





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "properties": {
    "description": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "name": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    }
  },
  "title": "POST /batches",
  "type": "object"
}
```


#### DELETE /documents





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| consentId | String |


JSON Schema for request body



#### GET /documents





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| batchId | String |
| consentId | String |
| nextToken | String value as returned by a previous list |
| maxResults | Maximum number of resources to list |


JSON Schema for request body



#### POST /documents





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "properties": {
    "batchId": {
      "pattern": "^las:batch:[a-f0-9]{32}$",
      "type": "string"
    },
    "consentId": {
      "pattern": "^las:consent:[a-f0-9]{32}$",
      "type": "string"
    },
    "content": {
      "minLength": 1,
      "type": "string"
    },
    "contentType": {
      "enum": [
        "application/pdf",
        "image/jpeg"
      ],
      "type": "string"
    },
    "groundTruth": {
      "items": {
        "additionalProperties": false,
        "properties": {
          "label": {
            "maxLength": 36,
            "minLength": 1,
            "pattern": "^[0-9A-Za-z_]+$",
            "type": "string"
          },
          "value": {
            "anyOf": [
              {
                "maxLength": 64,
                "minLength": 1,
                "nullable": true,
                "type": "string"
              },
              {
                "type": "boolean"
              }
            ]
          }
        },
        "required": [
          "label",
          "value"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "content",
    "contentType"
  ],
  "title": "POST /documents",
  "type": "object"
}
```


#### GET /documents/{documentId}


| Path name | Path value |
| --- | --- |
| documentId | Id of document on the form las:document:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body



#### PATCH /documents/{documentId}


| Path name | Path value |
| --- | --- |
| documentId | Id of document on the form las:document:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "properties": {
    "groundTruth": {
      "items": {
        "additionalProperties": false,
        "properties": {
          "label": {
            "maxLength": 36,
            "minLength": 1,
            "pattern": "^[0-9A-Za-z_]+$",
            "type": "string"
          },
          "value": {
            "anyOf": [
              {
                "maxLength": 64,
                "minLength": 1,
                "nullable": true,
                "type": "string"
              },
              {
                "type": "boolean"
              }
            ]
          }
        },
        "required": [
          "label",
          "value"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "groundTruth"
  ],
  "title": "PATCH /documents/{documentId}",
  "type": "object"
}
```


#### GET /logs/{logId}


| Path name | Path value |
| --- | --- |
| logId | Id of log on the form las:log:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body



#### GET /models





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list |
| maxResults | Maximum number of resources to list |


JSON Schema for request body



#### GET /predictions





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list |
| maxResults | Maximum number of resources to list |


JSON Schema for request body



#### POST /predictions





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "properties": {
    "autoRotate": {
      "type": "boolean"
    },
    "documentId": {
      "pattern": "^las:document:[a-f0-9]{32}$",
      "type": "string"
    },
    "maxPages": {
      "maximum": 3,
      "minimum": 1,
      "type": "integer"
    },
    "modelId": {
      "pattern": "^las:model:[0-9A-Za-z_]+$",
      "type": "string"
    }
  },
  "required": [
    "documentId",
    "modelId"
  ],
  "title": "POST /predictions",
  "type": "object"
}
```


#### GET /secrets





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list |
| maxResults | Maximum number of resources to list |


JSON Schema for request body



#### POST /secrets





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "properties": {
    "data": {
      "type": "object"
    },
    "description": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "name": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    }
  },
  "required": [
    "data"
  ],
  "title": "POST /secrets",
  "type": "object"
}
```


#### PATCH /secrets/{secretId}


| Path name | Path value |
| --- | --- |
| secretId | Id of secret on the form las:secret:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "minProperties": 1,
  "properties": {
    "data": {
      "type": "object"
    },
    "description": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "name": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    }
  },
  "title": "PATCH /secrets/{secretId}",
  "type": "object"
}
```


#### GET /transitions





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| transitionType | manual \| docker |
| nextToken | String value as returned by a previous list |
| maxResults | Maximum number of resources to list |


JSON Schema for request body



#### POST /transitions





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "properties": {
    "description": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "inputJsonSchema": {
      "type": "object"
    },
    "name": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "outputJsonSchema": {
      "type": "object"
    },
    "parameters": {
      "anyOf": [
        {
          "additionalProperties": false,
          "properties": {
            "cpu": {
              "enum": [
                256
              ],
              "type": "integer"
            },
            "environment": {
              "additionalProperties": true,
              "type": "object"
            },
            "environmentSecrets": {
              "items": {
                "pattern": "^las:secret:[a-f0-9]{32}$",
                "type": "string"
              },
              "type": "array"
            },
            "imageUrl": {
              "type": "string"
            },
            "memory": {
              "enum": [
                512,
                1024,
                2048
              ],
              "type": "integer"
            },
            "secretId": {
              "pattern": "^las:secret:[a-f0-9]{32}$",
              "type": "string"
            }
          },
          "required": [
            "imageUrl"
          ],
          "type": "object"
        },
        {
          "additionalProperties": false,
          "properties": {
            "assets": {
              "additionalProperties": true,
              "properties": {
                "jsRemoteComponent": {
                  "pattern": "^las:asset:[a-f0-9]{32}$",
                  "type": "string"
                }
              },
              "type": "object"
            }
          },
          "type": "object"
        }
      ]
    },
    "transitionType": {
      "enum": [
        "docker",
        "manual"
      ],
      "type": "string"
    }
  },
  "required": [
    "transitionType"
  ],
  "title": "POST /transitions",
  "type": "object"
}
```


#### PATCH /transitions/{transitionId}


| Path name | Path value |
| --- | --- |
| transitionId | Id of transition on the form las:transition:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "minProperties": 1,
  "properties": {
    "description": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "inputJsonSchema": {
      "type": "object"
    },
    "name": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "outputJsonSchema": {
      "type": "object"
    }
  },
  "title": "PATCH /transitions/{transitionId}",
  "type": "object"
}
```


#### GET /transitions/{transitionId}/executions


| Path name | Path value |
| --- | --- |
| transitionId | Id of transition on the form las:transition:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list |
| order | ascending \| descending |
| executionId | String |
| status | String |
| maxResults | Maximum number of resources to list |
| sortBy | String |


JSON Schema for request body



#### POST /transitions/{transitionId}/executions


| Path name | Path value |
| --- | --- |
| transitionId | Id of transition on the form las:transition:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "title": "POST /transitions/{transitionId}/executions",
  "type": "object"
}
```


#### GET /transitions/{transitionId}/executions/{executionId}


| Path name | Path value |
| --- | --- |
| transitionId | Id of transition on the form las:transition:&lt;hex&gt; |
| executionId | Id of execution on the form las:transition-execution:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body



#### PATCH /transitions/{transitionId}/executions/{executionId}


| Path name | Path value |
| --- | --- |
| transitionId | Id of transition on the form las:transition:&lt;hex&gt; |
| executionId | Id of execution on the form las:transition-execution:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "anyOf": [
    {
      "properties": {
        "status": {
          "enum": [
            "succeeded"
          ],
          "type": "string"
        }
      },
      "type": "object"
    },
    {
      "properties": {
        "status": {
          "enum": [
            "failed",
            "rejected",
            "retry"
          ],
          "type": "string"
        }
      },
      "type": "object"
    }
  ],
  "properties": {
    "error": {
      "additionalProperties": false,
      "properties": {
        "message": {
          "type": "string"
        }
      },
      "required": [
        "message"
      ],
      "type": "object"
    },
    "output": {
      "type": "object"
    },
    "status": {
      "type": "string"
    }
  },
  "title": "PATCH transitions/{transitionId}/executions/{executionId}",
  "type": "object"
}
```


#### GET /users





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list |
| maxResults | Maximum number of resources to list |


JSON Schema for request body



#### POST /users





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "properties": {
    "avatar": {
      "anyOf": [
        {
          "maxLength": 131072,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "email": {
      "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
      "type": "string"
    },
    "name": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    }
  },
  "required": [
    "email"
  ],
  "title": "POST /users",
  "type": "object"
}
```


#### DELETE /users/{userId}


| Path name | Path value |
| --- | --- |
| userId | Id of user on the form las:user:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body



#### GET /users/{userId}


| Path name | Path value |
| --- | --- |
| userId | Id of user on the form las:user:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body



#### PATCH /users/{userId}


| Path name | Path value |
| --- | --- |
| userId | Id of user on the form las:user:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "minProperties": 1,
  "properties": {
    "avatar": {
      "anyOf": [
        {
          "maxLength": 131072,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "name": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    }
  },
  "title": "PATCH /users/{userId}",
  "type": "object"
}
```


#### GET /workflows





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list |
| maxResults | Maximum number of resources to list |


JSON Schema for request body



#### POST /workflows





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "properties": {
    "description": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "errorConfig": {
      "additionalProperties": false,
      "properties": {
        "email": {
          "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
          "type": "string"
        }
      },
      "required": [
        "email"
      ],
      "type": "object"
    },
    "name": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "specification": {
      "additionalProperties": false,
      "properties": {
        "definition": {
          "type": "object"
        },
        "language": {
          "enum": [
            "ASL"
          ],
          "type": "string"
        },
        "version": {
          "enum": [
            "1.0.0"
          ],
          "type": "string"
        }
      },
      "required": [
        "definition"
      ],
      "type": "object"
    }
  },
  "required": [
    "specification"
  ],
  "title": "POST /workflows",
  "type": "object"
}
```


#### DELETE /workflows/{workflowId}


| Path name | Path value |
| --- | --- |
| workflowId | Id of workflow on the form las:workflow:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body



#### PATCH /workflows/{workflowId}


| Path name | Path value |
| --- | --- |
| workflowId | Id of workflow on the form las:workflow:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "minProperties": 1,
  "properties": {
    "description": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "name": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    }
  },
  "title": "PATCH /workflows/{workflowId}",
  "type": "object"
}
```


#### GET /workflows/{workflowId}/executions


| Path name | Path value |
| --- | --- |
| workflowId | Id of workflow on the form las:workflow:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| status | String |
| nextToken | String value as returned by a previous list |
| maxResults | Maximum number of resources to list |
| sortBy | String |
| order | ascending \| descending |


JSON Schema for request body



#### POST /workflows/{workflowId}/executions


| Path name | Path value |
| --- | --- |
| workflowId | Id of workflow on the form las:workflow:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body
```json
{
  "additionalProperties": false,
  "properties": {
    "input": {
      "type": "object"
    }
  },
  "required": [
    "input"
  ],
  "title": "POST /workflows/{workflowId}/executions",
  "type": "object"
}
```


#### DELETE /workflows/{workflowId}/executions/{executionId}


| Path name | Path value |
| --- | --- |
| executionId | Id of execution on the form las:workflow-execution:&lt;hex&gt; |
| workflowId | Id of workflow on the form las:workflow:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





JSON Schema for request body


