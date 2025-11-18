const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]); //보드의 크기
const K = Number(input[1]); //사과의 개수
const board = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0)); //보드 초기화
for (let i = 2; i < 2 + K; i++) {
  const [r, c] = input[i].split(" ").map(Number);
  board[r][c] = 1; //사과의 위치
}
const L = Number(input[2 + K]); //뱀의 방향 변환 횟수
const moves = Array(10001).fill(0); //시간 : 10,000이하의 정수
for (let i = 3 + K; i < 3 + K + L; i++) {
  const [x, c] = input[i].split(" ");
  moves[x] = c;
} //moves[i] : 0 이면 방향 바꾸지 않고, D 혹은 L 이면 방향 전환

const snake = [[1, 1]]; //행, 열, 방향
board[1][1] = 2; //뱀이 있음
let time = 0;
let dir = 0;
//0 : 오른쪽, 1 : 아래, 2 : 왼쪽, 3 : 위쪽
const dr = [0, 1, 0, -1];
const dc = [1, 0, -1, 0];
while (true) {
  time++;
  //뱀의 머리
  const [r, c] = snake[snake.length - 1];
  let currentR = r + dr[dir];
  let currentC = c + dc[dir];
  //만약 벽이나 자기자신의 몸과 부딪히면 게임이 끝난다.
  if (currentR <= 0 || currentR > N || currentC <= 0 || currentC > N) break;

  //자기 몸에 부딪히면 게임이 끝난다
  if (board[currentR][currentC] === 2) break;

  //만약 이동한 칸에 사과가 있다면
  if (board[currentR][currentC] === 1) {
    board[currentR][currentC] = 2; //뱀 머리가 오고 뱀 길이는 그대로
    snake.push([currentR, currentC]);
  } else {
    //만약 이동한 칸에 사과가 없다면, 몸 길이는 변하지 않는다.
    board[currentR][currentC] = 2;
    snake.push([currentR, currentC]); //머리 늘리고 꼬리 제거하기
    const [tailR, tailC] = snake.shift();
    board[tailR][tailC] = 0;
  }
  //이동이 끝나고나서 방향 회전을 해야 한다면
  if (moves[time]) {
    if (moves[time] === "D") {
      //오른쪽으로 회전
      dir = (dir + 1) % 4;
    } else if (moves[time] === "L") {
      dir = (dir + 3) % 4;
    }
  }
}
console.log(time);
