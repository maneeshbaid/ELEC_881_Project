/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let n = nums.length;
    let dp = new Array(n).fill(0).map(() => new Map());
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            let diff = nums[i] - nums[j];
            let count = dp[j].get(diff) || 0;
            dp[i].set(diff, (dp[i].get(diff) || 0) + count + 1);
            ans += count;
        }
    }
    return ans;
    
};