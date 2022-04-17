var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Factory = db.model('Factory', {
    name: String,
    country: String,
    worth: Number,
    estabilished: Number,
    noModels: Number,
    active: Boolean
});

module.exports = Factory;
