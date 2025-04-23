/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    let dp = new Array(n).fill(0);
    dp[0] = 1;
    let pointers = new Array(primes.length).fill(0);
    
    for (let i = 1; i < n; i++) {
        let min = Infinity;
        for (let j = 0; j < primes.length; j++) {
            min = Math.min(min, dp[pointers[j]] * primes[j]);
        }
        
        dp[i] = min;
        
        for (let j = 0; j < primes.length; j++) {
            if (dp[pointers[j]] * primes[j] === min) {
                pointers[j]++;
            }
        }
    }
    
    return dp[n - 1];
    
};