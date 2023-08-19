function maxProfit(prices) {
    let l = 0;
    let r = l + 1;
    let max = 0;

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            max = Math.max(max, prices[r] - prices[l]);
        } else {
            l = r;
        }
        r++;
    }
    return max;
}

console.log(maxProfit([7, 1, 5, 1, 6, 7]));
