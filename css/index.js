var express = require('express');
var pug = require('pug');
var app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
  console.log('Requesting home page...');
  response.send(pug.renderFile(__dirname + '/index.html', {}));
  // response.sendFile(__dirname + '/index.html');
});

app.get('/harry1-sorcererstone', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/books/harry1-sorcererstone.html', {}));
});

app.get('/harry2-chamber', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/books/harry2-chamber.html', {}));
});

app.get('/harry3-prisoner', function(request, response) {
  console.log('Requesting contact page....');
  response.send(pug.renderFile(__dirname + '/books/harry3-prisoner.html', {}));
});

app.listen(3000, function() {
  console.log('Web server started on port 3000');
});







// app.get('/harry1-sorcererstone', function(request, response) {
//   console.log('Requesting contact page....');
//   response.sendFile(__dirname + '/books/harry1-sorcererstone.html')

// app.get('/harry1-sorcererstone', function(request, response) {
//   console.log('Requesting contact page....');
//   response.sendFile(__dirname + '/books/harry1-sorcererstone.html')






