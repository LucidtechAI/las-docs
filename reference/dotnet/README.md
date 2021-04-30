# .NET

## Installation
The .NET SDK for Lucidtech AI Services (LAS) can be downloaded from 
[nuget](nuget.org/packages/Lucidtech.Las)

```commandline
$ dotnet add package Lucidtech.Las
```


## Getting started 
After Lucidtech.Las is installed and you have received credentials, 
you are ready to enhance your document-flow with the las client:
```cs
using System;
using Lucidtech.Las;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            var client = new Client();
            ... 
        }
    }
}
```
If you are new to LAS we recommend you to check out the [key concepts](../../introduction) 
for a better understanding of what is possible with LAS.

If you are in the need of explicit examples on how to create complex workflows, 
check out the [tutorials](../../tutorials) 

The .NET SDK is open-source, and the code can be found [here](https://github.com/LucidtechAI/las-sdk-net).
Contributions are more than welcome.
