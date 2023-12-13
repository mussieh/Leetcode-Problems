class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
      l = 0
      r = l + 1
      while r < len(nums):
        if nums[l] == 0 and nums[l] != nums[r]:
          self.swap(l, r, nums)
          l += 1
          r += 1
        elif nums[l] == 0 and nums[l] == nums[r]:
          r += 1
        else:
          l += 1
          r += 1
      print(nums)
    
    def swap(self, l, r, nums):
      temp = nums[l]
      nums[l] = nums[r]
      nums[r] = temp

sol = Solution()

sol.moveZeroes([0, 1, 0, 2, 0, 3, 0, 4])

# [0,1,0,3,12]
#  l   r

# [3,0,0]
#    l   r