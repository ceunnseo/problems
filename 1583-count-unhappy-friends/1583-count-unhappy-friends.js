/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
    const matrix = Array.from({length : n}, () => Array(n).fill(0));
    let cnt = 0;
    for (let i = 0; i<n; i++) {
        for (let j = 0; j < n-1 ; j++) { //preferences
            matrix[i][preferences[i][j]] = n-j-1
        }
    } //O(n^2)
    console.log(matrix)
    const partner = new Array(n);
    for (const [a, b] of pairs) {
        partner[a] = b;
        partner[b] = a;
    }
    const happy = new Set()
    for (let i = 0; i < n; i++) {
        const loves = matrix[i][partner[i]]; 
        let flag = false;
        for (let j = 0; j < n; j++) {
            if (i === j && j === partner[i]) continue
            const u = j;
            const v = partner[u];
            if (matrix[i][u] > matrix[i][partner[i]] && matrix[u][i] > matrix[u][v]) {
                cnt += 1;
                break;
            }
        }
    }
    return cnt;

};