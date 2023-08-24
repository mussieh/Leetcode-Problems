function rob(nums) {
    let memo = [];
    let maxMoney = 0;
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum = nums[i];
        for (let j = i + 2; j < nums.length; j++) {
            currentSum = nums[j] + sumSeries(j);
            memo[j] = currentSum;
            memo[i] = Math.max(memo[i] ? memo[i] : 0, nums[i] + currentSum);
        }
        maxMoney = Math.max(maxMoney, memo[i] ? memo[i] : currentSum);
    }

    function sumSeries(i) {
        let sum = 0;
        for (let j = i + 2; j < nums.length; j += 2) {
            sum += nums[j];
        }
        return sum;
    }
    console.log(memo);
    return maxMoney;
}

console.log(rob([6, 3, 10, 8, 2, 10, 3, 5, 10, 5, 3]));

// 2 9
// 2 9 1
// 2 9 4
// 2 3
// 2 3 4
// 2 1
// 2 4
