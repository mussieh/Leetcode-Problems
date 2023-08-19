function removeDuplicates(nums) {
    let l = 0;
    let r = l + 1;

    while (r < nums.length) {
        if (nums[l] === nums[r]) {
            r++;
        } else {
            nums[l + 1] = nums[r];
            l++;
        }
    }
    return nums;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
