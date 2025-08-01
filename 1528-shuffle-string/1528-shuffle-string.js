/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const result = [];
    for (let i = 0; i < indices.length; i++) {
        result[indices[i]] = s[i]
        //console.log(result)
    }
    return result.join('')
};