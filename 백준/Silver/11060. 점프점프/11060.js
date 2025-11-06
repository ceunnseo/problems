const fs = require("fs");

// 입력 처리 (한 줄 또는 여러 줄 입력도 모두 처리 가능)
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 첫 번째 줄: 숫자 개수 (예: 10)
const n = Number(input[0]);

// 두 번째 줄: 배열 (예: 1 2 0 1 3 2 1 5 4 2)
const arr = input[1].split(" ").map(Number);

//console.log(n); // 10
//console.log(arr); // [1, 2, 0, 1, 3, 2, 1, 5, 4, 2]

/*
반환 값 : 맨 오른쪽에 도착하는 가장 작은 점프 횟수 (도달 불가 시 -1)
최소 점프를 해서 오른쪽 맨 끝에 도달해야 함 -> dp
dp[i] : i번째 칸에 도달하는 데 필요한 최소 점프 수
dp[0] = 0 (시작점)
*/
const INF = 100000000000;
const dp = Array(n).fill(INF); //최대값
dp[0] = 0; //시작점에 도달하는 점프 횟수는 0

for (let i = 0; i < n; i++) {
  for (let j = 0; j < arr[i]; j++) {
    if (i + j + 1 < dp.length) {
      dp[i + j + 1] = Math.min(dp[i + j + 1], dp[i] + 1);
    }
  }
}
if (dp[n - 1] === INF) console.log(-1);
else console.log(dp[n - 1]);
