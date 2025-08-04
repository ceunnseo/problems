/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = new Map();
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let large = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                large = Math.max(large, dp[nums[j]]+1);
            }
        }
        dp[nums[i]] = large
        res = Math.max(res, dp[nums[i]])
    }
    return res
};