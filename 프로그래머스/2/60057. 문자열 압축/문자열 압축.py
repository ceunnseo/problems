def solution(s):
    minimum, n = len(s), len(s)
    cnt = 1
    res = 0
    for i in range(1, (n//2)+1):
        start, res, cnt = 0, 0, 1
        while start < n:
            if s[start:start+i] == s[start+i:start+i+i]:
                cnt += 1
            else:
                if cnt > 1:
                    res += i + len(str(cnt))
                else:
                    res += len(s[start:start+i])
                cnt = 1
            start = start + i
        minimum = min(res, minimum)
    return minimum