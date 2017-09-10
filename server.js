
var quotor = require('./quotes');
var url = require('url');

function favicon(response) {
  response.end();
}

function defaultResponse(response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(`Random quote for you:<br><h1>${quotor().text}</h1>`);
}

function getQuoteJsonResponse(response, qid) {
  response.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
  //TODO: validate qid
  response.end(JSON.stringify(quotor(qid)));
}

function parseRequest(request) {
  reqUrl = url.parse(request.url);
  return {
    type: reqUrl.pathname,
    //TODO: tidy up this parameter parsing
    // get data after "?q="
    qid: reqUrl.query ? reqUrl.query.slice(2) : undefined
  }
}

module.exports = {
  parseRequest: parseRequest,
  defaultResponse: defaultResponse,
  getQuoteJsonResponse: getQuoteJsonResponse,
  favicon: favicon
};
