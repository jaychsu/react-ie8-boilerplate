#!/bin/bash
set -e

echo "Current workdir is: ${PWD}."
if [ ! -d bin ]; then
  echo 'Please run script under project rootdir.'
  exit 1
fi

./bin/_check.sh

# Pull Images
# ======
docker pull nginx:1.11.6
# node 4.6.2 && npm 4.0.2
docker build -t node-react:1.0.0 ./config/docker/node

# Init
# ======
docker run -it --rm -v $PWD:/app -w "/app" node-react:1.0.0 yarn install
