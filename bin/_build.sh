#!/bin/bash
set -e

ACTIONS="
  set -e;
  yarn install;
  npm run prod;
"

docker run -it --rm -v $PWD:/app -w "/app" node-react:1.0.0 /bin/bash -c "$ACTIONS"
