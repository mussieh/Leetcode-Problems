function longestPalindrome(str) {
    let longestPalindrome = "";
    let tempString = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = str.length - 1; j >= i; j--) {
            tempString = str.slice(i, j + 1);
            if (
                isPalindrome(tempString) &&
                (longestPalindrome === "" ||
                    tempString.length > longestPalindrome.length)
            ) {
                longestPalindrome = tempString;
            }
        }
    }
    return longestPalindrome;
}

function isPalindrome(str) {
    let startIndex = 0;
    let endIndex = str.length - 1;
    while (startIndex < endIndex) {
        if (str[startIndex] !== str[endIndex]) return false;
        startIndex++;
        endIndex--;
    }
    return true;
}

console.log(longestPalindrome("babad"));
console.log(isPalindrome("amanaplanacanalpanama"));
