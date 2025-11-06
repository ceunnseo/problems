/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    function dfs(path, startIdx) {
        res.push([...path])
        for (let i = startIdx; i < nums.length; i++) {
            if (i > startIdx && nums[i] === nums[i-1]) continue;
            path.push(nums[i]);
            dfs(path, i+1);
            path.pop();
        }

    }
    dfs([], 0)
    return res;
};