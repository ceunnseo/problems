/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    const n = nums.length;
    const m = nums[0].length;
    const res = [];

    let maxLength = 0;
    for (let r = 0; r < n; r++) {
        if (nums[r]) maxLength = Math.max(maxLength, nums[r].length || 0)
    }

    //앞쪽 절반 삼각형
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            if (nums[i-j][j] === undefined) continue;
            res.push(nums[i-j][j])
        }
    }

    //뒤쪽 삼각형
    for (let i = 1; i < maxLength; i++) {
        for (let j = n-1; j >=0; j--) {
            const k = i + ((n-1)-j);
            if (nums[j][k] === undefined) continue;
            res.push(nums[j][k])
        }
    }
    return res;

};