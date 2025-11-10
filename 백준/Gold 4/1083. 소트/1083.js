const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let s = Number(input[2]);
for (let i = 0; i < N - 1 && s > 0; i++) {
  let rangeEnd = Math.min(N - 1, i + s); //탐색 범위 : 기준점에서 s만큼 떨어진 곳 or 끝까지
  let maxIdx = i;
  for (let j = i + 1; j <= rangeEnd; j++) {
    if (arr[j] > arr[maxIdx]) maxIdx = j; //기준점보다 더 큰 값이 있다면 swap 할 인덱스 저장
  }
  for (let k = maxIdx; k > i; k--) {
    //인접 스왑 과정 (바꿀 값 -> 기준값까지 좌우로 스왑)
    [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]];
  }
  s -= maxIdx - i; //이동 거리만큼 s를 빼줌
}
console.log(arr.join(" "));
