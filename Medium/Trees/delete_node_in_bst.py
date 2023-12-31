from collections import deque

class Solution:
    def deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:
        queue = deque()
        queue.append(root)
        parent = None
        current = root
        while queue:
          current = queue.popleft()
          if current.val == key:
            if current.right:
              while current.right:
                current, current.right = current.right, current
            elif current.left:
              while current.left:
                current, current.left = current.left, current
          elif current.val < key:
            if current.right:
              queue.append(current.right)
          else:
            if current.left:
              queue.append(current.left)
          parent = current
          print(parent)
          print(current)
          
sol = Solution()
print(sol.deleteNode())

