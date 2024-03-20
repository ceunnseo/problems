from collections import deque
class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        que = deque([0])
        visited = {0}
        n = len(rooms) - 1 #0번방 제외하고 탐색 안함
        stack = [0]
        while stack:
            key = stack.pop()
            for k in rooms[key]:
                if k not in visited:
                    visited.add(k)
                    stack.append(k)
                    n -= 1
        return False if n else True
'''
dfs를 이용한 풀이. 방문을 열며 열쇠를 꺼내고, 꺼낸 열쇠로 그 다음 방을 계속해서 탐색
bfs로 풀은 것보다 6ms 더 빠르다
'''
