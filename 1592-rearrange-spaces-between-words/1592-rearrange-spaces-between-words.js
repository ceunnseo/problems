/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let newTextArray = text.split(" ").filter((x) => x.length > 0);
    let totalSpaces = text.length - newTextArray.join().replaceAll(',','').length
    let spaceDistribution = Math.floor(totalSpaces / (newTextArray.length - 1));
    const char = ' ';
    let newText = '';
    let spaceCounter = 0;
    for (let i = 0; i < newTextArray.length; i++) {
        newText += newTextArray[i];
        if (i === newTextArray.length-1) {
            newText += char.repeat(totalSpaces - spaceCounter);
            break;
        }
        spaceCounter = spaceCounter + spaceDistribution;
        newText += char.repeat(spaceDistribution);
    }
    return newText
};