class Graph:
  def __init__(self) -> None:
    self.adj_list = {}
    
  def print_graph(self):
    for vertex in self.adj_list:
      print(vertex, ":", self.adj_list[vertex])
  
  def add_vertex(self, vertex):
    if vertex not in self.adj_list:
      self.adj_list[vertex] = []
      return True
    return False
  
  
  def add_edge(self, v1, v2, weight):
    if v1 not in self.adj_list[v2]:
      self.adj_list[v2].append([v1, weight])
    if v2 not in self.adj_list[v1]:
      self.adj_list[v1].append([v2, weight])


class Solution:
    def jobScheduling(self, startTime: list[int], endTime: list[int], profit: list[int]) -> int:
      graph = Graph()
      longest_edge = 0
      start = 0
      for i in range(len(startTime)):
        graph.add_vertex(startTime[i])
        graph.add_vertex(endTime[i])
        graph.add_edge(startTime[i], endTime[i], profit[i])
      broken_i = 0
      for i in range(endTime[0], endTime[-1] + 1):
        if i not in endTime and i in startTime:
          broken_i = startTime.index(i) # index 3 or 4
          broken_val = startTime[broken_i - 1] # 3
          broken_i2 = endTime.index(broken_val) # index 0
          graph.adj_list[startTime[broken_i2]].append([i, profit[broken_i2]])
      for i in graph.adj_list:
        if len(graph.adj_list[i]) > longest_edge:
          longest_edge = len(graph.adj_list[i])
          start = i
      graph.print_graph()
      return self.dfs_recursive(start, graph)
      
    def dfs_recursive(self, start, graph):
      visited = {}
      adj_list = graph.adj_list
      current_profit = 0
      max_profit = 0
      
      def dfs(vertex, current_profit):
        nonlocal max_profit
        visited[vertex] = True
        max_profit = max(current_profit, max_profit)
        for neighbor in adj_list[vertex]:
          if not visited.get(neighbor[0]):
            dfs(neighbor[0], current_profit + neighbor[1])
      dfs(start, current_profit)
      return max_profit


sol = Solution()
print(sol.jobScheduling([1,2,3,4,6], [3,5,10,6,9], [20,20,100,70,60] ))

#  1    -     3              5        6
#       2             4
# 30 + 80