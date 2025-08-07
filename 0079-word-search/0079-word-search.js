/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    const visited = Array.from({length : m}, () => Array(n).fill(false))
    const dy = [0, 0, -1, 1] //상하좌우
    const dx = [-1, 1, 0, 0]

    function dfs (i, j, idx) {
        if (idx === word.length) return true; //모든 글자를 찾았을 때
        if (i < 0 || i >= m || j < 0 || j >=n) return false; //범위 넘어감
        if (visited[i][j] || board[i][j] !== word[idx]) return false;
        visited[i][j] = true;
        for (let d = 0; d < 4; d++) {
            const nx = i + dx[d];
            const ny = j + dy[d];
            if (dfs(nx, ny, idx+1)) return true;
        }
        visited[i][j] = false;
        return false;
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0]) {//첫글자 발견한 경우 -> 탐색 시작 
                if (dfs(i, j, 0)) return true
            }
        }
    }
    return false;
};