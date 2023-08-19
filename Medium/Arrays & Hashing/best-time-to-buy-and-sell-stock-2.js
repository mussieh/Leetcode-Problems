function maxProfit(prices) {
    let l = 0;
    let r = l + 1;
    let maxProfit = 0;
    let profit = 0;

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            profit = prices[r] - prices[l];
            maxProfit += profit;
        }
        l = r;
        r++;
    }
    return maxProfit;
}

console.log(maxProfit([1, 2]));
