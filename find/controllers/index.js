var Movie = require('../models/movie.js');

var indexController = {
	index: function(req, res) {
    Movie.find({}, function(err, results){
      console.log('results:', results);
      res.render('index', {
        movies:results
      });
		});
  }
};

module.exports = indexController;