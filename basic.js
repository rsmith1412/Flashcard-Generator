//Dummy array
var basicCollection = [];
//Creating the Basic Card 
var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;

    basicCollection.push(front, back);
}

//Exporting this constructor to app.js
module.exports = BasicCard;