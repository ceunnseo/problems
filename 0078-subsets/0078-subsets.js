/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    function dfs(path, idx) { //base case : for 때문에 작성하지 않아도 됨
        result.push([...path])
        for (let i = idx; i < nums.length; i++) {
            path.push(nums[i]);
            dfs(path, i+1); 
            path.pop();
        }
    }
    dfs([], 0); //처음, 시작할 인덱스
    return result;
};