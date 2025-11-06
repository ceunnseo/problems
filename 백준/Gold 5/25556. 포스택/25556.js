const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const top = [0, 0, 0, 0]; //네 개 스택의 TOP 만 지정
let flag = true;
for (let i = 0; i < N; i++) {
  const x = arr[i];
  let pick = -1; //선택된 스택 인덱스
  let bestTop = 0; //x보다 작은 TOP 중에 최대값
  for (let s = 0; s < 4; s++) {
    if (top[s] < x && top[s] >= bestTop) {
      bestTop = top[s];
      pick = s;
    }
  }
  if (pick !== -1) {
    top[pick] = x;
  } else {
    flag = false;
    break;
  }
}
if (flag) console.log("YES");
else console.log("NO");
