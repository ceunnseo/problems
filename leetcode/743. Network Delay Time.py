from heapq import heappush, heappop, heapify
class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        INF = 1e4
        dist = [INF] * (n+1)
        graph = [ [INF]*(n+1) for _ in range(n+1)]
        #1. 그래프 연결하기
        for time in times:
            n1, n2, t = time[0], time[1], time[2]
            graph[n1][n2] = t
        for i in range(1, n+1):
            graph[i][i] = 0
        #2. 다익스트라
        ## 시작점 초기화
        q = []
        heappush(q, (0, k)) # time, stratnode
        dist[k] = 0
        while q:
            t, node = heappop(q)
            if dist[node] < t : #최소 거리가 이미 결정된 노드인 경우 = 방문했다 = 무시
                continue
            for i in range(1, n+1):
                if t + graph[node][i] < dist[i]: #node를 거쳐 i노드까지 가는 거리가 더 짧은 경우
                    dist[i] = t + graph[node][i]
                    heappush(q, (dist[i], i))
        #3. 최대값 찾기
        res = 0
        for i in range(1, n+1):
            if dist[i] == INF: #도달할 수 없는 경우
                return -1
            else:
                res = max(res, dist[i])
        return res
