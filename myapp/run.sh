#! /usr/bin/bash
echo "Launching the frontend container......."
docker-compose up -d
echo "Frontend container is up and running"
xdg-open "http:localhost:3000" &