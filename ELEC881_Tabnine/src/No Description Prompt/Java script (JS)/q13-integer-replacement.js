/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    let count = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else if ((n + 1) % 4 === 0 || (n - 1) % 4 === 0) {
            n = Math.floor((n + 1) / 4) * 4 + 1;
        } else {
            n = Math.floor(n / 2);
        }
        count++;
    }
    return count;
};