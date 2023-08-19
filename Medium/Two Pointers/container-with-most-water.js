function maxArea(height) {
    let l = 0;
    let r = height.length - 1;
    let maxArea = 0;
    let xDist = 0;
    while (l <= r) {
        xDist = r - l;
        maxArea = Math.max(maxArea, xDist * Math.min(height[l], height[r]));
        console.log(`maxarea ${maxArea} l: ${l} r: ${r}`);
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return maxArea;
}

// [1, 2, 3, 4, 5, 6, 7, 8, 8];
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));
