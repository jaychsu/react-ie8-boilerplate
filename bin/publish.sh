#!/bin/bash
set -e

echo "Current workdir is: ${PWD}."
if [ ! -d bin ]; then
  echo 'Please run script under project rootdir.'
  exit 1
fi

./bin/_check.sh
./bin/_build.sh

# Nginx
docker run \
  --name nginx-account \
  -p 9753:80 \
  -v $PWD/config/nginx.conf:/etc/nginx/nginx.conf:ro \
  -v $PWD/dist:/usr/share/nginx/html:ro \
  -d \
  nginx:1.11.6
