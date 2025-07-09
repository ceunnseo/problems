/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */

var maxFreeTime = function(eventTime, k, startTime, endTime) {
    const n = endTime.length;
    const gaps = new Array(n + 1); //빈 시간들
    gaps[0] = startTime[0];
    for (let i = 1; i < n; i++) {
        gaps[i] = startTime[i] - endTime[i - 1];
    }
    gaps[n] = eventTime - endTime[n - 1];

    let ans = 0, s = 0;
    for (let i = 0; i <= n; i++) {
        s += gaps[i];
        if (i >= k) {
            ans = Math.max(ans, s);
            s -= gaps[i - k];
        }
    }
    return ans;
};
