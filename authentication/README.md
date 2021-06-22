## Authenticating to Lucidtech

Lucidtech APIs require you to authenticate using the [Oath2 protocol](https://tools.ietf.org/html/rfc6749). Our SDKs 
will typically handle authentication for you, but should you wish to use the REST API (TTNote: Consider a link here), you would need to do this 
yourself. Here is a brief introduction to get you started.


#### Credentials
You should already have acquired a *client id*, *client secret* and *api key* before continuing. (TTNote: Consider info here on what to do if you don't
have these items.) The *client id* and *client 
secret* will be used to get an access token from the *auth endpoint*, and the *api key* will be used together with the 
access token to authorize to the API.

Unless specified otherwise in the credentials file that you have received (TTNote: Is this received upon purchase of the API? 
If not consider info on how to obtain the file), the endpoint for authentication is 
https://auth.lucidtech.ai and the endpoint for the API is https://api.lucidtech.ai.

#### Getting an access token

To acquire an access token, we need to ask the *auth endpoint* for access using our *client id* and *client secret*. This is 
done by performing an HTTP POST request to the token endpoint /oauth2/token with two headers included. One header 
should be *Authorization* with the base64-encoded *client_id* and the *client secret*. The other header should be *Content-Type* which 
will always contain the same value: 'application/x-www-form-urlencoded'.

| Header name   | Header value                                |
| -----------   | ------------------------------------------- |
| Authorization | Basic Base64Encode(client_id:client_secret) |
| Content-Type  | application/x-www-form-urlencoded           |

You can read more about Base64Encode [here](https://en.wikipedia.org/wiki/Basic_access_authentication#Client_side).

Since we are working with `client_credentials`, we need to specify this in the url as a query parameter. The final URL 
to make the request to is https://auth.lucidtech.ai/oauth2/token?grant_type=client_credentials.

Here is an example of obtaining the access token using curl in bash:

```bash
$ credentials="<your client id here>:<your client secret here>"
$ base64_encoded_credentials=`echo -n $credentials | base64 -w 0`
$ curl -X POST https://auth.lucidtech.ai/oauth2/token?grant_type=client_credentials -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic $base64_encoded_credentials"
```

If everything is working as expected, the response should look like this:

```json
{
  "access_token":"eyJ...",
  "expires_in":3600,
  "token_type":"Bearer"
}
```

{% hint style="info" %}
The access token will expire after some time, currently after 3600 seconds (1 hour). When the token expires, 
you will need to get a new access token using the same procedure.
{% endhint %}

#### Calling the API

Upon successfully acquiring the access token from previous step, you are ready to call the API. To do this, you need to  
provide two headers to the API. The first header will be *x-api-key* which will contain the api key, and the other header will be *Authorization*
which will contain the 
newly acquired access token:

| Header name   | Header value                          |
| -----------   | ------------------------------------- |
| Authorization | Bearer &lt;your access token here&gt; |
| x-api-key     | &lt;your api key here&gt;             |

```bash
$ api_key="<your api key here>"
$ access_token="<you access token here>"
$ curl https://api.lucidtech.ai/v1/documents -H "x-api-key: $api_key" -H "Authorization: Bearer $access_token"
```

#### Using an SDK

Our SDKs will acquire the access token for you. 
Simply enter the credentials into the credentials.cfg file in the location shown below based on your OS, and the SDK will auto-discover them:

| Operating System | Location                                                                      |
| ---------------- | ----------------------------------------------------------------------------- |
| Linux/Mac        | ~/.lucidtech/credentials.cfg or $HOME/.lucidtech/credentials.cfg              |
| Windows          | %USERPROFILE%\.lucidtech\credentials.cfg or %HOME%\.lucidtech\credentials.cfg |

The credentials.cfg file should look like the following:

```ini
[default]
api_key = <your api key here>
client_id = <your client id here>
client_secret = <your client secret here>
auth_endpoint = auth.lucidtech.ai
api_endpoint = https://api.lucidtech.ai/v1
```
