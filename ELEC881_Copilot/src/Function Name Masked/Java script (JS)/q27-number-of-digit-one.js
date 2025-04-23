var count = function(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        count += i.toString().split('').filter(d => d === '1').length;
    }
    return count;
}