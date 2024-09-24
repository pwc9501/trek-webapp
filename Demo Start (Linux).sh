#!/bin/bash

# Change directory to demo_start_files
cd demo_start_files/

# Terminal emulator may need to be changed based on distro or desktop environment

# Start Docker DB
echo "Starting Docker DB"
chmod +x ./start_docker_db.command
gnome-terminal -- bash -c "./start_docker_db.command; bash"

# Start API
echo "Starting API"
chmod +x ./start_api.command
gnome-terminal -- bash -c "./start_api.command; bash"

# Start Client
echo "Starting Client"
chmod +x ./start_client.command
gnome-terminal -- bash -c "./start_client.command; bash"
