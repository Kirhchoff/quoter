var http = require('http');
var quoter = require('./quotes');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end("Random quote for you:<br><h1>" + quoter() + "</h1>");
}).listen(8081);

console.log("Server running @8081");
