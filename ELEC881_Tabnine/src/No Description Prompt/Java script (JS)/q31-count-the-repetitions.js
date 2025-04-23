/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function(s1, n1, s2, n2) {
    const map = new Map();
    let count = 0;
    let i = 0;
    let j = 0;
    while (count < n1) {
        if (j === s2.length) {
            count++;
            j = 0;
        }
        if (map.has(i)) {
            const lastIndex = map.get(i);
            const repeatCount = (i - lastIndex) / (j - map.get(lastIndex));
            const remaining = (n1 - count) % repeatCount;
            if (remaining === 0) {
                return (n1 - count) / repeatCount * n2;
            }
            i = lastIndex + repeatCount * (j - map.get(lastIndex));
        } else {
            map.set(i, j);
            i += s1.indexOf(s2[j]);
            j++;
        }
    }
    return count * n2;
};