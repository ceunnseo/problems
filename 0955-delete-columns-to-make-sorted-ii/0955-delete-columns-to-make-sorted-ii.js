/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let cnt = 0;
    let flag = -1;
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length-1; j++) {
            if (strs[j][i] > strs[j+1][i]) {
                //console.log(strs[j][i], strs[j+1][i])
                cnt += 1; //column 빼고 종료하기
                flag = 0;
                break;
            }
            else if (strs[j][i] === strs[j+1][i]) {
                flag = 1;
            }
        }
        if (flag === -1) {
            console.log('flag = -1', cnt)
            break;
        }
    }
    return cnt;
};