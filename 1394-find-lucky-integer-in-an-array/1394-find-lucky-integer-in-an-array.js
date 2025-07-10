/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    arr.sort((a,b) =>b-a)
    let freq = 1
    let prev = arr[0]
    console.log(arr)
    for (let i = 1; i<arr.length; i++) {
        if (prev === arr[i]) {
            freq += 1;
        }
        else if (freq === prev) {
            return freq
        }
        else {
            freq = 1
            prev = arr[i]
        }
    }
    if (freq === arr[arr.length-1]) return freq
    return -1
};