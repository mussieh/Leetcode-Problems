function checkInclusion(s1, s2) {
    let s1Map = new Map();
    let s2Map = new Map();
    let l = 0;
    let r = s1.length - 1;
    for (let letter of s1) {
        s1Map.has(letter)
            ? s1Map.set(letter, s1Map.get(letter) + 1)
            : s1Map.set(letter, 1);
    }
    for (let i = 0; i < s1.length; i++) {
        s2Map.has(s2[i])
            ? s2Map.set(s2[i], s2Map.get(s2[i]) + 1)
            : s2Map.set(s2[i], 1);
    }
    while (r < s2.length) {
        if (mapEquals(s1Map, s2Map)) return true;
        s2Map.set(s2[l], s2Map.get(s2[l]) - 1);
        l++;
        r++;
        s2Map.has(s2[r])
            ? s2Map.set(s2[r], s2Map.get(s2[r]) + 1)
            : s2Map.set(s2[r], 1);
    }
    return false;
}

function mapEquals(map1, map2) {
    for (let key of map1.keys()) {
        if (map1.get(key) !== map2.get(key)) return false;
    }
    return true;
}

console.log(checkInclusion("ab", "eidbaooo"));

// a 1
// b 2
// c 2

// e i d b c o a b
//   l       r
