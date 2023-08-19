function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(num)) + 1;
}

function getMostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
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

function sortNums(nums) {
    let positiveNums = [];
    let negativeNums = [];
    nums.forEach(function (item) {
        if (item < 0) {
            negativeNums.push(-item);
        } else {
            positiveNums.push(item);
        }
    });
    negativeNums = radixSort(negativeNums)
        .map((x) => x * -1)
        .reverse();
    positiveNums = radixSort(positiveNums);
    return negativeNums.concat(positiveNums);
}

function twoSum(nums, target) {
    let twoSum;
    console.log(nums);
    let sortedNums = sortNums(nums);
    let l = 0;
    let r = sortedNums.length - 1;
    console.log(sortedNums);
    while (l < r) {
        twoSum = sortedNums[l] + sortedNums[r];
        if (twoSum < target) {
            l++;
        } else if (twoSum > target) {
            r--;
        } else {
            return [
                nums.indexOf(sortedNums[l]),
                nums.lastIndexOf(sortedNums[r]),
            ];
        }
    }
}

console.log(twoSum([3, 2, 4], 6));
