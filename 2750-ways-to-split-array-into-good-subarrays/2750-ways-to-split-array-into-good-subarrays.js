/**
 * @param {number[]} nums
 * @return {number}
 */

// subarray : 1이 하나만 있는 부분 배열
// 1 0 1 -> 나눌 수 없음

// 1 1 0 -> 1, 1 0

// 0 1 0 0 1 -> 0 1, 0 0 1 / 0 1 0, 0 1 / 0 1 0 0, 1

// 0 1 0 0 1 0 1
// 0 1 , 0 0 1, 0 1 / 0 1 0, 0 1, 0 1 / 0 1 0 0, 1, 0 1
// 0 1 , 0 0 1 0, 1 / 0 1 0, 0 1 0, 1 / 0 1 0 0, 1 0, 1
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
    if (!isCountable) return 0; //1이 나온 적이 없을 때
    if (res.length === 0) return 1; //1은 나왔지만 1과 1사이 자를 수 없을 때
    let result = 1n; //n을 붙여서 BigInt 타입
    for (const c of res) {
        result *= BigInt(c+1);
    }
    const MOD = 1000000007n;
    return Number(result % MOD); //숫자가 너무 큰 경우 10^9 + 7 나눈 나머지 
};