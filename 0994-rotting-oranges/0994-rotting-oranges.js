/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const queue = [];
    let res = 0;
    let freshOrange = 0;
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ]
    for (let i = 0; i < m ; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) { //썩은 과일
                queue.push([i, j, 0])
            }
            else if (grid[i][j] ===1) {
                freshOrange += 1;
            }
        }
    }
    while (queue.length > 0) {
        const [r, c, time] = queue.shift();
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr < 0 || nc < 0 || nr >= m || nc >= n) {
                continue;
            }
            if (grid[nr][nc] === 1) {
                queue.push([nr, nc, time + 1])
                grid[nr][nc] = 2
                freshOrange -= 1;
                res = Math.max(res, time+1)
            }
        }
    }
    if (freshOrange !== 0) return -1;
    return res;
};