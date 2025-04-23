/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    let pigs = 0;
    let tests = Math.floor(minutesToTest / minutesToDie) + 1;
    while (Math.pow(tests, pigs) < buckets) {
        pigs++;
    }
    return pigs;
    
};