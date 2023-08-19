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
