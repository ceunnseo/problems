/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const arr = Array(26).fill(0);
    for (const str of s) {
        const idx = str.charCodeAt() - 'a'.charCodeAt();
        arr[idx] += 1;
    }
    for (const str of t) {
        const idx = str.charCodeAt() - 'a'.charCodeAt();
        arr[idx] -= 1;
        if (arr[idx] < 0) return false;
    }
    return arr.reduce((cur, acc) => cur + acc, 0) === 0 ? true : false;
};