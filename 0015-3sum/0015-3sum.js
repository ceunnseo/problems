/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    const target = 0;
    const set = new Set();
    nums.sort((a,b)=>a-b)//오름차순 정렬
    console.log(nums)
    const key = (a, b, c) => `${a},${b},${c}`
    for (let i = 0; i < nums.length-2; i++) {
        let left = i+1, right = nums.length-1;
        while (left < right) {
            const total = target-nums[i];
            if (nums[left] + nums[right] > total) right -= 1;
            else if (nums[left] + nums[right] < total) left += 1;
            else {
                const k = key(nums[i], nums[left], nums[right])
                if (!set.has(k)) {
                    res.push([nums[i], nums[left], nums[right]]);
                    set.add(k)
                }
                left += 1;
                right -=1;
                //break;
            }
        }
    }
    return res;
};