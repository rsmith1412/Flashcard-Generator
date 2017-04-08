//Retrieve Basic Card constructor from .js file
var BasicCard = require("./basic.js");
//Retrieve Basic Card constructor from .js file
var ClozeCard = require("./cloze.js");
var question = process.argv[2];
var answer = process.argv[3];

var basicCollection = [];
var clozeCollection = [];

var firstPres = new BasicCard("Who was the first President of the United States?", "George Washington");
console.log("------------------");
console.log(firstPres.front);
console.log(firstPres.back);
console.log("------------------");

var firstPres = new ClozeCard("George Washington was our first President.", "George Washington");
console.log(firstPres.fullText);
console.log(firstPres.cloze);
console.log(firstPres.partial);
