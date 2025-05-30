/*
Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

 

Example 1:

Input: n = 13
Output: 6
Example 2:

Input: n = 0
Output: 0
 

Constraints:

0 <= n <= 109
*/
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let count = 0;
    for (let i = 1; i <= n; i *= 10) {
        let divisor = i * 10;
        let remainder = n % divisor;
        let quotient = Math.floor(n / divisor);

        count += (quotient - quotient / 10 * 10) * i + Math.min(Math.max(remainder - i + 1, 0), i);
    }
    return count;
};


