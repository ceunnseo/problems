def solution(s):
    minimum, n = len(s), len(s)
    for i in range(1, (n//2)+1):
        start, res, cnt = 0, 0, 1 #압축시작인덱스, 압축결과길이, 동일문자열횟수 
        while start < n:
            if s[start:start+i] == s[start+i:start+i+i]: #압축 가능 문자열
                cnt += 1
            else: #압출불가문자열
                if cnt > 1:
                    res += i + len(str(cnt))
                else:
                    res += len(s[start:start+i])
                cnt = 1
            start = start + i
        minimum = min(res, minimum)
    return minimum