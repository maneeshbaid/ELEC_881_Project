/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if (!envelopes.length) return 0;
    envelopes.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    const dp = new Array(envelopes.length).fill(1);
    let max = 1;
    for (let i = 1; i < envelopes.length; i++) {
        for (let j = 0; j < i; j++) {
            if (envelopes[i][1] > envelopes[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(max, dp[i]);
    }
    return max;
    
};