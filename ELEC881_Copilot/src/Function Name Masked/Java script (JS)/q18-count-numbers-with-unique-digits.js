var abc = function(n) {
    if (n == 0) return 1;
    if (n == 1) return 10;
    var res = 10;
    var count = 9;
    for (var i = 2; i <= n; i++) {
        count *= 11 - i;
        res += count;
    }
    return res;
}