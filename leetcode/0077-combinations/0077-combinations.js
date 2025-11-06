/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    const visited = Array(n+1).fill(false);
    function dfs(path, start) {
        if (path.length === k) {
            res.push([...path]);
            return;
        }
        for (let i = start; i <= n; i++) {
            if (visited[i]) continue;
            path.push(i);
            visited[i] = true;
            dfs(path, i+1);
            path.pop();
            visited[i] = false;
        }
    }
    dfs([], 1)
    return res;
};