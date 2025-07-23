/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return /^[A-Z]+$/.test(word)
    || /^[a-z]+$/.test(word)
    || /^[A-Z][a-z]+$/.test(word);
};