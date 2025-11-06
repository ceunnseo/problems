/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const leftRes = Array(n).fill(1);
    const rightRes = Array(n).fill(1);
    const result = []
    for (let i = 1; i < n; i++) {
        leftRes[i] = leftRes[i-1] * nums[i-1]
        rightRes[n-i-1] = rightRes[n-i] * nums[n-i]
    }
    for (let i = 0; i < n; i++) {
        result[i] = leftRes[i] * rightRes[i]
    }
    return result
};