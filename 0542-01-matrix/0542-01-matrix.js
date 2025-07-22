/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const visited = Array.from({length : m}, () => Array(n).fill(false))
    const dist = Array.from({length : m}, () => Array(n).fill(0))
    const queue = []
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]) //시작점이 되는 좌표를 넣는다.
                visited[i][j] = true;
            }
        }
    }
    while (queue.length > 0) {
        const [r, c] = queue.shift();
        for (const [dr, dc] of direction) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nc >= 0 && nr < m && nc < n) {
                if (!visited[nr][nc]) {
                    queue.push([nr, nc])
                    visited[nr][nc] = true
                    dist[nr][nc] = dist[r][c] + 1;
                }
            }
        }
    }
    return dist
};