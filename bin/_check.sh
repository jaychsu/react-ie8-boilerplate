#!/bin/bash
set -e

# Check for Docker Installation
docker -v
if [ $? != 0 ]; then
  echo "Please install Docker first."
  echo "Docker: https://www.docker.com/products/docker"
  exit 1
fi
