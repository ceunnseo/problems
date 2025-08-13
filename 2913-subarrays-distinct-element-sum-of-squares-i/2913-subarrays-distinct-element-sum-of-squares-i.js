/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const n = nums.length;
    let total = 0;
    for (let i = 0; i < n; i++) {
        const dict = {}; //고유값 개수
        for (let j = i; j < n; j++) {
            let x = nums[j];
            if (!dict[x]) dict[x] = 0;
            dict[x] += 1;
            //console.log(dict)
            //console.log(Object.keys(dict).length)
            total += (Object.keys(dict).length **2)
        }   
    }
    return total;
};