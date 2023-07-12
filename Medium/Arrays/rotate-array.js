function rotate(nums, k) {
    let rotIndex = nums.length - k;
    if (rotIndex < 0) {
        while (k > 0) {
            nums.unshift(nums.pop());
            k--;
        }
    }
    let tempK = k;
    let kArray = [];
    let nonKArray = [];
    while (k > 0) {
        kArray.push(nums[rotIndex]);
        rotIndex++;
        k--;
    }
    rotIndex = nums.length - tempK;
    for (let i = 0; i < rotIndex; i++) {
        nonKArray.push(nums[i]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (i < tempK) {
            nums[i] = kArray[i];
        } else {
            nums[i] = nonKArray[i - tempK];
        }
    }
}

console.log(rotate([-1, 2], 4));
