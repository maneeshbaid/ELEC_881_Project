/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let ugly = new Array(n).fill(0);
    ugly[0] = 1;
    let i2 = 0, i3 = 0, i5 = 0;
    for (let i = 1; i < n; i++) {
        ugly[i] = Math.min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5);
        if (ugly[i] === ugly[i2] * 2) i2++;
        if (ugly[i] === ugly[i3] * 3) i3++;
        if (ugly[i] === ugly[i5] * 5) i5++;
    }
    return ugly[n - 1];
};