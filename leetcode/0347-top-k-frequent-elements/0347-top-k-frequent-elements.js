/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const dict = {};
    for (const n of nums) {
        if (!dict[n]) {
            dict[n] = 0;
        }
        dict[n] += 1;
    }
    const result = Object.entries(dict).sort((a,b) => b[1] - a[1]).slice(0, k).map(([key, _]) => Number(key));
    return result;
};