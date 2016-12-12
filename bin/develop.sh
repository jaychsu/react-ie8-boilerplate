#!/bin/bash
set -e

echo "Current workdir is: ${PWD}."
if [ ! -d bin ]; then
  echo 'Please run script under project rootdir.'
  exit 1
fi

./bin/_check.sh

ACTIONS="
  set -e;
  yarn install;
  npm run dev;
"

docker run -it --rm -v $PWD:/app -w "/app" node-das:1.0.0 /bin/bash -c "$ACTIONS"