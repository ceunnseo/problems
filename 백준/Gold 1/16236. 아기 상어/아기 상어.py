from collections import deque
que = deque([])
n = int(input())
visited =[[False for _ in range(n)] for _ in range(n)]
graph = []
SIZE = 2 #아기상어 크기
stack = []
cand = [] #(x, y)후보가 담길 리스트
for i in range(n):
    a = list(map(int, input().split()))
    for j in range(n):
        if a[j] == 9: #아기상어
            startX, startY = i, j #아기상어의 위치
            que.append(((startX, startY), 0)) #시작위치와 이동거리
            visited[startX][startY] = True
            a[j] = 0 #시작위치 0으로
    graph.append(a)

x, y = 0, 1
flag = False
cnt = 0 #물고기 먹은 횟수
total = 0
while True:
    while que:
        cur, dist = que.popleft()
        curx, cury = cur[x], cur[y]
        if graph[curx][cury] != 0 and graph[curx][cury] < SIZE: #먹을 수 있으면
            cand.append((cur, dist))
        for (dx, dy) in (-1, 0), (1, 0), (0, -1), (0, 1):
            nx = curx+dx
            ny = cury+dy
            if nx < 0 or nx >= n or ny < 0 or ny >= n:
                continue
            if not visited[nx][ny] and graph[nx][ny] <= SIZE: #이동가능하면
                que.append(((nx, ny), dist+1))
                visited[nx][ny] = True
        #print(que)
    #print(cand)
    #스택으로 후보 다 골랐으면 먹는거 판단
    fish = 400 #내가 먹을 물고기 고르기 
    fishX, fishY = -1, -1
    for i in range(len(cand)):
        pos, d = cand[i][0], cand[i][1]
        if fish > d: #거리가 더 작은 물고기 저장
            fishX = pos[0]
            fishY = pos[1]
            fish = d
        elif fish == d: #거리가 같으면 위 - 왼 순서로
            if fishX > pos[0]: #더 위에있으면
                fishX, fishY = pos[0], pos[1]
            elif fishX == pos[0]: #심지어 같으면
                if fishY > pos[1]: #왼쪽 비교
                    fishX, fishY = pos[0], pos[1]
    if fishX != -1 and fishY != -1: #물고기 먹었으면
        cnt += 1
        graph[fishX][fishY] = 0 #물고기 먹고
        total += fish
        #print(fish, fishX, fishY)
        que.append(((fishX, fishY), 0)) #다시 스택 돌림
        visited =[[False for _ in range(n)] for _ in range(n)]
        visited[fishX][fishY] = True
        cand = []
    if cnt == SIZE: #혹시 키워졌으면
        SIZE += 1
        cnt = 0
    if not que:
        break
print(total)