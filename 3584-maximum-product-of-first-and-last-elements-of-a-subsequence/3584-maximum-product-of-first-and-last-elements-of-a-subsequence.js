/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
//subsequence m : 연속하는 m 개의 숫자가 아님
var maximumProduct = function(nums, m) {
    let minNumber = Infinity;
    let maxNumber = -Infinity;
    let res = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        //끝점-시작점+1 = m -> 시작점 = 끝점 + 1 - m
        const start = i + 1 - m;
        if (start >= 0) { //시작점이 유효한 경우
            maxNumber = Math.max(maxNumber, nums[start]);
            minNumber = Math.min(minNumber, nums[start]);
        }
        if (i >= m-1) { //끝점
            if (nums[i] > 0) res = Math.max(res, nums[i] * maxNumber);
            if (nums[i] <= 0) res = Math.max(res, nums[i] * minNumber);
        }
    }
    return res;
};