/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
//week5의 주제가 다익스트라이기는 하지만 dfs로도 충분히 가능하지 않을까?…
var canFinish = function(numCourses, prerequisites) {
    const graph = Array.from({length : numCourses}, () => []);
    for (const [ai, bi] of prerequisites) {
        graph[bi].push(ai);
    }
    let flag = false; //순환 그래프면 true, 아니면 false;
    const checked = new Set();
    function dfs(idx, visited) {
        if (checked.has(idx)) return;
        checked.add(idx); //출발 노드를 checked에 저장
        for (const nextNode of graph[idx]) { //연결된 노드들에 대해서 dfs
            if (!visited.has(nextNode)) {
                visited.add(nextNode);
                dfs(nextNode, visited); 
                visited.delete(nextNode);
                if (flag) return;
            } else {
                flag = true;
                return;
            }
        }
    }
    //각 노드마다 순환 여부를 판단
    for (let i = 0; i < numCourses; i++) {
        const visited = new Set([i]); //DFS로 방문중인 노드들
        dfs(i, visited); //i번째 노드가 순환을 가지는지 판단하는 dfs 함수
        if (flag) return false;
    }
    return true;
};