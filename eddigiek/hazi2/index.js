const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const { default: mongoose } = require('mongoose');


app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


// Load routing
require('./route/factory')(app);
require('./route/model')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

app.listen(8000, function () {
    console.log('Hello :8000');
});

