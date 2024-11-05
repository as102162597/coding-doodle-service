const { game } = require('../services');

const initGameData = [
    {
        title: 'example code 1',
        author: 'Ed',
        row_cnt: 1,
        col_cnt: 3,
        map: '122',
        slime_row: 0,
        slime_col: 0,
        slime_direction: 1
    },
    {
        title: 'example code 2',
        author: 'Ed',
        row_cnt: 3,
        col_cnt: 3,
        map: '200200221',
        slime_row: 2,
        slime_col: 2,
        slime_direction: 0
    },
    {
        title: 'example code 3',
        author: 'Ed',
        row_cnt: 3,
        col_cnt: 3,
        map: '122202222',
        slime_row: 0,
        slime_col: 0,
        slime_direction: 1
    },
    {
        title: 'example code 4',
        author: 'Ed',
        row_cnt: 5,
        col_cnt: 5,
        map: '2222220202221222020222222',
        slime_row: 2,
        slime_col: 2,
        slime_direction: 0
    },
    {
        title: 'example code 5',
        author: 'Ed',
        row_cnt: 5,
        col_cnt: 5,
        map: '0222021112211122111202220',
        slime_row: 2,
        slime_col: 2,
        slime_direction: 1
    }
];

async function init() {
    for (const data of initGameData) {
        if (await hasTitle(data.title)) {
            continue;
        } else if (parseInt(data.row_cnt) * parseInt(data.col_cnt) === data.map.length) {
            try { await game.save(data); } catch (_) {}
        }
    }
}

async function hasTitle(t) {
    return !!(await game.findByTitle(t));
}

module.exports = {
    init
};
