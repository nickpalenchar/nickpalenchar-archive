#!/bin/bash

WORKDIR=$(pwd)
NAME=nickpalenchar

cd ..
docker build -t $NAME .

IMAGE=939117166617.dkr.ecr.us-east-1.amazonaws.com/$NAME
VERSION=$(date '+%Y.%m.%d-%H%M')

docker tag $NAME $IMAGE:$VERSION
docker tag $NAME $IMAGE:latest

docker push $IMAGE:$VERSION
docker push $IMAGE:latest

cd $WORKDIR
