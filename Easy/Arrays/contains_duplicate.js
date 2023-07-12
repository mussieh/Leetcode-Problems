function containsDuplicate(nums) {
    let numsObj = {};

    for (let num of nums) {
        numsObj[num] = numsObj[num] === undefined ? 1 : numsObj[num] + 1;
        if (numsObj[num] > 1) return true;
    }
    return false;
}

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
