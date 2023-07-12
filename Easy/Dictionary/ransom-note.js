function canConstruct(ransomNote, magazine) {
    magObj = {};
    // build magazine obj
    for (let i = 0; i < magazine.length; i++) {
        magObj[magazine[i]] =
            magObj[magazine[i]] === undefined ? 1 : magObj[magazine[i]] + 1;
    }

    // check ransom note if it can be made from magazine
    for (let i = 0; i < ransomNote.length; i++) {
        if (magObj[ransomNote[i]] === undefined) {
            return false;
        } else {
            magObj[ransomNote[i]] -= 1;
            if (magObj[ransomNote[i]] < 0) return false;
        }
    }
    return true;
}

console.log(canConstruct("a", "b"));
