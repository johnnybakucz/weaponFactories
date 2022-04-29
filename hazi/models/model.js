var Schema = require('mongoose').Schema;
var db = require('../config/db');


var Model = db.model('Model', {
    name: String,
    caliber: String,
    sold: Number,
    developmentYear: Number,
    inProduction: Boolean,
    _producer:{
        type: Schema.Types.ObjectId,
        ref: 'Factory'
    }
});

module.exports = Model;
