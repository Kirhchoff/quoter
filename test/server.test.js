
jest.mock('../quotes');


describe("server", () => {
  var server;
  var respMock, quotesMock;

  beforeEach(() => {
    server = require("../server");
    quotesMock = require("../quotes");
    respMock = {writeHead: jest.fn(), end: jest.fn()};
  });

  describe("defaultResponse", () => {
    test("should respond with a quote", () => {
      quotesMock.mockReturnValueOnce({text: "quote"});
      server.defaultResponse(respMock);
      expect(quotesMock).toBeCalled();
      expect(respMock.writeHead).toBeCalledWith(200, {'Content-Type': 'text/html'});
      expect(respMock.end).toBeCalledWith(expect.any(String));
    });
  });

  describe("getQuoteJsonResponse", () => {
    test("should respond with random quote object when invoked without parameters", () => {
      const quote = {text: "quote"};
      quotesMock.mockReturnValueOnce(quote);
      server.getQuoteJsonResponse(respMock);
      expect(quotesMock).toBeCalled();
      expect(respMock.writeHead).toBeCalledWith(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
      expect(respMock.end).toBeCalledWith(JSON.stringify(quote));
    });

    test("should respond with specific quote object when invoked with valid qid", () => {
      const qid = 44;
      const quote = {text: "specific quote"};
      quotesMock.mockReturnValueOnce(quote);
      server.getQuoteJsonResponse(respMock, qid);
      expect(quotesMock).toBeCalledWith(qid);
      expect(respMock.writeHead).toBeCalledWith(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
      expect(respMock.end).toBeCalledWith(JSON.stringify(quote));
    });

    /*test("should respond with failure when invoked with qid out of range", () => {
      expect(true).toBe(false);
    });

    test("should respond with specific quote when invoked with non-integer qid", () => {
      expect(true).toBe(false);
    });*/
  });
});
