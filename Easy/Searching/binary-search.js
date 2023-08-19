function search(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let mid;
    while (l <= r) {
        mid = l + Math.floor((r - l) / 2);
        if (target > nums[mid]) {
            l = mid + 1;
        } else if (target < nums[mid]) {
            r = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 0));
