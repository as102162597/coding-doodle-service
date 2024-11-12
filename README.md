**coding doodle service**
=========================
Version: 1.0.0\
Release date: 11/5/2024

Author
======
- Ed

Introduction
============
This is a backend server for a programming game. It handles incoming requests, retrieves relevant data from the database, and sends back responses.

This project is built using [*Express*](https://expressjs.com/) and [*Sequelize*](https://sequelize.org/)

Get Started
===========
You can start this project using either of the two methods.

Enter the following commands in order to start the project using the current console.

Whichever method you choose, make sure to download the project first.

    git clone https://github.com/as102162597/coding-doodle-service.git

Then change directory.

    cd coding-doodle-service

Before starting the project, you should first start the MySQL server and create the `coding_doodle` database. You can set up this service yourself, or use the bash script provided in this project to create a MySQL Docker container.

    ./mysql-server.sh

If you intend to use your own database, you will need to modify the configuration file `src/config/config.js` of this project.

## Running Locally

Downloads the required packages.

    cd src
    npm install express mysql2 sequelize

Start the project.

    npm start

## Running with *Docker*
You can also use the following command to run the project in a *Docker* container.

    ./build.sh

Start the *docker* container

    ./coding-doodle-service.sh start

License
=======
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
