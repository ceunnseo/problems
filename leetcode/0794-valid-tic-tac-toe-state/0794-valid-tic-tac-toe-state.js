/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function(board) {
    // 1. player1 이 먼저 X로 수를 둬야 함
    // 2. 한 명이 수를 두면 그 다음 사람이 수를 둬야 함
    // 3. 둘 중에 한 사람이 가로, 세로, 대각선으로 같은 글자를 채웠으면 게임이 끝남 -> [XXX, '   ', OOO]가 나올 수 없음
    let cntO = 0, cntX = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === 'O') cntO += 1;
            else if (board[i][j] === 'X') cntX += 1;
        }
    }
    //row : 3개, col : 3개, 대각선 : 2개
    let arrX = 0, arrO = 0;
    for (let i = 0; i < 3; i++) {
        //row 확인
        if (board[i][0] === 'X' && board[i][1] === 'X' && board[i][2] === 'X') arrX += 1;
        else if (board[i][0] == 'O' &&  board[i][1] === 'O' && board[i][2] === 'O') arrO += 1;
        //col 확인
        if (board[0][i] === 'X' && board[1][i] === 'X' && board[2][i] === 'X') arrX += 1;
        else if (board[0][i] === 'O' && board[1][i] === 'O' && board[2][i] === 'O') arrO += 1;
    }
    //대각선
    if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') arrO += 1;
    else if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') arrX += 1;
    if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') arrO += 1;
    else if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') arrX += 1;
    if (arrX > 0 && arrO > 0) return false;
    //X가 이긴 경우
    if ((arrX > 0 && arrO <= 0) && (cntX === cntO+1)) return true;
    //X가 이겼는데 개수가 이상한 경우
    if ((arrX > 0 && arrO <= 0) && (cntX === cntO)) return false;
    if ((arrX <= 0 && arrO > 0) && (cntX === cntO+1)) return false;
    if ((arrX <= 0 && arrO > 0)&&(cntO === cntX)) return true;
    if (cntX === cntO || cntX === cntO +1) return true;

    return false;

};