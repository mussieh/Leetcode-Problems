class Solution:
    def generate(self, numRows: int) -> list[list[int]]:
      dp = [[1]]
      for i in range(1, numRows):
        dp.append(self.sum_prev(dp[i - 1]))
      return dp
        
    def sum_prev(self, arr):
      result = [1]
      l = 0
      while l < len(arr):
        if l + 1 < len(arr):
          result.append(arr[l] + arr[l + 1])
        else:
          result.append(arr[l])
        l += 1
      return result


sol = Solution()

print(sol.generate(1))


