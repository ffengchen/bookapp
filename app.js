var express = require('express');
var controller = require('./controllers/controller');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

controller(app);

app.listen(4000);







