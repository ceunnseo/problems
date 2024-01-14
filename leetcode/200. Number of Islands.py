from collections import deque
from typing import List
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        n = len(grid) #grid의 행 개수
        m = len(grid[0]) #grid의 열 개수
        cnt = 0 #섬의 개수
        # 상하좌우
        dy = [-1, 1, 0, 0]
        dx = [0, 0, -1, 1]
        queue = deque([]) #섬의 행, 열을 저장할 큐 생성

        for i in range(n):
            for j in range(m):
                if grid[i][j] == "1": #방문을 안 했다면
                    queue.append([i, j]) #탐색할 위치 저장
                    while queue: #탐색 시작 (bfs)
                        y, x = queue.pop()
                        grid[y][x] = "0" #방문처리 (1 = 섬, 0 = 물, 2 = 섬이고 방문함)
                        for k in range(4): #상하좌우 살펴보기
                            ny = y + dy[k]
                            nx = x + dx[k]
                            if ny < 0 or ny >= n or nx < 0 or nx >= m: #범위에 벗어난 경우 pass
                                continue
                            if grid[ny][nx] == "1": #섬이라면
                                queue.append([ny,nx]) #탐색해야하므로 큐에 삽입
                    cnt += 1 #탐색 마치면 섬이 끝난 것이므로 cnt 1 증가
        return cnt