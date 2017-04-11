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
    else
        console.log("Full text: " + text);
        console.log("Cloze: " + cloze);
}

//Export ClozeCard constructor to app.js
module.exports = ClozeCard;