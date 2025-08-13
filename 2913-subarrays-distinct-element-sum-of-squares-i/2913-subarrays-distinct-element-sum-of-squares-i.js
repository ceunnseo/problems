/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const n = nums.length;
    let total = 0;
    for (let i = 0; i < n; i++) { //부분집합
        const sub = new Set();
        for (let j = i; j < n; j++) {
            let x = nums[j]; //부분 집합 내에 최초로 나온 값들 저장
            if (!sub.has(x)) sub.add(x)
            total += (sub.size ** 2)
        }   
    }
    return total;
};