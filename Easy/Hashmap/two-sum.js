function twoSum(nums, target) {
    let sums = new Map();
    let complement;
    for (let i = 0; i < nums.length; i++) {
        complement = sums.get(target - nums[i]);
        if (complement !== undefined) {
            return [complement, i];
        } else {
            sums.set(nums[i], i);
        }
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
