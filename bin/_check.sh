#!/bin/bash
set -e

# Check for Current Workdir
echo "Current workdir is: ${PWD}."
if [ ! -d bin ]; then
  echo "Please run script under project rootdir."
  exit 1
fi

# Check for Docker Installation
docker -v
if [ $? != 0 ]; then
  echo "Please install [Docker](https://www.docker.com/products/docker) first."
  exit 1
fi
