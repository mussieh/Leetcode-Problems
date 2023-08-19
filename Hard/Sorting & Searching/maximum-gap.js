function maximumGap(nums) {
    let maxGap = 0;
    let i = 0;
    let j = i + 1;
    let sortedNums = radixSort(nums);
    while (j < sortedNums.length) {
        maxGap = Math.max(maxGap, sortedNums[j] - sortedNums[i]);
        i++;
        j++;
    }
    return maxGap;
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMostDigits(nums) {
    let maxDigitCount = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigitCount = Math.max(maxDigitCount, digitCount(nums[i]));
    }
    return maxDigitCount;
}

function radixSort(nums) {
    let maxDigits = getMostDigits(nums);
    let digitBuckets;
    for (let k = 0; k < maxDigits; k++) {
        digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            digitBuckets[getDigit(nums[i], k)].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(maximumGap([11, 5, 0, 1, 2, 7]));
