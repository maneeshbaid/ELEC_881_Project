var pp = function(buckets, minutesToDie, minutesToTest) {
    var pigs = 0;
    while (Math.pow((minutesToTest / minutesToDie + 1), pigs) < buckets) {
        pigs++;
    }
    return pigs;
}