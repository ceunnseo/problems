const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let x = -1; //수열의 시작점

function findSequence(n, minLen, maxLen = 100) {
  for (let L = minLen; L <= maxLen; L++) {
    const base = n - (L * (L - 1)) / 2;
    if (base < 0) break;
    if (base % L === 0) {
      const x = base / L;
      return Array.from({ length: L }, (_, i) => x + i);
    }
  }
  return null;
}

const result = findSequence(N, M);
console.log(result ? result.join(" ") : -1);
