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
  npm install;
  npm run dev;
"

docker run -it --rm -v $PWD:/app -w "/app" node:4.6.2 /bin/bash -c "$ACTIONS"
