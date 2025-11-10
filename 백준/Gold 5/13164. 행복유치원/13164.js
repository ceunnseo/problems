const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const diff = Array(n - 1).fill(0);
for (let i = 0; i < n - 1; i++) {
  diff[i] = arr[i + 1] - arr[i];
}
diff.sort((a, b) => b - a);

let result = 0;
for (let i = k - 1; i < diff.length; i++) {
  result += diff[i];
}
console.log(result);
