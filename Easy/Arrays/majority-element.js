function majorityElement(nums) {
    let freq = {};

    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] = freq[nums[i]] ? freq[nums[i]] + 1 : 1;
        if (freq[nums[i]] > nums.length / 2) {
            return nums[i];
        }
    }
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
