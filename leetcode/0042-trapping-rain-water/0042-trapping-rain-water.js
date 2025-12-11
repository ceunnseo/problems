/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length <= 2) return 0; //고일 수가 없는 구조
    let result = 0;
    const stack =[];
    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[stack[stack.length-1]] < height[i]) {
            const bottomIdx = stack.pop(); 
            const bottomHeight = height[bottomIdx];
            if (stack.length === 0) break; //왼쪽 벽이 없음
            const leftIdx = stack[stack.length-1];
            const leftHeight = height[leftIdx];
            result += [Math.min(leftHeight, height[i]) - bottomHeight] * (i-leftIdx-1);
        }
        stack.push(i);
    }
    return result
};