from collections import Counter


class Solution:
    def findErrorNums(self, nums: list[int]) -> list[int]:
        nums_count = Counter(nums)
        nums_set = set(nums)
        result = []
        for i in range(1, len(nums) + 1):
            if i not in nums_set:
                result.append(nums_count.most_common(1)[0][0])
                result.append(i)
        return result


sol = Solution()
print(sol.findErrorNums([4, 8, 1, 5, 2, 7, 4, 6]))
