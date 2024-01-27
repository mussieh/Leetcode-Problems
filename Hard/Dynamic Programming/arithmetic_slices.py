class Solution:
    def numberOfArithmeticSlices(self, nums: list[int]) -> int:
        memo = {}
        for i in range(len(nums)):
            vals = []
            for j in range(i + 1, len(nums)):
                vals.append(nums[j])
            if not memo.get(nums[i]):
                memo[(nums[i])] = vals
        print(memo)


# [2,4,6] x
# [2,4,8]
# [2,4,10]
# [2,6,8]
# [2,6,10] x
# [2,8,10]
# [4, 6, 8] x
# [4, 6, 10]
# [6, 8, 10] x
sol = Solution()
print(sol.numberOfArithmeticSlices([2, 4, 6, 8, 10]))
