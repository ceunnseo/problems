from collections import deque
from itertools import combinations
import copy
n, m = map(int, input().split()) #세로 n 가로 m
graph = [] #입력받는 그래프
node = [] #벽이 될 수 있는 후보들 (combinations)
virus = deque([]) #바이러스 위치를 담을 큐 (bfs)
cnt = 0 #영역 개수
area = 0 #최대 크기의 안전영역
for i in range(n):
    g = list(map(int, input().split()))
    for j in range(m):
        if g[j] == 0: #빈칸이면(안전영역)
            node.append([i, j]) #벽을 세울 후보이다
            cnt += 1 #안전영역 개수 카운팅
        elif g[j] == 2: #바이러스라면
            virus.append([i, j]) #바이러스 담을 큐에 바이러스 위치를 push
    graph.append(g)

# 바이러스 퍼지는 것을 구현하는 bfs 함수
def bfs(virus, cnt, gra): #v : 바이러스가 담긴 큐, cnt : 안전 영역 개수
    v = deque(virus)
    while v:
        y, x = v.popleft()
        for (ny, nx) in (y-1, x), (y+1, x), (y, x-1), (y, x+1): #상하좌우
            if ny < 0 or ny >= n or nx < 0 or nx >= m: #범위 벗어난 경우
                continue
            if gra[ny][nx] == 0: #바이러스가 퍼질 수 있다면 경우
                gra[ny][nx] = 2 #바이러스 퍼뜨리고
                cnt -= 1 #안전영역 1 감소
                v.append([ny, nx]) #큐에 전염된 바이러스 위치 push
    return cnt #탐색 끝났을 때의 안전영역을 리턴


#빈칸 위치에서 벽을 세울 3개 조합 만들기
for k in combinations(node, 3): #k : 튜플형태
    #g = copy.deepcopy(graph)  # 2차원 그래프 원본 복사
    g = [a[:] for a in graph] # 2차원 그래프 원본 복사
    #벽 세 개 만들기
    g[k[0][0]][k[0][1]] = 1
    g[k[1][0]][k[1][1]] = 1
    g[k[2][0]][k[2][1]] = 1
    # 안전 영역에 세 개의 벽을 세우고 (0 -> 1 값 변경)

    z = bfs(virus, cnt-3, g) #bfs를 돌려 안전 영역 개수 리턴값을 z에 저장하고
    # cnt - 3 : 0개수 - 벽의 개수 = 벽 세 개 세웠을 때의 안전영역 개수

    if area < z: #최고기록을 갱신했다면
        area = z #최고기록 변경

    #초기화
    g[k[0][0]][k[0][1]] = 0
    g[k[1][0]][k[1][1]] = 0
    g[k[2][0]][k[2][1]] = 0
print(area)