var express = require('express');
var pug = require('pug');
var fs = require('fs');
var app = express();

var dataMoviesMemory = JSON.parse(fs.readFileSync("data.json").toString())["movies"];

var dataBooksMemory = JSON.parse(fs.readFileSync("data.json").toString())["books"];


function findMovie(slug) {
  for (var i = 0; i < dataMoviesMemory.length; i++) {
    if (dataMoviesMemory[i].slug === slug) {
      return dataMoviesMemory[i];
    }
  }
}

function findBook(slug) {
  for (var i = 0; i < dataBooksMemory.length; i++) {
    if (dataBooksMemory[i].slug === slug) {
      return dataBooksMemory[i];
    }
  }
}

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.redirect('/media');
});

app.get('/media', function(request, response) {
   console.log('Requesting media');
   response.send(pug.renderFile(__dirname + '/views/index.pug', { movies: dataMoviesMemory, books: dataBooksMemory }));
});

app.get('/movies', function(req, res) {
  console.log('Requesting /movies');
  res.send(pug.renderFile('views/movies.pug', { movies: dataMoviesMemory }));
});

app.get('/books', function(req, res) {
  console.log('Requesting /books');
  res.send(pug.renderFile('views/books.pug', { books: dataBooksMemory }));
});

app.get('/movies/*', function(req, res) {
  var foundMovie = findMovie(req.params[0]);
  console.log(foundMovie);
  res.send(pug.renderFile('views/movie.pug', { movie: foundMovie }));
});

app.get('/books/*', function(req, res) {
  var foundBook = findBook(req.params[0]);
  console.log(foundBook);
  res.send(pug.renderFile('views/book.pug', { book: foundBook }));
});


app.listen(3001, function() {
  console.log('Web server is now running on port 3001');
});
