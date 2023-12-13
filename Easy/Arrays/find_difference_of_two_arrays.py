class Solution:
    def findDifference(self, nums1: list[int], nums2: list[int]) -> list[list[int]]:
        set_1 = set(nums1)
        set_2 = set(nums2)
        return [list(set_1.difference(set_2)),list(set_2.difference(set_1))]

sol = Solution()
print(sol.findDifference([1,2,3], [2,4,6]))