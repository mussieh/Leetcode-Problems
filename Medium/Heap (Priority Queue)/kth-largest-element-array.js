class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let parentIdx = Math.floor((idx - 1) / 2);
        let element;
        while (this.values[idx] > this.values[parentIdx]) {
            element = this.values[idx];
            this.values[idx] = this.values[parentIdx];
            this.values[parentIdx] = element;
            idx = parentIdx;
            parentIdx = Math.floor((idx - 1) / 2);
        }
    }

    extractMax() {
        let max = this.values[0];
        let end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown();
        }
        return max;
    }

    bubbleDown() {
        let idx = 0;
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let smallerChild = this.values[idx];
        let greaterChild = Math.max(
            this.values[leftChildIdx] ?? this.values[rightChildIdx],
            this.values[rightChildIdx] ?? this.values[leftChildIdx]
        );
        let greaterIdx =
            this.values[leftChildIdx] === greaterChild
                ? leftChildIdx
                : rightChildIdx;

        while (this.values[idx] < greaterChild) {
            this.values[idx] = greaterChild;
            this.values[greaterIdx] = smallerChild;
            idx = greaterIdx;
            leftChildIdx = 2 * idx + 1;
            rightChildIdx = 2 * idx + 2;
            greaterChild = Math.max(
                this.values[leftChildIdx] ?? this.values[rightChildIdx],
                this.values[rightChildIdx] ?? this.values[leftChildIdx]
            );
            greaterIdx =
                this.values[leftChildIdx] === greaterChild
                    ? leftChildIdx
                    : rightChildIdx;
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let maxHeap = new MaxBinaryHeap();
    nums.forEach((x) => maxHeap.insert(x));
    while (k > 0) {
        if (k === 1) return maxHeap.extractMax();
        maxHeap.extractMax();
        k--;
    }
};
