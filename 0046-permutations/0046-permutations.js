/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const visited = Array(nums.length).fill(false);
    function dfs(path){
        if (path.length === nums.length) { //종료 조건 : 모든 원소 다 모음
            result.push([...path]);
        }
        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                path.push(nums[i]);
                visited[i] = true;
                dfs(path);
                path.pop();
                visited[i] = false;
            }
        }
    }
    dfs([]);
    return result;
};