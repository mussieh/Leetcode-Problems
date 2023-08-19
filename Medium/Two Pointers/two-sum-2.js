function twoSum(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;
    let twoSum = 0;
    while (l < r) {
        twoSum = numbers[l] + numbers[r];
        if (twoSum === target) return [l + 1, r + 1];
        twoSum < target ? l++ : r--;
    }
}

console.log(twoSum([5, 25, 75], 100));
