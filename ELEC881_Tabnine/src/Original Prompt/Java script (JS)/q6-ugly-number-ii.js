/*

An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return the nth ugly number.

 

Example 1:

Input: n = 10
Output: 12
Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
Example 2:

Input: n = 1
Output: 1
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.
 

Constraints:

1 <= n <= 1690

*/
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const ugly = [1];
    let i2 = 0, i3 = 0, i5 = 0;
    while (ugly.length < n) {
        const nextUgly = Math.min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5);
        ugly.push(nextUgly);
        if (nextUgly === ugly[i2] * 2) i2++;
        if (nextUgly === ugly[i3] * 3) i3++;
        if (nextUgly === ugly[i5] * 5) i5++;
    }
    return ugly[n - 1];
};