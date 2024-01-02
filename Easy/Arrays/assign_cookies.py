import heapq

class Solution:
    def findContentChildren(self, g: list[int], s: list[int]) -> int:
      g.sort()
      s.sort()
      content = 0
      while g:
        if g[-1] > s[-1]:
          g.pop()
        else:
          content += 1
          g.pop()
          s.pop()
      return content
          

sol = Solution()
print(sol.findContentChildren([7, 8, 9], [8, 7, 1, 2]))