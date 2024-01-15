from collections import deque
from itertools import combinations
import copy
n, m = map(int, input().split()) #세로 n 가로 m
graph = []
node = [] #벽이 될 수 있는 후보들
virus = deque([]) #바이러스
cnt = 0 #영역 개수
area = 0 #최대 크기의 안전영역
for i in range(n):
    g = list(map(int, input().split()))
    for j in range(m):
        if g[j] == 0: #빈칸
            node.append([i, j]) #후보 append
            cnt += 1
        elif g[j] == 2: #바이러스
            virus.append([i, j])
    graph.append(g)
gra = copy.deepcopy(graph) #원본 복사
v = copy.deepcopy(virus) #원본복사
def bfs(v, cnt, gra):
    while v:
        y, x = v.popleft()
        for (ny, nx) in (y-1, x), (y+1, x), (y, x-1), (y, x+1): #상하좌우
            if ny < 0 or ny >= n or nx < 0 or nx >= m:
                continue
            if gra[ny][nx] == 0: #바이러스가 퍼질 수 있다면 경우
                gra[ny][nx] = 2
                cnt -= 1
                v.append([ny, nx])
    return cnt


#print(node)
for k in combinations(node, 3): #k : 튜플형태
    #print("후보1:",k[0][0], k[0][1], "후보2",k[1][0], k[1][1], "후보3",k[2][0],k[2][1])
    #print("원본", graph)
    gra = copy.deepcopy(graph)
    v = copy.deepcopy(virus)
    #print("바뀌기 전", gra)
    gra[k[0][0]][k[0][1]] = 1 #빈칸 -> 벽
    gra[k[1][0]][k[1][1]] = 1 #빈칸 -> 벽
    gra[k[2][0]][k[2][1]] = 1  # 빈칸 -> 벽
    #print("graph : ", gra)
    #print("afer bfs : ")
    z = bfs(v, cnt-3, gra)
    if area < z:
        area = z
    #print(z)
    gra[k[0][0]][k[0][1]] = 0 #초기화
    gra[k[1][0]][k[1][1]] = 0 #초기화
    gra[k[2][0]][k[2][1]] = 0 #초기화
print(area)