class Solution:
    def maxVowels(self, s: str, k: int) -> int:
      vowels = {"a", "e", "i", "o", "u"}
      l = 0
      r = k - 1
      vowel_count = 0
      for i in range(l, k):
        if s[i] in vowels:
          vowel_count += 1
      max_vowels = vowel_count
      while r < len(s):
        if s[l] in vowels:
          vowel_count -= 1
        l += 1
        r += 1
        if r < len(s) and s[r] in vowels:
          vowel_count += 1
        max_vowels = max(max_vowels, vowel_count)
      return max_vowels
        
    
    
sol = Solution()

sol.maxVowels("abi", 3)

# abciiidef
#       l r
# vowel_count = 1