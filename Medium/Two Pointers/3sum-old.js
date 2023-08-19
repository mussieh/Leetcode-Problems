function threeSum(nums) {
    let solutionSet = [];
    let threeSum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (
                let k = j + 1;
                k < nums.length && i != j && i != k && j != k;
                k++
            ) {
                threeSum = nums[i] + nums[j] + nums[k];
                if (threeSum === 0)
                    solutionSet.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
    solutionSet.forEach((subarray) => subarray.sort((a, b) => a - b));
    let dupObj = {};
    for (let i = 0; i < solutionSet.length; i++) {
        dupObj[solutionSet[i]] = solutionSet[i];
    }
    return Object.values(dupObj);
}

console.log(threeSum([3, 0, -2, -1, 1, 2]));
