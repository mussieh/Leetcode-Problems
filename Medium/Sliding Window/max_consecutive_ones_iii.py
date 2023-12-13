class Solution:
    def longestOnes(self, nums: list[int], k: int) -> int:
      zero_count, one_count, max_len = 0, 0, 0
      l , r = 0, 0
      
      while zero_count < k and r < len(nums):
        if nums[r] == 0:
          zero_count += 1
        else:
          one_count += 1
        max_len = max(max_len, zero_count + one_count)
        r += 1
        
      while r < len(nums):
        if nums[r] == 0:
          if nums[l] != 0:
            one_count -= 1
            zero_count += 1
          if zero_count > k:
            r -= 1
            zero_count -= 1
          l += 1
        else:
            one_count += 1
        max_len = max(max_len, zero_count + one_count)
        r += 1
      return max_len
        
      
sol = Solution()
print(sol.longestOnes([0, 1, 0, 0, 0], 3))

# [1,1,1,0,0,0,1,1,1,1,0]
# [1,1,1,0,0,0,1,1,1,1,0]
#  [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
#                       l               r
# zero_count = 3
# one_count =  5
# total = 