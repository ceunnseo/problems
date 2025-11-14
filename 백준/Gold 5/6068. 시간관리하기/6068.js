const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0], 10);
const schedule = [];
let current = Infinity; //일 시작 시간

for (let i = 1; i <= N; i++) {
  const [T, S] = input[i].split(" ").map(Number);
  schedule.push([T, S]);
}
schedule.sort((a, b) => b[1] - a[1]); //스케줄표를 마감 시간 순으로 내림차순 진행

for (let i = 0; i < N; i++) {
  current = Math.min(current, schedule[i][1]);
  current = current - schedule[i][0]; //일의 시작 시간은 현재 시간 - 일이 걸리는 시간
}
if (current < 0) console.log(-1);
else console.log(current);
