# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
      tree1 = []
      tree2 = []
      
      def traverse(root, tree):
        if not root.left and not root.right:
          tree.append(root.val)
        if root.left: traverse(root.left)
        if root.right: traverse(root.right)
        
      traverse(root1, tree1)
      traverse(root2, tree2)
      return tree1 == tree2
      
sol = Solution()

print(sol.leafSimilar())