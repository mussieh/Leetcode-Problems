import sys


class Solution:
    def sumSubarrayMins(self, arr: list[int]) -> int:
        def min_sub(i, j, curr_min, total_min):
            if i >= len(arr):
                return total_min
            if j >= len(arr):
                return min_sub(i + 1, 0, curr_min, total_min)
            if arr[i : j + 1]:
                curr_min = min(curr_min, arr[i : j + 1][-1])
                if i == j:
                    curr_min = arr[i]
                total_min += curr_min
            return min_sub(i, j + 1, curr_min, total_min)

        return min_sub(0, 0, sys.maxsize, 0)


sol = Solution()
print(sol.sumSubarrayMins([3, 1, 2, 4]))
