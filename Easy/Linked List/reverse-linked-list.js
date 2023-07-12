class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

let fifthNode = new ListNode(5);
let fourNode = new ListNode(4, fifthNode);
let threeNode = new ListNode(3, fourNode);
let twoNode = new ListNode(2, threeNode);
let head = new ListNode(1, twoNode);

function reverseList(head) {
    let previous;
    let current;
    let next;
    while (head !== null) {
        current = head;
        previous = current;
        next = head.next;
        head = head.next;
    }
}

reverseList(head);
