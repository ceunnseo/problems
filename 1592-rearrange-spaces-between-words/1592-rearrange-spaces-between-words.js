/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let space = 0;
    let word = ''
    let res = []
    for (t of text) {
        if (t === ' ') {
            space += 1
            if (word !== '') {
                res.push(word)
                word = ''
            }
        }
        else {
            word += t
        }
    }
    if (word !== '') res.push(word)
    //console.log(Math.floor(space / (res.length-1)), space % (res.length-1))
    let result = ''
    if (res.length === 1) {
        result += res[0] + ' '.repeat(space)
        return result
    }
    const subSpace = Math.floor(space / (res.length-1))
    const lastSpace = (space % (res.length-1)) //남는 문자
    for (let i = 0; i < res.length; i++) {
        if (i !== res.length-1) result += res[i] + (' '.repeat(subSpace))
        else result += res[i] + (' '.repeat(lastSpace))
    }
    return result
};