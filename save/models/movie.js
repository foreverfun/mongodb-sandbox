var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
    title: String
  });

var Movie = mongoose.model('Movie', movieSchema);

var movieInstance = new Movie({title:'The Star War'});

movieInstance.save(function(err, result){

});

module.exports = Movie;