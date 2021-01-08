set -xe

name=lucidtechai/test:make-predictions
docker build . -t $name && docker push $name
