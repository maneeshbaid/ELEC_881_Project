var abc = function(nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum % 2 !== 0) {
        return false;
    }
    sum = sum / 2;
    var dp = new Array(sum + 1).fill(false);
    dp[0] = true;
    for (var i = 0; i < nums.length; i++) {
        for (var j = sum; j >= nums[i]; j--) {
            dp[j] = dp[j] || dp[j - nums[i]];
        }
    }
    return dp[sum];
}