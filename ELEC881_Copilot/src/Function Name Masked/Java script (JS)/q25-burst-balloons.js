var abc = functions(nums) {
    var n = nums.length;
    var dp = new Array(n + 2);
    for (var i = 0; i < n + 2; i++) {
        dp[i] = new Array(n + 2).fill(0);
    }
    var val = new Array(n + 2);
    val[0] = val[n + 1] = 1;
    for (var i = 1; i <= n; i++) {
        val[i] = nums[i - 1];
    }
    for (var len = 1; len <= n; len++) {
        for (var i = 1; i + len - 1 <= n; i++) {
            var j = i + len - 1;
            for (var k = i; k <= j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k - 1] + dp[k + 1][j] + val[i - 1] * val[k] * val[j + 1]);
            }
        }
    }
    return dp[1][n];

};