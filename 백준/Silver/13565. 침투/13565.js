const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [M, N] = input[0].split(" ").map(Number); //격자 크기 (행, 열)
const grid = input.slice(1).map((line) => line.split("").map(Number));
//방향 설정
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];
//오염 여부
let result = false;

//1. 침투하는 시작점 추가하기
const queue = [];
for (let i = 0; i < N; i++) {
  if (grid[0][i] === 0) {
    queue.push([0, i]);
    grid[0][i] = -1; //오염됐으면 -1로 바꾸기
  }
}

//BFS 순회
while (queue.length) {
  const [r, c] = queue.pop();
  if (r === M - 1) {
    //early return
    result = true;
    break;
  }
  for (let i = 0; i < 4; i++) {
    const nr = r + dr[i];
    const nc = c + dc[i];
    if (nr < 0 || nr >= M || nc < 0 || nc >= N) continue;
    if (grid[nr][nc] === 0) {
      queue.push([nr, nc]);
      grid[nr][nc] = -1;
    }
  }
}

if (result) console.log("YES");
else console.log("NO");
