from collections import deque
def can_move(cur1, cur2, new_board):
    y, x = 0, 1
    cand = [] #가능한 좌표들을 모두 넣어두는 리스트
    #상하좌우
    DELTAS = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    for dy, dx in DELTAS:
        next1 = (cur1[y]+dy, cur1[x]+dx)
        next2 = (cur2[y]+dy, cur2[x]+dx) #좌표를 바꾸고
        # 상하좌우로 이동한 위치가 모두 0 이라면 갈 수 있음
        if new_board[next1[y]][next1[x]] == 0 and new_board[next2[y]][next2[x]] == 0:
            cand.append((next1, next2)) #그러면 다음 좌표를 append
    #가로 방향으로 누워있을 때 회전하는 경우
    if cur1[y] == cur2[y]:
        UP, DOWN = -1, 1
        for d in [UP, DOWN]:
            if new_board[cur1[y]+d][cur1[x]] == 0 and new_board[cur2[y]+d][cur2[x]] == 0: #위나 아래 방향으로 빈칸인지 보고
                cand.append( (cur1, (cur1[y]+d, cur1[x])) ) #cur1을 축으로 회전했을 때의 좌표
                cand.append( (cur2, (cur2[y]+d, cur2[x])) ) #cur2를 축으로 회전했을 때의 좌표

    #세로 방향으로 서 있을 때 회전하는 경우
    else:
        LEFT, RIGHT = -1, 1
        for d in [LEFT, RIGHT]:
            if new_board[cur1[y]][cur1[x]+d] == 0 and new_board[cur2[y]][cur2[x]+d] == 0: #오른쪽이나 왼쪽 방향으로 빈칸인지 보고
                cand.append( ( (cur1[y], cur1[x]+d), cur1) ) #cur1을 축으로 회전했을 때의 좌표
                cand.append( ( (cur2[y], cur2[x]+d), cur2) ) #cur2를 축으로 회전했을 때 좌표
    return cand  


def solution(board):
    #board 외벽으로 둘러싸기
    N = len(board)
    new_board = [[1] * (N+2) for _ in range(N+2)]
    for i in range(N):
        for j in range(N):
            new_board[i+1][j+1] = board[i][j]

    #현재 좌표 cur1 = (1, 1), cur2 = (1, 2)
    que = deque([((1,1), (1,2), 0)])
    #탐색한 좌표들을 담는 visited
    visited = set([((1, 1), (1,2))])

    while que:
        cur1, cur2, count = que.popleft() #좌표1, 좌표2, 해당 위치까지 이동하는 횟수
        if cur1 == (N, N) or cur2 == (N, N): #도착한 경우
            #print(count)
            return count
        for nxt in can_move(cur1, cur2, new_board):
            nxt1, nxt2 = nxt[0], nxt[1]
            if (nxt1, nxt2) not in visited: #방문하지 않은 좌표인 경우
                que.append((nxt1, nxt2, count+1)) #큐에 넣고
                visited.add((nxt1, nxt2)) #방문 기록