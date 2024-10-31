#!/bin/bash

DOCKER_IMAGE="coding-doodle-service"
DOCKER_PACKAGE_JSON="src/package.json"
DOCKER_VERSION=$(grep '"version"' $DOCKER_PACKAGE_JSON | awk -F ': ' '{print $2}' | tr -d '",')
DOCKER_CONTAINER="coding-doodle-service"

start() {
    docker ps -a | grep $DOCKER_CONTAINER >/dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo "$DOCKER_CONTAINER exists."
    else
        docker run -itd \
            -p 3000:3000 \
            -v $PWD/src/config:/usr/src/app/config \
            --name $DOCKER_CONTAINER \
            --net host \
            $DOCKER_IMAGE:$DOCKER_VERSION
    fi
}

stop() {
    docker ps -a | grep $DOCKER_CONTAINER >/dev/null 2>&1
    if [ $? -ne 0 ]; then
        echo "$DOCKER_CONTAINER does not exists."
    else
        docker rm -f $DOCKER_CONTAINER
    fi
}

restart() {
    stop
    start
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    *)
        echo "Usage: $0 start|stop|restart" >&2
        exit 1
esac
