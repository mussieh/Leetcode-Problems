class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    shift() {
        if (!this.head) return undefined;
        let removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode;
    }

    unshift(key, val) {
        let newNode = new Node(key, val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return null;
        let removedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            removedNode.prev.next = null;
            this.tail = removedNode.prev;
            removedNode.prev = null;
        }
        this.length--;
        return removedNode;
    }

    remove(node) {
        if (!this.head) return null;
        if (node === this.head) return this.shift();
        if (node === this.tail) return this.pop();
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let beforeNode = node.prev;
            let afterNode = node.next;
            beforeNode.next = afterNode;
            afterNode.prev = beforeNode;
            node.prev = null;
            node.next = null;
        }
        this.length--;
        return node;
    }
}

function print(dll) {
    let arr = [];
    let current = dll.head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    console.log(arr);
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.lruMap = new Map();
    this.lruList = new DoublyLinkedList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.lruMap.has(key)) {
        let refreshedNode = this.lruMap.get(key);
        this.lruList.remove(refreshedNode);
        let newNode = this.lruList.unshift(
            refreshedNode.key,
            refreshedNode.val
        ).head;
        this.lruMap.set(key, newNode);
        return this.lruMap.get(key).val;
    } else {
        return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.lruMap.size < this.capacity) {
        if (this.lruMap.has(key)) {
            let node = this.lruMap.get(key);
            this.lruList.remove(node);
            let newNode = this.lruList.unshift(key, value).head;
            this.lruMap.set(key, newNode);
        } else {
            let newNode = this.lruList.unshift(key, value).head;
            this.lruMap.set(key, newNode);
        }
    } else {
        if (this.lruMap.has(key)) {
            let node = this.lruMap.get(key);
            this.lruList.remove(node);
            let newNode = this.lruList.unshift(key, value).head;
            this.lruMap.set(key, newNode);
        } else {
            let lru = this.lruList.pop();
            this.lruMap.delete(lru.key);
            let newNode = this.lruList.unshift(key, value).head;
            this.lruMap.set(key, newNode);
        }
    }
};

let lRUCache = new LRUCache(3);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.put(3, 3);
lRUCache.put(4, 4); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(4); // returns -1 (not found)
lRUCache.get(3); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(2); // return -1 (not found)
lRUCache.get(1); // return 3 x
lRUCache.put(5, 5);
lRUCache.get(1);
lRUCache.get(2);
lRUCache.get(3);
lRUCache.get(4);
lRUCache.get(5);
console.log(lRUCache);
