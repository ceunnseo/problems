/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const stack = []; //획득한 key를 stack에 저장
    const n = rooms.length; //방의 개수
    const visited = Array(n).fill(false);
    //1. 0번 방을 방문하여 키를 모두 저장한다
    let idx = 0;
    while (idx < rooms[0].length) {
        stack.push(rooms[0][idx++]);
    }
    visited[0] = true;
    //console.log('0번방 키 넣기', stack)

    //2. 방문 시작
    while (stack.length > 0) {
        const key = stack.pop(); //방문해야 하는 방의 열쇠를 가지고
        visited[key] = true; //방문을 하고
        //console.log(rooms[key], rooms[key].length)
        for (let i = 0; i < rooms[key].length; i++) { //키를 수집한다.
            const nextkey = rooms[key][i]; //새로운 키
            //console.log('새로운 키', nextkey);
            if (visited[nextkey]) continue;//pass 조건 : 방문한 적이 있는가? (그럼 키를 수집할 이유가 없으니까)
            stack.push(nextkey); //키를 수집
            //console.log('stack에 추가', stack)
        }
    }
    return visited.every(v => v === true);
};