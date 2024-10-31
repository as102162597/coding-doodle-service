const express = require('express');
const router = express.Router();
const { game, map } = require('../services');

router.get('/game/list', async (req, res) => {
    let ret = {
        isSuccess: false,
        games: []
    };

    try {
        const p = parseInt(req.query.p);
        const c = parseInt(req.query.c);
        ret.games = await game.list(p * c, c);
        ret.isSuccess = true;
    } catch (e) {
        console.error(e);
    }

    res.json(ret);
});

router.get('/game/get', async (req, res) => {
    let ret = {
        isSuccess: false,
        game: {}
    };

    try {
        ret.game = await game.findByUuid(req.query.u);
        ret.game.map = (await map.findById(ret.game.map_id)).content;
        ret.game.map_id = undefined;
        ret.game.id = undefined;
        ret.isSuccess = true;
    } catch (e) {
        console.error(e);
    }

    res.json(ret);
});

router.post('/game/save', async (req, res) => {
    let ret = {
        isSuccess: false,
        isRepeatTitle: false,
        isRepeatMap: false,
        invalidMap: false,
        message: "none"
    }

    try {
        if (await hasTitle(req.body.title)) {
            ret.isRepeatTitle = true;
        } else if (await hasMap(req.body.map)) {
            ret.isRepeatMap = true;
        } else {
            r = parseInt(req.body.row_cnt);
            c = parseInt(req.body.col_cnt);
            if (r * c === req.body.map.length) {
                await game.save(req.body);
                ret.isSuccess = true;
            } else {
                ret.invalidMap = true;
            }
        }
    } catch (e) {
        ret.message = 'saving game failed';
        console.error(e);
        res.status(500);
    }

    res.json(ret);
});

router.post('/game/delete', async (req, res) => {
    let ret = {
        isSuccess: false
    };

    try {
        const [ updatedRows ] = await game.invalidByUuid(req.body.u);
        ret.isSuccess = updatedRows === 1 ? true : false;
    } catch (e) {
        console.error(e);
        res.json(500);
    }

    res.json(ret);
});

async function hasTitle(t) {
    return !!(await game.findByTitle(t));
}

async function hasMap(c) {
    return !!(await map.findByContent(c));
}

module.exports = router;
