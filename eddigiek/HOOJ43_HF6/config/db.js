const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hooj43', { useNewUrlParser: true });

module.exports = mongoose;