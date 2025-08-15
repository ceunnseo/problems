/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    function isPrime(n) {
        if (n === 1) return false;
        for (let i = 2; i * i < n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i][i])) res = Math.max(res, nums[i][i])
        if (isPrime(nums[nums.length-1-i][i])) res = Math.max(res, nums[nums.length-1-i][i])
    }
    return res;
};