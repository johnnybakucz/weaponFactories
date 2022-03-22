var express = require('express');
var app = express();

//Serve static before session
app.use(express.static('public'));