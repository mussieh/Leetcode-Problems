class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

function mll(arr) {
    if (arr.length === 0) return null;
    let head = new Node(arr[0]);
    let current = head;
    let counter = 0;
    while (counter < arr.length) {
        current.next =
            arr[counter + 1] !== undefined ? new Node(arr[counter + 1]) : null;
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

function copyRandomList(head) {
    if (!head) return head;

    let nodes = new Map();

    function makeNodeMap(origHead) {
        if (!origHead) return;
        nodes.set(origHead, new Node(origHead.val));
        makeNodeMap(origHead.next);
    }

    function assignPointers(origHead) {
        if (!origHead) return;
        let node = nodes.get(origHead);
        node.next = origHead.next ? nodes.get(origHead.next) : null;
        node.random = nodes.get(origHead.random);
        assignPointers(origHead.next);
    }

    makeNodeMap(head);

    assignPointers(head);

    return nodes.get(head);
}

//[[7,null],[13,0],[11,4],[10,2],[1,0]]

let head = mll([7, 13, 11, 10, 1]);
let copiedHead = copyRandomList(head);
