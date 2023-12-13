# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        previous = None
        current = head
        next_node = head
        
        while current:
            if current.next == None:
                head = current
            next_node = current.next
            current.next = previous
            previous = current
            current = next_node

        return head
        
        
        
            
        


sol = Solution()

print(sol.reverseList())