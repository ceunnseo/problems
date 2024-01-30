from collections import deque

def rotation(idx, direct):
    que = deque([]) 
    que.append((idx, direct)) #시작점을 넣고
    visited = [True] + [False for _ in range(SIZE)]
    while que:
        g, direct = que.popleft()
        visited[g] = True
        right, left = gear[g][2], gear[g][6]
        #현재 gear 돌리고
        if direct == 1: #시계방향이라면
            gear[g] = gear[g][-1] + gear[g][0:-1]
        else: #반시계방향이라면
            gear[g] = gear[g][1:] + gear[g][0]
        # 시작점으로부터 오른쪽 기어들 먼저 비교
        if g+1 <= SIZE and not visited[g+1]:
           # print(gear[g][2], gear[g+1][6])
            if right != gear[g+1][6]:
                que.append((g+1, direct*(-1))) #회전 가능한 기어 넣어주고
                visited[g+1] = True
        # 왼쪽 기어들 비교하기
        if g-1 >= 1:
            #print(gear[g][6], gear[g-1][2])
            if left != gear[g-1][2] and not visited[g-1]:
                que.append((g-1, direct*(-1))) #회전 가능한 기어 넣어주고
                visited[g-1] = True
        
def score():
    global tot
    for i in range(1, SIZE+1):
        if gear[i][0] == '1':
            tot += 2**(i-1)




SIZE = 4
gear = [0] + [input() for _ in range(SIZE)]
que = deque([])
tot = 0
k = int(input())

for _ in range(k):
    idx, direct = map(int, input().split())
    rotation(idx, direct)
    #print(gear)

    



   
score()
print(tot)