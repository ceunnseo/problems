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
    // 0인 위치를 큐에 미리 삽입한다.
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j])
                visited[i][j] = true;
            }
        }
    }
    //bfs 시작
    while (queue.length > 0) {
        const [r, c] = queue.shift();
        for (const [dr, dc] of direction) {
            const nr = r + dr
            const nc = c + dc
            if (nr >= 0 && nc >= 0 && nr < m && nc < n && !visited[nr][nc]) {
                dist[nr][nc] = dist[r][c] + 1;
                visited[nr][nc] = true;
                queue.push([nr, nc]);
            }
        }
    }
    return dist;
};