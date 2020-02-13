# DefaultApi

All URIs are relative to *https://fma2pcjhd6.execute-api.eu-west-1.amazonaws.com//dev*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchesOptions**](DefaultApi.md#batchesOptions) | **OPTIONS** /batches | 
[**batchesPost**](DefaultApi.md#batchesPost) | **POST** /batches | 
[**consentsConsentIdDelete**](DefaultApi.md#consentsConsentIdDelete) | **DELETE** /consents/{consentId} | 
[**dataGet**](DefaultApi.md#dataGet) | **GET** /data | 
[**dataOptions**](DefaultApi.md#dataOptions) | **OPTIONS** /data | 
[**dataPut**](DefaultApi.md#dataPut) | **PUT** /data | 
[**documentsDocumentIdGet**](DefaultApi.md#documentsDocumentIdGet) | **GET** /documents/{documentId} | 
[**documentsDocumentIdOptions**](DefaultApi.md#documentsDocumentIdOptions) | **OPTIONS** /documents/{documentId} | 
[**documentsDocumentIdPost**](DefaultApi.md#documentsDocumentIdPost) | **POST** /documents/{documentId} | 
[**documentsGet**](DefaultApi.md#documentsGet) | **GET** /documents | 
[**documentsOptions**](DefaultApi.md#documentsOptions) | **OPTIONS** /documents | 
[**documentsPost**](DefaultApi.md#documentsPost) | **POST** /documents | 
[**predictionsOptions**](DefaultApi.md#predictionsOptions) | **OPTIONS** /predictions | 
[**predictionsPost**](DefaultApi.md#predictionsPost) | **POST** /predictions | 
[**processesGet**](DefaultApi.md#processesGet) | **GET** /processes | 
[**processesOptions**](DefaultApi.md#processesOptions) | **OPTIONS** /processes | 
[**processesPost**](DefaultApi.md#processesPost) | **POST** /processes | 
[**processesProcessIdDelete**](DefaultApi.md#processesProcessIdDelete) | **DELETE** /processes/{processId} | 
[**processesProcessIdOptions**](DefaultApi.md#processesProcessIdOptions) | **OPTIONS** /processes/{processId} | 
[**tasksOptions**](DefaultApi.md#tasksOptions) | **OPTIONS** /tasks | 
[**tasksPost**](DefaultApi.md#tasksPost) | **POST** /tasks | 
[**tasksTaskIdOptions**](DefaultApi.md#tasksTaskIdOptions) | **OPTIONS** /tasks/{taskId} | 
[**tasksTaskIdPatch**](DefaultApi.md#tasksTaskIdPatch) | **PATCH** /tasks/{taskId} | 
[**usersOptions**](DefaultApi.md#usersOptions) | **OPTIONS** /users | 
[**usersUserIdGet**](DefaultApi.md#usersUserIdGet) | **GET** /users/{userId} | 
[**usersUserIdOptions**](DefaultApi.md#usersUserIdOptions) | **OPTIONS** /users/{userId} | 
[**usersUserIdPatch**](DefaultApi.md#usersUserIdPatch) | **PATCH** /users/{userId} | 


<a name="batchesOptions"></a>
# **batchesOptions**
> Object batchesOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](/Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="batchesPost"></a>
# **batchesPost**
> Batch batchesPost(contentType, postBatches)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to null]
 **postBatches** | [**PostBatches**](/Models/PostBatches.md)|  |

### Return type

[**Batch**](/Models/Batch.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="consentsConsentIdDelete"></a>
# **consentsConsentIdDelete**
> Consent consentsConsentIdDelete(contentType, consentId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to null]
 **consentId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**Consent**](/Models/Consent.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="dataGet"></a>
# **dataGet**
> Object dataGet(category)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**|  | [optional] [default to null]

### Return type

[**Object**](/Models/object.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="dataOptions"></a>
# **dataOptions**
> Object dataOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](/Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="dataPut"></a>
# **dataPut**
> Object dataPut(category)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**|  | [optional] [default to null]

### Return type

[**Object**](/Models/object.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

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

[**Document**](/Models/Document.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="documentsDocumentIdOptions"></a>
# **documentsDocumentIdOptions**
> Object documentsDocumentIdOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](/Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="documentsDocumentIdPost"></a>
# **documentsDocumentIdPost**
> Document documentsDocumentIdPost(contentType, documentId, postDocumentId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to null]
 **documentId** | **String**|  | [default to null]
 **postDocumentId** | [**PostDocumentId**](/Models/PostDocumentId.md)|  |

### Return type

[**Document**](/Models/Document.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="documentsGet"></a>
# **documentsGet**
> Documents documentsGet(batchId, consentId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batchId** | **String**|  | [optional] [default to null]
 **consentId** | **String**|  | [optional] [default to null]

### Return type

[**Documents**](/Models/Documents.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

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

[**Object**](/Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="documentsPost"></a>
# **documentsPost**
> Document documentsPost(contentType, postDocuments)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to null]
 **postDocuments** | [**PostDocuments**](/Models/PostDocuments.md)|  |

### Return type

[**Document**](/Models/Document.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="predictionsOptions"></a>
# **predictionsOptions**
> Object predictionsOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](/Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="predictionsPost"></a>
# **predictionsPost**
> Prediction predictionsPost(contentType, postPredictions)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to null]
 **postPredictions** | [**PostPredictions**](/Models/PostPredictions.md)|  |

### Return type

[**Prediction**](/Models/Prediction.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="processesGet"></a>
# **processesGet**
> Process processesGet(status, nextToken, maxResults)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**|  | [optional] [default to null]
 **nextToken** | **String**|  | [optional] [default to null]
 **maxResults** | **String**|  | [optional] [default to null]

### Return type

[**Process**](/Models/Process.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="processesOptions"></a>
# **processesOptions**
> Object processesOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](/Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="processesPost"></a>
# **processesPost**
> Process processesPost(contentType, postProcesses)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to null]
 **postProcesses** | [**PostProcesses**](/Models/PostProcesses.md)|  |

### Return type

[**Process**](/Models/Process.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="processesProcessIdDelete"></a>
# **processesProcessIdDelete**
> Process processesProcessIdDelete(contentType, processId, body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to null]
 **processId** | **String**|  | [default to null]
 **body** | **Object**|  |

### Return type

[**Process**](/Models/Process.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="processesProcessIdOptions"></a>
# **processesProcessIdOptions**
> Object processesProcessIdOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](/Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="tasksOptions"></a>
# **tasksOptions**
> Object tasksOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](/Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="tasksPost"></a>
# **tasksPost**
> Task tasksPost(contentType, postTasks)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to null]
 **postTasks** | [**PostTasks**](/Models/PostTasks.md)|  |

### Return type

[**Task**](/Models/Task.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="tasksTaskIdOptions"></a>
# **tasksTaskIdOptions**
> Object tasksTaskIdOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](/Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="tasksTaskIdPatch"></a>
# **tasksTaskIdPatch**
> Task tasksTaskIdPatch(contentType, taskId, patchTaskId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to null]
 **taskId** | **String**|  | [default to null]
 **patchTaskId** | [**PatchTaskId**](/Models/PatchTaskId.md)|  |

### Return type

[**Task**](/Models/Task.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="usersOptions"></a>
# **usersOptions**
> Object usersOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](/Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="usersUserIdGet"></a>
# **usersUserIdGet**
> Object usersUserIdGet(userId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | [default to null]

### Return type

[**Object**](/Models/object.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="usersUserIdOptions"></a>
# **usersUserIdOptions**
> Object usersUserIdOptions(body)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**|  |

### Return type

[**Object**](/Models/object.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="usersUserIdPatch"></a>
# **usersUserIdPatch**
> Object usersUserIdPatch(contentType, userId, patchUserId)



### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | **String**|  | [default to null]
 **userId** | **String**|  | [default to null]
 **patchUserId** | [**PatchUserId**](/Models/PatchUserId.md)|  |

### Return type

[**Object**](/Models/object.md)

### Authorization

[api_key](../README.md#api_key), [sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer](../README.md#sprint-1-ApiStack-134F8SFRSYA4Z-Authorizer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

