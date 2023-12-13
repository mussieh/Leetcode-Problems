class Solution:
    def pivotIndex(self, nums: list[int]) -> int:
        left, right = 0, 0
        total = sum(nums)
        for i in range(len(nums)):
          if i > 0:
            left += nums[i - 1]
          right = total - left - nums[i]
          if left == right:
            return i
        return - 1
  

sol = Solution()

print(sol.pivotIndex([1,7,3,6,5,6]))

# [1,7,3,6,5,6] 0 28
#    i
# left = 8
# right = total - left - nums[p] 20