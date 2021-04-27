# *Models*

 - A *Model* is a machine learning model that is able to extract information from your documents.
    
Depending on the problem that needs to be solved a *Model* can be trained accordingly. 
Whether it is extracting date and total amount from a receipt, specific payment information from an invoice, 
name and age from an ID-card Lucidtech is able to provide an adequate machine learning model 
that can be accessed via *Models*.

Request a model by contacting [support@lucidtech.ai](mailto:support@lucidtech.ai), 
or by clicking [Get Started](https://lucidtech.ai) on our home page.

See what models that are available by using `models list` available via the CLI;
```commandline
>> las models list 
{
  "models": [
    {
      "modelId": "las:model:0093d650a4d44eb0bf28c278a5ba118c",
      "name": "companies",
      "description": "A list of approved companies",
      "height": 1281,
      "width": 801
    },
  ],
 "nextToken": null
}
```

Use the `modelId` when requesting a prediction to use a specific model. See [predictions](./predictions.md)

