/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    // dp[i] is the number of combinations that add up to i
    let dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= target; i++) {
        for (let num of nums) {
        if (i >= num) {
            dp[i] += dp[i - num];
        }
        }
    }
    return dp[target];
    
};