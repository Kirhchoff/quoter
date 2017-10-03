var http = require('http');
var server = require('./server');
var quotor = require('./quotes');

var startServer = function(port){
  http.createServer(function(request, response){
    let req = server.parseRequest(request);
    console.log(req);
    if (req.type == "/quote"){
      server.getQuoteJsonResponse(response, req.qid);
    } else if (req.type == "/favicon.ico") {
      server.favicon(response);
    } else if (req.type == "/") {
      server.defaultResponse(response);
    }
  }).listen(port);
  console.log("Server running @"+port);

  setInterval(function() {
    http.get("http://quotor.herokuapp.com");
  }, 300000);
}

quotor.startServer = startServer;

module.exports = quotor;
