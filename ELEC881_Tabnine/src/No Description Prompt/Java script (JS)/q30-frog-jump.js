/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const dp = new Map();
    dp.set(stones[0], true);
    for (let i = 1; i < stones.length; i++) {
        const stone = stones[i];
        for (const [prevStone, canCross] of dp) {
            if (canCross >= Math.abs(stone - prevStone - 1) && dp.has(stone - 2 * Math.abs(stone - prevStone - 1))) {
                dp.set(stone, true);
                break;
            }
        }
        if (!dp.has(stone)) {
            return false;
        }
        dp.delete(prevStone);
        dp.set(stone, false);
        if (dp.has(stone - 1)) {
            dp.set(stone - 1, false);
        }
        if (dp.has(stone + 1)) {
            dp.set(stone + 1, false);
        }
    }
    return true;
};