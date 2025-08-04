/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const dp = new Map()
    words.sort((a, b) => a.length - b.length) //길이가 짧은 순서로 정렬
    let maxLen = 1;
    for (const word of words) {
        let best = 1;
        for (let i = 0; i< word.length; i++) {
            const sub = word.slice(0, i) + word.slice(i+1, word.length)
            if (dp.has(sub)) {
                //console.log(word, sub)
                best = Math.max(best, dp.get(sub) + 1)
            }
            dp.set(word, best);
            maxLen = Math.max(maxLen, best)
        } 
    }
    return maxLen;

};