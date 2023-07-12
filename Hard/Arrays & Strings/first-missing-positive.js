function firstMissingPositive(nums) {
    let numsObj = {};
    for (let i = 0; i < nums.length; i++) {
        numsObj[nums[i]] = 1;
    }
    for (let i = 1; i <= Math.pow(2, 31) - 1; i++) {
        if (numsObj[i] === undefined) return i;
    }
}

console.log(firstMissingPositive([7, 8, 9, 11, 12]));
