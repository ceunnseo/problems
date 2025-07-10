/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let words = 'a';
    while (words.length < k) {
        let next = ''
        for (let i = 0; i <words.length; i++) {
            next += String.fromCharCode((words.charCodeAt(i)-97+1)%26+97);
        }
        words += next;
    }
    return words[k-1]
};