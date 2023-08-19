function wordPattern(pattern, s) {
    let pSet = new Set(pattern);
    let sArray = s.split(" ");
    let sSet = new Set(sArray);
    if (pSet.size !== sSet.size) return false;
    for (let i = 0; i < pattern.length; i++) {
        if (pattern[i + 1] !== pattern[i] && sArray[i + 1] === sArray[i])
            return false;
    }
    return true;
}

console.log(wordPattern("abab", "dog cat dog cat"));
