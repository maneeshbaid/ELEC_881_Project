/*
You are given a string s and an integer k. Your task is to find the maximum difference between the frequency of two characters, freq[a] - freq[b], in a substring subs of s, such that:

subs has a size of at least k.
Character a has an odd frequency in subs.
Character b has an even frequency in subs.
Return the maximum difference.

Note that subs can contain more than 2 distinct characters.

 

Example 1:

Input: s = "12233", k = 4

Output: -1

Explanation:

For the substring "12233", the frequency of '1' is 1 and the frequency of '3' is 2. The difference is 1 - 2 = -1.

Example 2:

Input: s = "1122211", k = 3

Output: 1

Explanation:

For the substring "11222", the frequency of '2' is 3 and the frequency of '1' is 2. The difference is 3 - 2 = 1.

Example 3:

Input: s = "110", k = 3

Output: -1

 

Constraints:

3 <= s.length <= 3 * 104
s consists only of digits '0' to '4'.
The input is generated that at least one substring has a character with an even frequency and a character with an odd frequency.
1 <= k <= s.length
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDifference = function(s, k) {
    let freq = Array(5).fill(0);
    let minFreq = Array(5).fill(Infinity);
    let maxFreq = Array(5).fill(0);
    let minCount = Array(5).fill(Infinity);
    let maxCount = Array(5).fill(0);
    for (let i = 0; i < s.length; i++) {
        freq[s[i] - '0']++;
        minFreq[s[i] - '0'] = Math.min(minFreq[s[i] - '0'], freq[s[i] - '0']);
        maxFreq[s[i] - '0'] = Math.max(maxFreq[s[i] - '0'], freq[s[i] - '0']);
    }
    let minOddCount = Infinity;
    let maxEvenCount = 0;
    for (let i = 0; i < 5; i++) {
        minOddCount = Math.min(minOddCount, minFreq[i]);
        maxEvenCount = Math.max(maxEvenCount, maxFreq[i]);
    }
    if (s.length - k < minOddCount + maxEvenCount) {
        return -1;
    }
    let maxDifference = 0;
    for (let i = 0; i <= s.length - k; i++) {
        let oddCount = 0;
        let evenCount = 0;
        for (let j = i; j < i + k; j++) {
            if (freq[s[j] - '0'] % 2 === 1) {
                oddCount++;
            } else {
                evenCount++;
            }
        }
        maxDifference = Math.max(maxDifference, Math.abs(oddCount - evenCount));
    }
    return maxDifference;
};
