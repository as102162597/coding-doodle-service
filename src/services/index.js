const fs = require('fs');
const path = require('path');

const services = {};

fs.readdirSync(__dirname)
    .filter(file => file.endsWith('.js') && file !== 'index.js')
    .forEach(file => {
        const service = require(path.join(__dirname, file));
        services[path.basename(file, path.extname(file))] = service;
    });

module.exports = services;
