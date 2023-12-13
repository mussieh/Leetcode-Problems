class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
      if len(word1) != len(word2):
        return False
      set1 = set(word1)
      set2 = set(word2)
      word1_count = [word1.count(letter) for letter in set1]
      word2_count = [word2.count(letter) for letter in set2]
      word1_count.sort()
      word2_count.sort()
      return set1 == set2 and word1_count == word2_count
      

sol = Solution()
print(sol.closeStrings("aabbbc", "abbccc"))

# cabbba c: 1 a : 2 b:3
# abbccc a: 1 b:2 c:3

# cabbba
# c : 1 a : 2 b: 3

# abbccc

# a: 1 b: 2 c: 3