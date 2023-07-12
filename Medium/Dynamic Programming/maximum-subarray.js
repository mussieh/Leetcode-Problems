function maxSubArray(nums) {
    let max = nums.length === 1 ? nums[0] : -10000;
    let currentMax = 0;
    let tempMax = -10000;
    let sumWindow = 0;
    let maxWindowStart = 0;
    let sumBefore = 0;
    for (let i = 0; i < nums.length; i++) {
        sumWindow += nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        sumBefore += nums[i];
        if (sumWindow - sumBefore > tempMax) {
            tempMax = sumWindow - sumBefore;
            console.log(i);
            maxWindowStart = i === 0 ? i : i + 1;
        }
    }
    for (let i = maxWindowStart; i < nums.length; i++) {
        currentMax += nums[i];
        if (currentMax > max) max = currentMax;
    }
    return max;
}

console.log(maxSubArray([-2, 1]));
