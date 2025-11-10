const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const C = input[0];
const cases = input.slice(1).map(Number);
const MAX = 1000;
const phi = Array(MAX + 1)
  .fill(0)
  .map((j, i) => i);
for (let i = 2; i <= MAX; i++) {
  if (phi[i] === i) {
    for (let j = i; j <= MAX; j += i) {
      phi[j] = (phi[j] / i) * (i - 1);
    }
  }
} //phi[i] : 1부터 i까지의 정수 중 i와 서로소인 개수

const res = Array(MAX + 1).fill(0);
//res[i] : n = i 일 때 보이는 점의 총 개수
res[0] = 1;
for (let i = 1; i <= MAX; i++) {
  res[i] = res[i - 1] + 2 * phi[i];
}
for (const c of cases) {
  console.log(res[c]);
}
