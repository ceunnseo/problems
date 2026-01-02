/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const sets = new Set(nums); //중복 제거
    let length = 0;
    for (let num of sets) {
        let current = num;
        let cnt = 0;
        if (!sets.has(current-1)) { //내 앞의 숫자가 없으면 -> current 는 시작점이 됨
            while (sets.has(current)) {
                cnt+=1;
                current+=1;
            }
            length = Math.max(length, cnt);
        }
    }
    return length;
};