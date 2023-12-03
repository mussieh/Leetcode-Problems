class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
      if len(str1) < len(str2):
        return self.gcd_str(str1, str2)
      else:
        return self.gcd_str(str2, str1)
    
    def gcd_str(self, str1, str2):
      temp = ""
      for i in range(len(str1) - 1, -1, -1):
        temp = str1[:i + 1]
        if len(temp) * str1.count(temp) == len(str1) and len(temp) * str2.count(temp) == len(str2):
          return temp
      return ""
        

sol = Solution()

print(sol.gcdOfStrings("abbbabb", "abbbabbbabbb"))
