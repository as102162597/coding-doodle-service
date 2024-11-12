#!/bin/bash

docker run -d \
    -p 3306:3306 \
    --name mysql-server \
    -e MYSQL_ROOT_PASSWORD=0000 \
    -e MYSQL_DATABASE=coding_doodle \
    mysql:latest
