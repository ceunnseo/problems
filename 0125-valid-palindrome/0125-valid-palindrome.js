/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const cleaned = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    const length = cleaned.length;
    const maximumIdx = Math.floor(length / 2);
    let i = 0;
    
    while (i < maximumIdx) {
        if (cleaned[i] !== cleaned[length-1-i]) return false;
        i += 1;
    }
    return true;
};