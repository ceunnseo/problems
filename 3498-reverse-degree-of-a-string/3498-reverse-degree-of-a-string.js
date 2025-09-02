/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        res += ('z'.charCodeAt()-s[i].charCodeAt()+ 1) * (i+1)
    }
    return res;
};