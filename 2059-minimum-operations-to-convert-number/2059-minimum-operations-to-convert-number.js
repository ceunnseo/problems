/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minimumOperations = function(nums, start, goal) {
    const queue = [];
    const counts = new Array(1001).fill(-1);

    if (start >= 0 && start <= 1000) {
        counts[start] = 0;
    }
    queue.push(start);

    while (queue.length > 0) {
        const x = queue.shift();
        const count = (x >= 0 && x <= 1000) ? counts[x] : 0;

        for (let num of nums) {
            const candidates = [x + num, x - num, x ^ num];

            for (let candid of candidates) {
                if (candid === goal) return count + 1;
                if (candid < 0 || candid > 1000 || counts[candid] !== -1) continue;
                counts[candid] = count + 1;
                queue.push(candid);
            }
        }
    }

    return -1;
};
