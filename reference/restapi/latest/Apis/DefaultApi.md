# DefaultApi

All URIs are relative to *https://api.lucidtech.ai/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assetsAssetIdGet**](DefaultApi.md#assetsAssetIdGet) | **GET** /assets/{assetId} | 
[**assetsAssetIdOptions**](DefaultApi.md#assetsAssetIdOptions) | **OPTIONS** /assets/{assetId} | 
[**assetsAssetIdPatch**](DefaultApi.md#assetsAssetIdPatch) | **PATCH** /assets/{assetId} | 
[**assetsGet**](DefaultApi.md#assetsGet) | **GET** /assets | 
[**assetsOptions**](DefaultApi.md#assetsOptions) | **OPTIONS** /assets | 
[**assetsPost**](DefaultApi.md#assetsPost) | **POST** /assets | 
[**batchesOptions**](DefaultApi.md#batchesOptions) | **OPTIONS** /batches | 
[**batchesPost**](DefaultApi.md#batchesPost) | **POST** /batches | 
[**documentsDelete**](DefaultApi.md#documentsDelete) | **DELETE** /documents | 
[**documentsDocumentIdGet**](DefaultApi.md#documentsDocumentIdGet) | **GET** /documents/{documentId} | 
[**documentsDocumentIdOptions**](DefaultApi.md#documentsDocumentIdOptions) | **OPTIONS** /documents/{documentId} | 
[**documentsDocumentIdPatch**](DefaultApi.md#documentsDocumentIdPatch) | **PATCH** /documents/{documentId} | 
[**documentsGet**](DefaultApi.md#documentsGet) | **GET** /documents | 
[**documentsOptions**](DefaultApi.md#documentsOptions) | **OPTIONS** /documents | 
[**documentsPost**](DefaultApi.md#documentsPost) | **POST** /documents | 
[**logsLogIdGet**](DefaultApi.md#logsLogIdGet) | **GET** /logs/{logId} | 
[**logsLogIdOptions**](DefaultApi.md#logsLogIdOptions) | **OPTIONS** /logs/{logId} | 
[**logsOptions**](DefaultApi.md#logsOptions) | **OPTIONS** /logs | 
[**modelsGet**](DefaultApi.md#modelsGet) | **GET** /models | 
[**modelsOptions**](DefaultApi.md#modelsOptions) | **OPTIONS** /models | 
[**predictionsGet**](DefaultApi.md#predictionsGet) | **GET** /predictions | 
[**predictionsOptions**](DefaultApi.md#predictionsOptions) | **OPTIONS** /predictions | 
[**predictionsPost**](DefaultApi.md#predictionsPost) | **POST** /predictions | 
[**secretsGet**](DefaultApi.md#secretsGet) | **GET** /secrets | 
[**secretsOptions**](DefaultApi.md#secretsOptions) | **OPTIONS** /secrets | 
[**secretsPost**](DefaultApi.md#secretsPost) | **POST** /secrets | 
[**secretsSecretIdOptions**](DefaultApi.md#secretsSecretIdOptions) | **OPTIONS** /secrets/{secretId} | 
[**secretsSecretIdPatch**](DefaultApi.md#secretsSecretIdPatch) | **PATCH** /secrets/{secretId} | 
[**transitionsGet**](DefaultApi.md#transitionsGet) | **GET** /transitions | 
[**transitionsOptions**](DefaultApi.md#transitionsOptions) | **OPTIONS** /transitions | 
[**transitionsPost**](DefaultApi.md#transitionsPost) | **POST** /transitions | 
[**transitionsTransitionIdExecutionsExecutionIdGet**](DefaultApi.md#transitionsTransitionIdExecutionsExecutionIdGet) | **GET** /transitions/{transitionId}/executions/{executionId} | 
[**transitionsTransitionIdExecutionsExecutionIdOptions**](DefaultApi.md#transitionsTransitionIdExecutionsExecutionIdOptions) | **OPTIONS** /transitions/{transitionId}/executions/{executionId} | 
[**transitionsTransitionIdExecutionsExecutionIdPatch**](DefaultApi.md#transitionsTransitionIdExecutionsExecutionIdPatch) | **PATCH** /transitions/{transitionId}/executions/{executionId} | 
[**transitionsTransitionIdExecutionsGet**](DefaultApi.md#transitionsTransitionIdExecutionsGet) | **GET** /transitions/{transitionId}/executions | 
[**transitionsTransitionIdExecutionsOptions**](DefaultApi.md#transitionsTransitionIdExecutionsOptions) | **OPTIONS** /transitions/{transitionId}/executions | 
[**transitionsTransitionIdExecutionsPost**](DefaultApi.md#transitionsTransitionIdExecutionsPost) | **POST** /transitions/{transitionId}/executions | 
[**transitionsTransitionIdOptions**](DefaultApi.md#transitionsTransitionIdOptions) | **OPTIONS** /transitions/{transitionId} | 
[**transitionsTransitionIdPatch**](DefaultApi.md#transitionsTransitionIdPatch) | **PATCH** /transitions/{transitionId} | 
[**usersGet**](DefaultApi.md#usersGet) | **GET** /users | 
[**usersOptions**](DefaultApi.md#usersOptions) | **OPTIONS** /users | 
[**usersPost**](DefaultApi.md#usersPost) | **POST** /users | 
[**usersUserIdDelete**](DefaultApi.md#usersUserIdDelete) | **DELETE** /users/{userId} | 
[**usersUserIdGet**](DefaultApi.md#usersUserIdGet) | **GET** /users/{userId} | 
[**usersUserIdOptions**](DefaultApi.md#usersUserIdOptions) | **OPTIONS** /users/{userId} | 
[**usersUserIdPatch**](DefaultApi.md#usersUserIdPatch) | **PATCH** /users/{userId} | 
[**workflowsGet**](DefaultApi.md#workflowsGet) | **GET** /workflows | 
[**workflowsOptions**](DefaultApi.md#workflowsOptions) | **OPTIONS** /workflows | 
[**workflowsPost**](DefaultApi.md#workflowsPost) | **POST** /workflows | 
[**workflowsWorkflowIdDelete**](DefaultApi.md#workflowsWorkflowIdDelete) | **DELETE** /workflows/{workflowId} | 
[**workflowsWorkflowIdExecutionsExecutionIdDelete**](DefaultApi.md#workflowsWorkflowIdExecutionsExecutionIdDelete) | **DELETE** /workflows/{workflowId}/executions/{executionId} | 
[**workflowsWorkflowIdExecutionsExecutionIdOptions**](DefaultApi.md#workflowsWorkflowIdExecutionsExecutionIdOptions) | **OPTIONS** /workflows/{workflowId}/executions/{executionId} | 
[**workflowsWorkflowIdExecutionsGet**](DefaultApi.md#workflowsWorkflowIdExecutionsGet) | **GET** /workflows/{workflowId}/executions | 
[**workflowsWorkflowIdExecutionsOptions**](DefaultApi.md#workflowsWorkflowIdExecutionsOptions) | **OPTIONS** /workflows/{workflowId}/executions | 
[**workflowsWorkflowIdExecutionsPost**](DefaultApi.md#workflowsWorkflowIdExecutionsPost) | **POST** /workflows/{workflowId}/executions | 
[**workflowsWorkflowIdOptions**](DefaultApi.md#workflowsWorkflowIdOptions) | **OPTIONS** /workflows/{workflowId} | 
[**workflowsWorkflowIdPatch**](DefaultApi.md#workflowsWorkflowIdPatch) | **PATCH** /workflows/{workflowId} | 


<a name="assetsAssetIdGet"></a>
# **assetsAssetIdGet**
> Asset assetsAssetIdGet(assetId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **String**|  | [default to null]

### Return type

[**Asset**](../Models/Asset.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="assetsAssetIdOptions"></a>
# **assetsAssetIdOptions**
> Object assetsAssetIdOptions(assetId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="assetsAssetIdPatch"></a>
# **assetsAssetIdPatch**
> Asset assetsAssetIdPatch(Content-Type, assetId, PatchAssetId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **assetId** | **String**|  | [default to null]
 **PatchAssetId** | [**PatchAssetId**](../Models/PatchAssetId.md)|  |

### Return type

[**Asset**](../Models/Asset.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="assetsGet"></a>
# **assetsGet**
> Assets assetsGet(nextToken, maxResults)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextToken** | **String**|  | [optional] [default to null]
 **maxResults** | **String**|  | [optional] [default to null]

### Return type

[**Assets**](../Models/Assets.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="assetsOptions"></a>
# **assetsOptions**
> Object assetsOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="assetsPost"></a>
# **assetsPost**
> Asset assetsPost(Content-Type, PostAssets)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **PostAssets** | [**PostAssets**](../Models/PostAssets.md)|  |

### Return type

[**Asset**](../Models/Asset.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="batchesOptions"></a>
# **batchesOptions**
> Object batchesOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="batchesPost"></a>
# **batchesPost**
> Batch batchesPost(Content-Type, PostBatches)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **PostBatches** | [**PostBatches**](../Models/PostBatches.md)|  |

### Return type

[**Batch**](../Models/Batch.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="documentsDelete"></a>
# **documentsDelete**
> Documents documentsDelete(consentId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **consentId** | **String**|  | [optional] [default to null]

### Return type

[**Documents**](../Models/Documents.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="documentsDocumentIdGet"></a>
# **documentsDocumentIdGet**
> Document documentsDocumentIdGet(documentId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**|  | [default to null]

### Return type

[**Document**](../Models/Document.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="documentsDocumentIdOptions"></a>
# **documentsDocumentIdOptions**
> Object documentsDocumentIdOptions(documentId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="documentsDocumentIdPatch"></a>
# **documentsDocumentIdPatch**
> Document documentsDocumentIdPatch(Content-Type, documentId, PatchDocumentId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **documentId** | **String**|  | [default to null]
 **PatchDocumentId** | [**PatchDocumentId**](../Models/PatchDocumentId.md)|  |

### Return type

[**Document**](../Models/Document.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="documentsGet"></a>
# **documentsGet**
> Documents documentsGet(batchId, consentId, nextToken, maxResults)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchId** | **String**|  | [optional] [default to null]
 **consentId** | **String**|  | [optional] [default to null]
 **nextToken** | **String**|  | [optional] [default to null]
 **maxResults** | **String**|  | [optional] [default to null]

### Return type

[**Documents**](../Models/Documents.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="documentsOptions"></a>
# **documentsOptions**
> Object documentsOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="documentsPost"></a>
# **documentsPost**
> Document documentsPost(Content-Type, PostDocuments)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **PostDocuments** | [**PostDocuments**](../Models/PostDocuments.md)|  |

### Return type

[**Document**](../Models/Document.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="logsLogIdGet"></a>
# **logsLogIdGet**
> Log logsLogIdGet(logId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logId** | **String**|  | [default to null]

### Return type

[**Log**](../Models/Log.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="logsLogIdOptions"></a>
# **logsLogIdOptions**
> Object logsLogIdOptions(logId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="logsOptions"></a>
# **logsOptions**
> Object logsOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="modelsGet"></a>
# **modelsGet**
> Models modelsGet(nextToken, maxResults)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextToken** | **String**|  | [optional] [default to null]
 **maxResults** | **String**|  | [optional] [default to null]

### Return type

[**Models**](../Models/Models.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="modelsOptions"></a>
# **modelsOptions**
> Object modelsOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="predictionsGet"></a>
# **predictionsGet**
> Prediction predictionsGet(nextToken, maxResults)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextToken** | **String**|  | [optional] [default to null]
 **maxResults** | **String**|  | [optional] [default to null]

### Return type

[**Prediction**](../Models/Prediction.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="predictionsOptions"></a>
# **predictionsOptions**
> Object predictionsOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="predictionsPost"></a>
# **predictionsPost**
> Prediction predictionsPost(Content-Type, PostPredictions)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **PostPredictions** | [**PostPredictions**](../Models/PostPredictions.md)|  |

### Return type

[**Prediction**](../Models/Prediction.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="secretsGet"></a>
# **secretsGet**
> Secrets secretsGet(nextToken, maxResults)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextToken** | **String**|  | [optional] [default to null]
 **maxResults** | **String**|  | [optional] [default to null]

### Return type

[**Secrets**](../Models/Secrets.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="secretsOptions"></a>
# **secretsOptions**
> Object secretsOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="secretsPost"></a>
# **secretsPost**
> Secret secretsPost(Content-Type, PostSecrets)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **PostSecrets** | [**PostSecrets**](../Models/PostSecrets.md)|  |

### Return type

[**Secret**](../Models/Secret.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="secretsSecretIdOptions"></a>
# **secretsSecretIdOptions**
> Object secretsSecretIdOptions(secretId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **secretId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="secretsSecretIdPatch"></a>
# **secretsSecretIdPatch**
> Secret secretsSecretIdPatch(Content-Type, secretId, PatchSecretId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **secretId** | **String**|  | [default to null]
 **PatchSecretId** | [**PatchSecretId**](../Models/PatchSecretId.md)|  |

### Return type

[**Secret**](../Models/Secret.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="transitionsGet"></a>
# **transitionsGet**
> Transitions transitionsGet(transitionType, nextToken, maxResults)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transitionType** | **String**|  | [optional] [default to null]
 **nextToken** | **String**|  | [optional] [default to null]
 **maxResults** | **String**|  | [optional] [default to null]

### Return type

[**Transitions**](../Models/Transitions.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="transitionsOptions"></a>
# **transitionsOptions**
> Object transitionsOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="transitionsPost"></a>
# **transitionsPost**
> Transition transitionsPost(Content-Type, PostTransitions)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **PostTransitions** | [**PostTransitions**](../Models/PostTransitions.md)|  |

### Return type

[**Transition**](../Models/Transition.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="transitionsTransitionIdExecutionsExecutionIdGet"></a>
# **transitionsTransitionIdExecutionsExecutionIdGet**
> TransitionExecution transitionsTransitionIdExecutionsExecutionIdGet(transitionId, executionId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transitionId** | **String**|  | [default to null]
 **executionId** | **String**|  | [default to null]

### Return type

[**TransitionExecution**](../Models/TransitionExecution.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="transitionsTransitionIdExecutionsExecutionIdOptions"></a>
# **transitionsTransitionIdExecutionsExecutionIdOptions**
> Object transitionsTransitionIdExecutionsExecutionIdOptions(transitionId, executionId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transitionId** | **String**|  | [default to null]
 **executionId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="transitionsTransitionIdExecutionsExecutionIdPatch"></a>
# **transitionsTransitionIdExecutionsExecutionIdPatch**
> TransitionExecution transitionsTransitionIdExecutionsExecutionIdPatch(Content-Type, transitionId, executionId, PatchTransistionExecutionId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **transitionId** | **String**|  | [default to null]
 **executionId** | **String**|  | [default to null]
 **PatchTransistionExecutionId** | [**PatchTransistionExecutionId**](../Models/PatchTransistionExecutionId.md)|  |

### Return type

[**TransitionExecution**](../Models/TransitionExecution.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="transitionsTransitionIdExecutionsGet"></a>
# **transitionsTransitionIdExecutionsGet**
> TransitionExecutions transitionsTransitionIdExecutionsGet(transitionId, nextToken, order, executionId, status, maxResults, sortBy)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transitionId** | **String**|  | [default to null]
 **nextToken** | **String**|  | [optional] [default to null]
 **order** | **String**|  | [optional] [default to null]
 **executionId** | **String**|  | [optional] [default to null]
 **status** | **String**|  | [optional] [default to null]
 **maxResults** | **String**|  | [optional] [default to null]
 **sortBy** | **String**|  | [optional] [default to null]

### Return type

[**TransitionExecutions**](../Models/TransitionExecutions.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="transitionsTransitionIdExecutionsOptions"></a>
# **transitionsTransitionIdExecutionsOptions**
> Object transitionsTransitionIdExecutionsOptions(transitionId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transitionId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="transitionsTransitionIdExecutionsPost"></a>
# **transitionsTransitionIdExecutionsPost**
> TransitionExecution transitionsTransitionIdExecutionsPost(Content-Type, transitionId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **transitionId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**TransitionExecution**](../Models/TransitionExecution.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="transitionsTransitionIdOptions"></a>
# **transitionsTransitionIdOptions**
> Object transitionsTransitionIdOptions(transitionId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transitionId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="transitionsTransitionIdPatch"></a>
# **transitionsTransitionIdPatch**
> Transition transitionsTransitionIdPatch(Content-Type, transitionId, PatchTransitionId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **transitionId** | **String**|  | [default to null]
 **PatchTransitionId** | [**PatchTransitionId**](../Models/PatchTransitionId.md)|  |

### Return type

[**Transition**](../Models/Transition.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="usersGet"></a>
# **usersGet**
> Users usersGet(nextToken, maxResults)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextToken** | **String**|  | [optional] [default to null]
 **maxResults** | **String**|  | [optional] [default to null]

### Return type

[**Users**](../Models/Users.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="usersOptions"></a>
# **usersOptions**
> Object usersOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="usersPost"></a>
# **usersPost**
> User usersPost(Content-Type, PostUsers)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **PostUsers** | [**PostUsers**](../Models/PostUsers.md)|  |

### Return type

[**User**](../Models/User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="usersUserIdDelete"></a>
# **usersUserIdDelete**
> User usersUserIdDelete(userId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | [default to null]

### Return type

[**User**](../Models/User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="usersUserIdGet"></a>
# **usersUserIdGet**
> User usersUserIdGet(userId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | [default to null]

### Return type

[**User**](../Models/User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="usersUserIdOptions"></a>
# **usersUserIdOptions**
> Object usersUserIdOptions(userId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="usersUserIdPatch"></a>
# **usersUserIdPatch**
> User usersUserIdPatch(Content-Type, userId, PatchUserId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **userId** | **String**|  | [default to null]
 **PatchUserId** | [**PatchUserId**](../Models/PatchUserId.md)|  |

### Return type

[**User**](../Models/User.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="workflowsGet"></a>
# **workflowsGet**
> Workflows workflowsGet(nextToken, maxResults)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nextToken** | **String**|  | [optional] [default to null]
 **maxResults** | **String**|  | [optional] [default to null]

### Return type

[**Workflows**](../Models/Workflows.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="workflowsOptions"></a>
# **workflowsOptions**
> Object workflowsOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="workflowsPost"></a>
# **workflowsPost**
> Workflow workflowsPost(Content-Type, PostWorkflows)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **PostWorkflows** | [**PostWorkflows**](../Models/PostWorkflows.md)|  |

### Return type

[**Workflow**](../Models/Workflow.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="workflowsWorkflowIdDelete"></a>
# **workflowsWorkflowIdDelete**
> Workflow workflowsWorkflowIdDelete(workflowId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | **String**|  | [default to null]

### Return type

[**Workflow**](../Models/Workflow.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="workflowsWorkflowIdExecutionsExecutionIdDelete"></a>
# **workflowsWorkflowIdExecutionsExecutionIdDelete**
> WorkflowExecution workflowsWorkflowIdExecutionsExecutionIdDelete(executionId, workflowId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **executionId** | **String**|  | [default to null]
 **workflowId** | **String**|  | [default to null]

### Return type

[**WorkflowExecution**](../Models/WorkflowExecution.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="workflowsWorkflowIdExecutionsExecutionIdOptions"></a>
# **workflowsWorkflowIdExecutionsExecutionIdOptions**
> Object workflowsWorkflowIdExecutionsExecutionIdOptions(executionId, workflowId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **executionId** | **String**|  | [default to null]
 **workflowId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="workflowsWorkflowIdExecutionsGet"></a>
# **workflowsWorkflowIdExecutionsGet**
> WorkflowExecutions workflowsWorkflowIdExecutionsGet(workflowId, status, nextToken, maxResults, sortBy, order)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | **String**|  | [default to null]
 **status** | **String**|  | [optional] [default to null]
 **nextToken** | **String**|  | [optional] [default to null]
 **maxResults** | **String**|  | [optional] [default to null]
 **sortBy** | **String**|  | [optional] [default to null]
 **order** | **String**|  | [optional] [default to null]

### Return type

[**WorkflowExecutions**](../Models/WorkflowExecutions.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="workflowsWorkflowIdExecutionsOptions"></a>
# **workflowsWorkflowIdExecutionsOptions**
> Object workflowsWorkflowIdExecutionsOptions(workflowId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="workflowsWorkflowIdExecutionsPost"></a>
# **workflowsWorkflowIdExecutionsPost**
> WorkflowExecution workflowsWorkflowIdExecutionsPost(Content-Type, workflowId, PostWorkflowExecutions)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **workflowId** | **String**|  | [default to null]
 **PostWorkflowExecutions** | [**PostWorkflowExecutions**](../Models/PostWorkflowExecutions.md)|  |

### Return type

[**WorkflowExecution**](../Models/WorkflowExecution.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="workflowsWorkflowIdOptions"></a>
# **workflowsWorkflowIdOptions**
> Object workflowsWorkflowIdOptions(workflowId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**Object**](../Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="workflowsWorkflowIdPatch"></a>
# **workflowsWorkflowIdPatch**
> Workflow workflowsWorkflowIdPatch(Content-Type, workflowId, PatchWorkflowId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **Content-Type** | **String**|  | [default to null]
 **workflowId** | **String**|  | [default to null]
 **PatchWorkflowId** | [**PatchWorkflowId**](../Models/PatchWorkflowId.md)|  |

### Return type

[**Workflow**](../Models/Workflow.md)

### Authorization

[OAuth2](../README.md#OAuth2), [api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

