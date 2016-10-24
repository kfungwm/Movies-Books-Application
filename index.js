var express = require('express');
var pug = require('pug');
var fs = require('fs');

var app = express();

var media = JSON.parse(fs.readFileSync("data.json"));

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
  console.log('Requesting homepage');
  response.render('index.pug', { movies: media.movies, books: media.books });
});

app.get('/movies/*', function(req, res) {
  var foundMovie = getResource(req.params[0], 'movies');

  res.send('movie.pug', { movie: foundMovie });
});

app.get('/books/*', function(req, res) {
  var foundBook = getResource(req.params[0], 'books');

  res.send('book.pug', { movie: foundBook });
});


app.listen(3001, function() {
  console.log('Web server is now running on port 3001');
});


function getResource(slug, resourceName) {
  var resourceArray = media[resourceName];

  for (var i = 0; i < resourceArray.length; i++) {
    if (resourceArray[i].slug === slug) {
      return resourceArray[i];
    }
  }
}
//
// app.use(express.static(__dirname + '/'));
//
// app.get('/', function(request, response) {
//   response.redirect('/medias');
// });
//
// app.get('/medias', function(req, res) {
//   console.log('Requesting /medias');
//   res.send(pug.renderFile('views/index.pug', { medias: dataInMemory }));
// });
//
// app.get('/medias/*', function(req, res) {
//   var foundMovie = findMovie(req.params[0]);
//   console.log(foundMedia);
//   res.send(pug.renderFile('views/media.pug', { media: foundMedia }));
// });
//
// app.listen(3001, function() {
//   console.log('Web server is now running on port 3001');
// });
