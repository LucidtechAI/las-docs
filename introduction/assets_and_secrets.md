# *Assets* and *Secrets*

 - An *Asset* can be any kind of resource that you want to use across your transitions.
    It is flexible, easy to use and can be modified at any time.
 - A *Secret* is a set of key-value pairs that are stored safely 
    and used as environment variables or docker credentials. 
    Note: It is not possible to view the contents of a *Secret*, but it can be changed at any time.
 
*Assets* and *Secrets* are necessary components when designing Transitions and Workflows.
(TTNote: Consider moving this sentence to the top just below the heading on this page.)

An *Asset* can be a list of customers that are used for cross-reference, 
or as a remote component for your own custom UI. 
Any file or piece of information can be stored as an *Asset* 
and is the recommended way to store non-secret information that you want to configure.

A *Secret* is a safe and recommended way to call an external API from one of the automatic transitions, 
or to pull a docker image from a private repository.
Instead of bundling environment files along with your docker image, you can use *Secrets*.
This way your credentials are not only safe, 
but they can be utilized in other docker images and modified as required.


## Working with *Assets*
Since *Assets* are often used as components in transitions, it is recommended to create your *Assets* first. 
You can update *Assets* later if needed, so don't be afraid of early mistakes.
(TTNote: Consider resequencing the Assets and Secrets section to be located before the Transition section, since it is recommended to complete this step first.)

Perhaps you have a list of companies that you want to use in your workflow. You can follow this example below:

```commandline
>> las assets create companies.json --name companies --description 'A list of approved companies'
```

You have now created an *Asset*! 

If you want to see all of your *Assets*, you can use *list*, 
which should look like this:

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

Note: Use the `assetId` to reference the *Asset* later as needed, for example, when creating a transition. 

Note: An *Asset* can be downloaded, updated and deleted as needed.


## Working with *Secrets*
*Secrets* behave in a similar fashion as *Assets*, but they are restricted to key-value pairs and are therefore 
suited for credentials and environment variables. 

Perhaps you want to store the credentials to your private docker repository. You can follow this example below:

```commandline
>> las secrets create username=foo password=bar --name credentials --description 'docker credentials to my private repo'
```

You have now created a *Secret*! 

If you want to see all of your *Secrets*, you can use *list*, 
which should look like this:

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

Note: Use the `secretId` to reference the *Secret* later as needed, for example, when creating a transition. 

Note: A *Secret* cannot be downloaded for inspection, but it can be updated.

