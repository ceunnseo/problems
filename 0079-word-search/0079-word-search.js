/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const stack = []
    const m = board.length;
    const n = board[0].length;
    visited = Array.from({length : m}, () => Array(n).fill(false))
    function* move(r,c) {
        if (r-1 >= 0) yield [r-1, c];
        if (r+1 < m) yield [r+1, c];
        if (c-1 >= 0) yield [r, c-1];
        if (c+1 < n) yield [r, c+1];
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                stack.push([i, j, 1]);
                while (stack.length > 0) {
                    const [r, c, idx] = stack.pop()
                    visited[r][c] = true;
                    if (idx === word.length) return true;
                    for (const [nr, nc] of move(r, c)) {
                        if (visited[nr][nc] === false && board[nr][nc] === word[idx]) {
                            stack.push([nr, nc, idx+1])
                        }
                    }
                }
            }
        }
    }
    return false;
    
};