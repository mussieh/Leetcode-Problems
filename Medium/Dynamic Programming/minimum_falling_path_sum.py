class Solution:
    def minFallingPathSum(self, matrix: list[list[int]]) -> int:
        min_path_sum = 10000
        memo = [[101] * len(matrix)] * len(matrix)

        def traverse(row, col):
            nonlocal min_path_sum
            if row >= len(matrix) or col < 0 or col >= len(matrix):
                return 0
            matrix[row][col]
                + traverse(row + 1, col - 1)
                + traverse(row + 1, col)
                + traverse(row + 1, col - 1)
            )

        for i in range(len(matrix)):
            memo[0][i] = matrix[0][i]
            print(traverse(0, i), "hi")
        return min_path_sum


sol = Solution()
print(sol.minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]))
