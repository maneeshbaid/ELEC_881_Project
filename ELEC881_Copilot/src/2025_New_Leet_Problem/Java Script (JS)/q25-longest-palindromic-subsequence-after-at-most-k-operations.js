/*
You are given a string s and an integer k.

In one operation, you can replace the character at any position with the next or previous letter in the alphabet (wrapping around so that 'a' is after 'z'). For example, replacing 'a' with the next letter results in 'b', and replacing 'a' with the previous letter results in 'z'. Similarly, replacing 'z' with the next letter results in 'a', and replacing 'z' with the previous letter results in 'y'.

Return the length of the longest palindromic subsequence of s that can be obtained after performing at most k operations.

 

Example 1:

Input: s = "abced", k = 2

Output: 3

Explanation:

Replace s[1] with the next letter, and s becomes "acced".
Replace s[4] with the previous letter, and s becomes "accec".
The subsequence "ccc" forms a palindrome of length 3, which is the maximum.

Example 2:

Input: s = "aaazzz", k = 4

Output: 6

Explanation:

Replace s[0] with the previous letter, and s becomes "zaazzz".
Replace s[4] with the next letter, and s becomes "zaazaz".
Replace s[3] with the next letter, and s becomes "zaaaaz".
The entire string forms a palindrome of length 6.

 

Constraints:

1 <= s.length <= 200
1 <= k <= 200
s consists of only lowercase English letters.
*/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestPalindromicSubsequence = function(s, k) {
    let n = s.length;
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(k + 1).fill(0)));
    for (let i = 0; i < n; i++) {
        dp[i][i][0] = 1;
    }
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            let j = i + len - 1;
            for (let kk = 0; kk <= k; kk++) {
                if (s[i] === s[j]) {
                    dp[i][j][kk] = 2 + dp[i + 1][j - 1][kk];
                } else {
                    dp[i][j][kk] = Math.max(dp[i + 1][j][kk], dp[i][j - 1][kk]);
                }
                for (let kk1 = 1; kk1 <= kk; kk1++) {
                    if (s[i] === s[j]) {
                        dp[i][j][kk] = Math.max(dp[i][j][kk], 2 + dp[i + 1][j - 1][kk1]);
                    } else {
                        dp[i][j][kk] = Math.max(dp[i][j][kk], dp[i + 1][j][kk1], dp[i][j - 1][kk1]);
                    }
                }
            }
        }
    }
    return dp[0][n - 1][k];
    
};