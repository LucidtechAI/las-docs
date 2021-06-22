# Tutorial: Create a docker transition 

In this tutorial, you will learn the required steps and recommended practices when 
creating an automated transition, which is simply a docker image. 
For this tutorial, we will use *Python* as our programming language.
There are no restrictions on which languages are allowed here, but you will 
see that it is practical to use one that has a LAS SDK, such as Java, JavaScript, C#, or Python.

We will use the [make predictions image](https://github.com/LucidtechAI/las-docs/blob/master/docker-image-samples/make-predictions/main.py)
to explain some of the key concepts. For a simple Python-based docker image, you only need 3 files:
 - `Dockerfile`: These are the instructions for how to make the image. 
 Refer to Docker's [documentation](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) for more information.
 -  `main.py`:  This is where the code resides which performs the work.
 - `requirements.txt`: Here are the required packages that need to be installed.

## Dockerfile
For a simple process like this, the Dockerfile can look something like this:
```dockerfile 
FROM python:3.8  # Use the base image of your own choice

WORKDIR /root  # Set a working directory

# These ID's will be provided runtime, and is necessary to keep track of which execution is being processed
ENV TRANSITION_ID not_provided
ENV EXECUTION_ID not_provided

# Copy in the files you need in your image
COPY requirements.txt .
COPY main.py .

# Install requirements
RUN pip install -r requirements.txt

# Set the entrypoint
ENTRYPOINT ["python", "main.py"]
```

## main.py
This is the module that performs the work. Let us first give a brief description of the anatomy. 
(TTNote: Suggest additional verbiage here as this references a 'description of the anatomy' not just an outline.)

```python 
import ... # Remember to import the LAS SDK and other packages you need.


def handler(...): # This is where all the code specific for this process goes
    ...
    # Whatever is returned here will be sent along to the next task in your workflow 
    return response


if __name__ == '__main__':
    # This is the necessary code block that takes care of fetching variables, 
    # and returning the response to the API.
```

Note: Our recommendation is that you reuse the last block of this file and edit the handler to fit your needs.

### Entry point
The last part of `main.py` contains a few essential steps:
(TTNote: Suggest to revisit the sequence of these description, so they are described in the order they appear under main.py (i.e. the handler seems to come before this part)
- Collects the input for the execution
- Runs the user-specific code in the handler
- Lets the API know that the task completed successfully or has failed

The code below makes sure that all this happens as expected:

```python

if __name__ == '__main__':
    las_client = Client()
    transition_id = os.environ['TRANSITION_ID']
    execution_id = os.environ['EXECUTION_ID']

    try: # Get input and update execution
        execution = las_client.get_transition_execution(transition_id, execution_id=execution_id)
        event = execution['input']
        logging.info(f'event: {event}')
        output = handler(las_client, event, environ=os.environ)
        las_client.update_transition_execution(
            transition_id=transition_id,
            execution_id=execution_id,
            status='succeeded',
            output=output,
        )
    except Exception: # This exception-block is important for proper error handling in the API
        las_client.update_transition_execution(
            transition_id=transition_id,
            execution_id=execution_id,
            status='failed',
            error={
                'message': str(traceback.format_exc()),
            }
        )
        raise
```

#### The handler
This is the section where you as a user are free to write whatever you need to automate your workflow.
Let us first take a look at the input:
- `las_client`: The client from the Python SDK allows for easy access to LAS API.
- `event`: The output from the previous transition in the workflow.
If this is the first transition in the workflow, then the input to the workflow will be the input to this transition. 
- `environ`: The environment consists of some pre-defined variables, such as the TRANSITION_ID and the EXECUTION_ID. 
In addition to these, you can also define variables by specifying them as `parameters` directly in your transition, 
or through *secrets* if the information is sensitive. See the example at the end of this tutorial for more details. (TTNote: Suggest
repeating the secrets example here for clarity)

```python 
def handler(las_client, event, environ):
'''A simple handler that uses the LAS API to make predictions on a document from a specified model.'''

    document_id = event['documentId'] 
    model_id = event.get('modelId', environ.get('MODEL_ID'))

    if not model_id: 
        raise ValueError('A modelId is needed for prediction, input modelId directly or MODEL_ID to env')

    response = las_client.create_prediction(
        document_id=document_id,
        model_id=model_id,
        max_pages=event.get('maxPages', 1),
        auto_rotate=event.get('autoRotate', False),
    )

    return response

```
## Create the transition
When you have all the building blocks that you need, you are ready to create the docker transition. 


#### Build and push the docker image

1-The first step is to build a docker image and push it to an existing repository:
```commandline
$ docker build . -t <image-url> && docker push <image-url>
```

{% hint style="info" %}
It is recommended to place the docker image in a private repository, 
and in that case, you need to store your credentials as a *Secret*.
```commandline
$ las secrets create  username=<username> password=<password> --description 'docker credentials'
```
{% endhint %}

2-The next step is to create a json file, let's call it `params.json`,
that contains the parameters that you need to run the docker image. 

Note: The variables you define in `environment` and `environmentSecrets` 
will end up in the `environ` variable in the handler in the example above.
```json
{
  "imageUrl": "<image-url>",
  "secretId": "las:secret:<hex-uuid>"
  "environment":  {
    "MODEL_ID": "las:model:<hex-uuid>",
  },
  "environmentSecrets": [
    "las:secrets:<hex-uuid>"
  ]
}
```
{% hint style="info" %}
The `secretId` field is only needed if you are using a private image.
{% endhint %}


3-Now you are ready to create the automatic transition:
```commandline
las transitions create docker -p params.json --name MakePredictions 
```
