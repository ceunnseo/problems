def solution(new_id):
    res = ''
    special = set(('-', '_', '.'))
    for word in new_id: #1~3단계 진행
        if word.isdigit(): #숫자
            res += word
        elif word.isalpha(): #영어
            res += word.lower() #소문자로
        elif word in special: #지정된 특수기호
            if res and (res[-1] == word) and (res[-1] == '.'):
                continue
            res += word
    #4단계
    if res and res[0] == '.':
        res = res[1:]
    elif res and res[-1] == '.':
        res = res[:-1]
    #5단계
    if not res:
        res += 'a'
    #6단계
    if len(res) >= 16:
        res = res[:15]
    if res[-1] == '.':
        res = res[:-1]
    #7단계
    while len(res) < 3:
        res += res[-1]
            
            
    return res