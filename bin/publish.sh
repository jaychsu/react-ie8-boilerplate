#!/bin/bash
set -e

./bin/_build.sh

# Nginx
docker run \
  --name nginx-react \
  -p 9753:80 \
  -v $PWD/config/nginx.conf:/etc/nginx/nginx.conf:ro \
  -v $PWD/dist:/usr/share/nginx/html:ro \
  -d \
  nginx:1.11.6
