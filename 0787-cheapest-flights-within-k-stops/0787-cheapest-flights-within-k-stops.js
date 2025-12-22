/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    // graph 구성
    const graph = Array.from({ length: n }, () => []);
    for (const [start, end, price] of flights) {
        graph[start].push([end, price]);
    }

    // queue: [totalCost, node, depth]
    const queue = [];
    let head = 0;
    queue.push([0, src, 0]);

    let res = 1e6;

    // visited[node] = 현재까지 node에 도달한 최소 비용
    const visited = {};
    visited[src] = 0;

    while (head < queue.length) {
        const [totalCost, node, depth] = queue[head++];

        if (depth > k + 1) break;

        if (node === dst) {
            res = Math.min(res, totalCost);
        }

        for (const [end, cost] of graph[node]) {
            const nextCost = totalCost + cost;

            if (visited[end] === undefined) {
                visited[end] = nextCost;
                queue.push([nextCost, end, depth + 1]);
            } else if (visited[end] > nextCost) {
                visited[end] = nextCost;
                queue.push([nextCost, end, depth + 1]);
            }
        }
    }

    return res === 1e6 ? -1 : res;
};
