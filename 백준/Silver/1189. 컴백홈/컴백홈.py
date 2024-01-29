r, c, k = map(int, input().split())
maze = [list(input()) for _ in range(r)]
cnt = 0
delta = [(-1, 0), (1, 0), (0, -1), (0, 1)]
def dfs(x, y , depth):
    global cnt
    if depth >= k and ((x, y) != (0, c-1)):
        return
    elif depth == k and ((x,y) == (0, c-1)):
        if maze[0][c-1] != 'T':
            cnt += 1
        return
    for dx, dy in delta:
        nx, ny = x + dx, y + dy
        if nx < 0 or nx >= r or ny < 0 or ny >= c:
            continue
        if maze[nx][ny] == '.': #갈 수 있으면
            maze[nx][ny] = 0
            dfs(nx, ny, depth+1)
            maze[nx][ny] = '.'
maze[r-1][0] = 0
dfs(r-1, 0, 1)
print(cnt)