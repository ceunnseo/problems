/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    const res = [];
    for (const w of words) {
        const pm = new Map(); //pattern -> word
        const wm = new Map(); //word -> pattern
        let flag = false;
        for (let i = 0; i < w.length; i++) { //각 문자 하나씩 비교
             if ((pm.has(pattern[i]) && pm.get(pattern[i]) !== w[i])
             || (wm.has(w[i]) && wm.get(w[i]) !== pattern[i])) {
                console.log('글자가 서로 다릅니다', pattern, w);
                flag = true;
             }
             else {
                pm.set(pattern[i], w[i]);
                wm.set(w[i], pattern[i]);
             }
             if (flag) break;
        }
        if (!flag) res.push(w);
    }
    return res;
};