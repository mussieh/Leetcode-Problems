function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function reverseListIter(head) {
    if (!head) return null;
    let prev = null;
    let current = head;
    let next = head.next;
    while (current.next) {
        current.next = prev;
        prev = current;
        current = next;
        next = current.next;
    }
    current.next = prev;
    return current;
}

function reverseListRec(head) {
    if (!head) return null;
    function reverseHelper(head, prev, current, next) {
        if (!current.next) {
            current.next = prev;
            return current;
        }
        current.next = prev;
        return reverseHelper(head, current, next, next.next);
    }
    return reverseHelper(head, null, head, head.next);
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

let five = new ListNode(5);
let four = new ListNode(4, five);
let three = new ListNode(3, four);
let two = new ListNode(2, three);
let head = new ListNode(1, two);

console.log(reverseListRec(head));
