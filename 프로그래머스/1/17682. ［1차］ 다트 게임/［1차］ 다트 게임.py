# 12:06~
def solution(dartResult):
    stack = []
    i = 0
    while i < len(dartResult):
        if dartResult[i].isdigit():
            if dartResult[i+1].isdigit(): #10
                stack.append(10)
                #print("10을 넣음", stack)
                i += 1
            else:
                stack.append(int(dartResult[i]))
                #print("수 넣음", stack)
        elif dartResult[i].isalpha():
            if dartResult[i] == 'S':
                stack[-1] = stack[-1]**1
            elif dartResult[i] == 'D':
                stack[-1] = stack[-1]**2
            elif dartResult[i] == 'T':
                stack[-1] = stack[-1]**3
        else:
            if dartResult[i] == "*":
                if len(stack) == 1:
                    stack[-1] *= 2
                else:
                    stack[-1] *= 2
                    stack[-2] *= 2
            elif dartResult[i] == "#":
                stack[-1] *= -1
        i += 1
    #print(stack)
    return sum(stack)