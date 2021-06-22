# Python SDK

## Installation

(TTNote: Consider whether Installation should be repeated here as it is in the quickstart section, or if it should be linked instead. 
But if it is duplicated here, the syntax should match (in quickstart, it's referencing bash syntax, here it is simply commandline.)


The Python SDK for Lucidtech AI Services (LAS) can be installed using `pip`:
```commandline
$ pip install lucidtech-las
```

Don't have pip? [Here](https://pip.pypa.io/en/latest/installing/) are instructions for installing pip.
(TTNote: The link here is invalid.)

## Getting started 
After the Lucidtech LAS is installed and you have received credentials, 
you are ready to enhance your document flow with the LAS client:
```python
>> from las import Client
>> client = Client() 
```
- If you are new to LAS, we recommend that you check out the [key concepts](../../introduction) 
for a better understanding of what is possible with LAS.

- If you would like explicit examples on how to create complex workflows, 
check out our [tutorials](../../tutorials) 

(TTNote: Consider adding the above bullets to other sections for consistency.)


The Python SDK is open source, and the code can be found [here](https://github.com/LucidtechAI/las-sdk-python).
Contributions are more than welcome.
