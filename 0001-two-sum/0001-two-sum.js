/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dic = {}
    res = []
    for (let i = 0; i < nums.length; i++) {
        dic[nums[i]] = i
        //console.log(dic[nums[i]])
    }
    for (let i = 0; i < nums.length; i++) {
        let num = target-nums[i];
        if (dic[num] && dic[num] !== i) {
            return [i, dic[num]]
        }
    }
};