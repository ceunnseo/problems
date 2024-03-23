def solution(key, lock):
    m = len(key)
    n = len(lock)
    
    max_lock = [[0] * (n+2*m) for _ in range(n+2*m)]
    for i in range(n):
        for j in range(n):
            max_lock[m+i][m+j] = lock[i][j]
    
    def rotate(arr, k):
        N = len(arr)
        ret = [[0] * N for _ in range(N)]
        if k%4 == 0:
            return arr
        elif k%4 == 1:
            for r in range(N):
                for c in range(N):
                    ret[c][N-1-r] = arr[r][c]
            return ret
        elif k%4 == 2:
            for r in range(N):
                for c in range(N):
                    ret[N-1-r][N-1-c] = arr[r][c]
            return ret
        elif k%4 == 3:
            for r in range(N):
                for c in range(N):
                    ret[N-1-c][r] = arr[r][c]
            return ret
    def compare(max_lock, key, x, y, m, n):
        answer = True
        for i in range(m):
            for j in range(m):
                max_lock[x+i][y+j] += key[i][j]
        for i in range(n):
            if not answer:
                break
            for j in range(n):
                if max_lock[i+m][j+m] != 1:
                    answer = False
                    break
        for i in range(m):
            for j in range(m):
                max_lock[x+i][y+j] -= key[i][j]
        return answer
    
    for k in range(4):
        rotate_key = rotate(key, k)
        for i in range(1, n+m):
            for j in range(1, n+m):
                if compare(max_lock, rotate_key, i, j, m, n):
                    return True
    return False