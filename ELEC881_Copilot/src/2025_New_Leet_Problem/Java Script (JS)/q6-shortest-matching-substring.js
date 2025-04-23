/*
You are given a string s and a pattern string p, where p contains exactly two '*' characters.

The '*' in p matches any sequence of zero or more characters.

Return the length of the shortest substring in s that matches p. If there is no such substring, return -1.

Note: The empty substring is considered valid.
 

Example 1:

Input: s = "abaacbaecebce", p = "ba*c*ce"

Output: 8

Explanation:

The shortest matching substring of p in s is "baecebce".

Example 2:

Input: s = "baccbaadbc", p = "cc*baa*adb"

Output: -1

Explanation:

There is no matching substring in s.

Example 3:

Input: s = "a", p = "**"

Output: 0

Explanation:

The empty substring is the shortest matching substring.

Example 4:

Input: s = "madlogic", p = "*adlogi*"

Output: 6

Explanation:

The shortest matching substring of p in s is "adlogi".

 

Constraints:

1 <= s.length <= 105
2 <= p.length <= 105
s contains only lowercase English letters.
p contains only lowercase English letters and exactly two '*'.

*/
/**
 * @param {string} s
 * @param {string} p
 * @return {number}
 */
var shortestMatchingSubstring = function(s, p) {
    // Write your code here
    let p1 = 0;
    let p2 = 0;
    let match = 0;
    let minLen = Number.MAX_VALUE;
    let start = 0;
    let end = 0;
    let isStar = false;
    while (p2 < s.length) {
        if (p[p2] === '*') {
            if (!isStar) {
                isStar = true;
                p2++;
            } else {
                if (match === 0) {
                    p2++;
                } else {
                    if (p1 < s.length) {
                        if (s[p1] === p[p2]) {
                            match++;
                        }
                        p1++;
                    } else {
                        p2++;
                    }
                }
            }
        } else {
            if (p1 < s.length) {
                if (s[p1] === p[p2]) {
                    match++;
                }
                p1++;
            } else {
                p2++;
            }
        }
        if (match === p.length - 2) {
            if (p1 - p2 < minLen) {
                minLen = p1 - p2;
                start = p2;
                end = p1;
            }
        }
    }
    if (minLen === Number.MAX_VALUE) {
        return -1;
    }
    return end - start;
    
};