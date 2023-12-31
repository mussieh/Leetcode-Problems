class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        if n == 0:
          return n
        dp = [0] * (n + 1)
        dp[0] = 0
        dp[1] = 1
        i = 0
        for i in range(1, n + 1):
          if 2 <= 2 * i and 2 * i <= n:
            dp[2 * i] = dp[i]
          if 2 <= (2 * i + 1) and (2 * i + 1) <= n:
            dp[2 * i + 1] = dp[i] + dp[i + 1]
        return max(dp)

sol = Solution()
print(sol.getMaximumGenerated(1))