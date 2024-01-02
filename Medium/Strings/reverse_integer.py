class Solution:
    def reverse(self, x: int) -> int:
        x_str = str(x)
        result = ["-" if x_str[0] == "-" else ""]
        for i in range(len(x_str) - 1, -1, -1):
          if x_str[i] != "-":
            result.append(x_str[i])
        print(2**64)
        return int("".join(result))


sol = Solution()
print(sol.reverse(2))