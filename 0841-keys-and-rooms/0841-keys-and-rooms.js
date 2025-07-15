/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const stack = [0]
    const visited = Array.from({length : rooms.length}, () => false)
    visited[0] = true
    while (stack.length > 0) {
        const room = stack.pop()
        for (const key of rooms[room]) {
            if (!visited[key]) {
                visited[key] = true;
                stack.push(key);
            }
        }
        
    }
    return visited.every(v => v);
};