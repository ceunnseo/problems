/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let cnt = 0;
    nums.sort((a,b) => a - b);
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] >= target) break;
            cnt += 1;
        }
    }
    return cnt;
};