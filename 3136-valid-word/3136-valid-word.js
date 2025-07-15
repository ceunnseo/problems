/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    const condition = Array.from({length : 4}, () => false) //글자수, 대문자 혹은 소문자 출현, 모음, 자음
    const MAXIMUM = 3
    let length = 1
    const vowel = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    for (w of word) {
        if (length >= MAXIMUM) {
            condition[0] = true
        }
        if (!isNaN(Number(w))) {
            
        }
        else{
            if ('A'.charCodeAt() <= w.charCodeAt() && w.charCodeAt() <= 'Z'.charCodeAt()) {
                condition[1] = true
                if (vowel.has(w)) {
                    condition[2] = true
                }
                else {
                    condition[3] = true
                }
            
            }
            else if ('a'.charCodeAt() <= w.charCodeAt() && w.charCodeAt() <= 'z'.charCodeAt()) {
                condition[1] = true
                if (vowel.has(w)) {
                    condition[2] = true
                }
                else {
                    condition[3] = true       
                }
            }
            else {
                return false
            }
        }
    length += 1 
    }
    console.log(condition)
    for (c of condition) {
        console.log(c)
        if (!c) {
            return false
        }
    }
    return true
};