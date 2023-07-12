function runningSum(nums) {
    let sum = 0;
    let sums = [];
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sums.push(sum);
    }
    return sums;
}
