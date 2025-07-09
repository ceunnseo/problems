/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];
    intervals.sort((a, b) => a[0]-b[0])
    let output = []
    for (interval of intervals) {
        if (output.length === 0) {
            output.push(interval)
        }
        else {
            let midStart = interval[0]
            let midEnd = interval[1]
            let idx = output.length-1;
            let startTime = output[idx][0];
            let endTime = output[idx][1];
            if (midStart <= endTime) {
                if (midStart < startTime) {
                    output[idx][0] = midStart
                }
                if (midEnd > endTime) {
                    output[idx][1] = midEnd
                }
                
            }
            else {
                output.push(interval)
            }
        }
    }
    return output
};