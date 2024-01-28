from itertools import permutations
import sys
input = sys.stdin.readline

n = int(input())
numbers = list(map(int, input().split()))
tools = list(map(int, input().split()))
c = []
visited = set([])
for i in range(4):
    if i == 0 and tools[i] > 0:
        for _ in range(tools[i]):
            c.append('+')
    elif i == 1 and tools[i] > 0:
        for _ in range(tools[i]):
            c.append('-')
    elif i == 2 and tools[i] > 0:
        for _ in range(tools[i]):
            c.append('*')
    elif i == 3 and tools[i] > 0:
        for _ in range(tools[i]):
            c.append('/')
maximum = -1000000001
minimum = 1000000001

for i in permutations(c, n-1):
    res = numbers[0]
    if i in visited:
        continue
    visited.add(i)
    for j in range(n-1):
        if i[j] == "+":
            res = res + numbers[j+1]
        elif i[j] == '-':
            res = res - numbers[j+1]
        elif i[j] == '*':
            res = res * numbers[j+1]
        elif i[j] == '/':
            if res < 0:
                res = -1*(((-1)*res) // numbers[j+1])
            else:
                res = res // numbers[j+1]
    if res > maximum:
        maximum = res
    if res < minimum:
        minimum = res

print(maximum)
print(minimum)