class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        l = 0
        r = 0
        merged_string = ""
        while l < len(word1) or r < len(word2):
          if l < len(word1):
            merged_string += word1[l]
          if r < len(word2):
            merged_string += word2[r]    
          l += 1
          r += 1
        return merged_string  
      

sol = Solution()

print(sol.mergeAlternately("a", "b"))