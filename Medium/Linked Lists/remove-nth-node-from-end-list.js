class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mll(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    let counter = 0;
    while (counter < arr.length) {
        current.next =
            arr[counter + 1] !== undefined
                ? new ListNode(arr[counter + 1])
                : null;
        current = current.next;
        counter++;
    }
    return head;
}

function print(head) {
    let arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    console.log(arr);
}

function removeNthFromEnd(head, n) {
    if (!head.next) return null;
    let slow = head;
    let fast = head;
    let size = 0;
    let counter = 0;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        size++;
        if (!fast) {
            size *= 2;
        } else if (!fast.next) {
            size = size * 2 + 1;
        }
    }
    slow = head;
    let beforeNode;
    let removedNode;
    while (slow) {
        if (counter === size - n - 1) {
            beforeNode = slow;
            removedNode = beforeNode.next;
        }
        counter++;
        slow = slow.next;
    }
    if (removedNode) {
        beforeNode.next = removedNode.next;
        removedNode.next = null;
    } else {
        head = head.next;
    }
    return head;
}

let head = mll([1, 2]);
console.log(removeNthFromEnd(head, 1));
