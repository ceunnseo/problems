/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const shuffleString = [];
    indices.forEach((newIdx, idx) => {
        shuffleString[newIdx] = s[idx]
    })
    return shuffleString.join('')
};