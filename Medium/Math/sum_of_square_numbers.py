import heapq
class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        for i in range(0, c):
          for j in range(0, c):
            if (i * i) + (j * j) == c:
              return True
        return False
    print(heapq.heappop([1, 2, 3]))
      
sol = Solution()
print(sol.judgeSquareSum(5))