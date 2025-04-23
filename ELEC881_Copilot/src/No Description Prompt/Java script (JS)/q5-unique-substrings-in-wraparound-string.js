/**
 * @param {string} s
 * @return {number}
 */
var findSubstringInWraproundString = function(s) {
    const dp = Array(26).fill(0);
    let count = 0;
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (i > 0 && (s.charCodeAt(i) - s.charCodeAt(i - 1) === 1 || s.charCodeAt(i - 1) - s.charCodeAt(i) === 25)) {
            maxLen++;
        } else {
            maxLen = 1;
        }
        const index = s.charCodeAt(i) - 97;
        dp[index] = Math.max(dp[index], maxLen);
    }
    for (let i = 0; i < 26; i++) {
        count += dp[i];
    }
    return count;
    
};