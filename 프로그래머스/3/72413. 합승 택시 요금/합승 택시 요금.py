from heapq import heappush, heappop
from collections import defaultdict
def solution(n, s, a, b, fares):
    graph = defaultdict(list)

    for i in range(len(fares)):
        n1, n2, d = fares[i][0], fares[i][1], fares[i][2]
        graph[n1].append((n2, d))
        graph[n2].append((n1, d))

    res =1e9
    for k in range(1, n+1):
        q = []
        heappush(q, (0, k)) #거리와 node 번호
        INF = 1e9
        dist = [0] + [INF for _ in range(n)]
        dist[k] = 0

        while q:
            d, node = heappop(q)
            for g in graph[node]:
                nxt, dst = g[0], g[1]
                if d + dst < dist[nxt]:
                    dist[nxt] = d + dst
                    heappush(q, (dist[nxt], nxt))
        ### k~출발점, k~a, k~b까지 최소 거리
        res = min(res, dist[s]+dist[a]+dist[b])
    print(res)
    return res