# .NET

## Installation

(TTNote: Consider if Installation should be moved or added to Quickstart section.)

(TTNote: Consider resequencing the .net section to below Javascript to match quickstart section sequence.)

The .NET SDK for Lucidtech AI Services (LAS) can be downloaded from 
[nuget](https://www.nuget.org/packages/Lucidtech.Las).

```commandline
$ dotnet add package Lucidtech.Las
```


## Getting started 
After Lucidtech.Las is installed and you have received credentials, 
you are ready to enhance your document flow with the LAS client:
```cs
using System;
using Lucidtech.Las;

var client = new Client();
var models = client.ListModels();
var documents = client.ListDocuments();
var workflows = client.ListWorkflows();
```

- If you are new to LAS, we recommend that you check out the [key concepts](../../introduction) 
for a better understanding of what is possible with LAS.

- If you would like explicit examples on how to create complex workflows, 
check out our [tutorials](../../tutorials).

The .NET SDK is open source, and the code can be found [here](https://github.com/LucidtechAI/las-sdk-net).
Contributions are more than welcome.
