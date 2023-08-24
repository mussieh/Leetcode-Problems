class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
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

class MinStack {
    constructor() {
        this.first = null;
        this.last = null;
        this.minElement = null;
        this.size = 0;
    }

    push(val) {
        let element = new Node(val);
        if (!this.first) {
            this.first = element;
            this.last = element;
        } else {
            let firstElement = this.first;
            this.first = element;
            this.first.next = firstElement;
        }
        if (this.minElement) {
            this.minElement =
                val < this.minElement.val ? element : this.minElement;
        } else {
            this.minElement = element;
        }
        this.size++;
    }

    pop() {
        if (this.first === this.last) {
            this.last = null;
            this.minElement = null;
        }
        let poppedElement = this.first;
        this.first = this.first.next;
        poppedElement.next = null;
        if (poppedElement === this.minElement) {
            let current = this.first;
            let minValue = Number.MAX_VALUE;
            let minNode = null;
            while (current) {
                if (current.val < minValue) {
                    minValue = current.val;
                    minNode = current;
                }
                current = current.next;
            }
            this.minElement = minNode;
        }
        this.size--;
    }

    top() {
        return this.first.val;
    }

    getMin() {
        return this.minElement.val;
    }
}

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top(); // return 0
console.log(minStack.getMin());
print(minStack.first);
