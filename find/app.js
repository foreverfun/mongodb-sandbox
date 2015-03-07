var express = require('express');

// mongoose
var mongoose = require('mongoose');
// connect to a database
mongoose.connect('mongodb://localhost/movies');


var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', indexController.index);

var server = app.listen(4646, function() {
	console.log('Express server listening on port ' + server.address().port);
});
