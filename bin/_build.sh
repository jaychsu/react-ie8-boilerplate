#!/bin/bash
set -e

ACTIONS="
  set -e;
  npm install;
  npm run prod;
"

docker run -it --rm -v $PWD:/app -w "/app" node:4.6.2 /bin/bash -c "$ACTIONS"
