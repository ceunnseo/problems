/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    const regex = /[0]/
    for (let a = 0; a < n; a++) {
        let b = n-a
        if (regex.test(a) || regex.test(b)) {
            continue;
        }
        return [a, b]
    }
};