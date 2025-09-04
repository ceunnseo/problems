/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    const n = chalk.length;
    const tot = chalk.reduce((cur, acc) => cur + acc, 0);
    let remaining = k % tot;
    if (remaining === 0) return 0;
    for (let i = 0; i < n; i++) {
        remaining -= chalk[i];
        if (remaining < 0) {
            return i;
        }
        else if (remaining === 0) {
            return i+1;
        }
    }
};