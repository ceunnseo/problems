from heapq import heappop, heappush
class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        res, INF = 0, 1e9
        graph = [[INF for _ in range(n+1)] for _ in range(n+1)]
        visited = [False for _ in range(n+1)]
        distance = [INF for _ in range(n+1)]

        #1. 그래프 초기화
        for i in range(len(times)):
            n1, n2, dist = times[i][0], times[i][1], times[i][2]
            graph[n1][n2] = dist
        for i in range(n):
            graph[i][i] = 0

        #2. 힙에 거리와 시작노드 번호 넣기
        heap = [(0, k)]
        visited[k] = True
        distance[k] = 0
        heapify(heap)

        while heap:
            dist, node = heappop(heap)
            visited[node] = True
            for i in range(1,n+1):
                if not visited[i]:
                    if distance[i] > dist + graph[node][i]:
                        distance[i] = dist+graph[node][i]
                        heappush(heap, (distance[i], i))
        print(distance)
        for i in range(1, n+1): #최대값 구하기
            if distance[i] > res:
                res = distance[i] 
        if res != INF: #결과 반환
            return res
        return -1
