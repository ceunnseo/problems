/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 */
var countBlackBlocks = function(m, n, coordinates) {
    const dr = [0, -1, 1, 0, 0]
    const dc = [0, 0, 0, -1, 1];
    const arr = Array(5).fill(0); 
    arr[0] = (m-1) * (n-1)
    const visited = new Set();
    const black = new Set();
    const key = (r, c) => `${r},${c}` 
    for (const [r, c] of coordinates) {
        black.add(key(r,c))
    }
    for (const [r, c] of coordinates) {
        for (let i = 0; i < 5; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            let total = 0;
            if (nr < 0 || nr >= m-1 || nc < 0 || nc >= n-1) continue;
            const k = key(nr, nc);
            if (!visited.has(k)) {
                total = (black.has(key(nr, nc))? 1: 0) + (black.has(key(nr, nc+1))? 1: 0) + (black.has(key(nr+1, nc))? 1: 0) + (black.has(key(nr+1, nc+1))? 1: 0);
                arr[total] += 1;
                arr[0] -= 1;
                visited.add(k);
            }
        }
    }
    return arr;
};