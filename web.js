var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var bufPage = new Buffer(8192);
  bufPage = fs.readFileSync("index.html"); 
  response.send(bufPage.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
