const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number); //유저 수, 친구관계 수
const graph = {}; //그래프 (딕셔너리로 정의)

let result = Infinity; //가장 적은 친구 수
let userId = -1; //유저 이름
//그래프 만들기
for (let i = 1; i <= N; i++) {
  graph[i] = [];
}
for (let i = 1; i <= M; i++) {
  const [u1, u2] = input[i].split(" ");
  graph[u1].push(u2);
  graph[u2].push(u1);
}
for (let i = 1; i <= N; i++) {
  //유저마다 BFS 수행
  const res = BFS(i);
  //console.log("i", i, "res", res);
  if (res < result) {
    result = res;
    userId = i;
  }
}
console.log(userId); //가장 작은 친구 수

//BFS 수행하기
function BFS(user) {
  let header = 0;
  const queue = [user];
  let result = 0;
  const visited = Array(N + 1).fill(-1); //방문 기록 (-1 : 방문 안함, 그 외 : visited[i]까지 가는 데 걸리는 비용)
  visited[user] = 0;
  while (header < queue.length) {
    const cur = queue[header++];
    for (const node of graph[cur]) {
      //인접한 노드를 방문
      if (visited[node] === -1) {
        //방문한 적이 없다면 큐에 추가
        queue.push([node]);
        visited[node] = visited[cur] + 1;
        result += visited[node];
      }
    }
  }
  return result;
}
