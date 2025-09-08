/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function(nums) {
    const n = nums.length;
    let ans = 0;
    let prevRun = 0;
    let streak = 0;
    const arr = Array(n);
    for (let i = 1; i < n; i++) {
        arr[i-1] = nums[i] - nums[i-1]
    }
    arr[n-1] = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            streak++;
        } else {
            const curRun = streak + 1;
            ans = Math.max(ans, Math.floor(curRun/2), Math.min(prevRun, curRun));
            //연속되는 배열 길이의 반 - 혹은 연속되는 두 배열의 길이
            prevRun = curRun;
            streak = 0;
        }
    }
    return ans;
};