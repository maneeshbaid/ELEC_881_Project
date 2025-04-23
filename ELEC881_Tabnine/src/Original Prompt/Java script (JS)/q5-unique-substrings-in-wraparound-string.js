/*
We define the string base to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so base will look like this:

"...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".
Given a string s, return the number of unique non-empty substrings of s are present in base.

 

Example 1:

Input: s = "a"
Output: 1
Explanation: Only the substring "a" of s is in base.
Example 2:

Input: s = "cac"
Output: 2
Explanation: There are two substrings ("a", "c") of s in base.
Example 3:

Input: s = "zab"
Output: 6
Explanation: There are six substrings ("z", "a", "b", "za", "ab", and "zab") of s in base.
 

Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.
*/
/**
 * @param {string} s
 * @return {number}
 */
var findSubstringInWraproundString = function(s) {
    let count = Array(26).fill(0);
    let maxCount = 0;
    let last = -1;
    for (let i = 0; i < s.length; i++) {
        let c = s.charCodeAt(i) - 'a'.charCodeAt(0);
        if (last === -1 || (c - last) % 26 === 1) {
            count[c]++;
            maxCount = Math.max(maxCount, count[c]);
        } else {
            count = Array(26).fill(0);
        }
        last = c;
    }
    return maxCount;
};