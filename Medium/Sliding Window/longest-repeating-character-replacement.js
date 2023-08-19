function characterReplacement(s, k) {
    let l = 0;
    let r = 0;
    let result = 0;
    let freqMap = new Map();
    let windowLength = 0;
    let mostFrequentCount = 0;
    while (r < s.length) {
        windowLength = r - l + 1;
        freqMap.has(s[r])
            ? freqMap.set(s[r], freqMap.get(s[r]) + 1)
            : freqMap.set(s[r], 1);
        mostFrequentCount = Math.max(mostFrequentCount, freqMap.get(s[r]));
        if (windowLength - mostFrequentCount <= k) {
            result = Math.max(result, windowLength);
            r++;
        } else {
            freqMap.set(s[r], freqMap.get(s[r]) - 1);
            freqMap.set(s[l], freqMap.get(s[l]) - 1);
            r--;
            l++;
            r++;
        }
    }
    return result;
}

console.log(characterReplacement("ABAA", 0));

// A A B A B B A
//       l     r
// current = 1;
// max = 1;
// tempK = 0;
