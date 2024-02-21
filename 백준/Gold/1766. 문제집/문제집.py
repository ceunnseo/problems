'''
1번이 가장 쉽고 N번이 가장 어렵다.

먼저 푸는 것이 좋은 문제가 있으면 먼저 푼다.
가능한 쉬운 문제부터 푼다.

EX. 4번 -> 2번, 3번 -> 1번
3 1 4 2
'''
from heapq import heappush, heappop, heapify

n, m = map(int, input().split())
graph = [[] for _ in range(n+1)]
indegree = [0]*(n+1)
task = []

for i in range(m):
    a, b = map(int, input().split())
    indegree[b] += 1
    graph[a].append(b) #연결
q = []
heapify(q)
for i in range(1, n+1):
    if indegree[i] == 0:
        heappush(q, i)
while q:
    cur = heappop(q)
    task.append(cur)
    for i in graph[cur]:
        indegree[i] -= 1
        if indegree[i] == 0:
            heappush(q, i)
print(' '.join(list(map(str, task))))