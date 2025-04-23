var abc = function(s,t) {
    var dp = [];
    for (var i = 0; i < s.length + 1; i++) {
        dp.push([]);
        for (var j = 0; j < t.length + 1; j++) {
            dp[i].push(0);
        }
    }
    for (var i = 0; i < s.length + 1; i++) {
        dp[i][t.length] = 1;
    }
    for (var i = s.length - 1; i >= 0; i--) {
        for (var j = t.length - 1; j >= 0; j--) {
            dp[i][j] = dp[i + 1][j];
            if (s[i] === t[j]) {
                dp[i][j] += dp[i + 1][j + 1];
            }
        }
    }
    return dp[0][0];
}