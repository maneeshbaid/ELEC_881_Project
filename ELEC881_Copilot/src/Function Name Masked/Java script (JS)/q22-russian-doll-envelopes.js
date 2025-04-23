var abc = function (envelopes) {
    envelopes.sort(function (a, b) {
        return a[0] - b[0];
    });
    var dp = [];
    var max = 0;
    for (var i = 0; i < envelopes.length; i++) {
        dp[i] = 1;
        for (var j = 0; j < i; j++) {
            if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
}