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

function addTwoNumbers(l1, l2) {
    let head = new ListNode();
    let result = head;
    let sum = 0;
    let carryOver = 0;
    let base = 0;
    while (l1 && l2) {
        sum = l1.val + l2.val + carryOver;
        sum > 9 ? (carryOver = 1) : (carryOver = 0);
        base = sum % 10;
        result.val = base;
        result.next = !!l1.next && !!l2.next ? new ListNode() : null;
        result = result.next ? result.next : result;
        l1 = l1.next;
        l2 = l2.next;
    }

    let extra = l1 ? l1 : l2;

    if (extra) {
        result.next = new ListNode();
        result = result.next;
        while (extra) {
            sum = extra.val + carryOver;
            sum > 9 ? (carryOver = 1) : (carryOver = 0);
            base = sum % 10;
            result.val = base;
            result.next = !!extra.next ? new ListNode() : null;
            result = result.next ? result.next : result;
            extra = extra.next;
        }
    }
    carryOver > 0 ? (result.next = new ListNode(carryOver)) : null;
    return head;
}

let l1 = mll([5]);
let l2 = mll([5]);

console.log(addTwoNumbers(l1, l2));
