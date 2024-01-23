from collections import deque
import math
def solution(n, m, x, y, r, c, k):
    global cand
    cand = "z"*k #후보 문자열
    direction = {} #상하좌우 방향
    direction['d'] = (1, 0)
    direction['l'] = (0, -1)
    direction['r'] = (0, 1)
    direction['u'] = (-1, 0)
    flag = False
    stack = [((x, y), "", 0)] #좌표, 이동경로, 횟수
    dist = abs(x-r) + abs(y-c)
    if dist%2 != k%2:
        return "impossible"
    while stack:
        cur, res, cnt = stack.pop()
        curX, curY = cur[0], cur[1]
        dist = abs(curX-r) + abs(curY-c) #시작 ~ 목적지 거리
        if dist > k:
            break
        #현재 ~ end까지 남은 이동 횟수 + 현재 움직인 횟수 > k -> 넘김
        if dist + cnt > k:
            continue
        if cnt == k: #다 간 경우
            if curX == r and curY == c: #도착한 경우
                flag = True
                cand = min(cand, res)
                break
            else: #다 움직였는데 도착 안함
                continue
        elif cnt > k:
            break
        else:
            for i in ('u', 'r', 'l', 'd'):
                X = curX + direction[i][0]
                Y = curY + direction[i][1]
                if X < 1 or X > n or Y < 1 or Y > m: #범위 초과
                    continue
                stack.append(((X, Y), res+i, cnt+1))
                #print(res+i, cnt+1)
    if flag:
        return cand
    return "impossible"
        
        
        
                
                
            