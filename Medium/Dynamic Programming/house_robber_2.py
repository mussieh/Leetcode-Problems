class Solution:
    def rob(self, nums: list[int]) -> int:
        memo = [-1] * len(nums)

        def rob_house(j):
            if j >= len(nums):
                return 0

            return max(nums[j] + rob_house(j + 2), rob_house(j + 1))

        return rob_house(0)


sol = Solution()
print(sol.rob([2, 3, 2]))
