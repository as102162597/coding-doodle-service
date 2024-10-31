const fs = require('fs');
const express = require('express');
const router = express.Router();

fs.readdirSync(__dirname).forEach(file => {
    if (file.endsWith('.js') && file !== 'index.js') {
        const api = require(`./${file}`);
        router.use(api);
    }
});

module.exports = router;
