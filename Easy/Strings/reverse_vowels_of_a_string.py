class Solution:
    def reverseVowels(self, s: str) -> str:
      vowels = {"a", "e", "i", "o", "u", "A", "E", "I", "O", "U"}
      vowels_list = [x for x in s if x in vowels] 
      s_list = list(s)
      for i in range(len(s_list)):
        if s[i] in vowels:
          s_list[i] = vowels_list.pop()
      return "".join(s_list)
        
      
sol = Solution()

print(sol.reverseVowels("LEETCODE"))

# H C
# hello
# H E L L O
# l       r
#  
# 
# 
# eeoe
# eoee
# leotcede