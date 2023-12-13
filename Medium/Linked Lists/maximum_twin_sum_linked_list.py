# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        linked_map = {}
        ind = 0
        current = head
        max_sum = 0
        
        while current:
          linked_map[ind] = current.val
          current = current.next
          ind += 1
          
        for i in range((ind // 2)):
            max_sum = max(max_sum, linked_map[i] + linked_map[ind - 1 - i])
        return max_sum

sol = Solution()

print(sol.pairSum())