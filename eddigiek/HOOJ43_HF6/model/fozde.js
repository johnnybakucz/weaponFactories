const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Fozde = db.model('Fozde', {
    nev: String,
    telepules: String,
});

module.exports = Fozde;