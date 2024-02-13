from collections import defaultdict
def solution(id_list, report, k):
    dic = defaultdict(set)
    blackList = {}
    res = set() #신고 받은 사람
    answer = []
    for people in id_list:
        blackList[people] = 0 #신고받은 횟수
        answer.append(0) #결과리스트
        
    for i in report: #x-> y
        x, y = i.split()
        if y not in dic[x]: #x가 y를 딱 한 번 신고한 경우만
            dic[x].add(y) #딕셔너리에 추가
            blackList[y] += 1
            if blackList[y] >= k:
                res.add(y) #신고당한 사람 넣고
    
    #res를 신고한 사람들 카운트
    for idx in range(len(id_list)):
        for k in res:
            if k in dic[id_list[idx]]: #user가 k를 신고했다면 알린다.
                answer[idx] +=1
    return answer
    
                
    
    