/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const visited = Array.from({length : m}, () => Array(n).fill(false))
    const len = word.length;
    function* move(x, y) {
        if (x-1 >= 0) yield [x-1, y]
        if (x+1 < m) yield [x+1, y]
        if (y-1 >= 0) yield [x, y-1]
        if (y+1 < n) yield [x, y+1]
    } 
    function dfs(x, y, idx) {
        if (idx === len) return true;
        for (const [nx, ny] of move(x, y)) {
            if (board[nx][ny] === word[idx] && !visited[nx][ny]) {
                visited[nx][ny] = true;
                if (dfs(nx, ny, idx+1)) return true;
                visited[nx][ny] = false;
            }
        }
        return false; //모든 방향을 시도해보았지만 실패한 경우
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {
                visited[i][j] = true;
                if (dfs(i, j, 1)) return true;
                visited[i][j] = false

            }
        }
    }
    return false;


};