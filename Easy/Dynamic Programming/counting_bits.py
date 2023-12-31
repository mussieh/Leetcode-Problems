class Solution:
    def countBits(self, n: int) -> list[int]:
      dp = [None] * (n + 1)
      
      for i in range(n + 1):
        dp[i] = bin(i).count("1")
        
      return dp
  
sol = Solution()
print(sol.countBits(5))
# 2
# 0
# 1 1
# 10 2
# 11 3
# 100 4
# 101 5