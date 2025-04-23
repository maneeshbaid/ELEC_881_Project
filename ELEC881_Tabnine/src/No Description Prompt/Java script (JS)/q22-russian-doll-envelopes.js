/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

    const dp = [];

    for (let i = 0; i < envelopes.length; i++) {
        let j = 0;
        while (j < dp.length && envelopes[i][1] > dp[j]) {
            j++;
        }
        dp[j] = Math.max(dp[j], envelopes[i][1]);
    }

    return dp.length;
};