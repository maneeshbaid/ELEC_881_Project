/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (n === 0) return 1;
    let count = 10;
    let availableDigits = 9;
    for (let i = 1; i < n; i++) {
        availableDigits *= (9 - i + 1);
        count += availableDigits;
    }
    return count;
};