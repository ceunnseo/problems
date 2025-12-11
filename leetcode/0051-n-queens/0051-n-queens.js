/**
 * @param {number} n
 * @return {string[][]}
 */
//visited 2차원 배열로 모두 관리했을 때 문제점 = 이 칸을 다시 방문 해제 해도 되는건지 모른다.

var solveNQueens = function(n) {
    const v1 = Array.from({length : n}, () => Array(n).fill(false)); //col
    const v2 = Array.from({length : n}, () => Array(n).fill(false)); //오른대각선
    const v3 = Array.from({length : n}, () => Array(n).fill(false)); //왼대각선
    const arr = Array.from({length : n}, () => Array(n).fill('.'));
    const result = [];
    
    function dfs(row) {
        if (row === n) {
            result.push(arr.map(v => v.join('')));
            return;
        }
        for (let j = 0; j < n; j++) { //(i,j)에 퀸을 놔도 되는지 확인하기
            if (v1[row][j] || v2[row][j] || v3[row][j]) continue; //세로, 오른대각선, 왼대각선 확인
            //퀸을 놓고 방문 처리
            arr[row][j] = 'Q'; 
            //console.log('퀸 놓기', arr, row, j)
            for (let i = row+1; i < n; i++) {
                v1[i][j] = true; //세로 방문처리
                if (i+j-row < n) v2[i][i+j-row] = true;
                if (row+j-i >= 0) v3[i][row+j-i] = true; //왼 대각선 방문 처리
            }
            dfs(row+1); //다음 칸으로 이동하기
            //퀸을 빼고 방문 취소
            arr[row][j] = '.'; 
            for (let i = 0; i < n; i++) {
                v1[i][j] = false; //세로 방문처리
                if (i+j-row < n) v2[i][i+j-row] = false; //오른대각선
                if (row+j-i >= 0) v3[i][row+j-i] = false; //왼 대각선 방문 처리
            }
        }
    }
    dfs(0);
    console.log(result);
    return result;
};