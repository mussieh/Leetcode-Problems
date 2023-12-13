# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        max_depth = 0
  
        def max_d(root, depth):
          nonlocal max_depth
          max_depth = max(max_depth, depth)
          if root.left: max_d(root.left, depth + 1)
          if root.right: max_d(root.right, depth + 1)
        
        max_d(root, 1)
        return max_depth

sol = Solution()

print(sol.maxDepth())