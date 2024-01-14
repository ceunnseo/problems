from typing import List
from collections import deque
from collections import deque
class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        n = len(grid)
        # 상 하 좌 우 왼
        dy = [-1, 1, 0, 0, -1, +1, -1, 1]
        dx = [0, 0, -1, 1, -1, -1, 1, 1]
        visited = [[0 for _ in range(n)] for _ in range(n)]
        if grid[0][0] == 1 or grid[n-1][n-1] == 1:
            return -1
        queue = deque([[0, 0, 1]]) #시작노드 push
        grid[0][0] = 1 #시작노드 방문처리
        while queue:
            y, x, cnt = queue.popleft()
            if y == n-1 and x == n-1: #도착한 경우
                return cnt
            for k in range(8): #8방향 탐색 시작
                ny = y + dy[k]
                nx = x + dx[k]
                if ny < 0 or ny >= n or nx < 0 or nx >= n:
                    continue
                if grid[ny][nx] == 0: #갈 수 있다면
                    queue.append([ny, nx, cnt + 1])
                    grid[ny][nx] = 1 #방문처리
        return -1






grid = [[0,1],[1,0]]

# 테스트 실행
solution = Solution()
result = solution.shortestPathBinaryMatrix(grid)
print(result) #4
