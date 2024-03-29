from collections import deque
n, m = map(int, input().split())
maze = []
visited = set([])

for i in range(n):
    a = list(input())
    for j in range(m):
        if a[j] == 'R': #빨간공 위치
            red = (i, j)
        elif a[j] == 'B': #파란 공 위치
            blue = (i, j)
    maze.append(a)

def bfs():
    que = deque([])
    que.append((red, blue, 0)) #공 넣고
    visited.add(red+blue)

    while que: #시작
        y, x = 0, 1
        r, b, cnt = que.popleft()
        if cnt > 10: #10초과한게 나온 경우
            break
        if maze[b[y]][b[x]] == 'O': #파란구슬이 빠진 경우
            continue
        elif maze[r[y]][r[x]] == 'O': #빨간구슬이 먼저
            #print("구탈2 count", cnt)
            return 1

        #상하좌우로 기울여야 함
        DELTA = [(-1,0), (1,0), (0, -1), (0,1)]
        for (dy, dx) in DELTA:
            nextR = [r[y], r[x]]
            rcnt = 0
            while (maze[nextR[y]+dy][nextR[x]+dx] != '#'):
                rcnt += 1
                nextR[y] += dy
                nextR[x] += dx
                if (maze[nextR[y]][nextR[x]] == 'O'):
                    break
            nextB = [b[y], b[x]]
            bcnt = 0
            while (maze[nextB[y]+dy][nextB[x]+dx] != "#"):
                bcnt += 1
                nextB[y] += dy
                nextB[x] += dx
                if (maze[nextB[y]][nextB[x]] == 'O'):
                    break
            if nextR == nextB and maze[nextR[y]][nextR[x]] != 'O': #겹치는 경우
                if rcnt > bcnt: #빨간색이 더 많이 간 경우 -> 빨간색 뒤로
                    nextR[y] -= dy
                    nextR[x] -=dx
                else: #파란색이 더 많이 간 경우 -> 파란색 뒤로
                    nextB[y] -= dy
                    nextB[x] -= dx
            nextR = tuple(nextR)
            nextB = tuple(nextB)
            if nextR+nextB not in visited:
                que.append((nextR, nextB, cnt+1))
                visited.add(nextR+nextB)
        #print(visited)
    return 0

print(bfs())