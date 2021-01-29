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
  "additionalProperties": false,
  "properties": {
    "assets": {
      "items": {
        "additionalProperties": false,
        "properties": {
          "assetId": {
            "pattern": "^las:asset:[a-f0-9]{32}$",
            "type": "string"
          },
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
          "assetId",
          "description",
          "name"
        ],
        "type": "object"
      },
      "type": "array"
    },
    "nextToken": {
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
    "assets"
  ],
  "title": "assets",
  "type": "object"
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


##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "assetId": {
      "pattern": "^las:asset:[a-f0-9]{32}$",
      "type": "string"
    },
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
    "assetId",
    "description",
    "name"
  ],
  "title": "asset",
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








##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "assetId": {
      "pattern": "^las:asset:[a-f0-9]{32}$",
      "type": "string"
    },
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
    "assetId",
    "description",
    "name"
  ],
  "title": "asset",
  "type": "object"
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


##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "assetId": {
      "pattern": "^las:asset:[a-f0-9]{32}$",
      "type": "string"
    },
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
    "assetId",
    "description",
    "name"
  ],
  "title": "asset",
  "type": "object"
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


##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "batchId": {
      "pattern": "^las:batch:[a-f0-9]{32}$",
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
    "batchId",
    "description",
    "name"
  ],
  "title": "batch",
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
| consentId | Id of consent on the form las:consent:&lt;hex&gt; |





##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "batchId": {
      "items": {
        "pattern": "^las:batch:[a-f0-9]{32}$",
        "type": "string"
      },
      "type": "array"
    },
    "consentId": {
      "items": {
        "pattern": "^las:consent:[a-f0-9]{32}$",
        "type": "string"
      },
      "type": "array"
    },
    "documents": {
      "items": {
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
          "documentId": {
            "pattern": "^las:document:[a-f0-9]{32}$",
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
          },
          "inferenceTime": {
            "minimum": 0,
            "type": "number"
          },
          "predictions": {
            "items": {
              "additionalProperties": false,
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
                  "anyOf": [
                    {
                      "maxLength": 64,
                      "minLength": 1,
                      "nullable": true,
                      "type": "string"
                    }
                  ]
                }
              },
              "required": [
                "confidence",
                "label",
                "value"
              ],
              "type": "object"
            },
            "type": "array"
          },
          "updated": {
            "minimum": 1,
            "type": "integer"
          }
        },
        "required": [
          "contentType",
          "documentId"
        ],
        "type": "object"
      },
      "type": "array"
    },
    "nextToken": {
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
    "documents"
  ],
  "title": "documents",
  "type": "object"
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
  "additionalProperties": false,
  "properties": {
    "batchId": {
      "items": {
        "pattern": "^las:batch:[a-f0-9]{32}$",
        "type": "string"
      },
      "type": "array"
    },
    "consentId": {
      "items": {
        "pattern": "^las:consent:[a-f0-9]{32}$",
        "type": "string"
      },
      "type": "array"
    },
    "documents": {
      "items": {
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
          "documentId": {
            "pattern": "^las:document:[a-f0-9]{32}$",
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
          },
          "inferenceTime": {
            "minimum": 0,
            "type": "number"
          },
          "predictions": {
            "items": {
              "additionalProperties": false,
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
                  "anyOf": [
                    {
                      "maxLength": 64,
                      "minLength": 1,
                      "nullable": true,
                      "type": "string"
                    }
                  ]
                }
              },
              "required": [
                "confidence",
                "label",
                "value"
              ],
              "type": "object"
            },
            "type": "array"
          },
          "updated": {
            "minimum": 1,
            "type": "integer"
          }
        },
        "required": [
          "contentType",
          "documentId"
        ],
        "type": "object"
      },
      "type": "array"
    },
    "nextToken": {
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
    "documents"
  ],
  "title": "documents",
  "type": "object"
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


##### Response body JSON Schema
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
    "documentId": {
      "pattern": "^las:document:[a-f0-9]{32}$",
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
    },
    "inferenceTime": {
      "minimum": 0,
      "type": "number"
    },
    "predictions": {
      "items": {
        "additionalProperties": false,
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
            "anyOf": [
              {
                "maxLength": 64,
                "minLength": 1,
                "nullable": true,
                "type": "string"
              }
            ]
          }
        },
        "required": [
          "confidence",
          "label",
          "value"
        ],
        "type": "object"
      },
      "type": "array"
    },
    "updated": {
      "minimum": 1,
      "type": "integer"
    }
  },
  "required": [
    "contentType",
    "documentId"
  ],
  "title": "document",
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








##### Response body JSON Schema
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
    "documentId": {
      "pattern": "^las:document:[a-f0-9]{32}$",
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
    },
    "inferenceTime": {
      "minimum": 0,
      "type": "number"
    },
    "predictions": {
      "items": {
        "additionalProperties": false,
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
            "anyOf": [
              {
                "maxLength": 64,
                "minLength": 1,
                "nullable": true,
                "type": "string"
              }
            ]
          }
        },
        "required": [
          "confidence",
          "label",
          "value"
        ],
        "type": "object"
      },
      "type": "array"
    },
    "updated": {
      "minimum": 1,
      "type": "integer"
    }
  },
  "required": [
    "contentType",
    "documentId"
  ],
  "title": "document",
  "type": "object"
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


##### Response body JSON Schema
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
    "documentId": {
      "pattern": "^las:document:[a-f0-9]{32}$",
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
    },
    "inferenceTime": {
      "minimum": 0,
      "type": "number"
    },
    "predictions": {
      "items": {
        "additionalProperties": false,
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
            "anyOf": [
              {
                "maxLength": 64,
                "minLength": 1,
                "nullable": true,
                "type": "string"
              }
            ]
          }
        },
        "required": [
          "confidence",
          "label",
          "value"
        ],
        "type": "object"
      },
      "type": "array"
    },
    "updated": {
      "minimum": 1,
      "type": "integer"
    }
  },
  "required": [
    "contentType",
    "documentId"
  ],
  "title": "document",
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








##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "events": {
      "items": {
        "type": "object"
      },
      "type": "array"
    },
    "logId": {
      "pattern": "^las:log:[a-f0-9]{32}$",
      "type": "string"
    },
    "transitionId": {
      "anyOf": [
        {
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
      ]
    }
  },
  "required": [
    "events",
    "logId"
  ],
  "title": "log",
  "type": "object"
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
  "additionalProperties": false,
  "properties": {
    "models": {
      "items": {
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
          "height": {
            "type": "integer"
          },
          "modelId": {
            "pattern": "^las:model:[0-9A-Za-z_]+$",
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
          },
          "width": {
            "type": "integer"
          }
        },
        "required": [
          "description",
          "height",
          "modelId",
          "name",
          "width"
        ],
        "type": "object"
      },
      "type": "array"
    },
    "nextToken": {
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
    "models"
  ],
  "title": "models",
  "type": "object"
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
  "additionalProperties": false,
  "properties": {
    "documentId": {
      "pattern": "^las:document:[a-f0-9]{32}$",
      "type": "string"
    },
    "inferenceTime": {
      "minimum": 0,
      "type": "number"
    },
    "modelId": {
      "pattern": "^las:model:[0-9A-Za-z_]+$",
      "type": "string"
    },
    "predictionId": {
      "pattern": "^las:prediction:[a-f0-9]{32}$",
      "type": "string"
    },
    "predictions": {
      "items": {
        "additionalProperties": false,
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
            "anyOf": [
              {
                "maxLength": 64,
                "minLength": 1,
                "nullable": true,
                "type": "string"
              }
            ]
          }
        },
        "required": [
          "confidence",
          "label",
          "value"
        ],
        "type": "object"
      },
      "type": "array"
    },
    "timestamp": {
      "minimum": 1,
      "type": "integer"
    }
  },
  "required": [
    "documentId",
    "inferenceTime",
    "modelId",
    "predictionId",
    "predictions",
    "timestamp"
  ],
  "title": "prediction",
  "type": "object"
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


##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "documentId": {
      "pattern": "^las:document:[a-f0-9]{32}$",
      "type": "string"
    },
    "inferenceTime": {
      "minimum": 0,
      "type": "number"
    },
    "modelId": {
      "pattern": "^las:model:[0-9A-Za-z_]+$",
      "type": "string"
    },
    "predictionId": {
      "pattern": "^las:prediction:[a-f0-9]{32}$",
      "type": "string"
    },
    "predictions": {
      "items": {
        "additionalProperties": false,
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
            "anyOf": [
              {
                "maxLength": 64,
                "minLength": 1,
                "nullable": true,
                "type": "string"
              }
            ]
          }
        },
        "required": [
          "confidence",
          "label",
          "value"
        ],
        "type": "object"
      },
      "type": "array"
    },
    "timestamp": {
      "minimum": 1,
      "type": "integer"
    }
  },
  "required": [
    "documentId",
    "inferenceTime",
    "modelId",
    "predictionId",
    "predictions",
    "timestamp"
  ],
  "title": "prediction",
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
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "nextToken": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "secrets": {
      "items": {
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
          },
          "secretId": {
            "pattern": "^las:secret:[a-f0-9]{32}$",
            "type": "string"
          }
        },
        "required": [
          "description",
          "name",
          "secretId"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "secrets"
  ],
  "title": "secrets",
  "type": "object"
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


##### Response body JSON Schema
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
    },
    "secretId": {
      "pattern": "^las:secret:[a-f0-9]{32}$",
      "type": "string"
    }
  },
  "required": [
    "description",
    "name",
    "secretId"
  ],
  "title": "secret",
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





##### Request body JSON Schema
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


##### Response body JSON Schema
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
    },
    "secretId": {
      "pattern": "^las:secret:[a-f0-9]{32}$",
      "type": "string"
    }
  },
  "required": [
    "description",
    "name",
    "secretId"
  ],
  "title": "secret",
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
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "nextToken": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "transitionType": {
      "items": {
        "enum": [
          "docker",
          "manual"
        ],
        "type": "string"
      },
      "type": "array"
    },
    "transitions": {
      "items": {
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
                "type": "object"
              }
            ]
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
          "transitionType": {
            "type": "string"
          }
        },
        "required": [
          "description",
          "name",
          "transitionId",
          "transitionType"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "transitions"
  ],
  "title": "transitions",
  "type": "object"
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


##### Response body JSON Schema
```json
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
          "type": "object"
        }
      ]
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
    "transitionType": {
      "type": "string"
    }
  },
  "required": [
    "description",
    "name",
    "transitionId",
    "transitionType"
  ],
  "title": "transition",
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





##### Request body JSON Schema
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


##### Response body JSON Schema
```json
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
          "type": "object"
        }
      ]
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
    "transitionType": {
      "type": "string"
    }
  },
  "required": [
    "description",
    "name",
    "transitionId",
    "transitionType"
  ],
  "title": "transition",
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
| nextToken | String value as returned by a previous list operation |
| order | ascending \| descending |
| executionId | String |
| status | running \| succeeded \| failed \| rejected \| retry |
| maxResults | Integer representing maximum number of resources to list |
| sortBy | startTime \| endTime |





##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "executions": {
      "items": {
        "additionalProperties": false,
        "properties": {
          "completedBy": {
            "anyOf": [
              {
                "maxLength": 4096,
                "nullable": true,
                "type": "string"
              }
            ]
          },
          "endTime": {
            "anyOf": [
              {
                "nullable": true,
                "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
                "type": "string"
              }
            ]
          },
          "executionId": {
            "pattern": "^las:transition-execution:[a-f0-9]{32}$",
            "type": "string"
          },
          "input": {
            "anyOf": [
              {
                "type": "object"
              }
            ]
          },
          "logId": {
            "anyOf": [
              {
                "nullable": true,
                "pattern": "^las:log:[a-f0-9]{32}$",
                "type": "string"
              }
            ]
          },
          "startTime": {
            "anyOf": [
              {
                "nullable": true,
                "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
                "type": "string"
              }
            ]
          },
          "status": {
            "enum": [
              "running",
              "succeeded",
              "failed",
              "rejected",
              "retry"
            ],
            "type": "string"
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
          }
        },
        "required": [
          "completedBy",
          "executionId",
          "input",
          "status",
          "transitionId"
        ],
        "type": "object"
      },
      "type": "array"
    },
    "nextToken": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "status": {
      "items": {
        "enum": [
          "running",
          "succeeded",
          "failed",
          "rejected",
          "retry"
        ],
        "type": "string"
      },
      "type": "array"
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
    }
  },
  "required": [
    "executions",
    "transitionId"
  ],
  "title": "transition-executions",
  "type": "object"
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
  "additionalProperties": false,
  "properties": {
    "completedBy": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "endTime": {
      "anyOf": [
        {
          "nullable": true,
          "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
          "type": "string"
        }
      ]
    },
    "executionId": {
      "pattern": "^las:transition-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "input": {
      "anyOf": [
        {
          "type": "object"
        }
      ]
    },
    "logId": {
      "anyOf": [
        {
          "nullable": true,
          "pattern": "^las:log:[a-f0-9]{32}$",
          "type": "string"
        }
      ]
    },
    "startTime": {
      "anyOf": [
        {
          "nullable": true,
          "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
          "type": "string"
        }
      ]
    },
    "status": {
      "enum": [
        "running",
        "succeeded",
        "failed",
        "rejected",
        "retry"
      ],
      "type": "string"
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
    }
  },
  "required": [
    "completedBy",
    "executionId",
    "input",
    "status",
    "transitionId"
  ],
  "title": "transition-execution",
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








##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "completedBy": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "endTime": {
      "anyOf": [
        {
          "nullable": true,
          "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
          "type": "string"
        }
      ]
    },
    "executionId": {
      "pattern": "^las:transition-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "input": {
      "anyOf": [
        {
          "type": "object"
        }
      ]
    },
    "logId": {
      "anyOf": [
        {
          "nullable": true,
          "pattern": "^las:log:[a-f0-9]{32}$",
          "type": "string"
        }
      ]
    },
    "startTime": {
      "anyOf": [
        {
          "nullable": true,
          "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
          "type": "string"
        }
      ]
    },
    "status": {
      "enum": [
        "running",
        "succeeded",
        "failed",
        "rejected",
        "retry"
      ],
      "type": "string"
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
    }
  },
  "required": [
    "completedBy",
    "executionId",
    "input",
    "status",
    "transitionId"
  ],
  "title": "transition-execution",
  "type": "object"
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


##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "completedBy": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "endTime": {
      "anyOf": [
        {
          "nullable": true,
          "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
          "type": "string"
        }
      ]
    },
    "executionId": {
      "pattern": "^las:transition-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "input": {
      "anyOf": [
        {
          "type": "object"
        }
      ]
    },
    "logId": {
      "anyOf": [
        {
          "nullable": true,
          "pattern": "^las:log:[a-f0-9]{32}$",
          "type": "string"
        }
      ]
    },
    "startTime": {
      "anyOf": [
        {
          "nullable": true,
          "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
          "type": "string"
        }
      ]
    },
    "status": {
      "enum": [
        "running",
        "succeeded",
        "failed",
        "rejected",
        "retry"
      ],
      "type": "string"
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
    }
  },
  "required": [
    "completedBy",
    "executionId",
    "input",
    "status",
    "transitionId"
  ],
  "title": "transition-execution",
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
  "additionalProperties": false,
  "properties": {
    "nextToken": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "users": {
      "items": {
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
          },
          "userId": {
            "pattern": "^las:user:[a-f0-9]{32}$",
            "type": "string"
          }
        },
        "required": [
          "email",
          "userId"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "users"
  ],
  "title": "users",
  "type": "object"
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


##### Response body JSON Schema
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
    },
    "userId": {
      "pattern": "^las:user:[a-f0-9]{32}$",
      "type": "string"
    }
  },
  "required": [
    "email",
    "userId"
  ],
  "title": "user",
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








##### Response body JSON Schema
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
    },
    "userId": {
      "pattern": "^las:user:[a-f0-9]{32}$",
      "type": "string"
    }
  },
  "required": [
    "email",
    "userId"
  ],
  "title": "user",
  "type": "object"
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
    },
    "userId": {
      "pattern": "^las:user:[a-f0-9]{32}$",
      "type": "string"
    }
  },
  "required": [
    "email",
    "userId"
  ],
  "title": "user",
  "type": "object"
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


##### Response body JSON Schema
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
    },
    "userId": {
      "pattern": "^las:user:[a-f0-9]{32}$",
      "type": "string"
    }
  },
  "required": [
    "email",
    "userId"
  ],
  "title": "user",
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
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |





##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "nextToken": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "workflows": {
      "items": {
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
          },
          "workflowId": {
            "pattern": "^las:workflow:[a-f0-9]{32}$",
            "type": "string"
          }
        },
        "required": [
          "description",
          "name",
          "workflowId"
        ],
        "type": "object"
      },
      "type": "array"
    }
  },
  "required": [
    "workflows"
  ],
  "title": "workflows",
  "type": "object"
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


##### Response body JSON Schema
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
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    }
  },
  "required": [
    "description",
    "name",
    "workflowId"
  ],
  "title": "workflow",
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








##### Response body JSON Schema
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
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    }
  },
  "required": [
    "description",
    "name",
    "workflowId"
  ],
  "title": "workflow",
  "type": "object"
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


##### Response body JSON Schema
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
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    }
  },
  "required": [
    "description",
    "name",
    "workflowId"
  ],
  "title": "workflow",
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
| status | running \| succeeded \| failed \| rejected \| retry |
| nextToken | String value as returned by a previous list operation |
| maxResults | Integer representing maximum number of resources to list |
| sortBy | startTime \| endTime |
| order | ascending \| descending |





##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "executions": {
      "items": {
        "additionalProperties": false,
        "properties": {
          "completedBy": {
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
            },
            "type": "array"
          },
          "endTime": {
            "anyOf": [
              {
                "nullable": true,
                "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
                "type": "string"
              }
            ]
          },
          "executionId": {
            "pattern": "^las:workflow-execution:[a-f0-9]{32}$",
            "type": "string"
          },
          "input": {
            "anyOf": [
              {
                "type": "object"
              }
            ]
          },
          "output": {
            "anyOf": [
              {
                "type": "object"
              }
            ]
          },
          "startTime": {
            "anyOf": [
              {
                "nullable": true,
                "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
                "type": "string"
              }
            ]
          },
          "status": {
            "enum": [
              "running",
              "succeeded",
              "failed",
              "rejected",
              "retry"
            ],
            "type": "string"
          },
          "transitionExecutions": {
            "anyOf": [
              {
                "type": "object"
              }
            ]
          },
          "workflowId": {
            "pattern": "^las:workflow:[a-f0-9]{32}$",
            "type": "string"
          }
        },
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
        "type": "object"
      },
      "type": "array"
    },
    "nextToken": {
      "anyOf": [
        {
          "maxLength": 4096,
          "nullable": true,
          "type": "string"
        }
      ]
    },
    "order": {
      "enum": [
        "ascending",
        "descending"
      ],
      "type": "string"
    },
    "sortBy": {
      "enum": [
        "startTime",
        "endTime"
      ],
      "type": "string"
    },
    "status": {
      "items": {
        "enum": [
          "running",
          "succeeded",
          "failed",
          "rejected",
          "retry"
        ],
        "type": "string"
      },
      "type": "array"
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    }
  },
  "required": [
    "executions",
    "workflowId"
  ],
  "title": "workflow-executions",
  "type": "object"
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


##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "completedBy": {
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
      },
      "type": "array"
    },
    "endTime": {
      "anyOf": [
        {
          "nullable": true,
          "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
          "type": "string"
        }
      ]
    },
    "executionId": {
      "pattern": "^las:workflow-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "input": {
      "anyOf": [
        {
          "type": "object"
        }
      ]
    },
    "output": {
      "anyOf": [
        {
          "type": "object"
        }
      ]
    },
    "startTime": {
      "anyOf": [
        {
          "nullable": true,
          "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
          "type": "string"
        }
      ]
    },
    "status": {
      "enum": [
        "running",
        "succeeded",
        "failed",
        "rejected",
        "retry"
      ],
      "type": "string"
    },
    "transitionExecutions": {
      "anyOf": [
        {
          "type": "object"
        }
      ]
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    }
  },
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
  "title": "workflow-execution",
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








##### Response body JSON Schema
```json
{
  "additionalProperties": false,
  "properties": {
    "completedBy": {
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
      },
      "type": "array"
    },
    "endTime": {
      "anyOf": [
        {
          "nullable": true,
          "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
          "type": "string"
        }
      ]
    },
    "executionId": {
      "pattern": "^las:workflow-execution:[a-f0-9]{32}$",
      "type": "string"
    },
    "input": {
      "anyOf": [
        {
          "type": "object"
        }
      ]
    },
    "output": {
      "anyOf": [
        {
          "type": "object"
        }
      ]
    },
    "startTime": {
      "anyOf": [
        {
          "nullable": true,
          "pattern": "^[0-9]{4}-?[0-9]{2}-?[0-9]{2} ?[0-9]{2}:?[0-9]{2}:?[0-9]{2}.?[0-9]{6}",
          "type": "string"
        }
      ]
    },
    "status": {
      "enum": [
        "running",
        "succeeded",
        "failed",
        "rejected",
        "retry"
      ],
      "type": "string"
    },
    "transitionExecutions": {
      "anyOf": [
        {
          "type": "object"
        }
      ]
    },
    "workflowId": {
      "pattern": "^las:workflow:[a-f0-9]{32}$",
      "type": "string"
    }
  },
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
  "title": "workflow-execution",
  "type": "object"
}
```

