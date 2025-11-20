const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const graph = {}; //그래프 연결 기록 graph[node] = [left, right] : 노드 node의 왼쪽, 오른쪽 자식 노드
const parent = {}; //부모 노드 정보 기록 parent[n] = k : 노드 n의 부모는 k 이다.
const visited = Array(n + 1).fill(false); //그래프 방문 여부
let moves = 0; //이동횟수

for (let i = 1; i <= n; i++) {
  const [node, left, right] = input[i].split(" ").map(Number);
  graph[node] = [left, right];
  if (left !== -1) parent[left] = node;
  if (right !== -1) parent[right] = node;
}
parent[1] = -1; //root node
visited[0] = true;
visited[1] = true;

//endNode 찾기 = root에서 가장 오른쪽으로 내려간 노드
let node = 1;
let endNode = 1;
while (true) {
  right = graph[node][1];
  if (right === -1) {
    break;
  } else {
    endNode = right;
    node = right;
  }
}

// 유사 중위순회 탐색 (처음 시작 cur = root node)
let cur = 1;
while (true) {
  const [left, right] = graph[cur];
  //조건1. 왼쪽 자식 노드가 있고 방문하지 않았다면
  if (left !== -1 && !visited[left]) {
    cur = left;
    visited[left] = true;
    moves++;
  } else if (right !== -1 && !visited[right]) {
    //조건2. 오른쪽 자식 노드가 있고, 방문하지 않았다면
    cur = right;
    visited[right] = true;
    moves++;
  } else if (cur === endNode) {
    //현재 노드가 유사 중위 순회의 끝이면 -> 유사 중위 순회를 종료한다
    break;
  } else if (parent[cur] !== -1) {
    //부모노드가 존재한다면 -> 부모 노드로 이동한다
    cur = parent[cur];
    moves++;
  }
}
console.log(moves);
