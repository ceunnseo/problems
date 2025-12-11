/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const stack = [];
    const rows = Array.from({length : 9}, () => Array(10).fill(false));
    const cols = Array.from({length : 9}, () => Array(10).fill(false));
    const boxes = Array.from({length : 9}, () => Array(10).fill(false));
    function dfs(){
        if (stack.length === 0) return true;
        const [r, c] = stack.pop();
        const boxIndex = Math.floor(r/3) * 3 + Math.floor(c/3);
        for (let n = 1; n <= 9; n++) { //1부터 9까지 모든 숫자를 탐색해보자 (n:1~9)
            if (rows[r][n] || cols[c][n] || boxes[boxIndex][n]) continue;   
            board[r][c] = String(n); //채우고
            rows[r][n] = cols[c][n] = boxes[boxIndex][n] = true;
            if (dfs()) return true;
            board[r][c] = '.'; //백트래킹
            rows[r][n] = cols[c][n] = boxes[boxIndex][n] = false;
        } 
        stack.push([r, c]);
        return false; //아무것도 숫자를 적지 못한 경우 = 실패함
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const v = board[i][j];
            if (v === '.') {
               stack.push([i,j]);
            }
            else {
                const n= Number(v);
                const b = Math.floor(i/3) * 3 + Math.floor(j/3);
                rows[i][n] = true;
                cols[j][n] = true;
                boxes[b][n] = true;
            }
        }
    }
    dfs();
    console.log(board);
};