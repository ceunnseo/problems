/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    let i = k, j = k;
    let res = nums[k];
    let mini = nums[k];
    while (i >= 0 && j < nums.length) {
        let left = 0;
        let right = 0;
        if (j+1 < nums.length) left = nums[j+1];
        if (i-1 >= 0) right = nums[i-1];
        //이동
        if (right === 0 && left === 0) break;
        if (left > right) {
            j++;
            mini = Math.min(mini, left);
        }
        else{
            i--;
            mini = Math.min(mini, right);
        }
        res = Math.max(res, mini * (j-i+1));
    }
    return res;
};