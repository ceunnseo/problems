/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {}
    for (let i = 0; i<nums.length; i++) {
        const key = String(target-nums[i]);
        if (key in obj) {
            console.log('있어요', key, nums[i])
            return [i, obj[key]]
        }
        obj[nums[i]] = i 
    }
};