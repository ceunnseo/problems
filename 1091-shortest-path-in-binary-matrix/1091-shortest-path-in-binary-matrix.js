/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length;
    const queue = [[0, 0]];
    let head = 0;
    //방향 설정하기 (상, 하, 좌, 우, 왼쪽위, 왼쪽아래, 오른쪽위, 오른쪽아래)
    const dr = [-1, 1, 0, 0, -1,-1, 1, 1 ];
    const dc = [0, 0, -1, 1, 1, -1, -1, 1];
    const visited = Array.from({length : n}, () => Array(n).fill(-1));
    visited[0][0] = 1;
    if (grid[0][0] === 1 || grid[n-1][n-1] === 1) return -1;
    while (head < queue.length) {
        const [r, c] = queue[head++];
        for (let i = 0; i < 8; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            if (nr < 0 || nr >= n || nc < 0 || nc >= n) continue;
            if (visited[nr][nc] === -1 && grid[nr][nc] === 0) {
                queue.push([nr,nc])
                visited[nr][nc] = visited[r][c] + 1;
            }
        }
    }
    console.log(visited);
    if (visited[n-1][n-1] === 0) return -1;
    return visited[n-1][n-1];
};