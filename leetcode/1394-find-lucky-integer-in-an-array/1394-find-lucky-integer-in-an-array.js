/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const freq = {};
    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1; //빈도수 저장
    }
    let result = -1;
    for (const key in freq) {
        const num = parseInt(key);
        if (freq[key] === num) { //value 값과 Key값이 같은 경우
            result = Math.max(result, num); //result 를 최대값으로 갱신
        }
    }
    return result;
};