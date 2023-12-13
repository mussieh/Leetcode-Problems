class Solution:
    def maxOperations(self, nums: list[int], k: int) -> int:
        visited = set()
        ops = 0
        nums.sort()
        l = 0
        r = len(nums) - 1
        while l < r:
          if nums[l] + nums[r] == k:
            visited.add(l)
            visited.add(r)
            ops += 1
            l += 1
            r -= 1
          elif nums[l] + nums[r] < k:
            l += 1
          else:
            r -= 1
        return ops
              


sol = Solution()
print(sol.maxOperations([3,1,3,4,3], 6))

# [1,2,3,4] k = 5
#    l r
# [3,1,3,4,3] k = 6
#  l   r
# 1,3, 3, 3, 4
# l          r