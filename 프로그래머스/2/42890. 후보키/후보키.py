from itertools import combinations
def solution(relation):
    rst = []
    for i in range(1, len(relation[0])+1):
        for j in combinations(range(len(relation[0])), i):
            rst.append(j)
    cnt = 0
    ans = []
    for i in rst:
        a = set((tuple(relation[x][y] for y in i) for x in range(len(relation))))
        flag = False
        if len(a) == len(relation): #유일성을 만족하는 경우
            for k in ans:
                if set(k).issubset(set(i)):
                    flag = True
                    break
            if not flag:
                ans.append(i)
                cnt += 1
    return cnt
            