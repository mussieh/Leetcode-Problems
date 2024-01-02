class Solution:
    def findMatrix(self, nums: list[int]) -> list[list[int]]:
      result = []
      temp = []
      while nums:
        temp = list(set(nums))
        result.append(temp)
        for x in temp:
          nums.remove(x)
      return result
        


sol = Solution()
print(sol.findMatrix([1, 1, 1, 2, 2, 2, 3, 3, 3]))