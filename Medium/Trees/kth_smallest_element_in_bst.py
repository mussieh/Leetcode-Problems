# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
import heapq
class Solution:
    def kthSmallest(self, root, k: int) -> int:
        result = []

        def traverse(node):
            if node.left: traverse(node.left)
            result.append(node.val)
            if node.right: traverse(node.right)

        traverse(root)
        return result[k - 1]

sol = Solution()
print(sol.kthSmallest([3,1,4,2], 1))