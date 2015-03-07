var Movie = require('../models/movie.js');

var indexController = {
	index: function(req, res) {
    Movie.find({},function(err, result){
		  res.render('index', {movies:result});
    });
	},

  submitMovie: function(req, res) {
    console.log(req.body.title);
    var submittedData = req.body;

    var newMovie = new Movie({
      title:submittedData.title
    });

    newMovie.save(function(err, result){
      res.redirect('/');
    })
  }

};

module.exports = indexController;