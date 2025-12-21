/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/*
시작점 : word의 첫 번째 글자가 있는 board의 위치
m : board.length -> row / n : board[0].length -> col
글자를 찾으면 true, 못찾으면 false
네 방향으로 이동하면서 탐색 시작, 잘못 갔으면 back하여 다시 탐색
 */

var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const visited = Array.from({length : m}, () => Array(n).fill(false));
    const stack = [];
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    function dfs(r, c, idx) {
        if (idx === word.length) return true; //모든 탐색 완료
        for (let k = 0; k < 4; k++) {
            const nr = r + dr[k];
            const nc = c + dc[k];
            if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
            if (!visited[nr][nc] && board[nr][nc] === word[idx]) {
                visited[nr][nc] = true;
                if (dfs(nr, nc, idx+1)) return true;
                visited[nr][nc] = false;
            }
        }
        return false;
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) { //시작점 찾기
                visited[i][j] = true;
                if (dfs(i, j, 1)) return true;
                visited[i][j] = false;
            }
        }
    }
    return false;  
};