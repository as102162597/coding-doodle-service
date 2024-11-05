const fs = require('fs');
const path = require('path');

const initializers = {};

fs.readdirSync(__dirname)
    .filter(file => file.endsWith('.js') && file !== 'index.js')
    .forEach(file => {
        const initializer = require(path.join(__dirname, file));
        initializers[path.basename(file, path.extname(file))] = initializer;
    });

module.exports = initializers;
