#*Logs*

- Why did the *execution* of my docker *transition* fail? 

All docker *transitions* that are executed will be provided with a `logId` that contains the logs from 
the *execution* of the docker image that corresponds to that *transition*. 
This can be very useful when debugging if something went wrong.

Using the CLI the logs can be printet in a readable format by using `get`;

    las logs get las:log:<hex-uuid> --pretty