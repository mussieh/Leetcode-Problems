import sys
class Solution:
    def findMaxAverage(self, nums: list[int], k: int) -> float:
      l = 0
      r = k - 1
      max_avg = -sys.maxsize
      window_sum = sum(nums[l:r + 1])
      while r < len(nums):
        max_avg = max(max_avg, window_sum / k)
        window_sum -= nums[l]
        if r + 1 < len(nums): window_sum += nums[r + 1]
        l += 1
        r += 1
      return max_avg
        


sol = Solution()
print(sol.findMaxAverage([1,0,1,4,2], 4))

# [1,0,1,4,2]
#  l     r