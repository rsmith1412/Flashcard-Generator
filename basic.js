//Creating the Basic Card which will be 'clozed' later
var BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
    //Creating Basic Cards on our own
    this.createBasic = function() {
        console.log(front);
        console.log(back);
    }
}

//Exporting this constructor to app.js
module.exports = BasicCard;