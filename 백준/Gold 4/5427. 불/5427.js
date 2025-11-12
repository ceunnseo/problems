const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
const T = Number(input[idx++]);
const tests = [];

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

for (let t = 0; t < T; t++) {
  const [w, h] = input[idx++].split(" ").map(Number);
  const grid = [];
  let queue = [];
  let fire = [];
  let fireVisited = Array.from({ length: h }, () => Array(w).fill(-1));
  let personVisited = Array.from({ length: h }, () => Array(w).fill(false));
  for (let r = 0; r < h; r++) {
    const row = input[idx++].split("");
    for (let c = 0; c < w; c++) {
      if (row[c] === "@") {
        //상근이 현재 위치
        queue.push([r, c, 0]);
        personVisited[r][c] = true;
      } else if (row[c] === "*") {
        //불
        fire.push([r, c]);
        fireVisited[r][c] = 0;
      }
    }
    grid.push(row);
  }

  tests.push({ w, h, grid, queue, fire, fireVisited, personVisited });
}

for (let i = 0; i < T; i++) {
  //각 TEST마다 BFS 실행
  const { w, h, grid, queue, fire, fireVisited, personVisited } = tests[i];
  //시간에 따른 불 확산
  let fh = 0;
  while (fh < fire.length) {
    const [r, c] = fire[fh++];
    for (let j = 0; j < 4; j++) {
      const nr = r + dr[j];
      const nc = c + dc[j];
      if (nr < 0 || nr >= h || nc < 0 || nc >= w) continue;
      if (grid[nr][nc] !== "#" && fireVisited[nr][nc] === -1) {
        fireVisited[nr][nc] = fireVisited[r][c] + 1;
        fire.push([nr, nc]);
      }
    }
  }
  //console.log("불 확산", fireVisited);
  let qh = 0;
  let flag = false;

  while (qh < queue.length) {
    //사람 이동
    const [r, c, time] = queue[qh++];
    if (r === 0 || r === h - 1 || c === 0 || c === w - 1) {
      console.log(time + 1);
      flag = true;
      break;
    }
    for (let j = 0; j < 4; j++) {
      const nr = r + dr[j];
      const nc = c + dc[j];
      if (nr < 0 || nr >= h || nc < 0 || nc >= w) continue;
      if (grid[nr][nc] === "#" || personVisited[nr][nc]) continue;
      if (fireVisited[nr][nc] === -1 || fireVisited[nr][nc] > time + 1) {
        personVisited[nr][nc] = true;
        queue.push([nr, nc, time + 1]);
      }
    }
  }
  if (!flag) console.log("IMPOSSIBLE");
}
