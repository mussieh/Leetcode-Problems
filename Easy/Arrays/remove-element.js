function removeElement(nums, val) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        if (nums[l] === val) {
            nums[l] = nums[r];
            r--;
        } else {
            l++;
        }
    }
    return l;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
