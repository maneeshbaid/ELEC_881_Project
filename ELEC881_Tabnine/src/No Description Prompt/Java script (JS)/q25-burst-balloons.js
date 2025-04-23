/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    const n = nums.length;
    const dp = Array(n).fill(0).map(() => Array(n).fill(0));
    const prefix = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;
            for (let k = i; k <= j; k++) {
                dp[i][j] = Math.max(dp[i][j], prefix[j + 1] - prefix[i] + nums[i] * nums[k] * nums[j + 1] + dp[i][k - 1] + dp[k + 1][j]);
            }
        }
    }
    return dp[0][n - 1];
};