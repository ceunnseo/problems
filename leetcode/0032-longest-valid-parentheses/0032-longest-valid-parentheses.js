/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [-1]; //초기 기준점
    let maxLen = 0; //최대 길이
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        }
        else {
            stack.pop() //짝을 찾았고
            if (stack.length === 0) { //더 이상 기준점 없으면
                stack.push(i)
            }
            else {
                len = i - stack[stack.length-1];
                maxLen = Math.max(maxLen, len)
            }

        }
    }
    return maxLen;
};