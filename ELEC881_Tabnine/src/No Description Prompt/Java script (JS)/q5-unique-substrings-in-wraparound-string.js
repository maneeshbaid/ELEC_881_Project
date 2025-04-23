/**
 * @param {string} s
 * @return {number}
 */
var findSubstringInWraproundString = function(s) {
    let count = new Array(26).fill(0);
    let maxLen = 0;
    let curLen = 0;
    for (let i = 0; i < s.length; i++) {
        let index = s[i].charCodeAt() - 'a'.charCodeAt();
        if (i > 0 && (index === (s[i - 1].charCodeAt() - 'a'.charCodeAt() + 1) % 26)) {
            curLen++;
        } else {
            curLen = 1;
        }
        maxLen = Math.max(maxLen, curLen);
        count[index] = Math.max(count[index], curLen);
    }
    return count.reduce((sum, cur) => sum + cur, 0);
};