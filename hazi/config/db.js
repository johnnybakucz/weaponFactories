const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dgcq78',
{ useNewUrlParser: true });

module.exports = mongoose;