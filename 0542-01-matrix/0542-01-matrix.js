/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const queue = [];
    const dist = Array.from({length : m}, () => Array(n).fill(0))
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ]
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i,j])
            }   
        }
    }
    while (queue.length > 0) {
        const [r, c] = queue.shift();
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr < 0 || nc < 0 || nr >= m || nc >= n) {
                continue;
            }
            if (mat[nr][nc] === 1 && dist[nr][nc] === 0) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc])
            }
        }
    }
    return dist;
};