const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(""));
}
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];
let result = -1;
/* 비트마스킹을 이용한 풀이
const startBit = 1 << (arr[0][0].charCodeAt(0) - 65);
const stack = [[0, 0, startBit, 1]];
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];
while (stack.length) {
  const [r, c, mask, depth] = stack.pop();
  result = Math.max(result, depth);
  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];
    if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;
    const bit = 1 << (arr[nr][nc].charCodeAt(0) - 65);
    if ((mask & bit) === 0) {
      stack.push([nr, nc, mask | bit, depth + 1]);
    }
  }
}
console.log(result);
*/

//백트래킹을 이용한 풀이
const visited = Array(26).fill(false);
function dfs(r, c, time) {
  result = Math.max(result, time);
  //모든 경로를 탐색하여 가장 멀리 갈 수 있는 횟수를 리턴하기 때문에 조기 종료 조건 X
  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];
    if (nr < 0 || nr >= N || nc < 0 || nc >= M) continue;
    const idx = arr[nr][nc].charCodeAt(0) - 65;
    if (!visited[idx]) {
      //더 이동이 가능한 경우 -> 재귀 호출
      visited[idx] = true;
      dfs(nr, nc, time + 1);
      visited[idx] = false;
    }
  }
}

const idx = arr[0][0].charCodeAt(0) - 65;
visited[idx] = true;
dfs(0, 0, 1); //시작 R, 시작 C, 횟수
console.log(result);
