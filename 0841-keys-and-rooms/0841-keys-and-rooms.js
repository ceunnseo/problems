/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    // 열쇠를 큐에 넣고 방문한 적 없는 방에 들어가서 하나씩 방 열기
    const queue = [0]; //0번방 열쇠
    let head = 0;
    const n = rooms.length; // 0, 1, 2, ... , n-1 => 모든 방의 개수
    const visited = Array(n).fill(false);
    visited[0] = true; // 0번방에는 들어감
    while (head < queue.length) {
        const key = queue[head++]; //열쇠를 받고
        for (const newKey of rooms[key]) {
            if (!visited[newKey]) {
                queue.push(newKey);
                visited[newKey] = true;
            }
        }
    }
    return visited.every((e) => e);
};