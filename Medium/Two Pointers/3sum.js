function threeSum(nums) {
    let results = [];
    let threeSum = 0;
    let triplets = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            threeSum = nums[i] + nums[l] + nums[r];
            triplets = [nums[i], nums[l], nums[r]];
            if (threeSum === 0) {
                results.push(triplets);
                l++;
                r--;
                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }
            } else if (threeSum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
    return results;
}

// function threeSumHelper(nums, i, j, k) {
//     while (i !== j && i !== k && j !== k) {}
// }

// console.log(
//     binarySearch(
//         [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4].sort((a, b) => a - b),
//         0,
//         0,
//         10
//     )
// );

console.log(threeSum([-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4]));

// [-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4];

// test  cases
// [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]

// [3,0,-2,-1,1,2]
