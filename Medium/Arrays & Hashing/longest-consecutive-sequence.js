function longestConsecutive(nums) {
    if (nums.length <= 1) return nums.length;
    let maxCount = 0;
    let seqMax = 0;
    nums.sort((a, b) => a - b);
    let uniqueVals = new Set();
    nums.forEach((num) => uniqueVals.add(num));
    let sortedNums = Array.from(uniqueVals);
    for (let i = 0; i < sortedNums.length; i++) {
        seqMax = Math.max(seqMax, maxCount);
        if (sortedNums[i + 1] - sortedNums[i] === 1) {
            maxCount++;
        } else {
            maxCount = 0;
        }
    }
    return seqMax + 1;
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

[1, 2, 3, 4, 100, 200][(0, 3, 7, 2, 5, 8, 4, 6, 0, 1)];

[0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10];
