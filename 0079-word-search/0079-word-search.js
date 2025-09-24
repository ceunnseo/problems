/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    const visited = Array.from({length : m}, () => Array(n).fill(false));
    function dfs(r, c, idx) {
        if (r < 0 || r >= m || c < 0 || c >= n) return;
        if (idx >= word.length) {
            return true;
        }
        //console.log('dfs 실행', r, c, idx)
        for (let i = 0; i < 4; i++) {
            const nr =  r + dr[i];
            const nc = c + dc[i];
            if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                //console.log('후보', nr, nc, visited[nr][nc])
                if (!visited[nr][nc] && board[nr][nc] === word[idx]) {
                    visited[nr][nc] = true;
                    if (dfs(nr, nc, idx+1)) return true;
                    visited[nr][nc] = false;
                }
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                visited[i][j] = true;
                if (dfs(i, j, 1)) return true;
                visited[i][j] = false;
            }
        }
    }
    return false;
    
};