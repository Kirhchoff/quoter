
const quotes = [
  {id: -1, source_: "Clean Code", text: "Truth can only be found in one place: the code.", author_: "Uncle Bob"},
  {id: -2, source_: "Clean Code", text: "It is not enough for code to work.", author_: "Uncle Bob"},
  {id: -3, source_: "The Clean Coder", text: "Slaves are not allowed to say no. Laborers may be hesitant to say no. But professionals are expected to say no. Indeed, good managers crave someone who has the guts to say no. It's the only way you can really get anything done.", author_: "Uncle Bob"},
  {id: -4, text: "If you're good at the debugger it means you spent a lot of time debugging. I don't want you to be good at the debugger.", author_: "Uncle Bob"},
  {id: -5, source_: "Clean Code", text: "Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code. ...[Therefore,] making it easy to read makes it easier to write.", author_: "Uncle Bob"},
  {id: -6, source_: "Clean Code", text: "So if you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it easy to read.", author_: "Uncle Bob"},
  {id: -7, source_: "Clean Code", text: "You should name a variable using the same care with which you name a first-born child.", author_: "Uncle Bob"},
  {id: -8, source_: "Clean Code", text: "Clean code is not written by following a set of rules. You don't become a software craftsman by learning a list of heuristics. Professionalism and craftsmanship come from values that drive disciplines.", author_: "Uncle Bob"},
  {id: -9, source_: "Clean Code", text: "A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment.", author_: "Uncle Bob"},
  {id: -10, source_: "Clean Code", text: "Every time you write a comment, you should grimace and feel the failure of your ability of expression.", author_: "Uncle Bob"},
  {id: -11, source_: "The Clean Coder", text: "What would happen if you allowed a bug to slip through a module, and it cost your company $10,000? The nonprofessional would shrug his shoulders, say \"stuff happens,\" and start writing the next module. The professional would write the company a check for $10,000!", author_: "Uncle Bob"},
  {id: -12, source_: "Clean Code", text: "Remember that code is really the language in which we ultimately express the requirements. We may create languages that are closer to the requirements. We may create tools that help us parse and assemble those requirements into formal structures. But we will never eliminate necessary precision—so there will always be code.", author_: "Uncle Bob"},
  {id: -13, source_: "The Clean Coder", text: "When you are working on a problem, you sometimes get so close to it that you can't see all the options. You miss elegant solutions because the creative part of your mind is suppressed by the intensity of your focus. Sometimes the best way to solve a problem is to go home, eat dinner, watch TV, go to bed, and then wake up the next morning and take a shower.", author_: "Uncle Bob"},
  {id: -14, source_: "Clean Code", text: "It is not the language that makes programs appear simple. It is the programmer that make the language appear simple!", author_: "Uncle Bob"},
  {id: -15, source_: "Clean Code", text: "Programmers must avoid leaving false clues that obscure the meaning of code.", author_: "Uncle Bob"},
  {id: -16, source_: "The Clean Coder", text: "Why do most developers fear to make continuous changes to their code? They are afraid they'll break it! Why are they afraid they'll break it? Because they don't have tests.", author_: "Uncle Bob"},
  {id: -17, source_: "Clean Code", text: "Duplication is the primary enemy of a well-designed system.", author_: "Uncle Bob"},
  {id: -18, source_: "Clean Code", text: "There are two parts to learning craftsmanship: knowledge and work. You must gain the knowledge of principles, patterns, practices, and heuristics that a craftsman knows, and you must also grind that knowledge into your fingers, eyes, and gut by working hard and practicing.", author_: "Uncle Bob"},
  {id: -19, source_: "Clean Code", text: "You are reading this book for two reasons. First, you are a programmer. Second, you want to be a better programmer.Good. We need better programmers.", author_: "Uncle Bob"},
  {id: -20, source_: "Clean Code", text: "Clean code always looks like it was written by someone who cares.", author_: "Uncle Bob"},
  {id: -21, source_: "Clean Code", text: "Of course bad code can be cleaned up. But it's very expensive.", author_: "Uncle Bob"},
  {id: -22, source_: "Clean Code", text: "Programming is a social activity.", author_: "Uncle Bob"},
  {id: -23, source_: "The Clean Coder", text: "The only way to prove that your software is easy to change is to make easy changes to it. And when you find that the changes aren't as easy as you thought, you refine the design so that the next change is easier. When do you make these easy changes? All the time! Every time you look at a module you make small, lightweight changes to it to improve its structure.", author_: "Uncle Bob"},
  {id: -24, source_: "Clean Code", text: "The problem isn't the simplicity of the code but the implicity of the code (to coin a phrase): the degree to which the context is not explicit in the code itself.", author_: "Uncle Bob"},
  {id: -25, source_: "Clean Code", text: "A system that is comprehensively tested and passes all of its tests all of the time is a testable system. That's an obvious statement, but an important one. Systems that aren't testable aren't verifiable. Arguably, a system that cannot be verified should never be deployed.", author_: "Uncle Bob"},
  {id: -26, source_: "Clean Code", text: "If the discipline of requirements specification has taught us anything, it is that well-specified requirements are as formal as code and can act as executable tests of that code!", author_: "Uncle Bob"},
  {id: -27, source_: "Clean Code", text: "Redundant comments are just places to collect lies and misinformation.", author_: "Uncle Bob"},
  {id: -28, source_: "Clean Code", text: "Clean code is simple and direct. Clean code reads like well-written prose. Clean code never obscures the designer's intent but rather is full of crisp abstractions and straightforward lines of control.", author_: "Uncle Bob"},
  {id: -29, source_: "The Clean Coder", text: "The problem is that we view estimates in different ways. Business likes to view estimates as commitments. Developers like to view estimates as guesses. The difference is profound.", author_: "Uncle Bob"},
  {id: -30, source_: "Clean Code", text: "Writing clean code is what you must do in order to call yourself a professional. There is no reasonable excuse for doing anything less than your best.", author_: "Uncle Bob"},
  {id: -31, source_: "Career Guide", text: "The process of software development always begins by first understanding the problem to be solved", author_: "John Sonmez"},
  {id: -32, source_: "Career Guide", text: "There are many roads you can take to get there - I'll be covering some of them in the upcoming chapters - but what's important isn't so much the road you take but rather that you pisck a road and stick to it.", author_: "John Sonmez"},
  {id: -33, source_: "Career Guide", text: "The best way to develop your plan is to work backwards from the goal you want to achieve.", author_: "John Sonmez"},
  {id: -34, source_: "Career Guide", text: "The good developer [...] tests their own code before giving it t osomeone else.", author_: "John Sonmez"},
  {id: -35, source_: "Career Guide", text: "You are going to spend perhaps 90% of your time as a software developer figuring out why the hell your code doesn't work.", author_: "John Sonmez"},
  {id: -36, source_: "Career Guide", text: "I happen to know there are a whole lot of people who say they are doing software development methodologies like Scrum just because they have a meeting hwere everyone stands up every day.", author_: "John Sonmez"},
  {id: -37, source_: "Career Guide", text: "You can't Google something if you don't know what it is.", author_: "John Sonmez"},
  {id: -38, source_: "Career Guide", text: "I first try to teach my students how big a particular technology is and an overview of whatt it can do.", author_: "John Sonmez"},
  {id: -39, source_: "Career Guide", text: "Don't try to guess the future, unless you have a crystal ball. In which case, forget programming. Wall Street is where you need to be.", author_: "John Sonmez"},
  {id: -40, source_: "Career Guide", text: "Programming today involves utilizing libraries and frameworks more than language features.", author_: "John Sonmez"},
  {id: -41, source_: "Career Guide", text: "In a typical workplace, you might only code for about 20% of your time - if that.", author_: "John Sonmez"},
  {id: -42, source_: "Career Guide", text: "As humans we tend to overestimate what we can accomplish in a day.", author_: "John Sonmez"},
  {id: -43, source_: "Career Guide", text: "Video game development is not for the faint of heart. It's an extremely difficult and demanding line of work, and the rewards are not nearly as great as you might think.", author_: "John Sonmez"},
  {id: -44, source_: "Career Guide", text: "[DBA's] role can vary from organization to organization, but generally it involves hurting developers' feelings by telling them their code sucks", author_: "John Sonmez"},
  {id: -45, source_: "Career Guide", text: "When you change shit, you don't break shit.", author_: "John Sonmez"},
  {id: -46, source_: "Career Guide", text: "As a software developer, I can guarantee you one thing: you are going to spend a great deal of time debugging code.", author_: "John Sonmez"},
  {id: -47, source_: "Career Guide", text: "There are certain constants in life which are unavoidable: death, taxes and programmers creating bugs.", author_: "John Sonmez"},
  {id: -48, source_: "Career Guide", text: "The debugger should be your last resort.", author_: "John Sonmez"},
  {id: -49, source_: "Career Guide", text: "One-hundred percecnt of problems that can't be reproduced can't be debugged.", author_: "John Sonmez"},
  {id: -50, source_: "Career Guide", text: "Every once in awhile, you'll write a unit test to test some obvious assumption and the result will shock you.", author_: "John Sonmez"},
  {id: -51, source_: "Career Guide", text: "If you fix a problem, understand why what you did fixed it.", author_: "John Sonmez"},
  {id: -52, source_: "Career Guide", text: "Learn how to write good code that is easy to maintain, so that developers who later have to maintain your code don't track you down, come to your house and kill you in your sleep.", author_: "John Sonmez"},
  {id: -53, source_: "Career Guide", text: "Most software development projects that end up abandoning unit tests do so for one major reason: they are unmaintainable. So don't make that mistake.", author_: "John Sonmez"},
  {id: -54, source_: "Career Guide", text: "Cryptic comments are sometimes as bad, or worse, than cryptic code, because you can at least figure out what cryptic code does. You can't really figure out what a cryptic comment might have meant.", author_: "John Sonmez"},
  {id: -55, source_: "Career Guide", text: "Uniformity trumps perfection.", author_: "John Sonmez"},
  {id: -56, source_: "Career Guide", text: "The first thing to know about job titles is that they don't really matter.", author_: "John Sonmez"},
  {id: -57, source_: "Career Guide", text: "For some reason, programmers really like to argue with people and to yell.", author_: "John Sonmez"},
  {id: -58, source_: "Career Guide", text: "You really should spend at least three times more time thinking about the code you are about to write as you do actually writing it.", author_: "John Sonmez"},
  {id: -59, source_: "Career Guide", text: "One of the things you can do as a software developer on your team is to make sure that you don't pick up new work when you can contribute to work that is already in progress by another team member.", author_: "John Sonmez"}
];

const sources = {
  "Clean Code": {type: "book", url: "http://amzn.to/2wh6PBi", name: "Clean Code: A Handbook of Agile Software Craftsmanship", img: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0132350882&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=420dc3-20"}
  ,"The Clean Coder": {type: "book", name: "The Clean Coder: A Code of Conduct for Professional Programmers", url: "https://www.amazon.com/gp/product/0137081073/ref=as_li_tl?ie=UTF8&tag=420dc3-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0137081073&linkId=0fb705b2d2e5d0701761ccf513cb44a5", img: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0137081073&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=420dc3-20"}
  ,"Career Guide": {type: "book", name: "The Complete Software Developer's Career Guide: How to Learn Programming Languages Quickly, Ace Your Programming Interview, and Land Your Software Developer Dream Job",
    url: "https://www.amazon.com/gp/product/0999081411/ref=as_li_tl?ie=UTF8&tag=420dc3-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0999081411&linkId=90debf59610cb9ada11e9b8b462bf954", img: "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0999081411&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=420dc3-20"}
};

const authors = {
  "Uncle Bob": {name: "Robert C. Martin (Uncle Bob)", page: "https://sites.google.com/site/unclebobconsultingllc/"},
  "John Sonmez": {name: "John Sonmez", page: "https://simpleprogrammer.com/"}
}

function getQuote(qid) {
  index = parseInt(qid);
  let rv = {};
  if (index && index != NaN && index < 0) {
    rv = quotes[-index-1];
  } else {
    rv = quotes[Math.floor(Math.random() * quotes.length)];
  }
  console.log(rv);
  if (rv.source_ != undefined && rv.source_ in sources) {
    rv.source = sources[rv.source_];
  }
  if (rv.author_ != undefined && rv.author_ in authors) {
    rv.author = authors[rv.author_];
  }
  return rv;
}

module.exports = getQuote;
