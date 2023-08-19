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
    console.log(head);
    let arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    console.log(arr);
}

function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}

let head = mll([1]);
console.log(hasCycle(head));
