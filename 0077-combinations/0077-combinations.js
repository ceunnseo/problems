/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = []
    const visited = Array(n+1).fill(false)
    visited[0] = true;
    function backtracking(start, path) {
        if (path.length === k) {
            res.push([...path])
        }
        for (let i = start; i <= n; i++) {
            if (visited[i]) continue;
            visited[i] = true;
            path.push(i)
            backtracking(i, path);
            path.pop()
            visited[i] = false;
        }
    }
    backtracking(1, []);
    return res;
};