/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    const wordList = text.split(' ').filter((x) => x.length > 0)
    const space = text.length - wordList.join().replaceAll(',', '').length
    if (wordList.length === 1) return wordList + ' '.repeat(space)
    const evenlySpace = Math.floor(space / (wordList.length - 1))
    const otherSpace = space - (evenlySpace * (wordList.length-1))
    return wordList.join(' '.repeat(evenlySpace)) + ' '.repeat(otherSpace)
};