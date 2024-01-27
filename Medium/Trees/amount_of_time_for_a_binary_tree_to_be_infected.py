# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Graph:
  def __init__(self) -> None:
     self.adj_list = {}
  
  def print_graph(self):
    for vertex in self.adj_list:
      print(vertex, ":", self.adj_list[vertex])
     
  def add_vertex(self, vertex):
    if not self.adj_list.get(vertex):
      self.adj_list[vertex] = []
  
  def add_edge(self, v1, v2):
    if v1 not in self.adj_list.get(v2):
      self.adj_list[v2].append(v1)
    if v2 not in self.adj_list.get(v1):
      self.adj_list[v1].append(v2)
    
class Solution:
    def amountOfTime(self, root: Optional[TreeNode], start: int) -> int:
      graph = Graph()
      
      
      def dfs(node):
        graph.add_vertex(node.val)
        if (node.left):
          graph.add_vertex(node.left.val)
          graph.add_edge(node.val, node.left.val)
          dfs(node.left)
        if (node.right):
          graph.add_vertex(node.right.val)
          graph.add_edge(node.val, node.right.val)
          dfs(node.right)
      
      dfs(root)
      graph.print_graph()
      return 0
  