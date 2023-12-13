class Solution:
    def equalPairs(self, grid: list[list[int]]) -> int:
        column_pairs = []
        pairs_dict = {}
        pairs_count = 0
        for pair in grid:
          pairs_dict[tuple(pair)] = pairs_dict[tuple(pair)] + 1 if tuple(pair) in pairs_dict else 1
        for i in range(len(grid)):
          pair = []
          for j in range(len(grid)):
            pair.append(grid[j][i])
          column_pairs.append(pair)
        for pair in column_pairs:
          pair_tuple = tuple(pair)
          if pair_tuple in pairs_dict:
            pairs_count += pairs_dict[pair_tuple]
        return pairs_count

# [[3,2,1],[1,7,6],[2,7,7]]
#   i
sol = Solution()
sol.equalPairs([[3,2,1],[1,7,6],[2,7,7]])