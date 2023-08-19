function minSubarrayLen(target, nums) {
    let l = 0;
    let r = 0;
    let sum = nums[l];
    let minLen = Number.MAX_VALUE;

    while (l <= r && r < nums.length) {
        if (sum >= target) {
            minLen = Math.min(minLen, r - l + 1);
            sum -= nums[l];
            l++;
        } else {
            r++;
            sum += nums[r];
        }
    }

    return minLen === Number.MAX_VALUE ? 0 : minLen;
}

console.log(minSubarrayLen(7, [4, 3, 7]));
