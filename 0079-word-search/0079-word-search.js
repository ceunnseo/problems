/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const dfs = (r, c, idx) => {
        if (idx === word.length) return true;
        if (r < 0 || r >= m || c < 0 || c >= n) return false;
        if (board[r][c] !== word[idx]) return false;
        const temp = board[r][c];
        board[r][c] = '#';
        const result = dfs(r+1, c, idx+1) || dfs(r-1, c, idx+1) || dfs(r, c+1, idx+1) || dfs(r, c-1, idx+1);
        board[r][c] = temp;
        return result;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
};