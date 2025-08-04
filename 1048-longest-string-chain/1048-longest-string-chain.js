/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const dp = new Map();
    let res = 0;
    words.sort((a,b) => a.length - b.length)
    for (const w of words) {
        dp.set(w, 1)
        for (let i = 0; i < w.length; i++) {
            const sub = w.slice(0, i) + w.slice(i+1, w.length)
            if (dp.has(sub)) {
                if (dp.get(w) < dp.get(sub) + 1) {
                    dp.set(w, dp.get(sub) + 1)
                }
            }
        }
        res = Math.max(res, dp.get(w))
    }
    return res
};