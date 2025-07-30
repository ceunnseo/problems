/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    const set = new Set();
    for (let i = 0; i < s.length-k+1; i++) {
        const sub = s.substring(i, i+k);
        if (!set.has(sub)) {
            set.add(sub)
        }
    }
    return 2**k === set.size
};