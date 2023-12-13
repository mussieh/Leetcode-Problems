class Solution:
    def increasingTriplet(self, nums: list[int]) -> bool:
      triplet = 0
      index_count = 0
      for i in range(len(nums)):
        triplet = nums[i]
        index_count = 0
        for j in range(i + 1, len(nums)):
          if nums[j] > triplet:
            triplet = nums[j]
            index_count += 1
          if index_count == 2:
            return True
      return False
        
  

sol = Solution()

print(sol.increasingTriplet([1,5,0,4,1,3]))

# 0, 1, 1, 3, 4, 5
# 1: 0, 5: 1, 0:2, 4:3, 1:4, 3:5

# 1 :[5, 4, 3]
# 5: []
# 0: [1, 3]
# 4: []
# 1: [3]
# [5, 4, 3]
# 1,5,0,4,1,3
# l   m