def solution(rectangle, characterX, characterY, itemX, itemY):
    answer = 0
    maze = []
    check = []
    queue = []
    for i in range(102):
        maze.append([-1]*102)
        check.append([0]*102)
        
    for j in rectangle:
        x1, y1, x2 ,y2 = j
        x1 *= 2
        y1 *= 2
        x2 *= 2
        y2 *= 2
        for x in range(x1, x2+1):
            for y in range(y1, y2+1):
                if x1 < x < x2 and y1 < y < y2: 
                    maze[x][y] = 0 # 내부는 0
                elif maze[x][y]!= 0: #0이 아닌 경우에는
                    maze[x][y] = 1 #테두리는 1

    cx, cy, ix, iy = 2*characterX, 2*characterY, 2*itemX, 2*itemY
    
    queue.append( (cx, cy) ) #출발위치 저장
    check[cx][cy] = 1
    
    while len(queue)!=0:
        x, y = queue.pop(0) 
        
        #오른쪽
        if maze[x][y+1] == 1 and check[x][y+1] == 0:
            queue.append( (x, y+1) )
            check[x][y+1] = check[x][y] + 1
        #왼쪽
        if maze[x][y-1] == 1 and check[x][y-1] == 0:
            queue.append( (x, y-1) )
            check[x][y-1] = check[x][y] + 1
        #아래
        if maze[x+1][y] == 1 and check[x+1][y] == 0:
            queue.append( (x+1, y) )
            check[x+1][y] = check[x][y] + 1
        #위
        if maze[x-1][y] == 1 and check[x-1][y] == 0:
            queue.append( (x-1, y) )
            check[x-1][y] = check[x][y] + 1

    return check[ix][iy]//2