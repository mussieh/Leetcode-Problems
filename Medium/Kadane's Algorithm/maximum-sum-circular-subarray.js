function maxSubarraySumCircular(nums) {
    let maxSum = nums[0];
    let currSum = 0;
    let l = 0;
    let r = nums.length - 1;

    for (let n of nums) {
        currSum = Math.max(currSum, 0);
        currSum += n;
        maxSum = Math.max(currSum, maxSum);
    }

    if (nums[l] > 0 && nums[r] > 0) {
        currSum = 0;
        currSum += nums[l] > 0 ? nums[l] : 0;
        currSum += nums[r] > 0 ? nums[r] : 0;
        maxSum = Math.max(currSum, maxSum);
    }

    return maxSum;
}

console.log(maxSubarraySumCircular([2, -2, 2, 7, 8, 0]));
