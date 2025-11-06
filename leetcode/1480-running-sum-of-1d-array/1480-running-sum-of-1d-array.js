/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const result = Array(nums.length).fill(0)
    result[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i-1] + nums[i]
    }
    return result
};