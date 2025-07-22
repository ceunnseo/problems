var shortestPathBinaryMatrix = function(grid) {
    const n = grid.length;
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
    const dist = Array.from({length : n}, () => Array(n).fill(0));
    const directions = [
        [0, 1], [1, 0], [1, 1],
        [-1, 0], [0, -1], [-1, -1],
        [1, -1], [-1, 1]
    ];

    const queue = [[0, 0]];
    dist[0][0] = 1;

    while (queue.length > 0) {
        const [r, c] = queue.shift();
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nc >= 0 && nr < n && nc < n) {
                if (grid[nr][nc] === 0 && dist[nr][nc] === 0) {
                    dist[nr][nc] = dist[r][c] + 1;
                    queue.push([nr, nc])
                }
            }
        }
    }
    return dist[n-1][n-1] === 0 ? -1 : dist[n-1][n-1]
};
