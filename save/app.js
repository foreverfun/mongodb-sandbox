var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.post('/submitMovie', indexController.submitMovie);

var server = app.listen(6921, function() {
	console.log('Express server listening on port ' + server.address().port);
});
