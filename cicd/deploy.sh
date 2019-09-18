#!/bin/bash

. build.sh
. build-deployment.sh $(date '+%Y.%m.%d-%H%M')

kubectl apply -f deployment.yml
