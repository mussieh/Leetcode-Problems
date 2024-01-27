class Solution:
    def longestPalindrome(self, s: str) -> str:
        start = 0
        end = 0
        for i in range(len(s)):
          for j in range(len(s) - 1, -1, -1):
            if (end - start + 1) > (j - i + 1): break
            if (j - i + 1) > (end - start + 1) and self.is_palindrome(i, j, s):
              start = i
              end = j
        return s[start: end + 1]
          
        
    def is_palindrome(self, i, j, s):
      if i > j:
        return True
      if s[i] != s[j]:
        return False
      return self.is_palindrome(i + 1, j - 1, s)
      


sol = Solution()
print(sol.longestPalindrome("babad"))