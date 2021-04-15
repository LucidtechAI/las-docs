# *Assets* and *Secrets*

 - An *Asset* can be any kind of resource you want to use across your transitions.
    It is flexible, easy to use and can be modified at any moment.
 - A *Secret* is a set of key-value pairs that are stored safely 
    and used as environment variables or docker credentials. 
    It is not possible to peek on a Secret, but it can be changed at any moment.
 
Assets and *Secrets* are necessary components when designing Transitions and Workflows.

An *Asset* can be a list of customers that are used for cross-reference, 
or a remote-component for your own custom UI. 
Any file or piece of information can be stored as an Asset, 
and is the recommended way to store non-secret information that you want to configure.

Whether you want to call an external API from one of the automatic transitions, 
or pull a docker image from a private repository *Secrets* is the safe and recommended way to do this.
Instead of bundling along environment files with your docker image you can use Secrets.
This way your credentials are not only safe, 
but they can be utilized in other docker images, and modified whenever required.


## Working with *Assets*
Since *Assets* are often used as components in transitions it is wise to create your *Assets* first. 
If you realize that you need to change it later that is no problem, so don't be afraid of early mistakes.
Say we have a list of companies we want to use in out workflow; 

```commandline
>> las assets create companies.json --name companies --description 'A list of approved companies'
```

You have now created an *Asset*! If you want to see all your *Assets* you can use *list*, 
which should look like this;

```commandline
>> las assets list 
{
  "assets": [
    {
      "assetId": "las:asset:0093d650a4d44eb0bf28c278a5ba118c",
      "name": "companies",
      "description": "A list of approved companies"
    },
  ],
 "nextToken": null
}

```

The assetId for each *Asset* is the way to reference it when for instance creating a transition. 

An *Asset* can be downloaded, updated and deleted as suits the user.

## Working with *Secrets*
Secrets behave in a similar fashion as Assets, but they are restricted to key-value pairs and are therefore 
suited for credentials and environment variables. 
Say you want to store the credentials to your private docker repository;

```commandline
>> las secrets create username=foo password=bar --name credentials --description 'docker credentials to my private repo'
```

You have now created an *Secret*! If you want to see all your *Secrets* you can use *list*, 
which should look like this;

```commandline
>> las secrets list 
{
  "secrets": [
    {
      "secretId": "las:secret:0093d650a4d44eb0bf28c278a5ba118c",
      "name": "credentials",
      "description": "docker credentials to my private repo"
    },
  ],
 "nextToken": null
}
```

The secretId for each *Secret* is the way to reference it when for instance creating a transition. 

A *Secret* cannot be downloaded for inspection, but can be modified by using update.

