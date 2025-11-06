/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
    const n = nums.length;
    const maximum = Array(n).fill(0); //maximum[i] : i 포함 이전에 나온 수 중에 제일 큰 값
    const minimum = Array(n).fill(1000000); //minimum[i] : i 포함 이후에 나온 값 중에 제일 작은 값
    maximum[0] = nums[0];
    minimum[n-1] = nums[n-1];
    let result = 0;
    for (let i = 1; i < n; i++) {
        maximum[i] = Math.max(maximum[i-1], nums[i]);
    }
    for (let i = n-2; i >= 0; i--) {
        minimum[i] = Math.min(minimum[i+1], nums[i]);
    }
    
    for (let i = 1; i < n-1; i++) {
        if (maximum[i-1] < nums[i] && nums[i] < minimum[i+1]) {
            result += 2;
        }
        else if (nums[i-1] < nums[i] && nums[i] < nums[i+1]) {
            result += 1;
        }
    }
    return result
};