/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const sets = new Set(nums);
    let length = 0;
    for (let num of sets) {
        if (!sets.has(num-1)) { //num-1이 sets에 없으면 => 시작점이 될 수 있음
            let current = num
            let cnt = 0;
            while (sets.has(current)) {
                cnt+=1;
                current+=1;
            }
            length = Math.max(length, cnt);
        }
    }
    return length;
};