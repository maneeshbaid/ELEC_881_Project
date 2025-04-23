/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let sum = nums.reduce((acc, val) => acc + val, 0);
    let target = sum / k;

    let dp = Array.from({ length: nums.length + 1 }, () => Array.from({ length: k + 1 }, () => Infinity));
    dp[0][0] = 0;

    for (let i = 1; i <= nums.length; i++) {
        for (let j = 1; j <= k; j++) {
            for (let l = 0; l < i; l++) {
                dp[i][j] = Math.min(dp[i][j], dp[l][j - 1] + Math.max(0, nums[i - 1] - target * (j - 1) + target * (j - 2)));
            }
        }
    }

    return dp[nums.length][k];
};