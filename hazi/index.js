// const CompanyModel = require('./models/factory');
// const ModelModel = require('./models/model');

// let egy = new CompanyModel();
// egy.name = 'ok';
// egy.save((err)=>{
//     console.log(err);
// });


var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//Serve static before session
// app.use(express.static('views'));

require('./routes/route')(app);

//Server
var server = app.listen(8000, function () {
    console.log('Server running at :8000');
});