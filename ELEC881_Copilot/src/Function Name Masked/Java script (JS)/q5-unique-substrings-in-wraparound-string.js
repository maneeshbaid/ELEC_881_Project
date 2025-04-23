var test = function(s) {
    let dp = new Array(26).fill(0);
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && (s.charCodeAt(i) - s.charCodeAt(i - 1) === 1 || s.charCodeAt(i - 1) - s.charCodeAt(i) === 25)) {
            count++;
        } else {
            count = 1;
        }
        dp[s.charCodeAt(i) - 97] = Math.max(dp[s.charCodeAt(i) - 97], count);
    }
    return dp.reduce((a, b) => a + b);

};