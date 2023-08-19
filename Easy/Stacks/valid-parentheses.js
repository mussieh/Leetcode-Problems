function isValid(s) {
    let brackets = [];
    let bMap = new Map();
    bMap.set(")", "(");
    bMap.set("]", "[");
    bMap.set("}", "{");
    for (let letter of s) {
        if (letter === "(" || letter === "[" || letter === "{") {
            brackets.push(letter);
        } else {
            if (bMap.get(letter) !== brackets.pop()) return false;
        }
    }
    return brackets.length === 0;
}

console.log(isValid("["));
