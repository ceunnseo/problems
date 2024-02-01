from heapq import heappush, heappop, heapify
import sys
input = sys.stdin.readline

n = int(input())
q = []
heapify(q)

for i in range(n):
    x = int(input())
    if x > 0: #자연수 넣기
        heappush(q, -x)
    else: #0인 경우
        if len(q) == 0:
            print(0)
        else:
            print(-heappop(q))
