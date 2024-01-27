import heapq

class Solution:
    def findKthNumber(self, m: int, n: int, k: int) -> int:
        table = []
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                table.append(i * j)
        return heapq.nsmallest(k, table)[k - 1]

sol = Solution()
print(sol.findKthNumber(1, 1, 1))