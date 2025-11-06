/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const dict = {};
    let start = 0;
    let length = 0;
    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]] !== undefined && dict[s[i]] >= start) { //이미 값이 존재하는 경우
            length = Math.max(length, (i-start))
            start = dict[s[i]] + 1;
        }
        dict[s[i]] = i;
    }
    return Math.max(length, s.length-start);
};