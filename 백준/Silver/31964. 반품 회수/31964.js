const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]); //물건을 내 놓는 집의 수
const houses = input[1].split(" ").map(Number); //집의 좌표
const times = input[2].split(" ").map(Number); //물건을 내 놓는 시간
/*
[1] 시뮬레이션으로 풀기
const visited = Array(N).fill(false); //방문 기록
// 오른쪽 방향 : 기다리거나 이동하거나
let current = 0;
for (let i = 0; i < N; i++) {
  if (i === 0) {
    current += houses[0]; //현재 걸린 시간
  } else {
    current += houses[i] - houses[i - 1]; //현재 걸린 시간
  }
  if (current >= times[i]) {
    //기다리지 않고 주울 수 있는 경우
    visited[i] = true;
  }
}

// 왼쪽 방향 : 줍지 않은 물건 회수하기
for (let i = N - 1; i >= 0; i--) {
  if (i < N - 1) {
    current += houses[i + 1] - houses[i]; //이동하는 데 걸린 시간
  }
  if (!visited[i]) {
    if (current < times[i]) {
      //기다려야 하는 경우
      current = times[i];
    }
    visited[i] = true;
  }
}
current += houses[0]; //마지막 집 X-1에서 0까지 돌아오기
console.log(current);
*/
let diff = 0;
for (let i = 0; i < N; i++) {
  diff = Math.max(diff, times[i] - 2 * houses[N - 1] + houses[i]); //최대 대기 시간 계산
}
console.log(2 * houses[N - 1] + diff);
