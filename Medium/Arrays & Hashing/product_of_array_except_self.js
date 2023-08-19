function productExceptSelf(nums) {
    let answer = [];
    let prefix = [];
    let suffix = [];
    let product = 1;

    // prefix pass
    for (let i = 0; i < nums.length; i++) {
        if (i != 0) product = product * nums[i - 1];
        prefix.push(product);
    }

    product = 1;
    // suffix pass
    for (let j = nums.length - 1; j >= 0; j--) {
        if (j != nums.length - 1) product = product * nums[j + 1];
        suffix.push(product);
    }

    let i = 0;
    // multiply the two arrays
    for (let j = suffix.length - 1; j >= 0; j--) {
        answer.push(suffix[j] * prefix[i]);
        i++;
    }
    return answer;
}

console.log(productExceptSelf([-30, -40, -50, 1, 2, 3]));
