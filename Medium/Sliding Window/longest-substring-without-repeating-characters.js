function lengthOfLongestSubstring(str) {
    let l = 0;
    let r = 0;
    let maxLen = 0;
    let window = new Set();

    while (l < str.length) {
        if (window.has(str[r])) {
            console.log(window);
            maxLen = Math.max(maxLen, window.size);
            window.delete(str[l]);
            l++;
        } else {
            window.add(str[r]);
            r = r < str.length - 1 ? r + 1 : r;
        }
    }
    return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
