function groupAnagrams(strs) {
    let anagramObj = {};
    let wordKey = "";

    for (let word of strs) {
        wordKey = wordHash(word);

        anagramObj[wordKey] === undefined
            ? (anagramObj[wordKey] = [word])
            : anagramObj[wordKey].push(word);
    }
    return Object.values(anagramObj);
}

function wordHash(word) {
    let words = [];
    let charCode = 0;
    for (let index in word) {
        charCode = word.charCodeAt(index);
        words.push(charCode);
    }
    return words.sort((a, b) => a - b);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
