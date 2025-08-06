/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    let res = 0;
    for (const t of tokens) {
        if (!isNaN(t)) {
            stack.push(Number(t));
        }
        else {
            const res1 = stack.pop();
            const res2 = stack.pop();
            if (t === '+') res = res2 + res1
            else if (t === '-') res = res2 - res1
            else if (t === '*') res = res2 * res1
            else res = res2 / res1 > 0 ? Math.floor(res2 / res1) : Math.ceil(res2 / res1); // 문제 조건에 맞게 정수 나눗셈
            stack.push(res)
        }
    }  
    return res
};