class Solution:
    def lengthOfLIS(self, nums):
      pass

    def sequence_length(self, l, r, nums, memo):
      max_num = -1000
      for i in range(r - l + 1):
        max_num = max(max_num, nums[i])
          
# [0, 0, 1, 2, 3, 3]
#           l  r

sol = Solution()
print(sol.lengthOfLIS([0, 1, 0, 3, 2, 3]))
# [0,1,0,3,2,3]
#   l                r

# 0 -> [1, 3]
# 1 -> [3]
# 0 -> [3]
# 3 -> [2, 3]
# 2 -> [3]
# 3 -> []
# [0, 0, 1, 2, 3, 3]
#  l
# [0, 1, 2, 3]
# 6, 7, 9, 1, 2 ,3 ,4
#                   l  r
                 
# 1, 3, 6, 7, 9, 4, 10, 5, 6
#                 l  r
# [0,1,0,3,2,3]
   
# [0, 0, 1, 2, 3, 3]
#     l  r