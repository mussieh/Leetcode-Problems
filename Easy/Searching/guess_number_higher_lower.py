# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

import math

class Solution:
    def guessNumber(self, n: int) -> int:
      l = 1
      r = n
      while l < r:
        m = math.floor((l + r)/ 2)
        guessed = guess(m)
        if guessed == 0:
          return m
        elif guessed == -1:
          r = m - 1
        else:
          l = m + 1
      


sol = Solution()
print(sol.guessNumber(10))