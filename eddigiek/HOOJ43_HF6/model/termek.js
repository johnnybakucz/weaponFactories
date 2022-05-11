const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Termek = db.model('Termek', {
    nev: String,
    tipus: String,
    alkohol: Number,
    keseruseg: Number,
    kostolva: {
        type: Boolean,
        default: false
    },
    _gyarto: {
        type: Schema.Types.ObjectId,
        ref: 'Fozde'
    }
});

module.exports = Termek;