/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    let pigs = 0;
    let divisor = 2;

    while (minutesToDie >= divisor) {
        pigs++;
        divisor *= 2;
    }

    return pigs;
};