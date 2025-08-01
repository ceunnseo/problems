/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    const textList = text.split(' ').filter((x) => x.length > 0)
    const spaces = text.length - textList.join().replaceAll(',', '').length
    if (textList.length === 1) return textList[0] + ' '.repeat(spaces);
    const spaceEvenly = Math.floor(spaces / (textList.length - 1));
    const spaceLastly = spaces - (spaceEvenly * (textList.length-1));
    let newText = '';
    for (let i = 0; i < textList.length; i++) {
        if (i === textList.length-1) newText += textList[i] + ' '.repeat(spaceLastly)
        else newText += textList[i] + ' '.repeat(spaceEvenly)
    }
    return newText;
};