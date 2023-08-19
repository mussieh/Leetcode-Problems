function isSubsequence(s, t) {
    let l = 0;
    let r = 0;
    while (r < t.length) {
        if (s[l] === t[r]) {
            l++;
            r++;
        } else {
            r++;
        }
    }
    return l === s.length ? true : false;
}

console.log(isSubsequence("abc", "daebfco"));
