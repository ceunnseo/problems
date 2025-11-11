const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0], 10);
let res = [];

for (let i = 1; i <= T; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  const d = y - x; //두 위치의 차이
  const n = Math.floor(Math.sqrt(d));
  if (d === n * n) {
    console.log(2 * n - 1);
  } else if (d > n * n && d <= n * n + n) {
    console.log(2 * n);
  } else {
    console.log(2 * n + 1);
  }
}
