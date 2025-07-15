/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const stack = [0]
    const visited = Array.from({length : rooms.length}, () => false)
    visited[0] = true
    while (stack.length > 0) {
        const key = stack.pop()
        if (!visited[key]) {
            visited[key] = true
        }
        if (rooms[key]) {
            for (r of rooms[key]) {
                if (!visited[r]) {
                    stack.push(r)
                }
            }
        }
    }
    for (v of visited) {
        if (!v) {
            return false
        }
    }
    return true
};