function groupAnagrams(strs) {
    let anagrams = new Map();
    let wordKey = "";

    for (let word of strs) {
        wordKey = word.split("").sort().join("");
        anagrams.get(wordKey)
            ? anagrams.get(wordKey).push(word)
            : anagrams.set(wordKey, [word]);
    }
    return Array.from(anagrams.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
