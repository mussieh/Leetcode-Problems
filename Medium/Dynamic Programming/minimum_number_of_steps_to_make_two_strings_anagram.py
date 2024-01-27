from collections import Counter

class Solution:
    def minSteps(self, s: str, t: str) -> int:
        s_count = Counter(s)
        t_count = Counter(t)
        t_count.subtract(s_count)
        total = 0
        for letter in t_count:
          if t_count.get(letter) > 0:
            total += t_count.get(letter)
        return total



sol = Solution()
print(sol.minSteps("anagram", "mangaar"))