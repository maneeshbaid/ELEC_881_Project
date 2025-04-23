/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length;
    if (n <= 1) return 0;
    let dp = new Array(n).fill(0);
    dp[0] = 0;
    dp[1] = Math.max(0, prices[1] - prices[0]);
    for (let i = 2; i < n; i++) {
        let maxProfit = 0;
        for (let j = 0; j < i - 1; j++) {
            let profit = prices[i] - prices[j];
            if (j >= 2) profit += dp[j - 2];
            maxProfit = Math.max(maxProfit, profit);
        }
        dp[i] = Math.max(dp[i - 1], maxProfit);
    }
    return dp[n - 1];
    
};