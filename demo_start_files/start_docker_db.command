#!/bin/bash

# Get the path of the current executable file
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

# Change directory to where the current executable file is
cd "$parent_path"

# Change directory to the parent directory
cd ..

# Start docker-compose
docker-compose up
