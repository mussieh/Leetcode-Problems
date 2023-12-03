class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
      if len(flowerbed) == 1 and flowerbed[0] == 0:
        return n <= len(flowerbed)
      space = 0
      for i in range(len(flowerbed)):
        if flowerbed[i] == 0:
          # if at left corner
          if i == 0 and flowerbed[i + 1] != 1:
            flowerbed[i] = 1
            space += 1
          elif i == len(flowerbed) - 1 and flowerbed[i - 1] != 1:
            flowerbed[i] = 1
            space += 1
          else:
            if flowerbed[i - 1] != 1 and flowerbed[i + 1] != 1:
              flowerbed[i] = 1
              space += 1
            
      return space >= n


sol = Solution()
print(sol.canPlaceFlowers([1, 0, 0], 2))