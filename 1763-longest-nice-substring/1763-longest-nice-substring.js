/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    let longest = ""
    function isNice(str) {
        const set = new Set(str);
        for (let ch of set) {
            if (!(set.has(ch.toLowerCase()) && set.has(ch.toUpperCase()))) return false;
        }
        return true
    }
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j <= s.length; j++) {
            const sub = s.substring(i, j);
            if (isNice(sub) && (sub.length > longest.length)) {
                longest = sub;
            }
        }
    }
    return longest;
    
};