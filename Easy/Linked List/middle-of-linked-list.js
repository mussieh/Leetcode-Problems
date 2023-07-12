class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

let sixthNode = new ListNode(6);
let fifthNode = new ListNode(5, sixthNode);
let fourNode = new ListNode(4, fifthNode);
let threeNode = new ListNode(3, fourNode);
let twoNode = new ListNode(2, threeNode);
let head = new ListNode(1, twoNode);

var middleNode = function (head) {
    let linkedListLength = 1;
    let tempHead = head;
    while (head.next !== null) {
        linkedListLength++;
        head = head.next;
    }
    let middleIndex =
        linkedListLength % 2 === 0
            ? linkedListLength / 2
            : (linkedListLength - 1) / 2;
    while (middleIndex > 0) {
        tempHead = tempHead.next;
        middleIndex--;
    }
    return tempHead;
};

// console.log(middleNode(head));
console.log(middleNode(head));
