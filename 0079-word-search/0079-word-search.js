/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const visited = Array.from({length : m}, () => Array(n).fill(false));
    function* move(r, c) {
        if (r-1 >= 0) yield [r-1, c];
        if (r+1 < m) yield [r+1, c];
        if (c-1 >= 0) yield [r, c-1];
        if (c+1 < n) yield [r, c+1];
    }
    const dfs = (r, c, idx) => {
        if (idx === word.length) return true;
        if (r < 0 || r >= m || c < 0 || c >= n) return false;
        if (visited[r][c] || board[r][c] !== word[idx]) return false;
        visited[r][c] = true;
        const result = dfs(r-1, c, idx+1) || dfs(r+1, c , idx + 1) || dfs(r, c-1, idx+1) || dfs(r, c+1, idx+1)
        visited[r][c] = false;
        return result;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                if (dfs(i, j, 0)) return true;
            }
        }
    }
    return false;
};