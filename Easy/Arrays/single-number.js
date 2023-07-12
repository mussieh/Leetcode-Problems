function singleNumber(nums) {
    if (nums.length <= 2) return nums[0];
    let numObj = {};

    for (let num of nums) {
        numObj[num] === undefined ? (numObj[num] = num) : delete numObj[num];
    }
    return Object.keys(numObj)[0];
}

console.log(singleNumber([2, 2, 1]));
