const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Model = db.model('Model', {
    name: String,
    caliber: String,
    sold: Number,
    developmentYear: Number,
    inProduction: {
        type: Boolean,
        default: false
    },
    _producer: {
        type: Schema.Types.ObjectId,
        ref: 'Factory'
    }
});

module.exports = Model;