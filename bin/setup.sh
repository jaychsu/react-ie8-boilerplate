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
# node 4.6.2 && npm 2.15.11
docker pull node:4.6.2

# Init
# ======
docker run -it --rm -v $PWD:/app -w "/app" node:4.6.2 npm install
