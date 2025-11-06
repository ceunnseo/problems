/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    let longest = '';
    for (let i = 0; i < s.length; i++ ) {
        for (let j = i+1; j <= s.length; j++) {
            const sub = s.substring(i, j);
            const set = new Set(sub)
            let flag = false;
            for (k of set) {
                if (!(set.has(k.toLowerCase()) && set.has(k.toUpperCase()))) {
                    flag = true ;
                    break;
                }
            }
            if (!flag) {
                if (longest.length < sub.length) {
                    longest = sub;
                }
            }
            
        }
    }
    return longest;
};