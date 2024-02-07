class Solution:
    def evalRPN(self, tokens: list[str]) -> int:
        stack = []
        op1 = 0
        op2 = 0
        for token in tokens:
            print(stack)
            if token == "+" or token == "-" or token == "*" or token == "/":
                op2 = stack.pop()
                op1 = stack.pop()
                if token == "+":
                    stack.append(op1 + op2)
                elif token == "-":
                    stack.append(op1 - op2)
                elif token == "*":
                    stack.append(op1 * op2)
                else:
                    stack.append(int(op1 / op2))
            else:
                stack.append(int(token))
        return stack.pop()


sol = Solution()
print(sol.evalRPN(["4", "-2", "/", "2", "-3", "-", "-"]))
