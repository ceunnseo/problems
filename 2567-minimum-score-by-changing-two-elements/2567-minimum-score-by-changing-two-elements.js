/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    let low = 0;
    let high = Infinity;
    const n = nums.length;
    nums.sort((a,b) => a-b) //인자로 넘어온 nums배열 오름차순 정렬
    //1. 가장 작은 두 값을 조정하여 gap 을 줄인다
    high = Math.min(high, nums[n-1] - nums[2]);

    //2. 가장 큰 두 값을 조정해서 gap 을 줄인다
    high = Math.min(high, nums[n-3]-nums[0])

    //3. 양끝값을 조정하여 gap을 줄인다
    high = Math.min(high, nums[n-2]-nums[1])

    return high + low;
};