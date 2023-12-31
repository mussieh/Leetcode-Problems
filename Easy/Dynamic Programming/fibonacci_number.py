class Solution:
    def fib(self, n: int) -> int:
        # bottom up solution
        # memo = [None] * (n + 1)
        # memo[0] = 0
        # memo[1] = 1
        # for i in range(2, n + 1):
        #   memo[i] = memo[i - 1] + memo[i - 2]
        # return memo[n]
      
        # top down solution
        memo = {}
        def fib_helper(n):
          if n == 0 or n == 1:
            return n
          if not memo.get(n):
            memo[n] = fib_helper(n - 1) + fib_helper(n - 2)
          return memo[n]
        return fib_helper(n)
        

sol = Solution()
print(sol.fib(30))