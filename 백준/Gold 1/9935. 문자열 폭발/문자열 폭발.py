sentence = input()
word = input()

stack = []
n = len(word)
cnt = 0

for w in sentence:
    if cnt >= n-1 and w == word[-1]:
        flag = False
        for i in range(n-1): #i = 0, 1, 2 ...
            if stack[-i-1] != word[-i-2]:
                flag = True
                break
        if not flag:
            for i in range(n-1):
                stack.pop()
            cnt = cnt-(n-1)
        else:
            stack.append(w)
            
    else: #아닐 때
        stack.append(w)
        cnt += 1

if not stack:
    print("FRULA")
else:
    print(''.join(stack))
   