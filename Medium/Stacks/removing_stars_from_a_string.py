class Solution:
    def removeStars(self, s: str) -> str:
        s_list = []
        for letter in s:
          s_list.pop() if letter == "*" else s_list.append(letter)
        return "".join(s_list)
          

sol = Solution()
print(sol.removeStars("erase*****"))