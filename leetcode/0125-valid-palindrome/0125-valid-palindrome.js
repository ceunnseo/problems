/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    const isAlpha = (ch) => {
        return /^[A-Za-z]$/.test(ch)
    }
    const isDigit = (ch) => {
        return /^[0-9]$/.test(ch)
    }
    let left = 0;
    let right = s.length-1;
    while (left < right) {
        while (left < right && !(isAlpha(s[left]) || isDigit(s[left]))) {
            left++;
        }
        while (left < right && !(isAlpha(s[right]) || isDigit(s[right]))) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            console.log('s[left]', s[left], 's[right]', s[right])
            return false;
        }
        left++;
        right--;
    }
    return true;
};