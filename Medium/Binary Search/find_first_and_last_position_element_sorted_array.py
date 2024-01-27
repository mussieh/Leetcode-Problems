import math

class Solution:
    def searchRange(self, nums: list[int], target: int) -> list[int]:
      first_index = self.binary_search(0, len(nums) - 1, nums, target, True)
      if first_index == -1:
          return [-1, -1]
      return [first_index, self.binary_search(first_index, len(nums) - 1, nums, target, False)]
    
    def binary_search(self, l, r, nums, target, side_left):
      m = math.floor((l + r) / 2)
      while l <= r:
        m = math.floor((l + r) / 2)
        if nums[m] == target:
          if side_left:
            r = m - 1 if m > 0 else m
            if m == 0 or nums[r] != target:
              return m
          else:
            l = m + 1 if m < len(nums) - 1 else m
            if m == len(nums) - 1 or nums[l] != target:
              return m
        elif nums[m] > target:
          r = m - 1
        else:
          l = m + 1
      return -1 

sol = Solution()
print(sol.searchRange([2,2], 2))