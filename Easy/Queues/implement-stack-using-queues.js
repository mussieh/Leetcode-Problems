class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class MyStack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            node.prev = this.last;
            this.last.next = node;
            this.last = node;
        }
        this.size++;
        return this.size;
    }

    dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            this.first.prev = null;
            temp.next = null;
        }
        this.size--;
        return temp;
    }

    push(val) {
        this.enqueue(val);
    }

    pop() {
        if (!this.last) return null;
        let temp = this.last;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.last = this.last.prev;
            temp.prev.next = null;
            temp.prev = null;
        }
        this.size--;
        return temp.val;
    }

    top() {
        return this.last.val;
    }

    empty() {
        return this.size === 0;
    }
}

let myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty();
console.log(myStack);
