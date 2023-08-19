function findSubstring(s, words) {
    let indices = [];
    let wordLen = words[0].length;
    let wordObj = {};
    let stringsLen = words.length;
    let i = 0;
    let j = 0;
    let startIndex = 0;
    let numOfStrings = stringsLen;
    let word = "";
    let objFun = (val) =>
        wordObj[val] ? (wordObj[val] = wordObj[val] + 1) : (wordObj[val] = 1);
    words.forEach(objFun);

    while (j < s.length) {
        word = s.slice(i, j + wordLen);
        if (wordObj[word] > 0) {
            wordObj[word] -= 1;
            numOfStrings--;
            if (numOfStrings === 0) {
                indices.push(startIndex);
            }
            i += wordLen;
            j += wordLen;
        } else {
            numOfStrings = stringsLen;
            wordObj = {};
            words.forEach(objFun);
            i = startIndex + 1;
            j = i;
            startIndex = i;
        }
    }
    return indices;
}

console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));
