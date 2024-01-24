from collections import deque
class Solution:
    def updateBoard(self, board: List[List[str]], click: List[int]) -> List[List[str]]:
        # 0. 준비 : 인접한 곳에 폭탄 개수를 카운트할 배열 생성
        m = len(board) #세로 길이 
        n = len(board[0]) #가로 길이
        countMatrix = [[0 for _ in range(n)] for _ in range(m)]
        # 1. 폭탄찾기 -> countMatrix 갱신
        for i in range(m):
            for j in range(n):
                if board[i][j] == 'M': #상, 하, 좌, 우, 왼위, 왼아래, 오른위, 오른아래
                    for (dx, dy) in (-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (1, -1), (-1, 1), (1, 1):
                        nx = i + dx
                        ny = j + dy
                        if 0 <= nx < m and 0 <= ny < n: #범위 안에 있으면
                            countMatrix[nx][ny] += 1 #개수 카운팅
        #print(countMatrix)
        # 클릭해서 드러내기 : bfs
        que = deque([])
        que.append(click) #que = [[1, 2]]
        while que:
            x, y = que.popleft()
            if board[x][y] == 'M': #M을 클릭한 경우
                board[x][y] = 'X' #드러난 폭탄으로 바꾸고
                break #종료
            else: #E를 클릭한 경우 -> QUE에 넣을지 터트리고 끝낼지 봐야함
                if countMatrix[x][y] > 0: #인전한 곳에 폭탄이 있는 칸이었다면
                    board[x][y] = str(countMatrix[x][y]) #터지고 종료
                else: #아니라면 : 주변 더 탐색 가능하다면
                    board[x][y] = 'B'
                    for (dx, dy) in (-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (1, -1), (-1, 1), (1, 1):
                        nx = x + dx
                        ny = y + dy
                        if 0<=nx<m and 0<=ny<n:
                            if board[nx][ny] == 'E': #터트릴 칸도 드러나지 않은 빈칸이라면
                                if countMatrix[nx][ny] == 0: #인접하지 않은 빈칸이면
                                    board[nx][ny] = 'B'
                                    que.append([nx, ny]) #탐색 더 해봐야하고
                                else: #인접한 빈칸이면
                                    board[nx][ny] = str(countMatrix[nx][ny])
        #print(countMatrix)
        return board
