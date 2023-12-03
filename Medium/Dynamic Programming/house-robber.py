class Solution:
    def rob(self, nums: list[int]) -> int:
      max_len = 0
      temp_len = 0
      print(nums)
      for i in range(len(nums)):
        temp_len = nums[i]
        for j in range(i + 2, len(nums), 2):
          print(nums[i], nums[j])
          temp_len += nums[j]
        max_len = max(max_len, temp_len)
      return max_len

sol = Solution()

print(sol.rob([6,3,10,8,2,10,3,5,10,5,3]))

# [6,3,10,8,2,10,3,5,10,5,3]
#  i                      j
 
# 6
