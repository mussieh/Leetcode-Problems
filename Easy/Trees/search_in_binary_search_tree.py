from collections import deque

class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
      
      def bfs(node):
        queue = deque()
        queue.append(root)
        current = None
        while queue:
          current = queue.popleft()
          if current.val == val:
            return current
          elif val > current.val:
            if current.right: queue.append(current.right)
          else:
            if current.left: queue.append(current.left)
      
      return bfs(root)

sol = Solution()
print(sol.searchBST())