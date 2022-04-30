const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//Serve static before session
app.use(express.static('public'));

require('./routes/route')(app);

//Server
var server = app.listen(8000, function () {
    console.log('Server running at :8000');
});