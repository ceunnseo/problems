/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a,b) => a-b)
    let i = 0, j = nums.length-1;
    let cnt = 0;
    while (i < j) {
        if (nums[i] + nums[j] < target) {
            cnt += (j-i);
            i++;
        }
        else {
            j--;
        }
    }
    return cnt;
    
};