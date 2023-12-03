class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.nums = nums.sort((a, b) => b - a);
    }

    add(val) {
        this.insert(val);
        return this.nums[this.k - 1];
    }

    insert(val) {
        let newNums = [];
        let idx = 0;
        while (true) {
            if (this.nums[idx] > val) {
                newNums.push(this.nums[idx]);
            } else {
                newNums.push(val);
                newNums.push(this.nums[idx]);
                this.nums = newNums.concat(this.nums.slice(idx + 1));
                break;
            }
            idx++;
        }
    }
}

let kthLargest = new KthLargest(3, [4, 5, 8, 2]);
console.log(kthLargest);
kthLargest.add(3); // return 4
console.log(kthLargest);
kthLargest.add(5); // return 5
console.log(kthLargest);
kthLargest.add(10); // return 5
console.log(kthLargest);
kthLargest.add(9); // return 8
console.log(kthLargest);
kthLargest.add(4); // return 8
console.log(kthLargest);
