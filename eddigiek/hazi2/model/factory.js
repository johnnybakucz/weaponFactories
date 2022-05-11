const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Factory = db.model('Factory', {
    name: String,
    country: String,
    worth: Number,
    estabilished: Number,
    noModels: Number
});

module.exports = Factory;