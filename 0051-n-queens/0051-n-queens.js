/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const res = [];
    const board = Array.from({length : n}, () => Array(n).fill('.'));
    const cols = new Set(); // => 사용한 열
    const diag1 = new Set(); // => \ 방향의 대각선 (하향대각선)
    const diag2 = new Set(); // => / 방향의 대각선 (상향대각선)
    function backtrack(r) {
        if (r === n) { //모든 row에 체스를 둔 경우
            res.push(board.map(row => row.join('')));
            return;
        }
        for (let c = 0; c < n; c++) { 
            if (cols.has(c) || diag1.has(r-c) || diag2.has(r+c)) continue;
            cols.add(c);
            diag1.add(r-c);
            diag2.add(r+c);
            board[r][c] = 'Q';
            backtrack(r+1); //그 다음 row에 놓을 수 있는 칸이 있는지 탐색
            board[r][c] = '.';
            cols.delete(c);
            diag1.delete(r-c);
            diag2.delete(r+c);
        }
    }
    backtrack(0);
    return res;
    
};