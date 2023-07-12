function maximumWealth(accounts) {
    let wealth = 0;
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 0; j < accounts[i].length; j++) {
            wealth += accounts[i][j];
        }
        if (wealth > maxWealth) maxWealth = wealth;
        wealth = 0;
    }
    return maxWealth;
}

console.log(
    maximumWealth([
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
    ])
);
