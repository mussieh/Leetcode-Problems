function searchInsert(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let mid;
    while (l <= r) {
        mid = l + Math.floor((r - l) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l;
}

console.log(searchInsert([1, 3, 5, 6], -1));
