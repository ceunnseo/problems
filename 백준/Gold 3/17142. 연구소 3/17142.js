const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const array = [];
const virusPos = [];
const virus = [];
let area = 0;

for (let i = 1; i <= N; i++) {
  array[i - 1] = input[i].split(" ").map(Number);
  for (let j = 0; j < N; j++) {
    if (array[i - 1][j] === 2) {
      //바이러스 -> * 으로 구분
      virusPos.push([i - 1, j]);
      array[i - 1][j] = "*";
    } else if (array[i - 1][j] === 0) {
      //빈칸 -> -1로 변경
      area++;
      array[i - 1][j] = -1;
    } else {
      //벽 -> - 으로 구분
      array[i - 1][j] = "-";
    }
  }
}

const visited = Array(virusPos.length).fill(false);

function dfs(path, idx) {
  if (path.length === M) {
    virus.push([...path]);
  }
  for (let i = idx; i < virusPos.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      path.push(virusPos[i]);
      dfs(path, i + 1);
      visited[i] = false;
      path.pop();
    }
  }
}
dfs([], 0);

const dr = [0, 0, -1, 1];
const dc = [-1, 1, 0, 0];
let minimum = Infinity;
for (let i = 0; i < virus.length; i++) {
  const copyed = array.map((inner) => [...inner]);
  const queue = [];
  let head = 0;
  let cnt = 0;
  for (let j = 0; j < M; j++) {
    const [r, c] = virus[i][j];
    copyed[r][c] = 0;
    queue.push([r, c]);
  }
  let time = 0;
  while (head < queue.length) {
    const [r, c] = queue[head++];
    for (let k = 0; k < 4; k++) {
      const nr = r + dr[k];
      const nc = c + dc[k];
      if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
      if (copyed[nr][nc] === -1) {
        //바이러스가 빈 칸으로 가는 경우
        copyed[nr][nc] = copyed[r][c] + 1;
        queue.push([nr, nc]);
        cnt++;
        time = Math.max(time, copyed[nr][nc]);
      } else if (copyed[nr][nc] === "*") {
        //바이러스가 비활성 바이러스로 가는 경우
        copyed[nr][nc] = copyed[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }
  if (cnt === area) {
    //모두 다 확산됨
    minimum = Math.min(minimum, time);
  }
}
if (minimum === Infinity) console.log(-1);
else console.log(minimum);
