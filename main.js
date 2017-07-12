var http = require('http');
var quotor = require('./quotes');

var startServer = function(port){
  http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end("Random quote for you:<br><h1>" + quotor() + "</h1>");
  }).listen(port);
  console.log("Server running @"+port);
}

quoter.startServer = startServer;

module.exports = quotor;
