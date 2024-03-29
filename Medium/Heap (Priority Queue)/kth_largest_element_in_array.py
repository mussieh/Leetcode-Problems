import heapq

class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        return heapq.nlargest(k, nums)[-1]
  
sol = Solution()
print(sol.findKthLargest([3,2,3,1,2,4,5,5,6], 4))