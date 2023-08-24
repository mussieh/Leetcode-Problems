function findPeakElement(nums) {
    let l = 0;
    let r = nums.length - 1;
    let m;
    while (l <= r) {
        m = l + Math.floor((r - l) / 2);
        if (nums[m] < nums[m - 1]) {
            r = m - 1;
        } else if (nums[m] < nums[m + 1]) {
            l = m + 1;
        } else {
            return m;
        }
    }
}

console.log(findPeakElement([1, 2, 3, 1]));
