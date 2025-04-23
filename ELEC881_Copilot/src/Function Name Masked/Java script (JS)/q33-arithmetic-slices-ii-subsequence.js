var ab = function(nums) {
    let count = 0;
    let dp = new Array(nums.length).fill(0).map(() => new Map());
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            let diff = nums[i] - nums[j];
            let sum = dp[j].get(diff) || 0;
            count += sum;
            dp[i].set(diff, (dp[i].get(diff) || 0) + sum + 1);
        }
    }
    return count;
}