/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const n = s.length;
    const visited = Array(n).fill(false);
    const stack = [];
    let cnt = 0;
    let maximum = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') stack.push(i);
        else {
            if (stack.length) {
                const k = stack.pop();
                visited[i] = true;
                visited[k] = true;
            }
        }
    }
    for (const v of visited) {
        if (v) cnt +=1 ; //길이 증가하다가
        else cnt = 0; //false를 만나면 끊긴거니까 0으로
        if (maximum < cnt) maximum = cnt;
    }
    return maximum;
};