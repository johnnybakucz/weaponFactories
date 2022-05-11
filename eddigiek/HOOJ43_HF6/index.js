const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const { default: mongoose } = require('mongoose');

/*/
mongoose.connect('mongodb://localhost/hooj43');

var Cat = mongoose.model('Fozde', { nev: String,  telepules: String});

var kitty = new Cat({ nev: 'Monyo', telepules: 'Budapest' });
kitty.save(function (err) {
  console.log('meow');
});
/*/

app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(
    session({
        secret: 'secret'
    })
);

// Load routing
require('./route/fozde')(app);
require('./route/termek')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

app.listen(3000, function () {
    console.log('Hello :3000');
});

