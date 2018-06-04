let controllers = {};
let mongoose = require('mongoose');
let fs = require('fs');
let config=require('../config.js');
let db = mongoose.connect(config.db.uri, config.db.options);
require('../models')(mongoose);

let walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        let newPath = path + '/' + file;
        let stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js|coffee)/.test(file)) {
                if (file !== 'index.js') {
                    let indent = file.split('.');
                    controllers[indent[0]] = require(newPath);
                }
            }
        } else if (stat.isDirectory()) {
            // walk(newPath);
        }
    });
};
let models_path = __dirname;
walk(models_path);

module.exports = controllers;
