var abc = function(maxChoosableInteger, desiredTotal) {
    if (maxChoosableInteger >= desiredTotal) return true;
    if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) return false;
    var dp = {};
    var helper = function(maxChoosableInteger, desiredTotal, state) {
        if (dp[state] !== undefined) return dp[state];
        for (var i = 1; i <= maxChoosableInteger; i++) {
            var cur = 1 << i;
            if ((cur & state) === 0) {
                if (i >= desiredTotal || !helper(maxChoosableInteger, desiredTotal - i, state | cur)) {
                    dp[state] = true;
                    return true;
                }
            }
        }
        dp[state] = false;
        return false;
    };
    return helper(maxChoosableInteger, desiredTotal, 0);
}