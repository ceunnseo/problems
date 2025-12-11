/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const queue = [];
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    let cnt = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === "1") {
                grid[i][j] = "2"; //방문 처리
                queue.push([i, j]) //시작점 넣기
                cnt += 1;
                while (queue.length) {
                    const [r, c] = queue.shift();
                    for (let d = 0; d < 4; d++) {
                        const nr = r + dr[d];
                        const nc = c + dc[d];
                        if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
                        if (grid[nr][nc] === "1") {
                            queue.push([nr, nc]);
                            grid[nr][nc] = "2";
                        }
                    }
                }
            }
        }
    }
    return cnt;
};