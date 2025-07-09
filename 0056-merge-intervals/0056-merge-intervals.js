/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //1. 시작 시간 기준으로 2차원 배열 오름차순 정렬
    intervals.sort((a, b) => a[0]-b[0]);
    const output = [];
    for (interval of intervals) {
        const last = output[output.length-1];
        if (!last || last[1] < interval[0]) {
            //처음 구간이거나 겹치지 않으면
            output.push(interval)
        }
        else {
            //겹치는 경우 : 종료 시각은 더 큰 시각으로
            last[1] = Math.max(last[1], interval[1]);
        }
    }
    return output
};