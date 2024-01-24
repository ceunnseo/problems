from collections import deque
n, m = map(int, input().split())
# 세로, 가로
board = []



# 큐에 R, B 초기 위치 생성
que = deque([]) #0, red, blue
for i in range(n):
    a = list(input())
    for j in range(m):
        if a[j] == 'B':
            blue = (i, j)
        elif a[j] == 'R':
            red = (i, j)
        elif a[j] == 'O':
            goal = (i, j)
    board.append(a)
que.append((0, red, blue))

#빨간 공과 파란 공의 방문 위치를 기록할 visited
#보통은 maze 형태로 방문 위치를 기록하지만
#두개의 공을 한번에 기록해야하기에 set으로
x, y = 0, 1
flag = False
visited = set([((red[x], red[y]), (blue[x], blue[y]))])
while que:
    cnt, red, blue = que.popleft()
    if cnt > 10:
        break
    if board[blue[x]][blue[y]] == 'O':
        continue
    elif board[red[x]][red[y]] == 'O':
        flag = True
        break
    #구슬 굴리기.. if문이 너무 구린데
    for d in (-1, 0), (1, 0), (0, -1), (0, 1):
        # 1. 빨간 구슬
        cntR = 0
        nxtRedX, nxtRedY = red[x], red[y]
        while (0<=nxtRedX+d[x]<n and 0<=nxtRedY+d[y]<m and board[nxtRedX+d[x]][nxtRedY+d[y]] != "#"):
            nxtRedX += d[x]
            nxtRedY += d[y] #굴리고
            cntR += 1
            if (board[nxtRedX][nxtRedY] == 'O'):#구멍만나면
                break
        # 2. 파란 구슬
        cntB = 0
        nxtBlueX, nxtBlueY = blue[x], blue[y]
        while (0<=nxtBlueX+d[x]<n and 0<=nxtBlueY+d[y]<m and board[nxtBlueX+d[x]][nxtBlueY+d[y]] != "#"):
            nxtBlueX += d[x]
            nxtBlueY += d[y] #굴리고
            cntB += 1
            if (board[nxtBlueX][nxtBlueY] == 'O'):#구멍만나면
                break
        # 둘 다 구멍이 아니면서 겹친 경우
        if (board[nxtRedX][nxtRedY] != 'O' and board[nxtBlueX][nxtBlueY] != 'O') and (nxtRedX == nxtBlueX) and (nxtRedY == nxtBlueY):
            if cntR > cntB:
                nxtRedX -= d[x]
                nxtRedY -= d[y]
            else:
                nxtBlueX -= d[x]
                nxtBlueY -= d[y]
        if ((nxtRedX, nxtRedY), (nxtBlueX, nxtBlueY)) not in visited:
            visited.add(((nxtRedX,nxtRedY), (nxtBlueX,nxtBlueY)))
            que.append((cnt+1, (nxtRedX,nxtRedY), (nxtBlueX,nxtBlueY)))
            
if flag:
    print(cnt)
else:
    print(-1)
            