/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const n = nums.length;
    const dp = Array(n).fill(1);
    const cnt = Array(n).fill(1);
    let res = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) { //더 긴 수열 발견
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1; //업데이트
                    cnt[i] = cnt[j] 
                }
                else if (dp[j] + 1 === dp[i]) {
                    cnt[i] += cnt[j]
                }
            }
        }
        res = Math.max(res, dp[i])
    }
    let result = 0; 
    for (let i = 0; i < n; i++) {
        if (dp[i] === res) result += cnt[i]
    }
    return result
};