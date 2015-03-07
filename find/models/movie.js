var mongoose = require ('mongoose');

var movieSchema = mongoose.Schema( {
  title: String
});

var Movie = mongoose.model('Movie', movieSchema);

var movieInstance = new Movie({
  title: 'Gladiator'
});

movieInstance.save(function(err,result){
  console.log('result:', result);
});

module.exports = Movie;