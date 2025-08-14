/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var beautifulSubstrings = function(s, k) {
    const vowels = new Set('aeiou');
    const n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        let v = 0, c = 0;
        for (let j = i; j < n; j++) {
            if (vowels.has(s[j])) v += 1;
            else c += 1;
            if (v === c) {
                let x = v * c;
                if (x % k === 0) res += 1;
            }   
        }
    }
    return res;
};