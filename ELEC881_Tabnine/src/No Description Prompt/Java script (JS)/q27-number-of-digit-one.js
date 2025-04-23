/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let count = 0;
    for (let i = 1; i <= n; i *= 10) {
        let div = i * 10;
        let mod = n % div;
        let high = Math.floor(n / div);
        let cur = Math.floor(high / 10) * i + high % 10 * 1 + mod % i + 1;
        count += (high % 10) * i + mod % i + 1;
        if (cur === n) break;
    }
    return count;
};