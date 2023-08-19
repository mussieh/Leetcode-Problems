function maxSubArray(nums) {
    let maxSum = nums[0];
    let curSum = 0;

    for (let n of nums) {
        curSum = Math.max(curSum, 0);
        curSum += n;
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}

console.log(maxSubArray([-7, -2, -3, -4, -1, -6]));
