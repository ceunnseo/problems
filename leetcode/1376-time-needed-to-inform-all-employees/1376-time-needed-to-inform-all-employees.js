/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
 //전염병 확산과 같은 문제
var numOfMinutes = function(n, headID, manager, informTime) {
    const queue = [[headID, informTime[headID]]] //start, 누적 time
    const tree = new Map();
    let maxTime = 0;
    manager.forEach((parent, node) => {
        if (!tree.has(parent)) {
            tree.set(parent, []);
        }
        tree.get(parent).push(node)
    })
    while (queue.length) {
        const [node, time] = queue.shift();
        console.log('node', node, 'time', time)
        maxTime = Math.max(maxTime, time)
        if (tree.has(node)) {
            for (t of tree.get(node)) { //자식들
                //console.log('informTime', informTime[t], t)
                queue.push([t, time + informTime[t]])
            }
        }
    }
    return maxTime
};