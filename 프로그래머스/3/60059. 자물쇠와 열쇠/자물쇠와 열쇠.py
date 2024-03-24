def solution(key, lock):
    def rotate(size, array, k):
        arr = [[0]*size for _ in range(size)]
        if k % 4 == 0: #90도 회전
            for i in range(size):
                for j in range(size):
                    arr[j][size-i-1] = array[i][j]
            return arr
        elif k%4 == 1: #180도 회전
            for i in range(size):
                for j in range(size):
                    arr[size-i-1][size-j-1] = array[i][j]
            return arr
        elif k%4 == 2:#270도 회전
            for i in range(size):
                for j in range(size):
                    arr[size-j-1][i] = array[i][j]
            return arr
        elif k%4 == 3: #360도 회전
            return array
    def check(newKey, startX, startY):
        #1. 열쇠 넣기
        for i in range(m):
            for j in range(m):
                max_lock[startX+i][startY+j] += newKey[i][j]
        #2. 확인하기
        flag = True #True면 열쇠가 맞춰진거, False면 열쇠 못 맞춘거
        for i in range(n):
            for j in range(n):
                if max_lock[m+i][m+j] != 1: #0이나 2가 있으면 x
                    flag = False
                    break
        #3. 열쇠 빼기 
        for i in range(m):
            for j in range(m):
                max_lock[startX+i][startY+j] -= newKey[i][j]
        return flag
                    
        

    m = len(key)
    n = len(lock)
    max_lock = [[0]*(n+2*m) for _ in range(n+2*m)]
    for i in range(n):
        for j in range(n):
            max_lock[m+i][m+j] = lock[i][j]
    
    for k in range(4):
        newKey = rotate(m, key, k) #회전한 키
        for i in range(1, m+n):
            for j in range(1,m+n):
                if check(newKey, i, j):
                    return True
    return False