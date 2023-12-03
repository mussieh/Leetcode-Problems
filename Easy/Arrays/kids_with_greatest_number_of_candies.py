class Solution:
    def kidsWithCandies(self, candies: list[int], extraCandies: int) -> list[bool]:
      candy_max = max(candies)
      result = []
      candy_sum = 0
      for i in range(len(candies)):
        candy_sum = candies[i] + extraCandies
        result.append(True) if candy_sum >= candy_max else result.append(False)
      return result
  
sol = Solution()

print(sol.kidsWithCandies([2,3], 3))