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

let maxHeap = new MaxBinaryHeap();
[90, 36, 17, 25, 26, 7, 1, 2, 3, 19].forEach((x) => maxHeap.insert(x));
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap);
