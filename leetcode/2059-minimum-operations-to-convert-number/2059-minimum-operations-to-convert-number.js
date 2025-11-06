/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minimumOperations = function(nums, start, goal) {
    const visited = Array(1001).fill(false)
    const queue = []
    queue.push([start, 0])
    visited[start] = true
    while (queue.length > 0) {
        const [x, cnt] = queue.shift()
        if (x === goal) return cnt;
        for (let i of nums) {
            const next = [x + i, x-i, x^i]
            for (let nxt of next) {
                if (nxt === goal) return (cnt + 1)
                if (visited[nxt] || nxt < 0 || nxt > 1000) continue;
                visited[nxt] = true
                queue.push([nxt, cnt + 1])
            }
        }
    }
    return -1
};