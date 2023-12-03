import math

class Solution:
    def isHappy(self, n: int) -> bool:
      def happy_helper(num):
        if num == 1: return True
        num_str = str(num)
        next_number = 0
        for digit in num_str:
          next_number += int(digit) ** 2
        if next_number == 4: return False
        return happy_helper(next_number)
      return happy_helper(n)



sol = Solution()
print(sol.isHappy(3))