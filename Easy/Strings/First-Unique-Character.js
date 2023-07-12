function firstUniqChar(s) {
    let chars = {};
    for (let letter of s) {
        chars[letter] = chars[letter] === undefined ? 1 : chars[letter] + 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (chars[s[i]] === 1) {
            return i;
        }
    }
    return -1;
}

console.log(firstUniqChar("aabb"));
