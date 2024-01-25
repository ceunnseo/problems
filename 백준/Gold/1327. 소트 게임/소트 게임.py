import copy
import time
from collections import deque
n, k = map(int, input().split())
arr = list(map(int, input().split()))
ans = 1e5
#visited = set([arr])
#오름차순인지 확인하는 배열
def isSort(array): #리스트와 길이
    global n
    for i in range(n-1):
        if array[i] <= array[i+1]:
            continue
        else:
            return False
    return True

#뒤집는 함수
def reverseFunc(arr, startIdx):
    global k
    a = arr[:]
    left = startIdx
    right = left+k-1
    while left < right:
        a[left], a[right] = a[right], a[left]
        left += 1
        right -= 1
    return a

que = deque([]) #array, cnt, visited)
que.append((arr, 0, set([tuple(arr)])))
while que:
    array, cnt, visited = que.popleft()
    #print(array, cnt, visited)
    #time.sleep(5)
    if isSort(array):
        ans =  min(ans, cnt)
        break
    for i in range(n-k+1):
        a = reverseFunc(array, i)
        if tuple(a) not in visited:
            visited.add(tuple(a))
            que.append((a, cnt+1, visited))
if ans == 1e5:
    print(-1)
else:
    print(ans)
    