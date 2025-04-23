var abc = function(n) {
    if (n === 1) return 0;
    if (n % 2 === 0) return 1 + abc(n / 2);
    return 1 + Math.min(abc(n + 1), abc(n - 1));
}