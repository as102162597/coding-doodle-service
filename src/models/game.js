const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Map = require('./map');

const Game = sequelize.define('Game', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    uuid: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        unique: true
    },
    title: {
        type: DataTypes.STRING(62),
        allowNull: false,
        unique: true
    },
    author: {
        type: DataTypes.STRING(62),
        allowNull: false
    },
    map_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    row_cnt: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    col_cnt: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    slime_row: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    slime_col: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    slime_direction: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    valid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    tableName: 'game',
    timestamps: false,
});

Game.belongsTo(Map, { foreignKey: 'map_id' });

module.exports = Game;
