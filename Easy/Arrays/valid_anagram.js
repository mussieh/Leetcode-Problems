function isAnagram(s, t) {
    let sObj = {};
    if (s.length !== t.length) return false;

    for (let letter of s) {
        sObj[letter] = sObj[letter] === undefined ? 1 : sObj[letter] + 1;
    }

    for (let letter of t) {
        if (sObj[letter] === undefined) return false;
        sObj[letter] -= 1;
        if (sObj[letter] < 0) return false;
    }
    return true;
}

console.log(isAnagram("rat", "car"));
