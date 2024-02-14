def dateformat(terms, dic):
    year, month, d = terms.split('.')
    date, typeof = d.split()
    year = int(year)
    month = int(month)
    date = int(date)
    month += dic[typeof]
    date -= 1
    if date == 0:
        date = 28
        month -= 1
    if month > 12:
        year = year + (month // 12)
        if (month % 12 == 0):
            year -= 1
        month = month % 12
        if month == 0:
            month = 12
    return str(year)+'.'+str(month).zfill(2)+'.'+str(date).zfill(2)
    

def solution(today, terms, privacies):
    dic ={}
    res = []
    for t in terms:
        x, y = t.split()
        dic[x] = int(y)

    for idx, p in enumerate(privacies):
        deadline = dateformat(p, dic)
        if deadline < today:
            #print("파기", deadline, today)
            res.append(idx+1)
        #else:
            #print("보관", deadline, today)
    return res