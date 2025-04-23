'''
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

'''
class Solution(object):
    def shortestMatchingSubstring(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: int
        """
        m, n = len(s), len(p)
        if m < 2 or n < 2:
            return -1

        # Create a 2D array dp to store the length of the shortest matching substring ending at each position
        dp = [[float('inf')] * (n + 1) for _ in range(m + 1)]

        # Initialize the dp array with base cases
        dp[0][0] = 0
        for j in range(1, n + 1):
            if p[j - 1] == '*':
                dp[0][j] = dp[0][j - 2]

        # Fill the dp array using the recurrence relation
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if s[i - 1] == p[j - 1] or p[j - 1] == '*':
                    dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 2] + 1)
                else:
                    dp[i][j] = dp[i][j - 1]

        # Return the length of the shortest matching substring
        return dp[m][n] if dp[m][n]!= float('inf') else -1

        
    
    
        