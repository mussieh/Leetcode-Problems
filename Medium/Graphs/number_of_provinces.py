class Graph:
  def __init__(self) -> None:
     self.adj_list = {}
     
  def add_vertex(self, v):
    if v not in self.adj_list:
      self.adj_list[v] = []
  
  def print_graph(self):
    for vertex in self.adj_list:
      print(vertex, ":", self.adj_list[vertex])
  
  def add_edge(self, v1, v2):
    if v2 not in self.adj_list[v1] and v1 not in self.adj_list[v2]:
      self.adj_list[v1].append(v2)
      self.adj_list[v2].append(v1)
      
  def depth_first(self):
    if not self.adj_list.get(0):
      return 0
    visited = {}
    
    def depth(vertex):
      visited[vertex] = True
      for neighbor in self.adj_list[vertex]:
        if not visited.get(neighbor):
          depth(neighbor)
    depth(0)
    return len(visited)

class Solution:
    def findCircleNum(self, isConnected: list[list[int]]) -> int:
        my_graph = Graph()
        connected_cities = 0
        for i in range(len(isConnected)):
            for j in range(len(isConnected)):
                if i != j and isConnected[i][j] == 1:
                  my_graph.add_vertex(i)
                  my_graph.add_vertex(j)
                  my_graph.add_edge(i, j)
        connected_cities = my_graph.depth_first()
        if connected_cities == 0:
          return len(isConnected)
        else:
          return len(isConnected) - connected_cities + 1


sol = Solution()

print(sol.findCircleNum([[1,0,0],[0,1,0],[0,0,1]]))

# 0 : [9]
# 9 : [0] 
# 1 : [3, 13]
# 3 : [1, 7, 11]
# 13 : [1]
# 7 : [3, 8]
# 11 : [3]
# 4 : [12]
# 12 : [4]
# 8 : [7]

# 0 -> 9  1
# 1 -> 3 -> 7 -> 8
# 4 -> 12 1 1
# 1 -> 13
#      3 -> 11

# 111