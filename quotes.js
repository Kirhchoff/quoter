

var quotes = [
  "one",
  "two",
  "silver fox",
  "yellow bunny",
  "cool story"
];


module.exports = function(){
  return quotes[Math.floor(Math.random() * quotes.length)];
};
