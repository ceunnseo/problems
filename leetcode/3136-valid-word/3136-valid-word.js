/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) return false;
    const vowelSet = new Set(['a','e','i','o','u','A','E','I','O','U'])
    let hasVowel = false;
    let hasConsonant = false;
    for (let ch of word) {
        if (!isNaN(Number(ch))) {
            continue
        }
        else if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
            if (vowelSet.has(ch)) {
                hasVowel = true;
            }
            else {
                hasConsonant = true;
            }
        }
        else {
            return false
        }
    }
    return hasVowel && hasConsonant;
};