const { Map } = require('../models');

async function findById(id) {
    return (await Map.findByPk(id))?.dataValues ?? null;
}

module.exports = {
    findById
};
