class Solution:
    def asteroidCollision(self, asteroids: list[int]) -> list[int]:
        l = 0
        r = l + 1
        while r < len(asteroids):
          asteroid1 = asteroids[l]
          asteroid2 = asteroids[r]
          asteroid1_size = abs(asteroid1)
          asteroid2_size = abs(asteroid2)
          
          if asteroid1 > 0 and asteroid2 < 0 and asteroid1_size > asteroid2_size:
            asteroids.pop(r)
          elif asteroid1 > 0 and asteroid2 < 0 and asteroid2_size > asteroid1_size:
            asteroids.pop(l)
          elif asteroid1 > 0 and asteroid2 < 0 and asteroid1_size == asteroid2_size:
            asteroids.pop(r)
            asteroids.pop(l)
          l += 1
          r += 1
        if self.can_collide(asteroids):
          return self.asteroidCollision(asteroids)
        return asteroids
      
    def can_collide(self, nums):
      for i in range(len(nums)):
        if i + 1 < len(nums):
          if nums[i] > 0 and nums[i + 1] < 0:
            return True
      return False
          
          
# [10, 2, -5]
#      l   r

sol = Solution()
print(sol.asteroidCollision([-2,1,-2,-2]))

[5, 10]
10 -5