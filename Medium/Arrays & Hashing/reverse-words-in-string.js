function reverseWords(s) {
    return s
        .split(" ")
        .reverse()
        .filter((word) => word != "")
        .join(" ");
}

console.log(reverseWords("the sky is blue"));
