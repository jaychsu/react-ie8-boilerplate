#!/bin/bash
set -e

./bin/_check.sh

ACTIONS="
  set -e;
  yarn install;
  npm run dev;
"

docker run -it --rm \
  -v $PWD:/app \
  -w "/app" \
  -p 9753:9753 \
  node-react:1.0.0 /bin/bash -c "$ACTIONS"
