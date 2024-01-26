from itertools import combinations
n = int(input())
score = []
team = [False for _ in range(n)]
for i in range(n):
    a = list(map(int, input().split()))
    score.append(a)
minimum = 100

for teams in combinations(range(n), n//2):
    start = 0
    link = 0
    linkTeam = []
    for i in teams:
        team[i] = True
    #print("start", team)
    for t in combinations(teams, 2):
        start += score[t[0]][t[1]]
        start += score[t[1]][t[0]]
    for k in range(len(team)):
        if not team[k]:
            linkTeam.append(k)
    for t in combinations(linkTeam, 2):
        #print("link",t)
        link += score[t[0]][t[1]]
        link += score[t[1]][t[0]]
    #print(start, link)
    minimum = min(minimum, abs(start-link))
    for i in teams:
        team[i] = False
print(minimum)