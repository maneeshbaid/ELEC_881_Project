/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    const ugly = [1];
    const indices = primes.map(() => 0);
    while (ugly.length < n) {
        const nextUgly = Math.min(...primes.map(prime => prime * ugly[indices[primes.indexOf(prime)]]));
        ugly.push(nextUgly);
        indices[primes.indexOf(nextUgly)]++;
    }
    return ugly[n - 1];
};