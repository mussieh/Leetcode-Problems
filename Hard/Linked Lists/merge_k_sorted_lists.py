# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists):
        if len(lists) == 0:
            return None
        arr = []
        for link in lists:
           self.traverse(arr, link)
        arr.sort()
        current = ListNode(arr[0]) if len(arr) > 0 else None
        head = current
        for i in range(1, len(arr)):
            current.next = ListNode(arr[i])
            current = current.next
        return head

    def traverse(self, arr, link):
        current = link
        while current:
            arr.append(current.val)
            current = current.next
  
sol = Solution()
sol.mergeKLists()