var express = require('express');
var app = express();

app.set('view engine', 'ejs');

//Serve static before session
app.use(express.static('public'));

require('./routes/route')(app);

//Server
var server = app.listen(8000, function () {
    console.log('Server running at :8000');
});