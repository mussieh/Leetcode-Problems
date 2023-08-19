function longestCommonPrefix(strs) {
    let firstWord = strs[0];
    let commonLen = 201;
    let prefixLen = 0;
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < firstWord.length; j++) {
            if (firstWord[j] === strs[i][j]) {
                prefixLen++;
            } else {
                if (j === 0) return "";
                break;
            }
        }
        commonLen = Math.min(commonLen, prefixLen);
        prefixLen = 0;
    }
    return firstWord.slice(0, commonLen);
}

console.log(longestCommonPrefix(["aab", "aabb", "aaa"]));
