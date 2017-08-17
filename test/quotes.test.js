const quotes = require("../quotes.js");

describe("getQuotes", () => {
  test("should return a valid json string", () => {
    const result = quotes();
    expect(typeof result).toBe('object');
    expect(result).toHaveProperty('text', expect.any(String));
    expect(result).toHaveProperty('author', expect.any(String));
  });
});
