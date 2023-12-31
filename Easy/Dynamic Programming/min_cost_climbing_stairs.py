class Solution:
    def minCostClimbingStairs(self, costs: list[int]) -> int:
        dp = [0] * (len(costs) + 2)
        for i in range(len(costs) - 1, -1, -1):
            dp[i] = costs[i] + min(dp[i + 1], dp[i + 2])
        return min(dp[0], dp[1])
  
  