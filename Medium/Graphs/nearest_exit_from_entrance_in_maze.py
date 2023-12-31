from collections import deque

class Solution:
    def nearestExit(self, maze: list[list[str]], entrance: list[int]) -> int:
      visited = set()
    

sol = Solution()
print(sol.nearestExit([["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], [1,2]))

# + + a +ç
# d c x +
# + + + .
# [0, 2]
# [r - 1, c] up till -1
# [r + 1, c] down till maze length
# [r, c + 1] right till row length
# [r, c - 1] left till -1
# [1, 2] [1, 3]
# a -> x -> c -> d