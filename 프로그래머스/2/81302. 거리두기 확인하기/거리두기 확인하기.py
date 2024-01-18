from collections import deque
SIZE = 5

def findPeople(lists): #응시자 위치를 리턴하는 함수
    n = 0
    dic = {}
    for i in range(SIZE):
        for j in range(SIZE):
            if lists[i][j] == 'P':
                dic[n] = [i, j, 0] #위치와 dist
                n = n + 1
    return dic


def bfs(dic, p):
    n = len(dic) #응시자의 수
    for k in range(n):
        visited = [[False for _ in range(SIZE)] for _ in range(SIZE)]
        que = deque([])
        que.append(dic[k])
        visited[dic[k][0]][dic[k][1]] = True
        while que:
            y, x, dist = que.popleft()
            if dist == 2:
                if p[y][x] == 'P': #응시자가 있다면
                    return False
                else: #아닌 경우
                    continue
            for (ny, nx) in (y-1,x), (y+1,x), (y,x-1),(y,x+1):
                if ny < 0 or ny >= SIZE or nx < 0 or nx >= SIZE:
                    continue
                if not visited[ny][nx]:
                    if p[ny][nx] == 'O': #빈공간이면 더 탐색
                        que.append([ny, nx, dist+1])
                        visited[ny][nx] = True
                    elif p[ny][nx] == 'X': #벽이라면
                        continue
                    else: #응시자라면
                        return False
    return True
                    
def solution(p):
    res = []
    for k in range(5):
        dic = findPeople(p[k])
        #print(bfs(dic, p[k]))
        if bfs(dic, p[k]):
            res.append(1)
        else:
            res.append(0)
    #print(res)
    return res
