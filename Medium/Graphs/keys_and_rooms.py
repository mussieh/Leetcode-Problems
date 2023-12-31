class Graph:
  def __init__(self):
     self.adj_list = {}
  
  def print_graph(self):
    for vertex in self.adj_list:
      print(vertex, ":", self.adj_list[vertex])
  
  def add_vertex(self, vertex):
    if vertex not in self.adj_list:
      self.adj_list[vertex] = []
      return True
    return False
  
  def add_edge(self, v1, v2):
    if v2 not in self.adj_list[v1] and v1 not in self.adj_list[v2]:
      if v1 == v2:
        self.adj_list[v1].append(v2)
      else:
        self.adj_list[v1].append(v2)
        self.adj_list[v2].append(v1)
      return True
    return False
  
  def dfs_graph(self, start, rooms):
    visited = {}
    result = []
    
    def dfs(start, rooms):
      visited[start] = True
      result.append(start)
      for neighbor in rooms[start]:
        if not visited.get(neighbor):
          dfs(neighbor, rooms)
    dfs(start, rooms)
    return result

class Solution:
    def canVisitAllRooms(self, rooms: list[list[int]]) -> bool:
        my_graph = Graph()
        return len(my_graph.dfs_graph(0, rooms)) == len(rooms)
          



sol = Solution()
print(sol.canVisitAllRooms([[1],[],[0,3],[1]]))

# 0: [1, 3]
# 1: [0, 3]
# 2: [2]
# 3: [0]

# my_graph = Graph()
# my_graph.add_vertex(0)
# my_graph.add_vertex(1)
# my_graph.add_vertex(2)
# my_graph.add_vertex(3)
# my_graph.add_edge(0, 1)
# my_graph.add_edge(0, 3)
# my_graph.add_edge(1, 0)
# my_graph.add_edge(1, 3)
# my_graph.add_edge(2, 2)
# my_graph.add_edge(3, 0)
# print(my_graph.dfs_graph(0))
# my_graph.print_graph()