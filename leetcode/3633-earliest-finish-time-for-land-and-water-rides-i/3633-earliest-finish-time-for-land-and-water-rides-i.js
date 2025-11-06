/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    function getEndTime(startTime1, startTime2, duration1, duration2) {
        let current = 0;
        let result = 1000000;
        for (let i = 0; i < startTime1.length; i++) {
            current = startTime1[i] + duration1[i]
            for (let j = 0; j < startTime2.length; j++) {
                if (current < startTime2[j]) {
                    //current = startTime2[j]; 
                    result = Math.min(startTime2[j]+duration2[j], result)           
                }
                else {
                    result = Math.min(current + duration2[j], result)
                }
            }
        }
        return result
    }
    let res1 = getEndTime(landStartTime, waterStartTime, landDuration, waterDuration);
    let res2 = getEndTime(waterStartTime, landStartTime, waterDuration, landDuration);
    console.log(res1, res2)
    return Math.min(res1, res2);

};