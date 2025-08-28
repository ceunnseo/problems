/**
 * @param {number[]} nums
 * @return {number}
 */
//left가 될 수 있는 것들 중에서 가장 길이가 작아야 함
// = right가 가능하면 최대로 가진다
var partitionDisjoint = function(nums) {
    const n = nums.length;
    const rightMin = Array(n).fill(0);
    rightMin[n-1] = nums[n-1];
    for (let i = n-2; i >= 0; i--) {
        rightMin[i] = Math.min(rightMin[i+1], nums[i]);
    }
    let leftMax = nums[0];
    let idx = 0;
    for (idx; idx < n-1; idx++) {
        leftMax = Math.max(leftMax, nums[idx]);
        if (leftMax <= rightMin[idx+1]) {
            break;
        }
    }  
    return idx+1;
};