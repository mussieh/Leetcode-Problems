function climbStairs(n) {
    if (n <= 2) return n;
    let memo = [];

    function climb(n, memo) {
        if (n <= 2) return n;
        if (memo[n] === undefined) {
            memo[n] = climb(n - 1, memo) + climb(n - 2, memo);
        }
        return memo[n];
    }

    return climb(n, memo);
}

console.log(climbStairs(3));
