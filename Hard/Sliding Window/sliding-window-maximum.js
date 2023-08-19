var maxSlidingWindow = function (nums, k) {
    let i = 0;
    let j = k - 1;
    let maxWindow = [];
    let maxCount = new Map();
    let max = Number.MIN_VALUE;

    for (let i = 0; i < k; i++) {
        max = Math.max(max, nums[i]);
    }

    maxCount.set(max, max);

    while (j < nums.length) {
        max = Math.max(maxCount.get(max), Math.max(nums[i], nums[j]));
        if (maxCount.get(nums[i - 1])) {
            maxCount.delete(nums[i - 1]);
        }
        if (nums[j] === max) {
            maxCount.set(nums[j], max);
        }
        if (nums[j] > max) {
            maxCount.clear();
            maxCount.set(nums[j], 1);
        }
        console.log(max);
        i++;
        j++;
    }
    return maxWindow;
};

console.log(maxSlidingWindow([1, 9, -1, -3, 5, 3, 6, 7], 3));

[3];

// 1 3 -1 max = 3 left = 1 right = -1
//  3 -1 -3  max = 3 left = 3 right = -3
//
