function maxSlidingWindow(nums, k) {
    let maxSlidingWindow = [];
    let windowStart = 0;
    let windowEnd = k - 1;

    for (let i = 0; i < nums.length; i++) {
        maxSlidingWindow.push(findMax(nums, windowStart, windowEnd));
        if (windowEnd === nums.length - 1) {
            break;
        }
        windowStart++;
        windowEnd++;
    }
    return maxSlidingWindow;
}

function findMax(nums, windowStart, windowEnd) {
    let max = -10000;
    for (let i = windowStart; i <= windowEnd; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

console.log(maxSlidingWindow([1], 1));
