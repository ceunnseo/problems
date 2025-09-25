/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [[]];
    const visited = Array(nums.length).fill(false);
    function dfs(path, start) {
        if (path.length > 0 && path[path.length-1] === nums[nums.length-1]) return;
        for (let i = start; i < nums.length; i++) {
            if (visited[i]) continue;
            path.push(nums[i]);
            visited[i] = true
            res.push([...path]);
            dfs(path, i+1);
            visited[i] = false;
            path.pop();

        }
    }
    dfs([], 0);
    return res;
};