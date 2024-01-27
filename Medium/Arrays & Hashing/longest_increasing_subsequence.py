import heapq

class Solution:
    def lengthOfLIS(self, nums):
      graph = {}
      longest = 0
      max_len = 0
      for i in range(len(nums)):
        if not graph.get(nums[i]):
          graph[nums[i]] = []
        for j in range(i + 1, len(nums)):
          if nums[j] > nums[i]:
            graph[nums[i]].append(nums[j])
        if len(graph[nums[i]]) > max_len:
          longest = nums[i]
          max_len = len(graph[nums[i]])
      longest_len = 1
      curr_len = 1
      last_el = 0
      print(graph)
      while graph.get(longest):
        last_el = longest
        for i in range(len(graph[longest])):
          if graph[longest][i] > last_el:
            curr_len += 1
            last_el = graph[longest][i]
        graph[longest].pop(0)
        longest_len = max(longest_len, curr_len)
        curr_len = 0
      return longest_len
        
{0: [1, 3, 2], 1: [3, 2], 3: [], 2: [3]}

[10,9,2,5,3,7,101,18]
[2, 3, 5, 7, 9, 10, 18, 101]

sol = Solution()
print(sol.lengthOfLIS([0,1,0,3,2,3]))
