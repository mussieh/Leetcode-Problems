function findMin(nums) {
    let l = 0;
    let r = nums.length - 1;
    let mid = Math.floor((l + r) / 2);
    while (l <= r) {
        l = nums[mid - 1] ? mid - 1 : 0;
        r = nums[mid + 1] ? mid + 1 : nums.length - 1;
        if (nums[l] < nums[r] && nums[mid] > nums[l]) {
            mid--;
        } else if (nums[r] < nums[l] && nums[mid] > nums[r]) {
            mid++;
        } else if (nums[mid] <= nums[l] && nums[mid] <= nums[r]) {
            return nums[mid];
        }
    }
}

console.log(findMin([2, 3, 4, 5, 1]));
