/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let res = 0;
    let length = 0;
    for (let n of set) {
        let start = set.has(n-1) ? null : n;
        if (start !== null) {
            length = 0;
            while (set.has(start)) {
                length += 1;
                start += 1;
            }
            res = Math.max(length, res);
        }
    }
    return res;
};