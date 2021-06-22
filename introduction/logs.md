#*Logs*

- Why did the execution of my *docker transition* fail? 

(TTNote: Do log exists for manual transitions or only docker transitions?)

All executed docker *transitions* will be provided with a `logId` which references the log that was generated from 
the execution of that *transition*. The logs provide all relevant details about the execution, including any error messages received. 
This can be very useful when debugging if something went wrong.

(TTNote: I hope I maintained the correct the intent here with this rephrasing.)

Using the CLI, the logs can be printed in a readable format by using `get`:

(TTNote: Is this command for printing or only displaying?) 

```commandline
>> las logs get las:log:<hex-uuid> --pretty
```
