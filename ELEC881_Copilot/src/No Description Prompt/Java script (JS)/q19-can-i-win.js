/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    if (desiredTotal <= maxChoosableInteger) return true;
    if ((1 + maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal) return false;
    const dp = new Map();
    const helper = (total, state) => {
        if (total <= 0) return false;
        if (dp.has(state)) return dp.get(state);
        for (let i = 1; i <= maxChoosableInteger; i++) {
            if ((state & (1 << i)) === 0) {
                if (!helper(total - i, state | (1 << i))) {
                    dp.set(state, true);
                    return true;
                }
            }
        }
        dp.set(state, false);
        return false;
    };
    return helper(desiredTotal, 0);
    
};