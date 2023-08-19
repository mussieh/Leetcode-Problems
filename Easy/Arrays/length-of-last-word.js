function lengthOfLastWord(s) {
    let words = s.split(" ").filter((word) => word != "");
    return words[words.length - 1].length;
}

console.log(lengthOfLastWord("luffy is still joyboy"));
