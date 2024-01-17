from collections import deque
n, m, oil = map(int, input().split())
maze = [list(map(int, input().split())) for _ in range(n)]
mazeCopy = [item[:] for item in maze]
visited = [[0 for _ in range(n)] for _ in range(n)]
for i in range(n):
    for j in range(n):
        if mazeCopy[i][j] == 1:#벽이라면
            visited[i][j] = 1
#print(visited)
#visited 0 : 방문 안함, 1 : 벽임, 2 : 방문함
taxiY, taxiX = map(int, input().split())
taxiY -= 1
taxiX -= 1

dic = {}
callerVisited = [False for _ in range(m)]

for k in range(m):
    startY, startX, endY, endX = map(int, input().split())
    startY -= 1
    startX -= 1
    endY -= 1
    endX -= 1
    dic[k] = [startY, startX, endY, endX]

#visited = [False for _ in range(m)]
#visited[0] = True : 0번째 손님을 목적지까지 데려다줬다.


# 1. 현재 택시 위치 ~ 손님의 위치까지 걸리는 시간을 계산
def bfs(taxiY, taxiX):
    global mazeCopy
    global visited
    que = deque([[taxiY, taxiX]])
    visited[taxiY][taxiX] = 2 #방문함
    #print("que", que)
    while que:
        y, x = que.popleft()
        for (ny, nx) in (y-1, x), (y+1, x), (y, x-1), (y, x+1):
            if ny < 0 or ny >= n or nx < 0 or nx >= n:
                continue
            if mazeCopy[ny][nx] == 0 and not visited[ny][nx]:
                mazeCopy[ny][nx] = mazeCopy[y][x] + 1
                que.append([ny, nx])
                visited[ny][nx] = 2 #방문완료
    

# 2. 내가 태울 손님을 pick하는 함수, 태울 손님의 인덱스를 리턴
def selectCaller():
    global callerVisited
    global visited
    callerIdx = -1
    shortest = n*n+1
    for k in range(m):
        if not callerVisited[k]:
            Y, X = dic[k][0], dic[k][1]
            #print(mazeCopy[Y][X], shortest, visited[Y][X])
            if visited[Y][X] != 1: #벽이 아니라면
                if mazeCopy[Y][X] < shortest: #더 작은 경우
                    callerIdx = k
                    #print(callerIdx, "callerIdx")
                    shortest = mazeCopy[Y][X]
                elif mazeCopy[Y][X] == shortest: #같은 경우
                    if Y < dic[callerIdx][0]: #행 더 작으면 갱신
                        callerIdx = k
                    elif Y > dic[callerIdx][0]:
                        continue
                    else: #행이 같은 경우
                        if X < dic[callerIdx][1]: #열이 더 작다면
                            callerIdx = k
                        else: #열이 더 크면
                            continue
    
    if callerIdx == -1: #없다면
        return -1
    callerVisited[callerIdx] = True
    return callerIdx #가야 하는 손님의 인덱스 리턴






def calOil(oil): #오일 계산 함수
    global taxiY
    global taxiX
    global mazeCopy
    global visited
    mazeCopy = [item[:] for item in maze]
    visited = [[False for _ in range(n)] for _ in range(n)]
    #print("택시가 손님에게 이동합니다")
    bfs(taxiY, taxiX)
    idx = selectCaller() #목적지 손님 인덱스
    if idx == -1:
        return -1
    #print(mazeCopy)
    y, x = dic[idx][0], dic[idx][1]#목적지 손님의 위치
    #print("목적지 손님 인덱스", idx)
    #print("목적지 손님 위치", y, x)
    #print(mazeCopy)
    #print("택시가 위치",y,x,"인", idx, "번째 손님을 태웠습니다")
    #print(mazeCopy)
    #print("손님에게 갈 때까지", mazeCopy[y][x], "만큼 오일이 필요합니다")
    if mazeCopy[y][x] == 0 and (taxiY!=y and taxiX!=x) : #못가는 경우
        return -1
    oil = oil - mazeCopy[y][x]
    taxiY, taxiX = y, x
    if oil <= 0:
        return -1

    mazeCopy = [item[:] for item in maze]
    visited = [[False for _ in range(n)] for _ in range(n)]
    #print("현재 택시는", taxiY, taxiX, "에 위치하고 있습니다")
    bfs(taxiY, taxiX) #택시 위치 ~ 도착지까지 다시 계산해서
    y, x = dic[idx][2], dic[idx][3]#도착지의 위치
    #print(mazeCopy)
    if mazeCopy[y][x] == 0 and (taxiY!=y and taxiX!=x) : #못가는 경우
        return -1
    oil = oil - mazeCopy[y][x] #손님 도착지에 내려뒀을 때 오일
    taxiY, taxiX = y, x #택시 위치는 도착지에 가있고
    #print("택시가 도착지에 손님을 내려줬고 현재 택시의 위치", taxiY, taxiX)
    #print(mazeCopy)

    if oil < 0: #승객을 목적지로 이동시킨 동시에 연료 바닥 = 실패 x
        return -1
    else:
        #print("도착해서 충전해줌", (mazeCopy[y][x]*2))
        oil = oil + (mazeCopy[y][x]*2)
    #print("calOil 함수 실행", oil)
    return oil
    


for x in range(m):
    #print(x, "번째 실행")
    oil = calOil(oil)
    #print(oil)
    if oil == -1:
        break
print(oil)