/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    const n = Math.min(a.length, b.length);
    let flag = false;
    for (let i = 0; i < n; i++) {
        if (a[i] === b[i]) continue; //다른게 없으면 flag는 false 유지
        else flag = true; //다른게 있으면 flag -> true
    }

    if (flag) return Math.max(a.length, b.length) //다른게 있으면 가장 긴 문자열 길이
    //다른게 없는데 길이가 다른 경우
    if (a.length !== b.length) return Math.max(a.length, b.length);
    return -1; 
};