#### GET /appClients





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "title": "appClients",
  "required": [
    "appClients",
    "nextToken"
  ],
  "type": "object",
  "properties": {
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "appClients": {
      "type": "array",
      "items": {
        "required": [
          "apiKey",
          "appClientId",
          "callbackUrls",
          "clientId",
          "createdTime",
          "description",
          "hasSecret",
          "logoutUrls",
          "name"
        ],
        "type": "object",
        "properties": {
          "hasSecret": {
            "type": "boolean"
          },
          "clientId": {
            "type": "string"
          },
          "apiKey": {
            "type": "string"
          },
          "name": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "logoutUrls": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "description": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "createdTime": {
            "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            "type": "string",
            "nullable": true
          },
          "callbackUrls": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "clientSecret": {
            "type": "string"
          },
          "appClientId": {
            "pattern": "^las:app-client:[a-f0-9]{32}$",
            "type": "string"
          }
        },
        "additionalProperties": false
      }
    }
  },
  "additionalProperties": false
}
```


#### POST /appClients





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "POST /appClients",
  "type": "object",
  "properties": {
    "generateSecret": {
      "type": "boolean",
      "default": true
    },
    "logoutUrls": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "callbackUrls": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "appClient",
  "required": [
    "apiKey",
    "appClientId",
    "callbackUrls",
    "clientId",
    "createdTime",
    "description",
    "hasSecret",
    "logoutUrls",
    "name"
  ],
  "type": "object",
  "properties": {
    "hasSecret": {
      "type": "boolean"
    },
    "clientId": {
      "type": "string"
    },
    "apiKey": {
      "type": "string"
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "logoutUrls": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "createdTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "callbackUrls": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "clientSecret": {
      "type": "string"
    },
    "appClientId": {
      "pattern": "^las:app-client:[a-f0-9]{32}$",
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


#### DELETE /appClients/{appClientId}


| Path name | Path value |
| --- | --- |
| appClientId | Id of appClient on the form las:appClient:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |








##### Response body JSON Schema
```json
{
  "title": "appClient",
  "required": [
    "apiKey",
    "appClientId",
    "callbackUrls",
    "clientId",
    "createdTime",
    "description",
    "hasSecret",
    "logoutUrls",
    "name"
  ],
  "type": "object",
  "properties": {
    "hasSecret": {
      "type": "boolean"
    },
    "clientId": {
      "type": "string"
    },
    "apiKey": {
      "type": "string"
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "logoutUrls": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "createdTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "callbackUrls": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "clientSecret": {
      "type": "string"
    },
    "appClientId": {
      "pattern": "^las:app-client:[a-f0-9]{32}$",
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


#### GET /assets





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "title": "assets",
  "required": [
    "assets",
    "nextToken"
  ],
  "type": "object",
  "properties": {
    "assets": {
      "type": "array",
      "items": {
        "required": [
          "assetId",
          "description",
          "name"
        ],
        "type": "object",
        "properties": {
          "assetId": {
            "pattern": "^las:asset:[a-f0-9]{32}$",
            "type": "string"
          },
          "name": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "description": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "content": {
            "minLength": 1,
            "type": "string"
          }
        },
        "additionalProperties": false
      }
    },
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    }
  },
  "additionalProperties": false
}
```


#### POST /assets





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "POST /assets",
  "required": [
    "content"
  ],
  "type": "object",
  "properties": {
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "content": {
      "minLength": 1,
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "asset",
  "required": [
    "assetId",
    "description",
    "name"
  ],
  "type": "object",
  "properties": {
    "assetId": {
      "pattern": "^las:asset:[a-f0-9]{32}$",
      "type": "string"
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "content": {
      "minLength": 1,
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


#### DELETE /assets/{assetId}


| Path name | Path value |
| --- | --- |
| assetId | Id of asset on the form las:asset:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |








##### Response body JSON Schema
```json
{
  "title": "asset",
  "required": [
    "assetId",
    "description",
    "name"
  ],
  "type": "object",
  "properties": {
    "assetId": {
      "pattern": "^las:asset:[a-f0-9]{32}$",
      "type": "string"
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "content": {
      "minLength": 1,
      "type": "string"
    }
  },
  "additionalProperties": false
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








##### Response body JSON Schema
```json
{
  "title": "asset",
  "required": [
    "assetId",
    "description",
    "name"
  ],
  "type": "object",
  "properties": {
    "assetId": {
      "pattern": "^las:asset:[a-f0-9]{32}$",
      "type": "string"
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "content": {
      "minLength": 1,
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


#### PATCH /assets/{assetId}


| Path name | Path value |
| --- | --- |
| assetId | Id of asset on the form las:asset:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "PATCH /assets/assetId",
  "minProperties": 1,
  "type": "object",
  "properties": {
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "content": {
      "minLength": 1,
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "asset",
  "required": [
    "assetId",
    "description",
    "name"
  ],
  "type": "object",
  "properties": {
    "assetId": {
      "pattern": "^las:asset:[a-f0-9]{32}$",
      "type": "string"
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "content": {
      "minLength": 1,
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


#### GET /batches





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "title": "batches",
  "required": [
    "batches",
    "nextToken"
  ],
  "type": "object",
  "properties": {
    "batches": {
      "type": "array",
      "items": {
        "required": [
          "batchId",
          "containsPersonallyIdentifiableInformation",
          "createdTime",
          "description",
          "numDocuments",
          "retentionInDays",
          "storageLocation"
        ],
        "type": "object",
        "properties": {
          "retentionInDays": {
            "maximum": 1825,
            "minimum": 0,
            "type": "integer"
          },
          "name": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "description": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "createdTime": {
            "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            "type": "string",
            "nullable": true
          },
          "storageLocation": {
            "type": "string",
            "enum": [
              "EU"
            ]
          },
          "containsPersonallyIdentifiableInformation": {
            "type": "boolean"
          },
          "batchId": {
            "pattern": "^las:batch:[a-f0-9]{32}$",
            "type": "string"
          },
          "numDocuments": {
            "minimum": 0,
            "type": "integer"
          }
        },
        "additionalProperties": false
      }
    },
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    }
  },
  "additionalProperties": false
}
```


#### POST /batches





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "POST /batches",
  "type": "object",
  "properties": {
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "containsPersonallyIdentifiableInformation": {
      "type": "boolean"
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "batch",
  "required": [
    "batchId",
    "containsPersonallyIdentifiableInformation",
    "createdTime",
    "description",
    "numDocuments",
    "retentionInDays",
    "storageLocation"
  ],
  "type": "object",
  "properties": {
    "retentionInDays": {
      "maximum": 1825,
      "minimum": 0,
      "type": "integer"
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "createdTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "storageLocation": {
      "type": "string",
      "enum": [
        "EU"
      ]
    },
    "containsPersonallyIdentifiableInformation": {
      "type": "boolean"
    },
    "batchId": {
      "pattern": "^las:batch:[a-f0-9]{32}$",
      "type": "string"
    },
    "numDocuments": {
      "minimum": 0,
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```


#### DELETE /batches/{batchId}


| Path name | Path value |
| --- | --- |
| batchId | Id of batch on the form las:batch:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |








##### Response body JSON Schema
```json
{
  "title": "batch",
  "required": [
    "batchId",
    "containsPersonallyIdentifiableInformation",
    "createdTime",
    "description",
    "numDocuments",
    "retentionInDays",
    "storageLocation"
  ],
  "type": "object",
  "properties": {
    "retentionInDays": {
      "maximum": 1825,
      "minimum": 0,
      "type": "integer"
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "createdTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "storageLocation": {
      "type": "string",
      "enum": [
        "EU"
      ]
    },
    "containsPersonallyIdentifiableInformation": {
      "type": "boolean"
    },
    "batchId": {
      "pattern": "^las:batch:[a-f0-9]{32}$",
      "type": "string"
    },
    "numDocuments": {
      "minimum": 0,
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```


#### DELETE /documents





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| batchId | Id of batch on the form las:batch:&lt;hex&gt; |
| consentId | Id of consent on the form las:consent:&lt;hex&gt; |
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "title": "documents",
  "required": [
    "documents",
    "nextToken"
  ],
  "type": "object",
  "properties": {
    "consentId": {
      "type": "array",
      "items": {
        "pattern": "^las:consent:[a-f0-9]{32}$",
        "type": "string"
      }
    },
    "documents": {
      "type": "array",
      "items": {
        "required": [
          "contentType",
          "documentId"
        ],
        "type": "object",
        "properties": {
          "groundTruth": {
            "type": "array",
            "items": {
              "required": [
                "label",
                "value"
              ],
              "type": "object",
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
                      "type": "string",
                      "nullable": true
                    },
                    {
                      "type": "boolean"
                    }
                  ]
                }
              },
              "additionalProperties": false
            }
          },
          "consentId": {
            "pattern": "^las:consent:[a-f0-9]{32}$",
            "type": "string"
          },
          "documentId": {
            "pattern": "^las:document:[a-f0-9]{32}$",
            "type": "string"
          },
          "batchId": {
            "pattern": "^las:batch:[a-f0-9]{32}$",
            "type": "string"
          },
          "contentType": {
            "type": "string",
            "enum": [
              "application/pdf",
              "image/jpeg",
              "image/png",
              "image/tiff"
            ]
          },
          "content": {
            "minLength": 1,
            "type": "string"
          }
        },
        "additionalProperties": false
      }
    },
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "batchId": {
      "type": "array",
      "items": {
        "pattern": "^las:batch:[a-f0-9]{32}$",
        "type": "string"
      }
    }
  },
  "additionalProperties": false
}
```


#### GET /documents





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| batchId | Id of batch on the form las:batch:&lt;hex&gt; |
| consentId | Id of consent on the form las:consent:&lt;hex&gt; |
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "title": "documents",
  "required": [
    "documents",
    "nextToken"
  ],
  "type": "object",
  "properties": {
    "consentId": {
      "type": "array",
      "items": {
        "pattern": "^las:consent:[a-f0-9]{32}$",
        "type": "string"
      }
    },
    "documents": {
      "type": "array",
      "items": {
        "required": [
          "contentType",
          "documentId"
        ],
        "type": "object",
        "properties": {
          "groundTruth": {
            "type": "array",
            "items": {
              "required": [
                "label",
                "value"
              ],
              "type": "object",
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
                      "type": "string",
                      "nullable": true
                    },
                    {
                      "type": "boolean"
                    }
                  ]
                }
              },
              "additionalProperties": false
            }
          },
          "consentId": {
            "pattern": "^las:consent:[a-f0-9]{32}$",
            "type": "string"
          },
          "documentId": {
            "pattern": "^las:document:[a-f0-9]{32}$",
            "type": "string"
          },
          "batchId": {
            "pattern": "^las:batch:[a-f0-9]{32}$",
            "type": "string"
          },
          "contentType": {
            "type": "string",
            "enum": [
              "application/pdf",
              "image/jpeg",
              "image/png",
              "image/tiff"
            ]
          },
          "content": {
            "minLength": 1,
            "type": "string"
          }
        },
        "additionalProperties": false
      }
    },
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "batchId": {
      "type": "array",
      "items": {
        "pattern": "^las:batch:[a-f0-9]{32}$",
        "type": "string"
      }
    }
  },
  "additionalProperties": false
}
```


#### POST /documents





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "POST /documents",
  "required": [
    "content",
    "contentType"
  ],
  "type": "object",
  "properties": {
    "groundTruth": {
      "type": "array",
      "items": {
        "required": [
          "label",
          "value"
        ],
        "type": "object",
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
                "type": "string",
                "nullable": true
              },
              {
                "type": "boolean"
              }
            ]
          }
        },
        "additionalProperties": false
      }
    },
    "consentId": {
      "pattern": "^las:consent:[a-f0-9]{32}$",
      "type": "string"
    },
    "batchId": {
      "pattern": "^las:batch:[a-f0-9]{32}$",
      "type": "string"
    },
    "contentType": {
      "type": "string",
      "enum": [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/tiff"
      ]
    },
    "content": {
      "minLength": 1,
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "document",
  "required": [
    "contentType",
    "documentId"
  ],
  "type": "object",
  "properties": {
    "groundTruth": {
      "type": "array",
      "items": {
        "required": [
          "label",
          "value"
        ],
        "type": "object",
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
                "type": "string",
                "nullable": true
              },
              {
                "type": "boolean"
              }
            ]
          }
        },
        "additionalProperties": false
      }
    },
    "consentId": {
      "pattern": "^las:consent:[a-f0-9]{32}$",
      "type": "string"
    },
    "documentId": {
      "pattern": "^las:document:[a-f0-9]{32}$",
      "type": "string"
    },
    "batchId": {
      "pattern": "^las:batch:[a-f0-9]{32}$",
      "type": "string"
    },
    "contentType": {
      "type": "string",
      "enum": [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/tiff"
      ]
    },
    "content": {
      "minLength": 1,
      "type": "string"
    }
  },
  "additionalProperties": false
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








##### Response body JSON Schema
```json
{
  "title": "document",
  "required": [
    "contentType",
    "documentId"
  ],
  "type": "object",
  "properties": {
    "groundTruth": {
      "type": "array",
      "items": {
        "required": [
          "label",
          "value"
        ],
        "type": "object",
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
                "type": "string",
                "nullable": true
              },
              {
                "type": "boolean"
              }
            ]
          }
        },
        "additionalProperties": false
      }
    },
    "consentId": {
      "pattern": "^las:consent:[a-f0-9]{32}$",
      "type": "string"
    },
    "documentId": {
      "pattern": "^las:document:[a-f0-9]{32}$",
      "type": "string"
    },
    "batchId": {
      "pattern": "^las:batch:[a-f0-9]{32}$",
      "type": "string"
    },
    "contentType": {
      "type": "string",
      "enum": [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/tiff"
      ]
    },
    "content": {
      "minLength": 1,
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


#### PATCH /documents/{documentId}


| Path name | Path value |
| --- | --- |
| documentId | Id of document on the form las:document:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "PATCH /documents/{documentId}",
  "required": [
    "groundTruth"
  ],
  "type": "object",
  "properties": {
    "groundTruth": {
      "type": "array",
      "items": {
        "required": [
          "label",
          "value"
        ],
        "type": "object",
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
                "type": "string",
                "nullable": true
              },
              {
                "type": "boolean"
              }
            ]
          }
        },
        "additionalProperties": false
      }
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "document",
  "required": [
    "contentType",
    "documentId"
  ],
  "type": "object",
  "properties": {
    "groundTruth": {
      "type": "array",
      "items": {
        "required": [
          "label",
          "value"
        ],
        "type": "object",
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
                "type": "string",
                "nullable": true
              },
              {
                "type": "boolean"
              }
            ]
          }
        },
        "additionalProperties": false
      }
    },
    "consentId": {
      "pattern": "^las:consent:[a-f0-9]{32}$",
      "type": "string"
    },
    "documentId": {
      "pattern": "^las:document:[a-f0-9]{32}$",
      "type": "string"
    },
    "batchId": {
      "pattern": "^las:batch:[a-f0-9]{32}$",
      "type": "string"
    },
    "contentType": {
      "type": "string",
      "enum": [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/tiff"
      ]
    },
    "content": {
      "minLength": 1,
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


#### GET /logs





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| workflowId | String |
| nextToken | String value as returned by a previous list operation |
| order | ascending \| descending |
| transitionExecutionId | String |
| transitionId | String |
| maxResults | Integer representing maximum number of resources to list |
| workflowExecutionId | String |





##### Response body JSON Schema
```json
{
  "title": "logs",
  "required": [
    "logs",
    "nextToken"
  ],
  "type": "object",
  "properties": {
    "transitionId": {
      "anyOf": [
        {
          "pattern": "^las:transition:[a-f0-9]{32}$",
          "type": "string"
        },
        {
          "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
          "type": "string"
        }
      ]
    },
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "transitionExecutionId": {
      "pattern": "^las:transition-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "workflowExecutionId": {
      "pattern": "^las:workflow-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "logs": {
      "type": "array",
      "items": {
        "required": [
          "logId",
          "startTime",
          "transitionExecutionId",
          "transitionId",
          "workflowExecutionId",
          "workflowId"
        ],
        "type": "object",
        "properties": {
          "transitionId": {
            "anyOf": [
              {
                "pattern": "^las:transition:[a-f0-9]{32}$",
                "type": "string"
              },
              {
                "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
                "type": "string"
              }
            ]
          },
          "transitionExecutionId": {
            "pattern": "^las:transition-execution:[a-f0-9]{32}$",
            "type": "string",
            "nullable": true
          },
          "logId": {
            "pattern": "^las:log:[a-f0-9]{32}$",
            "type": "string"
          },
          "workflowExecutionId": {
            "pattern": "^las:workflow-execution:[a-f0-9]{32}$",
            "type": "string",
            "nullable": true
          },
          "startTime": {
            "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            "type": "string",
            "nullable": true
          },
          "workflowId": {
            "pattern": "^las:workflow:[a-f0-9]{32}$",
            "type": "string",
            "nullable": true
          },
          "events": {
            "type": "array",
            "items": {
              "type": "object"
            }
          }
        },
        "additionalProperties": false
      }
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    },
    "order": {
      "type": "string",
      "enum": [
        "ascending",
        "descending"
      ]
    }
  },
  "additionalProperties": false
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








##### Response body JSON Schema
```json
{
  "title": "log",
  "required": [
    "logId",
    "startTime",
    "transitionExecutionId",
    "transitionId",
    "workflowExecutionId",
    "workflowId"
  ],
  "type": "object",
  "properties": {
    "transitionId": {
      "anyOf": [
        {
          "pattern": "^las:transition:[a-f0-9]{32}$",
          "type": "string"
        },
        {
          "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
          "type": "string"
        }
      ]
    },
    "transitionExecutionId": {
      "pattern": "^las:transition-execution:[a-f0-9]{32}$",
      "type": "string",
      "nullable": true
    },
    "logId": {
      "pattern": "^las:log:[a-f0-9]{32}$",
      "type": "string"
    },
    "workflowExecutionId": {
      "pattern": "^las:workflow-execution:[a-f0-9]{32}$",
      "type": "string",
      "nullable": true
    },
    "startTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string",
      "nullable": true
    },
    "events": {
      "type": "array",
      "items": {
        "type": "object"
      }
    }
  },
  "additionalProperties": false
}
```


#### GET /models





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "title": "models",
  "required": [
    "models",
    "nextToken"
  ],
  "type": "object",
  "properties": {
    "models": {
      "type": "array",
      "items": {
        "required": [
          "createdTime",
          "description",
          "fieldConfig",
          "height",
          "modelId",
          "name",
          "preprocessConfig",
          "status",
          "updatedTime",
          "width"
        ],
        "type": "object",
        "properties": {
          "updatedTime": {
            "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            "type": "string",
            "nullable": true
          },
          "preprocessConfig": {
            "required": [
              "autoRotate",
              "imageQuality",
              "maxPages"
            ],
            "type": "object",
            "properties": {
              "maxPages": {
                "type": "integer"
              },
              "autoRotate": {
                "type": "boolean"
              },
              "imageQuality": {
                "type": "string",
                "enum": [
                  "LOW",
                  "HIGH"
                ]
              }
            },
            "additionalProperties": false
          },
          "modelId": {
            "pattern": "^las:model:[0-9A-Za-z_]+$",
            "type": "string"
          },
          "name": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "width": {
            "type": "integer"
          },
          "description": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "createdTime": {
            "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            "type": "string",
            "nullable": true
          },
          "fieldConfig": {
            "type": "object",
            "additionalProperties": {
              "required": [
                "description",
                "maxLength",
                "type"
              ],
              "type": "object",
              "properties": {
                "description": {
                  "anyOf": [
                    {
                      "maxLength": 4096,
                      "type": "string"
                    },
                    null
                  ]
                },
                "type": {
                  "type": "string",
                  "enum": [
                    "date",
                    "amount",
                    "number",
                    "letter",
                    "phone",
                    "alphanum",
                    "alphanumext",
                    "all"
                  ]
                },
                "maxLength": {
                  "type": "integer"
                }
              }
            }
          },
          "height": {
            "type": "integer"
          },
          "status": {
            "type": "string",
            "enum": [
              "active",
              "training"
            ]
          }
        },
        "additionalProperties": false
      }
    },
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    }
  },
  "additionalProperties": false
}
```


#### GET /predictions





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "title": "predictions",
  "required": [
    "nextToken",
    "predictions"
  ],
  "type": "object",
  "properties": {
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "predictions": {
      "type": "array",
      "items": {
        "required": [
          "documentId",
          "inferenceTime",
          "modelId",
          "predictionId",
          "predictions",
          "timestamp"
        ],
        "type": "object",
        "properties": {
          "modelId": {
            "pattern": "^las:model:[0-9A-Za-z_]+$",
            "type": "string"
          },
          "inferenceTime": {
            "minimum": 0,
            "type": "number"
          },
          "documentId": {
            "pattern": "^las:document:[a-f0-9]{32}$",
            "type": "string"
          },
          "predictionId": {
            "pattern": "^las:prediction:[a-f0-9]{32}$",
            "type": "string"
          },
          "predictions": {
            "type": "array",
            "items": {
              "required": [
                "confidence",
                "label",
                "value"
              ],
              "type": "object",
              "properties": {
                "confidence": {
                  "maximum": 1,
                  "minimum": 0,
                  "type": "number"
                },
                "label": {
                  "maxLength": 36,
                  "minLength": 1,
                  "pattern": "^[0-9A-Za-z_]+$",
                  "type": "string"
                },
                "value": {
                  "maxLength": 64,
                  "minLength": 1,
                  "type": "string",
                  "nullable": true
                }
              },
              "additionalProperties": false
            }
          },
          "timestamp": {
            "minimum": 1,
            "type": "integer"
          }
        },
        "additionalProperties": false
      }
    }
  },
  "additionalProperties": false
}
```


#### POST /predictions





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "POST /predictions",
  "required": [
    "documentId",
    "modelId"
  ],
  "type": "object",
  "properties": {
    "modelId": {
      "pattern": "^las:model:[0-9A-Za-z_]+$",
      "type": "string"
    },
    "maxPages": {
      "maximum": 3,
      "minimum": 1,
      "type": "integer"
    },
    "documentId": {
      "pattern": "^las:document:[a-f0-9]{32}$",
      "type": "string"
    },
    "autoRotate": {
      "type": "boolean"
    },
    "imageQuality": {
      "type": "string",
      "enum": [
        "LOW",
        "HIGH"
      ]
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "prediction",
  "required": [
    "documentId",
    "inferenceTime",
    "modelId",
    "predictionId",
    "predictions",
    "timestamp"
  ],
  "type": "object",
  "properties": {
    "modelId": {
      "pattern": "^las:model:[0-9A-Za-z_]+$",
      "type": "string"
    },
    "inferenceTime": {
      "minimum": 0,
      "type": "number"
    },
    "documentId": {
      "pattern": "^las:document:[a-f0-9]{32}$",
      "type": "string"
    },
    "predictionId": {
      "pattern": "^las:prediction:[a-f0-9]{32}$",
      "type": "string"
    },
    "predictions": {
      "type": "array",
      "items": {
        "required": [
          "confidence",
          "label",
          "value"
        ],
        "type": "object",
        "properties": {
          "confidence": {
            "maximum": 1,
            "minimum": 0,
            "type": "number"
          },
          "label": {
            "maxLength": 36,
            "minLength": 1,
            "pattern": "^[0-9A-Za-z_]+$",
            "type": "string"
          },
          "value": {
            "maxLength": 64,
            "minLength": 1,
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }
    },
    "timestamp": {
      "minimum": 1,
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```


#### GET /secrets





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "title": "secrets",
  "required": [
    "nextToken",
    "secrets"
  ],
  "type": "object",
  "properties": {
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "secrets": {
      "type": "array",
      "items": {
        "required": [
          "description",
          "name",
          "secretId"
        ],
        "type": "object",
        "properties": {
          "name": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "secretId": {
            "pattern": "^las:secret:[a-f0-9]{32}$",
            "type": "string"
          },
          "description": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          }
        },
        "additionalProperties": false
      }
    }
  },
  "additionalProperties": false
}
```


#### POST /secrets





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "POST /secrets",
  "required": [
    "data"
  ],
  "type": "object",
  "properties": {
    "data": {
      "type": "object"
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "secret",
  "required": [
    "description",
    "name",
    "secretId"
  ],
  "type": "object",
  "properties": {
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "secretId": {
      "pattern": "^las:secret:[a-f0-9]{32}$",
      "type": "string"
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    }
  },
  "additionalProperties": false
}
```


#### DELETE /secrets/{secretId}


| Path name | Path value |
| --- | --- |
| secretId | Id of secret on the form las:secret:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |








##### Response body JSON Schema
```json
{
  "title": "secret",
  "required": [
    "description",
    "name",
    "secretId"
  ],
  "type": "object",
  "properties": {
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "secretId": {
      "pattern": "^las:secret:[a-f0-9]{32}$",
      "type": "string"
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    }
  },
  "additionalProperties": false
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





##### Request body JSON Schema
```json
{
  "title": "PATCH /secrets/{secretId}",
  "minProperties": 1,
  "type": "object",
  "properties": {
    "data": {
      "type": "object"
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "secret",
  "required": [
    "description",
    "name",
    "secretId"
  ],
  "type": "object",
  "properties": {
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "secretId": {
      "pattern": "^las:secret:[a-f0-9]{32}$",
      "type": "string"
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    }
  },
  "additionalProperties": false
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
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "title": "transitions",
  "required": [
    "nextToken",
    "transitions"
  ],
  "type": "object",
  "properties": {
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "transitions": {
      "type": "array",
      "items": {
        "required": [
          "description",
          "name",
          "parameters",
          "transitionId",
          "transitionType"
        ],
        "type": "object",
        "properties": {
          "outputJsonSchema": {
            "type": "object"
          },
          "assets": {
            "type": "object",
            "properties": {
              "jsRemoteComponent": {
                "pattern": "^las:asset:[a-f0-9]{32}$",
                "type": "string"
              }
            },
            "additionalProperties": {
              "pattern": "^las:asset:[a-f0-9]{32}$",
              "type": "string"
            }
          },
          "transitionId": {
            "anyOf": [
              {
                "pattern": "^las:transition:[a-f0-9]{32}$",
                "type": "string"
              },
              {
                "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
                "type": "string"
              }
            ]
          },
          "name": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "description": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "transitionType": {
            "type": "string"
          },
          "inputJsonSchema": {
            "type": "object"
          },
          "parameters": {
            "type": "object"
          }
        },
        "additionalProperties": false
      }
    },
    "transitionType": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "docker",
          "manual"
        ]
      }
    }
  },
  "additionalProperties": false
}
```


#### POST /transitions





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "POST /transitions",
  "required": [
    "transitionType"
  ],
  "type": "object",
  "properties": {
    "outputJsonSchema": {
      "type": "object"
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "transitionType": {
      "type": "string",
      "enum": [
        "docker",
        "manual"
      ]
    },
    "inputJsonSchema": {
      "type": "object"
    },
    "parameters": {
      "anyOf": [
        {
          "required": [
            "imageUrl"
          ],
          "type": "object",
          "properties": {
            "environmentSecrets": {
              "type": "array",
              "items": {
                "pattern": "^las:secret:[a-f0-9]{32}$",
                "type": "string"
              }
            },
            "environment": {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            "memory": {
              "type": "integer",
              "enum": [
                512,
                1024,
                2048
              ]
            },
            "imageUrl": {
              "type": "string"
            },
            "secretId": {
              "pattern": "^las:secret:[a-f0-9]{32}$",
              "type": "string"
            },
            "cpu": {
              "type": "integer",
              "enum": [
                256
              ]
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "assets": {
              "type": "object",
              "properties": {
                "jsRemoteComponent": {
                  "pattern": "^las:asset:[a-f0-9]{32}$",
                  "type": "string"
                }
              },
              "additionalProperties": {
                "pattern": "^las:asset:[a-f0-9]{32}$",
                "type": "string"
              }
            }
          },
          "additionalProperties": false
        }
      ]
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "transition",
  "required": [
    "description",
    "name",
    "parameters",
    "transitionId",
    "transitionType"
  ],
  "type": "object",
  "properties": {
    "outputJsonSchema": {
      "type": "object"
    },
    "assets": {
      "type": "object",
      "properties": {
        "jsRemoteComponent": {
          "pattern": "^las:asset:[a-f0-9]{32}$",
          "type": "string"
        }
      },
      "additionalProperties": {
        "pattern": "^las:asset:[a-f0-9]{32}$",
        "type": "string"
      }
    },
    "transitionId": {
      "anyOf": [
        {
          "pattern": "^las:transition:[a-f0-9]{32}$",
          "type": "string"
        },
        {
          "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
          "type": "string"
        }
      ]
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "transitionType": {
      "type": "string"
    },
    "inputJsonSchema": {
      "type": "object"
    },
    "parameters": {
      "type": "object"
    }
  },
  "additionalProperties": false
}
```


#### DELETE /transitions/{transitionId}


| Path name | Path value |
| --- | --- |
| transitionId | Id of transition on the form las:transition:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |








##### Response body JSON Schema
```json
{
  "title": "transition",
  "required": [
    "description",
    "name",
    "parameters",
    "transitionId",
    "transitionType"
  ],
  "type": "object",
  "properties": {
    "outputJsonSchema": {
      "type": "object"
    },
    "assets": {
      "type": "object",
      "properties": {
        "jsRemoteComponent": {
          "pattern": "^las:asset:[a-f0-9]{32}$",
          "type": "string"
        }
      },
      "additionalProperties": {
        "pattern": "^las:asset:[a-f0-9]{32}$",
        "type": "string"
      }
    },
    "transitionId": {
      "anyOf": [
        {
          "pattern": "^las:transition:[a-f0-9]{32}$",
          "type": "string"
        },
        {
          "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
          "type": "string"
        }
      ]
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "transitionType": {
      "type": "string"
    },
    "inputJsonSchema": {
      "type": "object"
    },
    "parameters": {
      "type": "object"
    }
  },
  "additionalProperties": false
}
```


#### GET /transitions/{transitionId}


| Path name | Path value |
| --- | --- |
| transitionId | Id of transition on the form las:transition:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |








##### Response body JSON Schema
```json
{
  "title": "transition",
  "required": [
    "description",
    "name",
    "parameters",
    "transitionId",
    "transitionType"
  ],
  "type": "object",
  "properties": {
    "outputJsonSchema": {
      "type": "object"
    },
    "assets": {
      "type": "object",
      "properties": {
        "jsRemoteComponent": {
          "pattern": "^las:asset:[a-f0-9]{32}$",
          "type": "string"
        }
      },
      "additionalProperties": {
        "pattern": "^las:asset:[a-f0-9]{32}$",
        "type": "string"
      }
    },
    "transitionId": {
      "anyOf": [
        {
          "pattern": "^las:transition:[a-f0-9]{32}$",
          "type": "string"
        },
        {
          "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
          "type": "string"
        }
      ]
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "transitionType": {
      "type": "string"
    },
    "inputJsonSchema": {
      "type": "object"
    },
    "parameters": {
      "type": "object"
    }
  },
  "additionalProperties": false
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





##### Request body JSON Schema
```json
{
  "title": "PATCH /transitions/{transitionId}",
  "minProperties": 1,
  "type": "object",
  "properties": {
    "environmentSecrets": {
      "type": "array",
      "items": {
        "pattern": "^las:secret:[a-f0-9]{32}$",
        "type": "string"
      }
    },
    "environment": {
      "type": "object"
    },
    "outputJsonSchema": {
      "type": "object"
    },
    "assets": {
      "type": "object"
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "inputJsonSchema": {
      "type": "object"
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "transition",
  "required": [
    "description",
    "name",
    "parameters",
    "transitionId",
    "transitionType"
  ],
  "type": "object",
  "properties": {
    "outputJsonSchema": {
      "type": "object"
    },
    "assets": {
      "type": "object",
      "properties": {
        "jsRemoteComponent": {
          "pattern": "^las:asset:[a-f0-9]{32}$",
          "type": "string"
        }
      },
      "additionalProperties": {
        "pattern": "^las:asset:[a-f0-9]{32}$",
        "type": "string"
      }
    },
    "transitionId": {
      "anyOf": [
        {
          "pattern": "^las:transition:[a-f0-9]{32}$",
          "type": "string"
        },
        {
          "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
          "type": "string"
        }
      ]
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "transitionType": {
      "type": "string"
    },
    "inputJsonSchema": {
      "type": "object"
    },
    "parameters": {
      "type": "object"
    }
  },
  "additionalProperties": false
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
| nextToken | String value as returned by a previous list operation |
| order | ascending \| descending |
| executionId | String |
| status | running \| succeeded \| failed \| rejected \| retry |
| maxResults | Integer representing maximum number of resources to list |
| sortBy | startTime \| endTime |





##### Response body JSON Schema
```json
{
  "title": "transition-executions",
  "required": [
    "executions",
    "nextToken",
    "transitionId"
  ],
  "type": "object",
  "properties": {
    "executions": {
      "type": "array",
      "items": {
        "required": [
          "completedBy",
          "executionId",
          "input",
          "status",
          "transitionId"
        ],
        "type": "object",
        "properties": {
          "executionId": {
            "pattern": "^las:transition-execution:[a-f0-9]{32}$",
            "type": "string"
          },
          "input": {
            "type": "object"
          },
          "transitionId": {
            "anyOf": [
              {
                "pattern": "^las:transition:[a-f0-9]{32}$",
                "type": "string"
              },
              {
                "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
                "type": "string"
              }
            ]
          },
          "startTime": {
            "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            "type": "string",
            "nullable": true
          },
          "logId": {
            "pattern": "^las:log:[a-f0-9]{32}$",
            "type": "string",
            "nullable": true
          },
          "endTime": {
            "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            "type": "string",
            "nullable": true
          },
          "completedBy": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "status": {
            "type": "string",
            "enum": [
              "running",
              "succeeded",
              "failed",
              "rejected",
              "retry",
              "error"
            ]
          }
        },
        "additionalProperties": false
      }
    },
    "transitionId": {
      "anyOf": [
        {
          "pattern": "^las:transition:[a-f0-9]{32}$",
          "type": "string"
        },
        {
          "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
          "type": "string"
        }
      ]
    },
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "status": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "running",
          "succeeded",
          "failed",
          "rejected",
          "retry",
          "error"
        ]
      }
    }
  },
  "additionalProperties": false
}
```


#### POST /transitions/{transitionId}/executions


| Path name | Path value |
| --- | --- |
| transitionId | Id of transition on the form las:transition:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "POST /transitions/{transitionId}/executions",
  "type": "object"
}
```


##### Response body JSON Schema
```json
{
  "title": "transition-execution",
  "required": [
    "completedBy",
    "executionId",
    "input",
    "status",
    "transitionId"
  ],
  "type": "object",
  "properties": {
    "executionId": {
      "pattern": "^las:transition-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "input": {
      "type": "object"
    },
    "transitionId": {
      "anyOf": [
        {
          "pattern": "^las:transition:[a-f0-9]{32}$",
          "type": "string"
        },
        {
          "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
          "type": "string"
        }
      ]
    },
    "startTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "logId": {
      "pattern": "^las:log:[a-f0-9]{32}$",
      "type": "string",
      "nullable": true
    },
    "endTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "completedBy": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "status": {
      "type": "string",
      "enum": [
        "running",
        "succeeded",
        "failed",
        "rejected",
        "retry",
        "error"
      ]
    }
  },
  "additionalProperties": false
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








##### Response body JSON Schema
```json
{
  "title": "transition-execution",
  "required": [
    "completedBy",
    "executionId",
    "input",
    "status",
    "transitionId"
  ],
  "type": "object",
  "properties": {
    "executionId": {
      "pattern": "^las:transition-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "input": {
      "type": "object"
    },
    "transitionId": {
      "anyOf": [
        {
          "pattern": "^las:transition:[a-f0-9]{32}$",
          "type": "string"
        },
        {
          "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
          "type": "string"
        }
      ]
    },
    "startTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "logId": {
      "pattern": "^las:log:[a-f0-9]{32}$",
      "type": "string",
      "nullable": true
    },
    "endTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "completedBy": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "status": {
      "type": "string",
      "enum": [
        "running",
        "succeeded",
        "failed",
        "rejected",
        "retry",
        "error"
      ]
    }
  },
  "additionalProperties": false
}
```


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





##### Request body JSON Schema
```json
{
  "title": "PATCH transitions/{transitionId}/executions/{executionId}",
  "type": "object",
  "properties": {
    "output": {
      "type": "object"
    },
    "startTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "error": {
      "required": [
        "message"
      ],
      "type": "object",
      "properties": {
        "message": {
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "status": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "anyOf": [
    {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "succeeded"
          ]
        }
      }
    },
    {
      "type": "object",
      "properties": {
        "status": {
          "type": "string",
          "enum": [
            "failed",
            "rejected",
            "retry"
          ]
        }
      }
    }
  ]
}
```


##### Response body JSON Schema
```json
{
  "title": "transition-execution",
  "required": [
    "completedBy",
    "executionId",
    "input",
    "status",
    "transitionId"
  ],
  "type": "object",
  "properties": {
    "executionId": {
      "pattern": "^las:transition-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "input": {
      "type": "object"
    },
    "transitionId": {
      "anyOf": [
        {
          "pattern": "^las:transition:[a-f0-9]{32}$",
          "type": "string"
        },
        {
          "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
          "type": "string"
        }
      ]
    },
    "startTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "logId": {
      "pattern": "^las:log:[a-f0-9]{32}$",
      "type": "string",
      "nullable": true
    },
    "endTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "completedBy": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "status": {
      "type": "string",
      "enum": [
        "running",
        "succeeded",
        "failed",
        "rejected",
        "retry",
        "error"
      ]
    }
  },
  "additionalProperties": false
}
```


#### POST /transitions/{transitionId}/executions/{executionId}/heartbeats


| Path name | Path value |
| --- | --- |
| transitionId | Id of transition on the form las:transition:&lt;hex&gt; |
| executionId | Id of execution on the form las:transition-execution:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "POST /transitions/{transitionId}/executions/{executionId}/heartbeats",
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
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "title": "users",
  "required": [
    "nextToken",
    "users"
  ],
  "type": "object",
  "properties": {
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "users": {
      "type": "array",
      "items": {
        "required": [
          "email",
          "userId"
        ],
        "type": "object",
        "properties": {
          "name": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "avatar": {
            "maxLength": 131072,
            "type": "string",
            "nullable": true
          },
          "userId": {
            "pattern": "^las:user:[a-f0-9]{32}$",
            "type": "string"
          },
          "email": {
            "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
            "type": "string"
          }
        },
        "additionalProperties": false
      }
    }
  },
  "additionalProperties": false
}
```


#### POST /users





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "POST /users",
  "required": [
    "email"
  ],
  "type": "object",
  "properties": {
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "avatar": {
      "maxLength": 131072,
      "type": "string",
      "nullable": true
    },
    "email": {
      "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "user",
  "required": [
    "email",
    "userId"
  ],
  "type": "object",
  "properties": {
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "avatar": {
      "maxLength": 131072,
      "type": "string",
      "nullable": true
    },
    "userId": {
      "pattern": "^las:user:[a-f0-9]{32}$",
      "type": "string"
    },
    "email": {
      "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
      "type": "string"
    }
  },
  "additionalProperties": false
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








##### Response body JSON Schema
```json
{
  "title": "user",
  "required": [
    "email",
    "userId"
  ],
  "type": "object",
  "properties": {
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "avatar": {
      "maxLength": 131072,
      "type": "string",
      "nullable": true
    },
    "userId": {
      "pattern": "^las:user:[a-f0-9]{32}$",
      "type": "string"
    },
    "email": {
      "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


#### GET /users/{userId}


| Path name | Path value |
| --- | --- |
| userId | Id of user on the form las:user:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |








##### Response body JSON Schema
```json
{
  "title": "user",
  "required": [
    "email",
    "userId"
  ],
  "type": "object",
  "properties": {
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "avatar": {
      "maxLength": 131072,
      "type": "string",
      "nullable": true
    },
    "userId": {
      "pattern": "^las:user:[a-f0-9]{32}$",
      "type": "string"
    },
    "email": {
      "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


#### PATCH /users/{userId}


| Path name | Path value |
| --- | --- |
| userId | Id of user on the form las:user:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "PATCH /users/{userId}",
  "minProperties": 1,
  "type": "object",
  "properties": {
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "avatar": {
      "maxLength": 131072,
      "type": "string",
      "nullable": true
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "user",
  "required": [
    "email",
    "userId"
  ],
  "type": "object",
  "properties": {
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "avatar": {
      "maxLength": 131072,
      "type": "string",
      "nullable": true
    },
    "userId": {
      "pattern": "^las:user:[a-f0-9]{32}$",
      "type": "string"
    },
    "email": {
      "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
      "type": "string"
    }
  },
  "additionalProperties": false
}
```


#### GET /workflows





| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |


| Query name | Query value |
| --- | --- |
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "title": "workflows",
  "required": [
    "nextToken",
    "workflows"
  ],
  "type": "object",
  "properties": {
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "workflows": {
      "type": "array",
      "items": {
        "required": [
          "completedConfig",
          "description",
          "errorConfig",
          "name",
          "workflowId"
        ],
        "type": "object",
        "properties": {
          "completedConfig": {
            "required": [
              "imageUrl"
            ],
            "type": "object",
            "properties": {
              "environmentSecrets": {
                "type": "array",
                "items": {
                  "pattern": "^las:secret:[a-f0-9]{32}$",
                  "type": "string"
                }
              },
              "environment": {
                "type": "object",
                "additionalProperties": {
                  "type": "string"
                }
              },
              "imageUrl": {
                "type": "string"
              },
              "secretId": {
                "pattern": "^las:secret:[a-f0-9]{32}$",
                "type": "string"
              }
            },
            "additionalProperties": false
          },
          "name": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "description": {
            "maxLength": 4096,
            "type": "string",
            "nullable": true
          },
          "workflowId": {
            "pattern": "^las:workflow:[a-f0-9]{32}$",
            "type": "string"
          },
          "errorConfig": {
            "type": "object",
            "properties": {
              "manualRetry": {
                "type": "boolean"
              },
              "email": {
                "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
                "type": "string"
              }
            },
            "additionalProperties": false
          }
        },
        "additionalProperties": false
      }
    }
  },
  "additionalProperties": false
}
```


#### POST /workflows





| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "POST /workflows",
  "required": [
    "specification"
  ],
  "type": "object",
  "properties": {
    "completedConfig": {
      "required": [
        "imageUrl"
      ],
      "type": "object",
      "properties": {
        "environmentSecrets": {
          "type": "array",
          "items": {
            "pattern": "^las:secret:[a-f0-9]{32}$",
            "type": "string"
          }
        },
        "environment": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "imageUrl": {
          "type": "string"
        },
        "secretId": {
          "pattern": "^las:secret:[a-f0-9]{32}$",
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "specification": {
      "required": [
        "definition"
      ],
      "type": "object",
      "properties": {
        "language": {
          "type": "string",
          "enum": [
            "ASL"
          ]
        },
        "definition": {
          "type": "object"
        },
        "version": {
          "type": "string",
          "enum": [
            "1.0.0"
          ]
        }
      },
      "additionalProperties": false
    },
    "errorConfig": {
      "type": "object",
      "properties": {
        "manualRetry": {
          "type": "boolean"
        },
        "email": {
          "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "workflow",
  "required": [
    "completedConfig",
    "description",
    "errorConfig",
    "name",
    "workflowId"
  ],
  "type": "object",
  "properties": {
    "completedConfig": {
      "required": [
        "imageUrl"
      ],
      "type": "object",
      "properties": {
        "environmentSecrets": {
          "type": "array",
          "items": {
            "pattern": "^las:secret:[a-f0-9]{32}$",
            "type": "string"
          }
        },
        "environment": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "imageUrl": {
          "type": "string"
        },
        "secretId": {
          "pattern": "^las:secret:[a-f0-9]{32}$",
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    },
    "errorConfig": {
      "type": "object",
      "properties": {
        "manualRetry": {
          "type": "boolean"
        },
        "email": {
          "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
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








##### Response body JSON Schema
```json
{
  "title": "workflow",
  "required": [
    "completedConfig",
    "description",
    "errorConfig",
    "name",
    "workflowId"
  ],
  "type": "object",
  "properties": {
    "completedConfig": {
      "required": [
        "imageUrl"
      ],
      "type": "object",
      "properties": {
        "environmentSecrets": {
          "type": "array",
          "items": {
            "pattern": "^las:secret:[a-f0-9]{32}$",
            "type": "string"
          }
        },
        "environment": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "imageUrl": {
          "type": "string"
        },
        "secretId": {
          "pattern": "^las:secret:[a-f0-9]{32}$",
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    },
    "errorConfig": {
      "type": "object",
      "properties": {
        "manualRetry": {
          "type": "boolean"
        },
        "email": {
          "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
```


#### GET /workflows/{workflowId}


| Path name | Path value |
| --- | --- |
| workflowId | Id of workflow on the form las:workflow:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |








##### Response body JSON Schema
```json
{
  "title": "workflow",
  "required": [
    "completedConfig",
    "description",
    "errorConfig",
    "name",
    "workflowId"
  ],
  "type": "object",
  "properties": {
    "completedConfig": {
      "required": [
        "imageUrl"
      ],
      "type": "object",
      "properties": {
        "environmentSecrets": {
          "type": "array",
          "items": {
            "pattern": "^las:secret:[a-f0-9]{32}$",
            "type": "string"
          }
        },
        "environment": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "imageUrl": {
          "type": "string"
        },
        "secretId": {
          "pattern": "^las:secret:[a-f0-9]{32}$",
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    },
    "errorConfig": {
      "type": "object",
      "properties": {
        "manualRetry": {
          "type": "boolean"
        },
        "email": {
          "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
```


#### PATCH /workflows/{workflowId}


| Path name | Path value |
| --- | --- |
| workflowId | Id of workflow on the form las:workflow:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "PATCH /workflows/{workflowId}",
  "minProperties": 1,
  "type": "object",
  "properties": {
    "completedConfig": {
      "required": [
        "imageUrl"
      ],
      "type": "object",
      "properties": {
        "environmentSecrets": {
          "type": "array",
          "items": {
            "pattern": "^las:secret:[a-f0-9]{32}$",
            "type": "string"
          }
        },
        "environment": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "imageUrl": {
          "type": "string"
        },
        "secretId": {
          "pattern": "^las:secret:[a-f0-9]{32}$",
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "errorConfig": {
      "type": "object",
      "properties": {
        "manualRetry": {
          "type": "boolean"
        },
        "email": {
          "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "workflow",
  "required": [
    "completedConfig",
    "description",
    "errorConfig",
    "name",
    "workflowId"
  ],
  "type": "object",
  "properties": {
    "completedConfig": {
      "required": [
        "imageUrl"
      ],
      "type": "object",
      "properties": {
        "environmentSecrets": {
          "type": "array",
          "items": {
            "pattern": "^las:secret:[a-f0-9]{32}$",
            "type": "string"
          }
        },
        "environment": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        "imageUrl": {
          "type": "string"
        },
        "secretId": {
          "pattern": "^las:secret:[a-f0-9]{32}$",
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "name": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "description": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    },
    "errorConfig": {
      "type": "object",
      "properties": {
        "manualRetry": {
          "type": "boolean"
        },
        "email": {
          "pattern": "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
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
| status | running \| succeeded \| failed \| rejected \| retry |
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |
| sortBy | startTime \| endTime |
| order | ascending \| descending |





##### Response body JSON Schema
```json
{
  "title": "workflow-executions",
  "required": [
    "executions",
    "nextToken",
    "workflowId"
  ],
  "type": "object",
  "properties": {
    "executions": {
      "type": "array",
      "items": {
        "required": [
          "endTime",
          "executionId",
          "input",
          "output",
          "startTime",
          "status",
          "transitionExecutions",
          "workflowId"
        ],
        "type": "object",
        "properties": {
          "transitionExecutions": {
            "type": "object"
          },
          "output": {
            "type": "object"
          },
          "executionId": {
            "pattern": "^las:workflow-execution:[a-f0-9]{32}$",
            "type": "string"
          },
          "input": {
            "type": "object"
          },
          "logId": {
            "pattern": "^las:log:[a-f0-9]{32}$",
            "type": "string",
            "nullable": true
          },
          "startTime": {
            "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            "type": "string",
            "nullable": true
          },
          "endTime": {
            "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            "type": "string",
            "nullable": true
          },
          "workflowId": {
            "pattern": "^las:workflow:[a-f0-9]{32}$",
            "type": "string"
          },
          "completedBy": {
            "type": "array",
            "items": {
              "anyOf": [
                {
                  "pattern": "^las:user:[a-f0-9]{32}$",
                  "type": "string"
                },
                {
                  "pattern": "^las:app-client:[a-f0-9]{32}$",
                  "type": "string"
                }
              ]
            }
          },
          "status": {
            "type": "string",
            "enum": [
              "running",
              "succeeded",
              "failed",
              "rejected",
              "retry",
              "error"
            ]
          }
        },
        "additionalProperties": false
      }
    },
    "nextToken": {
      "maxLength": 4096,
      "type": "string",
      "nullable": true
    },
    "sortBy": {
      "type": "string",
      "enum": [
        "startTime",
        "endTime"
      ]
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    },
    "status": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "running",
          "succeeded",
          "failed",
          "rejected",
          "retry",
          "error"
        ]
      }
    },
    "order": {
      "type": "string",
      "enum": [
        "ascending",
        "descending"
      ]
    }
  },
  "additionalProperties": false
}
```


#### POST /workflows/{workflowId}/executions


| Path name | Path value |
| --- | --- |
| workflowId | Id of workflow on the form las:workflow:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "POST /workflows/{workflowId}/executions",
  "required": [
    "input"
  ],
  "type": "object",
  "properties": {
    "input": {
      "type": "object"
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "workflow-execution",
  "required": [
    "endTime",
    "executionId",
    "input",
    "output",
    "startTime",
    "status",
    "transitionExecutions",
    "workflowId"
  ],
  "type": "object",
  "properties": {
    "transitionExecutions": {
      "type": "object"
    },
    "output": {
      "type": "object"
    },
    "executionId": {
      "pattern": "^las:workflow-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "input": {
      "type": "object"
    },
    "logId": {
      "pattern": "^las:log:[a-f0-9]{32}$",
      "type": "string",
      "nullable": true
    },
    "startTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "endTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    },
    "completedBy": {
      "type": "array",
      "items": {
        "anyOf": [
          {
            "pattern": "^las:user:[a-f0-9]{32}$",
            "type": "string"
          },
          {
            "pattern": "^las:app-client:[a-f0-9]{32}$",
            "type": "string"
          }
        ]
      }
    },
    "status": {
      "type": "string",
      "enum": [
        "running",
        "succeeded",
        "failed",
        "rejected",
        "retry",
        "error"
      ]
    }
  },
  "additionalProperties": false
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








##### Response body JSON Schema
```json
{
  "title": "workflow-execution",
  "required": [
    "endTime",
    "executionId",
    "input",
    "output",
    "startTime",
    "status",
    "transitionExecutions",
    "workflowId"
  ],
  "type": "object",
  "properties": {
    "transitionExecutions": {
      "type": "object"
    },
    "output": {
      "type": "object"
    },
    "executionId": {
      "pattern": "^las:workflow-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "input": {
      "type": "object"
    },
    "logId": {
      "pattern": "^las:log:[a-f0-9]{32}$",
      "type": "string",
      "nullable": true
    },
    "startTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "endTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    },
    "completedBy": {
      "type": "array",
      "items": {
        "anyOf": [
          {
            "pattern": "^las:user:[a-f0-9]{32}$",
            "type": "string"
          },
          {
            "pattern": "^las:app-client:[a-f0-9]{32}$",
            "type": "string"
          }
        ]
      }
    },
    "status": {
      "type": "string",
      "enum": [
        "running",
        "succeeded",
        "failed",
        "rejected",
        "retry",
        "error"
      ]
    }
  },
  "additionalProperties": false
}
```


#### GET /workflows/{workflowId}/executions/{executionId}


| Path name | Path value |
| --- | --- |
| executionId | Id of execution on the form las:workflow-execution:&lt;hex&gt; |
| workflowId | Id of workflow on the form las:workflow:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |








##### Response body JSON Schema
```json
{
  "title": "workflow-execution",
  "required": [
    "endTime",
    "executionId",
    "input",
    "output",
    "startTime",
    "status",
    "transitionExecutions",
    "workflowId"
  ],
  "type": "object",
  "properties": {
    "transitionExecutions": {
      "type": "object"
    },
    "output": {
      "type": "object"
    },
    "executionId": {
      "pattern": "^las:workflow-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "input": {
      "type": "object"
    },
    "logId": {
      "pattern": "^las:log:[a-f0-9]{32}$",
      "type": "string",
      "nullable": true
    },
    "startTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "endTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    },
    "completedBy": {
      "type": "array",
      "items": {
        "anyOf": [
          {
            "pattern": "^las:user:[a-f0-9]{32}$",
            "type": "string"
          },
          {
            "pattern": "^las:app-client:[a-f0-9]{32}$",
            "type": "string"
          }
        ]
      }
    },
    "status": {
      "type": "string",
      "enum": [
        "running",
        "succeeded",
        "failed",
        "rejected",
        "retry",
        "error"
      ]
    }
  },
  "additionalProperties": false
}
```


#### PATCH /workflows/{workflowId}/executions/{executionId}


| Path name | Path value |
| --- | --- |
| executionId | Id of execution on the form las:workflow-execution:&lt;hex&gt; |
| workflowId | Id of workflow on the form las:workflow:&lt;hex&gt; |


| Header name | Header value |
| --- | --- |
| Content-Type | application/json |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key | &lt;your api key here&gt; |





##### Request body JSON Schema
```json
{
  "title": "PATCH workflows/{workflowId}/executions/{executionId}",
  "required": [
    "nextTransitionId"
  ],
  "type": "object",
  "properties": {
    "nextTransitionId": {
      "anyOf": [
        {
          "pattern": "^las:transition:[a-f0-9]{32}$",
          "type": "string"
        },
        {
          "pattern": "^las:transition:commons-[0-9A-Za-z-]+$",
          "type": "string"
        }
      ]
    }
  },
  "additionalProperties": false
}
```


##### Response body JSON Schema
```json
{
  "title": "workflow-execution",
  "required": [
    "endTime",
    "executionId",
    "input",
    "output",
    "startTime",
    "status",
    "transitionExecutions",
    "workflowId"
  ],
  "type": "object",
  "properties": {
    "transitionExecutions": {
      "type": "object"
    },
    "output": {
      "type": "object"
    },
    "executionId": {
      "pattern": "^las:workflow-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "input": {
      "type": "object"
    },
    "logId": {
      "pattern": "^las:log:[a-f0-9]{32}$",
      "type": "string",
      "nullable": true
    },
    "startTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "endTime": {
      "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
      "type": "string",
      "nullable": true
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    },
    "completedBy": {
      "type": "array",
      "items": {
        "anyOf": [
          {
            "pattern": "^las:user:[a-f0-9]{32}$",
            "type": "string"
          },
          {
            "pattern": "^las:app-client:[a-f0-9]{32}$",
            "type": "string"
          }
        ]
      }
    },
    "status": {
      "type": "string",
      "enum": [
        "running",
        "succeeded",
        "failed",
        "rejected",
        "retry",
        "error"
      ]
    }
  },
  "additionalProperties": false
}
```

