function search(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let m;
    while (l <= r) {
        m = l + Math.floor((r - l) / 2);
        console.log(l, m, r);
        if (target === nums[l]) return l;
        if (target === nums[m]) return m;
        if (target === nums[r]) return r;
        if (nums[l] < nums[m] || nums[m] > nums[r]) {
            if (target >= nums[l] && target < nums[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
            continue;
        }
        if (nums[l] > nums[m] || nums[m] < nums[r]) {
            if (target > nums[m] && target <= nums[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        if (m === l && m === r) return -1;
    }
    return -1;
}

console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8));
