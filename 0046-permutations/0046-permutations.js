/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const visited = Array(nums.length).fill(false);
    function dfs(start, path) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                path.push(nums[i]); //[1]
                dfs(i+1, path); //3, [1, 2, 3]
                visited[i] = false;
                path.pop()
            }            
        }   
    }
    dfs(0, []);
    return result;
};