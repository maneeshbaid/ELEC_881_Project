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
        # Approach 1: Two Pointers
        # Time: O(n)
        # Space: O(1)
        # s = "abaacbaecebce", p = "ba*c*ce"
        # 1. Find the first and last occurence of the two * in p
        # 2. Find the first and last occurence of the two * in s
        # 3. Find the substring between the two * in s
        # 4. Check if the substring between the two * in s is a substring of p
        # 5. If yes, return the length of the substring between the two *
        # 6. If no, return -1
        first_star = p.find('*')
        last_star = p.rfind('*')
        first_star_s = s.find(p[first_star])
        last_star_s = s.rfind(p[last_star])
        if first_star_s == -1 or last_star_s == -1:
            return -1
        substring = s[first_star_s:last_star_s + 1]
        if substring in p:
            return len(substring)
        return -1
    
    
        