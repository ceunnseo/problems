/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const dp = {}
    words.sort((a, b) => b.length - a.length)
    for (const word of words) {
        dp[word] = 1
    }

    for (const word of words) {
        const wordList = word.split('')
        for (let i = 0; i< wordList.length; i++) {
            const sub = wordList.slice(0, i).join('') + wordList.slice(i+1, wordList.length).join('')
            if (sub in dp) {
                //console.log(word, sub)
                dp[sub] = Math.max(dp[word] + 1, dp[sub])
            }
        } 
    }
    console.log(dp)
    return (Math.max(...Object.values(dp)))

};