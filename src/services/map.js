const { Map } = require('../models');

async function findById(id) {
    return (await Map.findByPk(id))?.dataValues ?? null;
}

async function findByContent(content) {
    return (await Map.findAll({ where: { content: content } }))[0]?.dataValues ?? null;
}

module.exports = {
    findById,
    findByContent
};
