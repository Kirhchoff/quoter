var http = require('http');
var url = require('url');
var quotor = require('./quotes');

var startServer = function(port){
  http.createServer(function(request, response){
    console.log(request.url);
    reqUrl = url.parse(request.url);
    var pathname = reqUrl.pathname;
    if (pathname == "/quote"){
      let qid = reqUrl.query ? reqUrl.query.slice(2) : undefined;
      response.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
      response.end(quotor(qid));
    }
    else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end("Random quote for you:<br><h1>" + quotor() + "</h1>");
    }
  }).listen(port);
  console.log("Server running @"+port);
}

quotor.startServer = startServer;

module.exports = quotor;
