const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const array = Array.from({ length: N + 1 }, () => Array(M + 1).fill(-1));
const points = []; //0인 지점
let area; //0의 개수
const initVirus = []; //바이러스의 처음 위치
for (let i = 1; i <= N; i++) {
  const text = input[i].split(" ").map(Number);
  for (let j = 1; j <= M; j++) {
    array[i][j] = text[j - 1];
    if (text[j - 1] === 0) points.push([i, j]);
    else if (text[j - 1] === 2) initVirus.push([i, j]);
  }
}
area = points.length - 3; //전체 개수 - 벽 3개 개수
const visited = Array(area).fill(false);
const blocks = [];

//[1] 최대 64C3 조합을 먼저 구해야 함
function dfs(path, idx) {
  if (path.length === 3) {
    blocks.push([...path]);
    return;
  }
  for (let i = idx; i < points.length; i++) {
    if (!visited[i]) {
      path.push(points[i]);
      visited[i] = true;
      dfs(path, idx + 1);
      path.pop();
      visited[i] = false;
    }
  }
}

dfs([], 0);

//[2] 조합에 따라 벽을 세우고 바이러스 터트리기
const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];
let maximum = 0;
let cnt;
let queue;
let header;
let copyArray = array.slice();
for (let i = 0; i < blocks.length; i++) {
  //초기화하기
  cnt = area;
  queue = initVirus.slice(); //복사
  header = 0;
  copyArray = array.map((inner) => [...inner]);
  //벽 세우기
  const [b1, b2, b3] = blocks[i];
  copyArray[b1[0]][b1[1]] = 1;
  copyArray[b2[0]][b2[1]] = 1;
  copyArray[b3[0]][b3[1]] = 1;

  //바이러스 터트리기 (BFS)
  while (header < queue.length) {
    const [r, c] = queue[header++];
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];
      if (nr < 0 || nr >= N + 1 || nc < 0 || nc >= M + 1) continue;
      if (copyArray[nr][nc] === 0) {
        copyArray[nr][nc] = 2;
        cnt -= 1;
        queue.push([nr, nc]);
      }
    }
  }
  maximum = Math.max(maximum, cnt);
}
console.log(maximum);
