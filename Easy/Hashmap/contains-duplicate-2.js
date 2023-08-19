function containsNearbyDuplicate(nums, k) {
    let nMap = new Map();
    let dist = 0;
    for (let i = 0; i < nums.length; i++) {
        console.log(nMap);
        if (nMap.get(nums[i]) === undefined) {
            nMap.set(nums[i], i);
        } else {
            dist = Math.abs(nMap.get(nums[i]) - i);
            if (dist <= k) return true;
            nMap.set(nums[i], i);
        }
    }
    return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
