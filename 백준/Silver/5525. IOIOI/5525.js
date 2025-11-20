const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

/*
Pn : (n+1)개의 I, n개의 O로 이루어져 있으면 교대로 나오는 문자열
P1 : (1+1)개의 I, 1개의 O -> IOI -> IOI 가 1개
p2 : (2+1)개의 I, 2개의 O -> IOIOI -> IOI가 2개
p3 : (3+1)개의 I, 3개의 O -> IOIOIOI -> IOI가 3개

S안에 Pn이 몇 군데 포함되어있는지 구하는..
*/

//N <= 10^6, M <+ 10^6 <- 이중 for 문 돌리면 시간 터짐
const N = Number(input[0]); //N=1이면 -> IOI
const M = Number(input[1]); //주어지는 문자열 S의 길이는 M
const S = input[2]; //S
//substring 의 개수를 세는데 이중 for 문 없이.. 어떻게 할까

let str = "IOI";
let cnt = 0;
let flag = 0;
let i = 0;
while (i < M) {
  if (S[i] === "I" && S[i + 1] === "O" && S[i + 2] === "I") {
    flag += 1;
    i += 2; //IOI 한 칸 증가
    if (flag === N) {
      //Pn을 발견하면 카운트 증가, 그 다음에 IOI가 오면 하나 더 증가해야 하니까 flag 1 감소
      flag -= 1;
      cnt += 1;
    }
  } else {
    //IOI가 없으면 끊김 -> 하나씩 증가
    flag = 0;
    i += 1;
  }
}
console.log(cnt);
