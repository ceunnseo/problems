/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const answer = Array(n).fill(0);
    const stack = [[temperatures[0], 0]];
    for (let i = 1; i < n; i++) {
        //console.log(stack[stack.length-1], stack[stack.length-1][0], stack[stack.length-1][1])
        while (stack.length && stack[stack.length-1][0] < temperatures[i]) {
            const [tem, idx] = stack.pop();
            answer[idx] = i-idx
            //console.log('while문')
        }
        stack.push([temperatures[i], i])
    }
    return answer
};