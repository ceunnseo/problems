/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length;
    const visited = Array(n).fill(0); //0:미방문, 1 : 빨강, -1 : 파랑
    for (let i = 0; i < n; i++) { //0~n-1노드 파악
        if (visited[i] !== 0) continue; //이미 방문한 노드는 건너뛰기
        const queue = [i];
        visited[i] = 1; //시작점 넣기
        while (queue.length > 0) {
            const u = queue.shift(); //부모 노드 
            for (const v of graph[u]) { //부모와 연결된 모든 자식 노드
                if (visited[v] === 0) { //아직 방문한 적 없으면 -> 부모랑 반대색
                    visited[v] = visited[u] * (-1);
                    queue.push(v);
                }   
                else if (visited[v] === visited[u]) { //방문한 기록 있는데 부모랑 같으면 -> false
                    return false;
                }
            }
        }
    }
    return true;
};