var http = require('http');
var url = require('url');
var quotor = require('./quotes');

var startServer = function(port){
  http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log(pathname);
    if(pathname == "/quote"){
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end(quotor());
    }
    else{
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end("Random quote for you:<br><h1>" + quotor() + "</h1>");
    }
  }).listen(port);
  console.log("Server running @"+port);
}

quotor.startServer = startServer;

module.exports = quotor;
