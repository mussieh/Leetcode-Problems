class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
      prefix = [1]
      suffix = [1]
      result = []
      l = 0
      r = len(nums) - 1
      while l < len(nums) or r >= 0:
        if l > 0:
          prefix.append(prefix[-1] * nums[l - 1])
        if r < len(nums) - 1:
          suffix.append(suffix[-1] * nums[r + 1])
        l += 1
        r -= 1
      for i in range(len(prefix)):
        result.append(prefix[i] * suffix[len(nums) - 1 - i])
      return result

sol = Solution()
print(sol.productExceptSelf([-1,1,0,-3,3]))

# [1, 2, 3, 4]
#  1 3

# [1,2,3,4]
# [4, 3, 2, 1]
# [24,12,8,6]