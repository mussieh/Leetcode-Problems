function median(nums) {
    let middleIndex =
        nums.length % 2 === 0 ? nums.length / 2 : (nums.length - 1) / 2;
    let median =
        nums.length % 2 === 0
            ? (nums[middleIndex - 1] + nums[middleIndex]) / 2
            : nums[middleIndex];
    return median;
}

function findMedianSortedArrays(nums1, nums2) {
    let mergedArray = nums1.concat(nums2);
    mergedArray.sort((num1, num2) => num1 - num2);
    return median(mergedArray);
}

console.log(findMedianSortedArrays([3], [-2, -1]));
