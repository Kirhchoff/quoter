
var quotes = [
  {id: -1, text: "Truth can only be found in one place: the code.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -2, text: "It is not enough for code to work.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -3, text: "Slaves are not allowed to say no. Laborers may be hesitant to say no. But \
professionals are expected to say no. Indeed, good managers crave someone who \
has the guts to say no. It's the only way you can really get anything done.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -4, text: "If you're good at the debugger it means you spent a lot of time debugging. I don't want you to be good at the debugger.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -5, text: "Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code. \
...[Therefore,] making it easy to read makes it easier to write.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -6, text: "So if you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it easy to read.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -7, text: "You should name a variable using the same care with which you name a first-born child.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -8, text: "Clean code is not written by following a set of rules. You don't become a software craftsman by learning a list of heuristics. Professionalism and \
craftsmanship come from values that drive disciplines.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -9, text: "A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -10, text: "Every time you write a comment, you should grimace and feel the failure of your ability of expression.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -11, text: "What would happen if you allowed a bug to slip through a module, and it cost your company $10,000? The nonprofessional would shrug his shoulders, say \
\"stuff happens,\" and start writing the next module. The professional would write the company a check for $10,000!", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -12, text: "Remember that code is really the language in which we ultimately express the requirements. We may create languages that are closer to the requirements. \
We may create tools that help us parse and assemble those requirements into formal structures. But we will never eliminate necessary precision—so there will\
always be code.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -13, text: "When you are working on a problem, you sometimes get so close to it that you can't see all the options. You miss elegant solutions because the creative\
part of your mind is suppressed by the intensity of your focus. Sometimes the best way to solve a problem is to go home, eat dinner, watch TV, go to bed,\
and then wake up the next morning and take a shower.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -14, text: "It is not the language that makes programs appear simple. It is the programmer that make the language appear simple!", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -15, text: "Programmers must avoid leaving false clues that obscure the meaning of code", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -16, text: "Why do most developers fear to make continuous changes to their code? They are afraid they'll break it! Why are they afraid they'll break it? Because they \
don't have tests.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -17, text: "Duplication is the primary enemy of a well-designed system.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -18, text: "There are two parts to learning craftsmanship: knowledge and work. You must gain the knowledge of principles, patterns, practices, and heuristics that a \
craftsman knows, and you must also grind that knowledge into your fingers, eyes, and gut by working hard and practicing.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -19, text: "You are reading this book for two reasons. First, you are a programmer. Second, you want to be a better programmer.\
Good. We need better programmers.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -20, text: "Clean code always looks like it was written by someone who cares.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -21, text: "Of course bad code can be cleaned up. But it's very expensive.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -22, text: "Programming is a social activity.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -23, text: "The only way to prove that your software is easy to change is to make easy changes to it. And when you find that the changes aren't as easy as you thought, \
you refine the design so that the next change is easier. When do you make these easy changes? All the time! Every time you look at a module you make small, \
lightweight changes to it to improve its structure.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -24, text: "The problem isn't the simplicity of the code but the implicity of the code (to coin a phrase): the degree to which the context is not explicit in the code \
itself.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -25, text: "A system that is comprehensively tested and passes all of its tests all of the time is a testable system. That's an obvious statement, but an important \
one. Systems that aren't testable aren't verifiable. Arguably, a system that cannot be verified should never be deployed.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -26, text: "If the discipline of requirements specification has taught us anything, it is that well-specified requirements are as formal as code and can act as \
executable tests of that code!", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -27, text: "Redundant comments are just places to collect lies and misinformation.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -28, text: "Clean code is simple and direct. Clean code reads like well-written prose. Clean code never obscures the designer's intent but rather is full of crisp \
abstractions and straightforward lines of control.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -29, text: "The problem is that we view estimates in different ways. Business likes to view estimates as commitments. Developers like to view estimates as guesses. \
The difference is profound.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}},
  {id: -30, text: "An estimate is not a number. An estimate is a distribution.", author: {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"}}
];

var sources = {
  "Clean Code": {type: "book", url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882", name: "Clean Code", img: "https://images-na.ssl-images-amazon.com/images/I/41TINACY3hL._SX384_BO1,204,203,200_.jpg"}
};

function getQuote(qid) {
  index = parseInt(qid);
  if (index && index != NaN) {
    if (index < 0) {
      return quotes[-index-1];
    }
  }
  //TODO: return proper object with all mandatory fields (decide on the format of optional fields)
  let rv = quotes[Math.floor(Math.random() * quotes.length)];
  rv["source"] = sources["Clean Code"];
  return rv;
}

module.exports = getQuote;
