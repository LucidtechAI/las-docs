#### GET /assets





| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |


| Query name | Query value |
| --- | --- |
| nextToken | {'type': 'string'} |
| maxResults | {'type': 'string'} |





#### POST /assets





| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| assetId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |








#### PATCH /assets/{assetId}


| Path name | Path value |
| --- | --- |
| assetId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |


| Query name | Query value |
| --- | --- |
| consentId | {'type': 'string'} |





#### GET /documents





| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |


| Query name | Query value |
| --- | --- |
| batchId | {'type': 'string'} |
| consentId | {'type': 'string'} |
| nextToken | {'type': 'string'} |
| maxResults | {'type': 'string'} |





#### POST /documents





| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| documentId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |








#### PATCH /documents/{documentId}


| Path name | Path value |
| --- | --- |
| documentId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| logId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |








#### GET /models





| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |


| Query name | Query value |
| --- | --- |
| nextToken | {'type': 'string'} |
| maxResults | {'type': 'string'} |





#### GET /predictions





| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |


| Query name | Query value |
| --- | --- |
| nextToken | {'type': 'string'} |
| maxResults | {'type': 'string'} |





#### POST /predictions





| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |


| Query name | Query value |
| --- | --- |
| nextToken | {'type': 'string'} |
| maxResults | {'type': 'string'} |





#### POST /secrets





| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| secretId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |


| Query name | Query value |
| --- | --- |
| transitionType | {'type': 'string'} |
| nextToken | {'type': 'string'} |
| maxResults | {'type': 'string'} |





#### POST /transitions





| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| transitionId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| transitionId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |


| Query name | Query value |
| --- | --- |
| nextToken | {'type': 'string'} |
| order | {'type': 'string'} |
| executionId | {'type': 'string'} |
| status | {'type': 'string'} |
| maxResults | {'type': 'string'} |
| sortBy | {'type': 'string'} |





#### POST /transitions/{transitionId}/executions


| Path name | Path value |
| --- | --- |
| transitionId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





```json
{
  "title": "POST /transitions/{transitionId}/executions",
  "type": "object"
}
```


#### GET /transitions/{transitionId}/executions/{executionId}


| Path name | Path value |
| --- | --- |
| transitionId | {'type': 'string'} |
| executionId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |








#### PATCH /transitions/{transitionId}/executions/{executionId}


| Path name | Path value |
| --- | --- |
| transitionId | {'type': 'string'} |
| executionId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |


| Query name | Query value |
| --- | --- |
| nextToken | {'type': 'string'} |
| maxResults | {'type': 'string'} |





#### POST /users





| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| userId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |








#### GET /users/{userId}


| Path name | Path value |
| --- | --- |
| userId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |








#### PATCH /users/{userId}


| Path name | Path value |
| --- | --- |
| userId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |


| Query name | Query value |
| --- | --- |
| nextToken | {'type': 'string'} |
| maxResults | {'type': 'string'} |





#### POST /workflows





| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| workflowId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |








#### PATCH /workflows/{workflowId}


| Path name | Path value |
| --- | --- |
| workflowId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| workflowId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |


| Query name | Query value |
| --- | --- |
| status | {'type': 'string'} |
| nextToken | {'type': 'string'} |
| maxResults | {'type': 'string'} |
| sortBy | {'type': 'string'} |
| order | {'type': 'string'} |





#### POST /workflows/{workflowId}/executions


| Path name | Path value |
| --- | --- |
| workflowId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Content-Type | {'type': 'string'} |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |





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
| executionId | {'type': 'string'} |
| workflowId | {'type': 'string'} |


| Header name | Header value |
| --- | --- |
| Authorization | {'type': 'string'} |
| x-api-key | {'type': 'string'} |







