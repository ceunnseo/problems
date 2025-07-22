/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let length = 1;
    const n = grid.length;
    if (grid[n-1][n-1] !== 0 || grid[0][0] !== 0) return -1;
    const dfs = (r, c) => {
        if (r >= n || c >= n || r < 0 || c < 0) return false;
        if (grid[r][c] !== 0) return false; //종료 조건
        if (r === n-1 && c === n-1) return true;
        grid[r][c] = 2;
        length += 1
        const result = dfs(r+1, c+1) || dfs(r+1, c) || dfs(r, c+1)
        grid[r][c] = 0;
        return result;
    }
    dfs(0, 0)
    //console.log("length, ", length)
    return length;
};