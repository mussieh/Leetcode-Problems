function minWindow(s, t) {
    let tMap = new Map();
    let windowMap = new Map();
    let i = 0;
    let j = 0;
    let windowGap = s.length;
    let maxI = 0;
    let minJ = s.length - 1;
    let missingLetters = new Map();
    makeTMap(t, tMap);
    j = makeWindowMap(s, t, tMap, windowMap);
    if (!isValidWindow(windowMap)) return "";
    while (j < s.length) {
        console.log(s.slice(i, j + 1));
        console.log(windowMap);
        console.log(tMap);
        console.log("____________");
        if (isValidWindow(windowMap)) {
            while (isValidWindow(windowMap)) {
                i++;
                if (tMap.get(s[i - 1])) {
                    windowMap.set(s[i - 1], windowMap.get(s[i - 1]) - 1);
                    windowMap.set("total", windowMap.get("total") - 1);
                    if (windowMap.get(s[i - 1]) < tMap.get(s[i - 1])) {
                        windowMap.set("isValid", false);
                    }
                }
            }
            i = i - 1;
            windowMap.set(s[i], windowMap.get(s[i]) + 1);
            windowMap.set("total", windowMap.get("total") + 1);
            if (windowMap.get(s[i]) < tMap.get(s[i])) {
                windowMap.set("isValid", false);
            } else {
                windowMap.set("isValid", true);
            }
            if (j - i + 1 < windowGap) {
                windowGap = j - i + 1;
                maxI = i;
                minJ = j;
            }
        }
        i++;
        j++;
        if (tMap.get(s[i - 1])) {
            windowMap.set(s[i - 1], windowMap.get(s[i - 1]) - 1);
            windowMap.set("total", windowMap.get("total") - 1);
            if (windowMap.get(s[i - 1]) < tMap.get(s[i - 1])) {
                missingLetters.get(s[i - 1])
                    ? missingLetters.set(
                          s[i - 1],
                          missingLetters.get(s[i - 1]) + 1
                      )
                    : missingLetters.set(s[i - 1], 1);
                windowMap.set("isValid", false);
            }
        }
        if (tMap.get(s[j])) {
            windowMap.set(s[j], windowMap.get(s[j]) + 1);
            windowMap.set("total", windowMap.get("total") + 1);
            if (missingLetters.get(s[j])) {
                missingLetters.set(s[j], missingLetters.get(s[j]) - 1);
                if (missingLetters.get(s[j]) === 0) missingLetters.delete(s[j]);
            }
            console.log(missingLetters);
            if (
                missingLetters.size === 0 &&
                windowMap.get("total") >= tMap.get("total")
            ) {
                windowMap.set("isValid", true);
            }
        }
    }
    return s.slice(maxI, minJ + 1);
}

function makeWindowMap(s, t, tMap, windowMap) {
    let tempTMap = new Map();
    let letter = "";
    makeTMap(t, tempTMap);
    windowMap.set("total", 0);
    for (let i = 0; i < s.length; i++) {
        letter = s[i];
        if (tMap.get(letter)) {
            windowMap.get(letter)
                ? windowMap.set(letter, windowMap.get(letter) + 1)
                : windowMap.set(letter, 1);
            windowMap.set("total", windowMap.get("total") + 1);
        }
        if (tempTMap.get(letter))
            tempTMap.set(letter, tempTMap.get(letter) - 1);
        if (tempTMap.get(letter) === 0) tempTMap.delete(letter);
        if (tempTMap.size === 1) {
            windowMap.set("isValid", true);
            return i;
        }
    }
    windowMap.set("isValid", false);
}

function makeTMap(t, tMap) {
    tMap.set("total", 0);
    for (let letter of t) {
        tMap.get(letter)
            ? tMap.set(letter, tMap.get(letter) + 1)
            : tMap.set(letter, 1);
        tMap.set("total", tMap.get("total") + 1);
    }
}

function isValidWindow(windowMap) {
    return windowMap.get("isValid");
}

console.log(minWindow("acbdbaab", "aabd"));

// b d a b
// i     j

// console.log(word);
// console.log(isValidSubstring(word, t));
// console.log(`i: ${wordIndices[i]} j ${wordIndices[j]}`);
// O ( s * t)
