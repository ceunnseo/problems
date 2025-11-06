/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    const dict = {};
    let maximum = 0;
    for (let i = 0; i < arr.length; i++) {
        const next = arr[i]-difference
        if (!dict[next]) {
            if (!dict[arr[i]]) {
                dict[arr[i]] = [i]
            }
        }
        else { //존재하는 경우
            if (dict[arr[i]] && dict[arr[i]].length > dict[next].length) { //덮어쓰면 안 되는 경우
                delete dict[next]
            }
            else {
                //덮어쓰고 추가하고 갱신하는 과정 
                dict[arr[i]] = [...dict[next]];
                dict[arr[i]].push(i)
                if (next !== arr[i]) delete dict[next];
            }
        }
        //console.log('dict', dict)
    }
    console.log(dict)
    const idxList = Object.values(dict)
    for (let i = 0; i < idxList.length; i++) {
        maximum = Math.max(maximum, idxList[i].length);
    }
    return maximum;
};