/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    const n = nums.length;
    function dfs(path, visited) {
        if (path.length === n) {
            res.push([...path]); 
            return true;
        }
        for (let i = 0; i < n; i++) {
            if (!set.has(i)) {
                path.push(nums[i]);
                visited.add(i);
                if (dfs(path, visited)) true;
                visited.delete(i);
                path.pop();
            }
        }
    }
    const set = new Set()
    dfs([], set)
    return res;
};