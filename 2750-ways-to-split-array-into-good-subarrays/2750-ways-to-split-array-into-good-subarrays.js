/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodSubarraySplits = function(nums) {
    const res = []
    let isZero = 0
    let isCountable = false;
    for (const n of nums) {
        if (n === 0 && isCountable) {
            isZero += 1;
        }
        else if (n === 1) {
            isCountable = true
            if (isZero !== 0) {
                res.push(isZero);
                isZero = 0;
            }
        }
    }
    if (!isCountable) return 0;
    if (res.length === 0) return 1;
    let result = 1n;
    for (const c of res) {
        result *= BigInt(c+1);
    }
    const MOD = 1000000007n;
    return Number(result % MOD);
};