set -xe

REPO_NAME=lucidtechai/demo
SECTION=invoice
build_args="--build-arg CONFIG_SECTION=$SECTION --build-arg CREDENTIALS_SECTION=$SECTION"

name=$REPO_NAME:make-predictions-$STAGE
docker build . -t $name $build_args && docker push $name
