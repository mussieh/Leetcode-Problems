class Solution:
    def uniqueOccurrences(self, arr: list[int]) -> bool:
        occur = {}
        for num in arr:
          occur[num] = occur[num] + 1 if num in occur else 1
        occur_list = occur.values()
        return len(set(occur_list)) == len(occur_list)
        
      
      
sol = Solution()
print(sol.uniqueOccurrences([1,2,2,1,1,3]))