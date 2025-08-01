/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let space = 0;
    let word = ''
    let wordList = []
    //공백과 단어 세기
    for (t of text) {
        if (t === ' ') {
            space += 1
            if (word !== '') {
                wordList.push(word)
                word = ''
            }
        }
        else {
            word += t
        }
    }
    if (word !== '') wordList.push(word)

    //공백 붙이기
    if (wordList.length === 1) {
        return wordList[0] + ' '.repeat(space)
    }
    const betweenSpace = Math.floor(space / (wordList.length-1))
    const lastSpace = (space % (wordList.length - 1))
    return wordList.join(' '.repeat(betweenSpace)) + ' '.repeat(lastSpace)
};