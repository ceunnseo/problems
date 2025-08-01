/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const result = Array(s.length).fill('')
    indices.forEach((next, prev) => {
        result[next] = s[prev]
    })
    return result.join('')
};