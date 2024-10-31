const config = require('./config/config');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    config.dbms.database,
    config.dbms.username,
    config.dbms.password,
    {
        dialect: config.dbms.dialect,
        host: config.dbms.host,
        host: config.dbms.port
    }
);

module.exports = sequelize;
