const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const array = [];
let redRow, redCol, blueRow, blueCol;

for (let i = 1; i <= N; i++) {
  const test = input[i].split("");
  array.push(test);
  for (let j = 0; j < M; j++) {
    if (test[j] === "B") {
      blueRow = i - 1;
      blueCol = j;
    } else if (test[j] === "R") {
      redRow = i - 1;
      redCol = j;
    }
  }
}

// 큐: [rr, rc, br, bc, cnt]
const queue = [];
let head = 0;
queue.push([redRow, redCol, blueRow, blueCol, 0]);

// visited[rr][rc][br][bc]
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () =>
    Array.from({ length: N }, () => Array(M).fill(false))
  )
);
visited[redRow][redCol][blueRow][blueCol] = true;

// 오른쪽, 왼쪽, 위, 아래
const dc = [1, -1, 0, 0];
const dr = [0, 0, -1, 1];

function move(r, c, dr1, dc1) {
  let cnt = 0;
  while (true) {
    const nr = r + dr1;
    const nc = c + dc1;
    if (array[nr][nc] === "#") break;
    r = nr;
    c = nc;
    cnt++;
    if (array[nr][nc] === "O") break;
  }
  return [r, c, cnt];
}
let flag = false;

while (head < queue.length) {
  const [rr, rc, br, bc, cnt] = queue[head++];

  // 10번 넘게 기울이면 실패
  if (cnt >= 10) continue;

  // 네 방향으로 기울여보기
  for (let d = 0; d < 4; d++) {
    // 빨간공, 파란공 굴리기
    let [nrr, nrc, rcnt] = move(rr, rc, dr[d], dc[d]);
    let [nbr, nbc, bcnt] = move(br, bc, dr[d], dc[d]);

    // 파란공이 구멍에 빠진 경우 -> 버림
    if (array[nbr][nbc] === "O") continue;

    // 파란공은 안빠졌고 빨간 공만 빠진 경우 -> 성공
    if (array[nrr][nrc] === "O") {
      flag = true;
      break;
    }

    // 파란공, 빨간공 둘 다 안빠졌는데 겹쳐있는 경우
    if (nrr === nbr && nrc === nbc) {
      // 더 많이 이동한 공이 뒤에 있었던 공이므로 한 칸 뒤로
      if (rcnt > bcnt) {
        nrr -= dr[d];
        nrc -= dc[d];
      } else {
        nbr -= dr[d];
        nbc -= dc[d];
      }
    }

    // 아직 방문 안 한 상태면 큐에 추가
    if (!visited[nrr][nrc][nbr][nbc]) {
      visited[nrr][nrc][nbr][nbc] = true;
      queue.push([nrr, nrc, nbr, nbc, cnt + 1]);
    }
  }
}

// 10번 이내에 못 뺀 경우 ->  0을 출력
if (flag) {
  console.log(1);
} else {
  console.log(0);
}
