/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const n = nums.length;
    const total = 1 << n; //2^n : 1이라는 숫자를 2진수로 보고 왼쪽으로 n번 이동시킨다.
    // 1<<n 자체가 n번째 비트만 1인 숫자를 만드는 것
    //n=3이면 0001 -> 1000 (10진수로는 8)
    const result = [];
    // 000, 001, 010, 011, 100, 101, 110, 111 까지만
    for (let bitMask = 0; bitMask < total; bitMask++) {
        subset = [];
        for (let j = 0; j < n; j++) {
            //j=0 -> 1<<j 이므로 001 -> 101
            if (bitMask & (1<<j)) {
                subset.push(nums[j]);
            }
        }
        result.push(subset);
    }
    return result;
};