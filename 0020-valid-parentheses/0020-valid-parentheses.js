/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const dic = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for (let i = 0; i< s.length; i++) {
        const ch = s[i]
        if (ch === '(' || ch === '[' || ch === '{') { //여는 괄호
            stack.push(ch)
        }
        else { //닫힌 괄호
            if (dic[ch] !== stack.pop()) return false;
        }
    }
    if (stack.length === 0) return true;
    return false;
};