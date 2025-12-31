/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        dict[i] = nums[i];
    }
    const sortedByValue= Object.entries(dict).sort((a, b) => a[1] - b[1]);
    //console.log(sortedByValue);
    const list1 = [];
    const list2 = [];
    for (let i = 0; i < nums.length; i++) {
        list1[i] = Number(sortedByValue[i][0]);
        list2[i] = sortedByValue[i][1];
    }
    let left = 0;
    let right = nums.length-1;
    let tot = 0;
    //console.log(list1, list2);
    while (left < right) {
        if (list2[left] + list2[right] === target) break;
        else if (list2[left] + list2[right] < target) left++;
        else right--;
    }
    return [list1[left], list1[right]];
    
}