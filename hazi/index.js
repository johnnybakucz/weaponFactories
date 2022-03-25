var express = require('express');
var app = express();

//Serve static before session
app.use(express.static('public'));

//Server
var server = app.listen(8000, function () {
    console.log('Server running at :8000');
});