set -xe

name=lucidtechai/transition-samples:make-predictions
docker build . -t $name && docker push $name
