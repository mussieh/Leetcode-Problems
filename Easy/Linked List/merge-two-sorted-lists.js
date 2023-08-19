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

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode();
    let tail = dummy;
    let l1 = list1;
    let l2 = list2;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    if (l1) {
        tail.next = l1;
    } else {
        tail.next = l2;
    }
    return dummy.next;
}

// -6, -3, -3, -1, 2, 3
//  l1

// - 7, -7, -6, -6, -5, -3, 2, 4
//          l2
// -9 -> -7 -> -7 -

let list1 = mll([-9, -7, -3, -3, -1, 2, 3]);
let list2 = mll([-7, -7, -6, -6, -5, -3, 2, 4]);

console.log(mergeTwoLists(list1, list2));
