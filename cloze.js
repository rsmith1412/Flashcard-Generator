//Create ClozeCard constructor
var ClozeCard = function(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, '...');
    this.textLower = text.toLowerCase();
    this.clozeLower = cloze.toLowerCase();

    if (!text.includes(cloze)) {
        console.log('ERROR: Cloze-deletion not included in full text.');
        return;
    }
}
//Testing constructor
var firstPres = new ClozeCard("George Washington was our first President.", "Tom Ford");
console.log(firstPres.fullText);
console.log(firstPres.cloze);
console.log(firstPres.partial);
//Export ClozeCard constructor to app.js
module.exports = ClozeCard;