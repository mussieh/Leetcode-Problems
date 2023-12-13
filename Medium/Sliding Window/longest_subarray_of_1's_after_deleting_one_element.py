class Solution:
    def longestSubarray(self, nums: list[int]) -> int:
        zero_count, one_count, l, r, max_len = 0, 0, 0, 0, 0
        while r < len(nums):
          if nums[r] == 1:
            one_count += 1
            r += 1
          else:
            if zero_count < 2:
              zero_count += 1
            if zero_count == 2:
              while zero_count == 2:
                if nums[l] == 0:
                  zero_count -= 1
                else:
                  one_count -= 1
                l += 1
            r += 1
          print(zero_count, one_count, l, r)
          if zero_count <= 1:
            max_len = max(max_len, zero_count - 1 + one_count)
        return max_len
          

sol = Solution()

print(sol.longestSubarray([1]))

# 1,0,1,1,1,1,1,1,0,1,1,1,1,1
#     l           r
# zero_count = 1
# one_count = 6