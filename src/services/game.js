
const crypto = require('crypto');
const sequelize = require('../database');
const { Game, Map } = require('../models');

async function save(o) {
    const transaction = await sequelize.transaction();

    try {
        o.map_id = (await Map.create({ content: o.map }, { transaction })).id;
        o.map = undefined;
        o.uuid = crypto.randomUUID();
        const obj = await Game.create(o, { transaction });
        await transaction.commit();
        return obj;
    } catch (e) {
        await transaction.rollback();
        throw e;
    }
}

async function findById(id) {
    return (await Game.findByPk(id))?.dataValues ?? null;
}

async function findByUuid(uuid) {
    return (await Game.findAll({ where: { uuid: uuid, valid: true } }))[0]?.dataValues ?? null;
}

async function findByTitle(title) {
    return (await Game.findAll({ where: { title: title, valid: true } }))[0]?.dataValues ?? null;
}

async function findByAuthor(author) {
    return (await Game.findAll({ where: { author: author, valid: true } }))[0]?.dataValues ?? null;
}

async function list(from, count) {
    return (
        await Game.findAll({
            where: { valid: true },
            order: [[ 'id', 'ASC' ]],
            offset: from,
            limit: count
        })
    )
        .map(o => o.dataValues);
}

async function validByUuid(uuid) {
    return await Game.update(
        { valid: true },
        { where: { uuid: uuid } }
    );
}

async function invalidByUuid(uuid) {
    return await Game.update(
        { valid: false },
        { where: { uuid: uuid } }
    );
}

module.exports = {
    save,
    findById,
    findByUuid,
    findByTitle,
    findByAuthor,
    list,
    validByUuid,
    invalidByUuid
};
