def solution(info, edges):
    visited = [0] * len(info)
    answer = []
    def dfs(sheep, wolf):
        if sheep > wolf: #양의 수를 계속 기록해나간다.
            answer.append(sheep)
        else: #양 <= 늑대로 모든 양이 먹힌 경우 탐색 종료
            return
        for p, c in edges:
            if visited[p] and not visited[c]: #부모 노드는 방문, 자식노드는 아직 방문 안했다면
                visited[c] = 1 #자식 노드 방문처리
                if info[c] == 0: #자식노드가 양일 때
                    dfs(sheep+1, wolf)
                else: #자식노드가 늑대일 때
                    dfs(sheep, wolf+1)
                visited[c] = 0
    visited[0] = 1
    dfs(1, 0)
    return max(answer)