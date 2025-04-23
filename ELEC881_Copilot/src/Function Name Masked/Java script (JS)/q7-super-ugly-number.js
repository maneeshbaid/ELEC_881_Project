var test = function(n) {
    var primes = [2, 7, 13, 19];
    var ugly = [1];
    var index = new Array(primes.length).fill(0);
    var val = new Array(primes.length).fill(1);
    for (var i = 1; i < n; i++) {
        for (var j = 0; j < primes.length; j++) {
            val[j] = ugly[index[j]] * primes[j];
        }
        var min = Math.min.apply(null, val);
        for (var j = 0; j < primes.length; j++) {
            if (min === val[j]) {
                index[j]++;
            }
        }
        ugly.push(min);
    }
    return ugly[n - 1];

};