class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        l = 0
        r = 0
        seq_count = 0
        while l < len(s) and r < len(t):
          if s[l] == t[r]:
            seq_count += 1
            l += 1
            r += 1
          else:
            r += 1
        return seq_count == len(s)


sol = Solution()
print(sol.isSubsequence("axc", "ahbgdc"))

# axc
#  l

# ahbgdc
#      r