class Solution:
    def partitionString(self, s: str) -> int:
        strs = set()
        min_num = 1
        for i in range(len(s)):
            if s[i] in strs:
              strs.clear()
              min_num += 1
            strs.add(s[i])
        return min_num


sol = Solution()
print(sol.partitionString("s"))