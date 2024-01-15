from itertools import combinations
from collections import deque
n, m = map(int, input().split()) #연구소 크기, 바이러스 개수
maze = []
virus = []
cnt = 0 #빈 칸 개수
shortest = n*n+1 #가장 빨리 발생한 확산
for i in range(n):
    maze.append(list(map(int, input().split())))
    for j in range(n):
        if maze[i][j] == 0: #빈칸인 경우
            maze[i][j] = -1 #빈칸이면서 방문하지 않은 경우 -1로
            cnt += 1
        elif maze[i][j] == 1: #벽인 경우
            maze[i][j] = "-"
        elif maze[i][j] == 2: #비활성 바이러스
            maze[i][j] = "*"
            virus.append([i, j])

def bfs(m_virus, cnt, graph):
    #print(m_virus)
    time = 0
    while m_virus: #큐가 빌 때까지
        y, x = m_virus.popleft()
        for (ny, nx) in (y-1, x), (y+1, x), (y, x-1), (y, x+1): #상하좌우
            if ny < 0 or ny >= n or nx < 0 or nx >= n: #범위 벗어날 경우
                continue
            if graph[ny][nx] == -1: #방문을 안 한 빈칸인 경우
                graph[ny][nx] = graph[y][x] + 1 #1카운트
                time = graph[ny][nx] #감염된 시간
                cnt -= 1
                m_virus.append([ny, nx])
            elif graph[ny][nx] == "*": #비활성화 바이러스인 경우는 통과되고 감염시키는게 아니다
                graph[ny][nx] = graph[y][x] + 1 #1카운트
                m_virus.append([ny, nx])
    if cnt <= 0: #다 퍼진 경우
        return time
    return -1 #다 안 퍼진 경우


mazeCopy = [items[:] for items in maze] #원본 복사
for k in combinations(virus, m):
    m_virus = deque([]) #m개의 바이러스를 담을 큐 (활성화 바이러스)
    for a, b in k: #바이러스 활성화
        mazeCopy[a][b] = 0 #활성화 바이러스는 0으로
        m_virus.append([a, b])
    #print("==============")
    times = bfs(m_virus, cnt, mazeCopy)  # bfs 실행하기
    #print(mazeCopy)
    for a, b in k:
        mazeCopy = [items[:] for items in maze] #초기화
    #print(times)
    if times >= 0 and shortest > times:
        shortest = times
if shortest == n*n + 1:
    shortest = -1
print(shortest)


