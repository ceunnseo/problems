import sys 
from heapq import heapify, heappush, heappop
input = sys.stdin.readline
n = int(input()) #도시 개수
m = int(input()) #버스 개수
INF = 1e9 #최대 비용
graph = [[INF for _ in range(n+1)] for _ in range(n+1)]
visited = [False for _ in range(n+1)]
dist = [0]+ [INF for _ in range(n)]

#1. 그래프 초기화
for i in range(m):
    start, end, cost = map(int, input().split())
    if cost < graph[start][end]:
        graph[start][end] = cost
for i in range(1, n):
    graph[i][i] = 0
start, end = map(int, input().split())

#2. cost, 시작점
heap = [(0, start)]
visited[start] = True
heapify(heap)
dist[start] = 0

while heap:
    cost, city = heappop(heap)
    #print("heappop", city, cost)
    visited[city] = True
    if city == end: #도착점인 경우
        break
    for i in range(1, n+1):
        if not visited[i]: #방문한 적 없고
            if cost+graph[city][i] < dist[i]:
                dist[i] = cost+graph[city][i]
                heappush(heap, (dist[i], i))
    #print(dist)
print(dist[end])