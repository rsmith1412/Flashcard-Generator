//Retrieve Basic Card constructor from .js file
var BasicCard = require("./basic.js");
//Retrieve Basic Card constructor from .js file
var ClozeCard = require("./cloze.js");
//Allowing the user to create unique questions later from command line
var question = process.argv[2];
var answer = process.argv[3];
var name = process.argv[4];
//Arrays to store card objects
var basicCollection = [];
var clozeCollection = [];

var firstPres = new BasicCard("Who was the first President of the United States?", "George Washington");
console.log(firstPres.front);
console.log(firstPres.back);
var firstPresCloze = new ClozeCard("George Washington was our first President.", "George Washington");


var userCreate = function(question, answer, name) {
    
}
//var quiz = function() {

//}

//var viewBasicCards = function() {
    //console.log(basicCollection);
//}

//viewBasicCards();