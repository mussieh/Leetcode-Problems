/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let freqPair = {};
    let freqPairReversed = {};
    let numCounter = 0;
    let kElements = [];
    for (let num of nums) {
        freqPair[num] = freqPair[num] ? freqPair[num] + 1 : 1;
    }
    let freqKeys = Object.keys(freqPair);
    let freqVals = Object.values(freqPair);
    for (let index in freqVals) {
        if (freqPairReversed[freqVals[index]] === undefined) {
            freqPairReversed[freqVals[index]] = freqKeys[index];
        } else {
            if (typeof freqPairReversed[freqVals[index]] === "string") {
                freqPairReversed[freqVals[index]] = [
                    freqPairReversed[freqVals[index]],
                    freqKeys[index],
                ];
            } else {
                freqPairReversed[freqVals[index]].push(freqKeys[index]);
            }
        }
    }
    freqVals.sort((a, b) => b - a);
    while (numCounter < k) {
        if (typeof freqPairReversed[freqVals[numCounter]] === "object") {
            kElements.push(
                parseInt(freqPairReversed[freqVals[numCounter]].pop())
            );
        } else {
            kElements.push(parseInt(freqPairReversed[freqVals[numCounter]]));
        }
        numCounter++;
    }
    return kElements;
};

console.log(topKFrequent([1, 2], 2));
