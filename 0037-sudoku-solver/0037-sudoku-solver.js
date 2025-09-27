/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
//1. 채워야 하는 칸의 위치를 리스트로 저장
//2. row, col, 3*3 칸에 포함되지 않은 숫자를 하나씩 시도
var solveSudoku = function(board) {
    const nodes = [];
    //r번째 row에 target이라는 숫자가 있는지를 체크하는 함수
    function checkRow(r, target){
        for (let i = 0; i < 9; i++) {
            if (board[r][i] === target) return false;
        }
        return true;
    }
    //c번째 column에 target이라는 숫자가 있는지 체크하는 함수
    function checkCol(c, target){
        for (let i = 0; i < 9; i++) {
            if (board[i][c] === target) return false;
        }
        return true;
    }
    //3*3 board에 target이라는 숫자가 있는지 체크하는 함수
    function checkRect(r, c, target) {
        const startRow = Math.floor(r/3) * 3;
        const startCol = Math.floor(c/3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === target) return false;
            }
        }
        return true;
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') nodes.push([i, j])
        }
    }
    function dfs(idx){
        if (idx === nodes.length) return true;
        const [r, c] = nodes[idx];
        for (let i = 1; i <= 9; i++) {
            const target = String(i)
            if (checkRow(r, target) && checkCol(c, target) && checkRect(r, c, target)) {
                board[r][c] = target;
                if (dfs(idx+1)) return true;
                board[r][c] = '.'
            }
        }
        return false;
    }
    dfs(0);
};