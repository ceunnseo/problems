/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    const dp = Array.from({length : (n+1)}, () => Array(5).fill(0));
    if (n===1) return 5;
    for (let i = 0; i < 5; i++) {
        dp[1][i] = 1;
    }
    let res = 0;
    const MOD = 1000000007;
    for (let i = 2; i < n+1; i++) {
        dp[i][0] = (dp[i-1][1] + dp[i-1][2] + dp[i-1][4])%MOD; //a
        dp[i][1] = (dp[i-1][0] + dp[i-1][2])%MOD; //e
        dp[i][2] = (dp[i-1][1] + dp[i-1][3])%MOD //i
        dp[i][3] = (dp[i-1][2])%MOD //o
        dp[i][4] = (dp[i-1][2] + dp[i-1][3])%MOD //u
    }
    return (dp[n].reduce((cur, acc) => acc + cur, 0))%MOD;
};