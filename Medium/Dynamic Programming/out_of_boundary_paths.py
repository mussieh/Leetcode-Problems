class Solution:
    def findPaths(
        self, m: int, n: int, maxMove: int, startRow: int, startColumn: int
    ) -> int:
        dp = [[[-1] * (maxMove + 1) for col in range(n)] for row in range(m)]

        def path(row, col, maxMoves):
            if row < 0 or row >= m or col < 0 or col >= n:
                return 1
            if dp[row][col][maxMoves] >= 0:
                return dp[row][col][maxMoves]
            if maxMoves > 0:
                dp[row][col][maxMoves] = (
                    path(row - 1, col, maxMoves - 1)
                    + path(row + 1, col, maxMoves - 1)
                    + path(row, col - 1, maxMoves - 1)
                    + path(row, col + 1, maxMoves - 1)
                )
                return dp[row][col][maxMoves]
            return 0

        return path(startRow, startColumn, maxMove) % (10**9 + 7)


sol = Solution()
print(sol.findPaths(50, 50, 50, 0, 0))
# 1 + path(1, col) + path(0, col)
