class Solution:
    def isValid(self, s: str) -> bool:
        dic = { ")" : "(",
                "]" : "[",
                "}" : "{"}
        stack = [""]
        for word in s:
            if word not in dic: #열린 경우
                stack.append(word)
            else: #닫힌 괄호인 경우
                if stack[-1] == dic[word]: #닫힌 괄호인데 짝이 맞는 경우
                    stack.pop()
                else: #닫힌 괄호이지만 짝이 맞지 않는 경우
                    return False
        if stack[-1] == "":
            return True
        return False
