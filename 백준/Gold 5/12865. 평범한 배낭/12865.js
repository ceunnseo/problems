const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const items = input.slice(1).map((line) => line.split(" ").map(Number));

const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
  //물건
  const [w, v] = items[i - 1];
  for (let j = 1; j <= K; j++) {
    //배낭 무게
    //i 번째 물건을 선택하지 않거나, 선택하거나
    dp[i][j] = dp[i - 1][j];
    if (w <= j) {
      //물건을 선택할 수 있으면
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + v);
    }
  }
}

console.log(dp[N][K]);
