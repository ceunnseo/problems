from collections import deque
from itertools import combinations
import copy
n, m = map(int, input().split())
virus = []
graph = []
safeZone = 0
time = 1e5 #최소시간
for i in range(n):
    a = list(map(int, input().split()))
    graph.append(a)
    for j in range(n):
        if a[j] == 1: #벽을 만났으면
            a[j] = '-'
        elif a[j] == 2: # 바이러스
            virus.append((i, j))
            graph[i][j] = "*"
        else: #안전지대
            graph[i][j] = -1
            safeZone += 1

stk = []
que = deque([])
#상하좌우
DELTA = [(-1, 0), (1, 0), (0, -1), (0, 1)]
#바이러스 표시하고 bfs 진행

def bfs(que):
    global time
    safe = 0
    t = 0
    graphCopy = [item[:] for item in graph]
    '''
    for i in range(len(virus)):
        x, y = virus[i][0], virus[i][1]
        if not v[i]:# 비활성화
            graphCopy[x][y] = "*"
        else:
            graphCopy[x][y] = 0 #활성화'''
    while que:
        x, y = que.popleft() #바이러스 꺼내서
        for (dx, dy) in DELTA:
            nx = x + dx
            ny = y + dy
            if nx < 0 or nx >= n or ny < 0 or ny >= n:
                continue
            if graphCopy[nx][ny] == -1: #방문 안한 안전지대
                graphCopy[nx][ny] = graphCopy[x][y] + 1
                t = graphCopy[nx][ny]
                safe += 1
                que.append((nx, ny))
            elif graphCopy[nx][ny] == "*": #비활성화
                graphCopy[nx][ny] = graphCopy[x][y]+1
                que.append((nx, ny))           
    if safe == safeZone:
        time = min(time, t)
        
        
for combi in combinations(virus, m):
    q = deque([])
    for (x,y) in combi:
        graph[x][y] = 0 #활성 바이러스로 바꾸고
        q.append((x, y))
    bfs(q)
    for (x, y) in combi:
        graph[x][y] = "*" #다시 비활성화로 바꾸고
            




'''
v = [False for _ in range(len(virus))]
def virusPick(que, cnt):
    global v
    if cnt == m:
        #print("que", que)
        # maze 활성, 비활성화만 바꿔주고
        que = deque(stk)
        #print(que)
        bfs(que)
        return #재귀 종료
    for i in range(len(virus)):
        if virus[i] not in stk:
            stk.append(virus[i])
            v[i] = True
            virusPick(stk, cnt+1)
            stk.pop()
            v[i] = False
virusPick(stk, 0)'''




if time == 1e5:
    print(-1)
else:
    print(time)
        