function removeDuplicates(nums) {
    let l = 0;
    let r = l + 1;
    let repNum = -10001;
    let count = 1;

    while (r <= nums.length) {
        if (nums[l] === repNum) {
            nums.splice(l, 1);
            l--;
            r = l + 1;
        }
        if (nums[l] === nums[l + 1]) {
            count++;
            if (count % 3 === 0) repNum = nums[l];
        } else {
            count = 1;
        }
        l++;
        r++;
    }
    return nums.length;
}

console.log(
    removeDuplicates([-4, -3, -2, -2, -2, -1, -1, -1, 0, 1, 2, 2, 2, 2, 3, 4])
);

// [-4, -3, -2, -2, -2, -1, -1, -1, 0, 1, 2, 2, 2, 2, 3, 4]
