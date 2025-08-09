/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b);
    function dfs(idx, path, sum) {
        if (sum === target) {
            res.push([...path]);
            return;
        }
        for (let i = idx; i < candidates.length; i++) {
            const remaining = target-sum;
            if (i > idx && candidates[i] === candidates[i-1]) continue;
            if (candidates[i] > remaining) break;
            path.push(candidates[i]);
            dfs(i+1, path, sum + candidates[i]);
            path.pop();
        }
    }
    dfs(0, [], 0)
    return res;
};