const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Map = sequelize.define('Map', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(16382),
        allowNull: false
    }
}, {
    tableName: 'map',
    timestamps: false
});

module.exports = Map;
