function minWindow(s, t) {
    let minSubstring = "";
    let sFreq = makeStringDict(s);
    let tFreq = makeStringDict(t);
    if (s.length < t.length && !minSubstringExists(sFreq, tFreq)) {
        return minSubstring;
    }
    let sIndices = findSIndices(s, t);
    let tempString = "";
    let jWall = t.length - 1;
    let sIndicesFreq;

    for (let i = 0; i < sIndices.length; i++) {
        // console.log(i);
        for (let j = sIndices.length - 1; j >= jWall; j--) {
            tempString = s.slice(sIndices[i], sIndices[j] + 1);
            sIndicesFreq = makeStringDict(tempString);
            if (
                (minSubstring.length === 0 ||
                    tempString.length < minSubstring.length) &&
                minSubstringExists(sIndicesFreq, tFreq)
            ) {
                minSubstring = tempString;
            }
        }
        jWall++;
        if (jWall > sIndices.length - 1) {
            break;
        }
    }
    return minSubstring;
}

function findSIndices(s, t) {
    let sIndices = [];
    tFreq = makeStringDict(t);
    for (let i = 0; i < s.length; i++) {
        if (tFreq[s[i]] !== undefined) {
            sIndices.push(i);
        }
    }
    return sIndices;
}

function minSubstringExists(sFreq, tFreq) {
    for (let key of Object.keys(tFreq)) {
        if (sFreq[key] === undefined || sFreq[key] < tFreq[key]) {
            return false;
        }
    }
    return true;
}

function makeStringDict(str) {
    let dict = {};
    for (let i = 0; i < str.length; i++) {
        dict[str[i]] = dict[str[i]] === undefined ? 1 : dict[str[i]] + 1;
    }
    return dict;
}

var startTime = performance.now();

console.log(minWindow("adobecodebanc", "abcda"));

var endTime = performance.now();

console.log(
    `Call to doSomething took ${(endTime - startTime) / 1000} / seconds \n`
);
