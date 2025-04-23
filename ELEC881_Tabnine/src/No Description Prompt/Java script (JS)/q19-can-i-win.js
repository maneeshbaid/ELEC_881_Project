/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    if (desiredTotal <= 0) return true;
    if (maxChoosableInteger * (maxChoosableInteger + 1) / 2 < desiredTotal) return false;

    const dp = new Array(desiredTotal + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= desiredTotal; i++) {
        for (let j = 1; j <= maxChoosableInteger; j++) {
            if (i - j >= 0 &&!dp[i - j]) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[desiredTotal];
};