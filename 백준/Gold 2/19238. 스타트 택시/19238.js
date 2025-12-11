const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, fuel] = input[0].split(" ").map(Number);
const board = [];
//유저 방문 여부
const visited = Array(M + 1).fill(false);
visited[0] = true;
// .을 맨 앞줄에 N+1개 채운 배열
let topRow = [];
for (let i = 0; i < N + 1; i++) {
  topRow.push(".");
}
board.push(topRow);

//나머지 처리
for (let i = 1; i <= N; i++) {
  const nums = input[i].split(" ").map(Number);
  //앞에 .을 하나 추가
  const row = [".", ...nums];
  for (let j = 1; j <= N; j++) {
    if (row[j] === 1) {
      row[j] = "."; // 벽은 . 으로 표시
    } else {
      row[j] = -1; //방문한 적 없음
    }
  }

  board.push(row);
}
//console.log(board);
const [r, c] = input[N + 1].split(" ").map(Number); //시작 위치
const dic = {};
for (let i = 1; i <= M; i++) {
  dic[i] = input[N + i + 1].split(" ").map(Number);
}

//1. 택시 위치(r, c)로부터 각 cell마다 가장 가까운 위치를 계산하는 함수
function find_shortest(r, c, board) {
  const queue = [[r, c]];
  //console.log(board);
  board[r][c] = 0;
  let head = 0;
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  while (head < queue.length) {
    const [r, c] = queue[head++];
    for (let i = 0; i < 4; i++) {
      const nr = r + direction[i][0];
      const nc = c + direction[i][1];
      //console.log("=======", nr, nc, board, board[nr]);
      if (nr <= 0 || nr > N || nc <= 0 || nc > N) continue;
      //console.log("test", board[nr][nc], board[r][c]);
      if (board[nr][nc] !== "." && board[nr][nc] === -1) {
        board[nr][nc] = board[r][c] + 1;
        //console.log("board[nr][nc]", board[nr][nc]);
        queue.push([nr, nc]);
      }
    }
  }
}

//2. 1번부터 N번까지 모든 승객 중에 가까운 승객을 찾는 함수
function find_target_passenger(board) {
  let userIdx = 0;
  let shortest = Infinity;
  for (let i = 1; i <= M; i++) {
    const [start_r, start_c, end_r, end_c] = dic[i];
    //console.log("find 실행", i, board[start_r][start_c], shortest);
    if (board[start_r][start_c] < shortest) {
      if (!visited[i]) {
        userIdx = i;
        shortest = board[start_r][start_c];
      }
    } else if (shortest === board[start_r][start_c]) {
      if (start_r > dic[userIdx][0]) continue;
      //겹치는 경우 - 1. 행 번호가 작은 승객
      else if (start_r < dic[userIdx][0]) {
        if (!visited[i]) {
          userIdx = i;
        }
      }
      //겹치는 경우 - 2. 열 번호가 작은 승객
      else {
        if (start_c < dic[userIdx][1]) {
          if (!visited[i]) {
            userIdx = i;
          }
        }
      }
    }
  }
  if (userIdx !== 0) {
    visited[userIdx] = true;
  }
  return userIdx;
}

//find_shortest(r, c); //board에서 먼저 거리 계산을 수행하고
//console.log(board);
//let number = find_target_passenger();
//console.log(number);

//기름을 충전
function charge_fuel(fuel, dist) {
  return (fuel += 2 * dist);
}

//시작 오일
let curFuel = fuel;
//택시 시작점
let taxi_r = r;
let taxi_c = c;

//console.log(board_copy);
let flag = false;
while (curFuel >= 0) {
  //0. 초기화
  let board_copy = board.map((row) => [...row]);
  //1. 시작점에서 거리 계산을 수행
  find_shortest(taxi_r, taxi_c, board_copy);
  //2. 목적지의 손님 찾기
  let passenger = find_target_passenger(board_copy);
  if (passenger === 0) {
    break;
  }
  //console.log("손님을 태웠습니다", passenger);
  const [passenger_r, passenger_c, goal_r, goal_c] = dic[passenger];
  if (board_copy[passenger_r][passenger_c] === -1) {
    flag = true;
    //console.log("갈 수 없습니다");
    break;
  }
  //택시 -> 승객을 태우기 위해 연료를 사용
  curFuel -= board_copy[passenger_r][passenger_c];
  taxi_r = passenger_r;
  taxi_c = passenger_c;
  //console.log("남은 연료", curFuel);
  //현재 위치에서 도착지까지 거리 구하기
  board_copy = board.map((row) => [...row]);
  find_shortest(taxi_r, taxi_c, board_copy);
  //도착지까지 이동하기
  if (curFuel >= board_copy[goal_r][goal_c]) {
    curFuel -= board_copy[goal_r][goal_c];
  } else {
    //console.log("갈 수 없습니다");
    flag = true;
    break;
  }
  //도착지까지 이동하고나서 충전하기
  curFuel += 2 * board_copy[goal_r][goal_c];
  taxi_r = goal_r;
  taxi_c = goal_c;
  //console.log("목적지까지 이동시키고 충전해서 남은 연료", curFuel);
}
//console.log(visited, curFuel, flag);
//console.log(visited.every((e) => e));
if (flag) {
  //console.log("결과 : 갈 수 없습니다", -1);
  console.log(-1);
} else if (visited.every((e) => e)) {
  //모든 값이 true인 경우 (다 태운 경우)
  console.log(curFuel);
} else {
  //태우지 못 한 경우
  console.log(-1);
}
