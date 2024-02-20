n = int(input())
dp = [0] * 1001
a = list(map(int, input().split()))
largest = 0
for x in a:
    nxt = 0
    for d in range(0, x):
        if dp[d] > 0:
            nxt = max(nxt, dp[d])
    dp[x] = nxt + 1
    largest = max(largest, dp[x])
print(largest)
