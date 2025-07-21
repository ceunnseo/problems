/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let cnt = 0;
    const m = grid.length;
    const n = grid[0].length;
    const dfs = (r, c) => {
        if (r < 0 || r >= m || c < 0 || c >= n) return false;
        if (grid[r][c] === '0') return false;
        if (grid[r][c] === '1') {
            grid[r][c] = '2';
            dfs(r-1, c)
            dfs(r+1, c)
            dfs(r, c-1)
            dfs(r, c+1)
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0 ; j < n; j ++) {
            if (grid[i][j] === '1') {
                cnt = cnt + 1;
                dfs(i, j);
            }
        }
    }
    return cnt;
};