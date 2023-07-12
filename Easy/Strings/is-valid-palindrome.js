function isPalindrome(str) {
    let tempString = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
    let startIndex = 0;
    let endIndex = tempString.length - 1;
    while (startIndex < endIndex) {
        if (tempString[startIndex] !== tempString[endIndex]) return false;
        startIndex++;
        endIndex--;
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
